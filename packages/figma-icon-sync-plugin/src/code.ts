/// <reference types="@figma/plugin-typings" />

// Keep this in sync with the generator (packages/generate-icon-lib).
const ALLOWED_SIZES = [12, 16, 20, 24, 32];

// The Actions page for the icon-sync workflow. Opening it lets a designer press
// GitHub's own "Run workflow" button — no token needed, gated by GitHub's own
// repo permissions.
const SYNC_WORKFLOW_URL =
  'https://github.com/whopio/frosted-ui/actions/workflows/sync-icons.yml';

type Severity = 'error' | 'warning';

interface IssueTarget {
  nodeId: string;
  label: string;
}

interface Issue {
  severity: Severity;
  rule: string;
  message: string;
  nodeId?: string;
  targets?: IssueTarget[];
  previewId?: string;
}

interface ScanResult {
  pageName: string;
  usedFallbackPage: boolean;
  iconCount: number;
  variantCount: number;
  categoryCount: number;
  orphanCount: number;
  passed: boolean;
  errorCount: number;
  warningCount: number;
  issues: Issue[];
}

interface ReleaseDiff {
  comparedToVersion: string | null;
  error: string | null;
  added: { name: string; nodeId?: string }[];
  removed: { name: string }[];
}

// Matches getIconsPage() in generate-icon-lib: strip emoji/whitespace, lowercase.
function normalize(name: string): string {
  return name.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

// Matches lodash kebabCase closely enough for duplicate detection.
function kebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function bytesToString(bytes: Uint8Array): string {
  // SVG markup (tags/attributes) is ASCII, which is all we inspect.
  let out = '';
  for (let i = 0; i < bytes.length; i += 1) out += String.fromCharCode(bytes[i]);
  return out;
}

// The real artifact happens when a single drawn element carries BOTH a fill and
// a stroke: recolored to the same translucent currentColor, the stroke overlaps
// the fill and doubles up. Figma flattens inside/outside strokes into fill
// geometry on export, so only a genuine fill+stroke element in the *exported*
// SVG produces the artifact — which is exactly what we test here.
function svgDrawsFillAndStroke(svg: string): boolean {
  const tagRegex = /<(path|rect|circle|ellipse|polygon|polyline|line)\b([^>]*)>/gi;
  let match: RegExpExecArray | null;
  while ((match = tagRegex.exec(svg)) !== null) {
    const attrs = match[2];
    const fillAttr = /\bfill\s*=\s*"([^"]*)"/i.exec(attrs);
    const strokeAttr = /\bstroke\s*=\s*"([^"]*)"/i.exec(attrs);
    const style = /\bstyle\s*=\s*"([^"]*)"/i.exec(attrs);
    const styleText = style ? style[1] : '';
    const fillStyle = /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(styleText);
    const strokeStyle = /(?:^|;)\s*stroke\s*:\s*([^;]+)/i.exec(styleText);

    const fillVal = (fillAttr ? fillAttr[1] : fillStyle ? fillStyle[1] : '').trim().toLowerCase();
    const strokeVal = (strokeAttr ? strokeAttr[1] : strokeStyle ? strokeStyle[1] : '')
      .trim()
      .toLowerCase();

    // A shape is filled only with an explicit non-"none" fill (the root <svg>
    // sets fill="none", so unset means not filled).
    const hasFill = fillVal !== '' && fillVal !== 'none';
    const hasStroke = strokeVal !== '' && strokeVal !== 'none';
    if (hasFill && hasStroke) return true;
  }
  return false;
}

function findIconsPage(): { page: PageNode; usedFallback: boolean } {
  const target = figma.root.children.find((p) => normalize(p.name) === 'icons' || normalize(p.name) === 'producticons');
  if (target) return { page: target, usedFallback: false };
  return { page: figma.currentPage, usedFallback: true };
}

// A single, self-contained icon shape: a flattened vector, a boolean op (union),
// or a primitive. NOT a group/frame wrapper.
function isShapeType(type: string): boolean {
  return (
    type === 'VECTOR' ||
    type === 'BOOLEAN_OPERATION' ||
    type === 'RECTANGLE' ||
    type === 'ELLIPSE' ||
    type === 'POLYGON' ||
    type === 'STAR' ||
    type === 'LINE'
  );
}

function hasHiddenDescendant(node: SceneNode): boolean {
  if (!('children' in node)) return false;
  for (const child of node.children) {
    if (child.visible === false) return true;
    if (hasHiddenDescendant(child)) return true;
  }
  return false;
}

// The rendered content should be exactly one shape. We only count visible
// children (hidden layers are caught separately) — so a lone vector or a single
// union passes, while multiple shapes or a group/frame wrapper does not.
function isSingleShape(variant: ComponentNode): boolean {
  const visible = variant.children.filter((c) => c.visible !== false);
  if (visible.length !== 1) return false;
  return isShapeType(visible[0].type);
}

// Builds a per-icon warning whose detail pills jump to each affected size.
function sizeScopedIssue(
  rule: string,
  name: string,
  verb: string,
  entries: { nodeId: string; size: number }[],
): Issue {
  const sorted = [...entries].sort(
    (a, b) => (Number.isNaN(a.size) ? Infinity : a.size) - (Number.isNaN(b.size) ? Infinity : b.size),
  );
  const labels = sorted.map((e) => (Number.isNaN(e.size) ? '?' : String(e.size)));
  return {
    severity: 'warning',
    rule,
    message: `"${name}" ${verb}:`,
    targets: sorted.map((e, i) => ({ nodeId: e.nodeId, label: labels[i] })),
  };
}

interface QualityTarget {
  name: string;
  nodes: SceneNode[];
}

async function scan(): Promise<{
  result: ScanResult;
  baseNames: Map<string, string>;
  qualityTargets: QualityTarget[];
  previewByNode: Map<string, string>;
}> {
  await figma.loadAllPagesAsync();
  const { page, usedFallback } = findIconsPage();

  // The generator collects COMPONENT_SETs that live inside a frame/group named
  // exactly "Icons"; the parent of that frame is the icon's category.
  const iconsFrames = page.findAll((n) => (n.type === 'FRAME' || n.type === 'GROUP') && n.name === 'Icons');

  const issues: Issue[] = [];
  const insideIds = new Set<string>();
  const categories = new Set<string>();
  const nameGroups = new Map<string, { name: string; nodeId: string; category: string }[]>();
  // Base (size-less) kebab name -> a representative node id, for the release diff.
  const baseNames = new Map<string, string>();
  // One representative variant per icon, exported to SVG in a later async pass.
  const qualityTargets: QualityTarget[] = [];
  // Any node id belonging to an icon -> its size-16 variant id, used to render a
  // preview thumbnail next to every issue for that icon.
  const previewByNode = new Map<string, string>();

  let iconCount = 0;
  let variantCount = 0;

  for (const frame of iconsFrames) {
    if (!('children' in frame)) continue;
    const category = frame.parent && 'name' in frame.parent ? frame.parent.name : '';

    for (const child of frame.children) {
      if (child.type !== 'COMPONENT_SET') continue;
      insideIds.add(child.id);
      iconCount += 1;
      categories.add(category);

      const name = child.name;

      // Rule: names must survive kebab-casing to a usable file/component name.
      if (kebab(name) === '') {
        issues.push({
          severity: 'error',
          rule: 'empty-name',
          message: `A component set${category ? ` in ${category}` : ''} has an empty or invalid name ("${name}").`,
          nodeId: child.id,
        });
      }

      // Duplicate-name tracking (grouped by the generated kebab base name).
      const key = kebab(name);
      if (key !== '') {
        const group = nameGroups.get(key) || [];
        group.push({ name, nodeId: child.id, category });
        nameGroups.set(key, group);
        if (!baseNames.has(key)) baseNames.set(key, child.id);
      }

      // Rule: no numbers in icon names (they collide with the size suffix and
      // break name parsing downstream, e.g. `Shop16`).
      if (/[0-9]/.test(name)) {
        issues.push({
          severity: 'error',
          rule: 'number-in-name',
          message: `"${name}"${category ? ` (${category})` : ''} contains a number.`,
          nodeId: child.id,
        });
      }

      // Rule: modifier ordering — the correct suffix is "Bold Filled", never
      // "Filled Bold".
      const tokens = kebab(name).split('-');
      const boldIdx = tokens.indexOf('bold');
      const filledIdx = tokens.indexOf('filled');
      if (boldIdx !== -1 && filledIdx !== -1 && filledIdx < boldIdx) {
        issues.push({
          severity: 'error',
          rule: 'modifier-order',
          message: `"${name}" should use "Bold Filled" order, not "Filled Bold".`,
          nodeId: child.id,
        });
      }

      const variants = child.children.filter((c) => c.type === 'COMPONENT') as ComponentNode[];
      if (variants.length === 0) {
        issues.push({
          severity: 'error',
          rule: 'no-variants',
          message: `"${name}" has no size variants.`,
          nodeId: child.id,
        });
      }

      if (variants.length > 0) {
        qualityTargets.push({ name, nodes: variants });
      }

      // Pick the size-16 variant (fallback to the first) as this icon's preview,
      // and map every id that an issue might reference back to it.
      const previewVariant = variants.find((v) => /^size=16$/i.test(v.name.trim())) || variants[0];
      if (previewVariant) {
        previewByNode.set(child.id, previewVariant.id);
        for (const v of variants) previewByNode.set(v.id, previewVariant.id);
      }

      const sizeCounts = new Map<number, number>();
      const hiddenAt: { nodeId: string; size: number }[] = [];
      const notSingleAt: { nodeId: string; size: number }[] = [];

      for (const variant of variants) {
        variantCount += 1;

        // Structure checks (independent of the size label being valid).
        const sizeGuess = /size=(\d+)/i.exec(variant.name);
        const structSize = sizeGuess ? Number(sizeGuess[1]) : Number.NaN;
        if (hasHiddenDescendant(variant)) hiddenAt.push({ nodeId: variant.id, size: structSize });
        if (!isSingleShape(variant)) notSingleAt.push({ nodeId: variant.id, size: structSize });

        // The variant name must be *exactly* `size=<number>`. An unanchored
        // match would wrongly accept mislabelled properties whose name merely
        // ends in "size" (e.g. `iconsize=12`) or contains extra props.
        const match = /^size=(\d+)$/i.exec(variant.name.trim());

        if (!match) {
          issues.push({
            severity: 'error',
            rule: 'invalid-size-label',
            message: `"${name}" has a variant named "${variant.name}" (expected exactly "size=<number>").`,
            nodeId: variant.id,
          });
          continue;
        }

        const size = Number(match[1]);

        if (!ALLOWED_SIZES.includes(size)) {
          issues.push({
            severity: 'error',
            rule: 'disallowed-size',
            message: `"${name}" has size "${match[1]}" (allowed: ${ALLOWED_SIZES.join(', ')}).`,
            nodeId: variant.id,
          });
          continue;
        }

        sizeCounts.set(size, (sizeCounts.get(size) || 0) + 1);

        const w = Math.round(variant.width);
        const h = Math.round(variant.height);
        if (w !== size || h !== size) {
          issues.push({
            severity: 'warning',
            rule: 'size-mismatch',
            message: `"${name}" size=${size} is ${w}×${h} (expected ${size}×${size}).`,
            nodeId: variant.id,
          });
        }
      }

      // Rule: a size must appear at most once per icon (else the generated
      // component/file names collide, e.g. two `Shop16`).
      const dupSizes = [...sizeCounts.entries()].filter(([, c]) => c > 1).map(([s]) => s);
      if (dupSizes.length) {
        issues.push({
          severity: 'error',
          rule: 'duplicate-size',
          message: `"${name}" has multiple variants for size ${dupSizes.sort((a, b) => a - b).join(', ')}.`,
          nodeId: child.id,
        });
      }

      // Rule: every icon should ship the full size set (12/16/20/24/32).
      const missing = ALLOWED_SIZES.filter((s) => !sizeCounts.has(s));
      if (sizeCounts.size > 0 && missing.length > 0) {
        issues.push({
          severity: 'warning',
          rule: 'incomplete-sizes',
          message: `"${name}" is missing size ${missing.join(', ')}.`,
          nodeId: child.id,
        });
      }

      // Rule: no hidden or stray layers inside the icon.
      if (hiddenAt.length > 0) {
        issues.push(sizeScopedIssue('hidden-layers', name, 'has hidden layers', hiddenAt));
      }

      // Rule: the icon should be a single final shape (a vector or union), not
      // multiple layers or a group/frame wrapper.
      if (notSingleAt.length > 0) {
        issues.push(
          sizeScopedIssue('not-single-shape', name, "isn't a single flattened shape", notSingleAt),
        );
      }
    }
  }

  // Duplicate names.
  for (const group of nameGroups.values()) {
    if (group.length <= 1) continue;
    const label = group[0].name;
    issues.push({
      severity: 'error',
      rule: 'duplicate-name',
      message: `"${label}" is defined ${group.length}×`,
      targets: group.map((g, i) => ({
        nodeId: g.nodeId,
        label: `${i + 1}. ${g.category || 'uncategorized'}`,
      })),
    });
  }

  // Orphan component sets on the page that won't be picked up by the generator.
  const allSets = page.findAllWithCriteria({ types: ['COMPONENT_SET'] });
  const orphans = allSets.filter((s) => !insideIds.has(s.id));
  if (orphans.length > 0) {
    issues.push({
      severity: 'warning',
      rule: 'orphan',
      message: `${orphans.length} component set${
        orphans.length === 1 ? '' : 's'
      } are not inside an "Icons" frame and will be skipped.`,
      nodeId: orphans[0].id,
    });
  }

  // Attach a preview (the icon's size-16 variant) to each issue.
  for (const issue of issues) {
    const rep = issue.nodeId || (issue.targets && issue.targets[0] && issue.targets[0].nodeId);
    if (rep) {
      const preview = previewByNode.get(rep);
      if (preview) issue.previewId = preview;
    }
  }

  // Order: errors first, then warnings.
  issues.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'error' ? -1 : 1));

  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.length - errorCount;

  const result: ScanResult = {
    pageName: page.name,
    usedFallbackPage: usedFallback,
    iconCount,
    variantCount,
    categoryCount: categories.size,
    orphanCount: orphans.length,
    passed: iconCount > 0 && errorCount === 0,
    errorCount,
    warningCount,
    issues,
  };

  return { result, baseNames, qualityTargets, previewByNode };
}

// Recolors an exported SVG to currentColor so previews match how the generated
// component renders (and adapt to the plugin's light/dark theme).
function toCurrentColor(svg: string): string {
  return svg.replace(/\b(fill|stroke)\s*=\s*"(?!none")[^"]*"/gi, '$1="currentColor"');
}

// Exports the given preview nodes (icon size-16 variants) to inline SVG markup,
// keyed by node id, for rendering thumbnails next to each issue.
async function buildPreviews(ids: string[]): Promise<Record<string, string>> {
  const map: Record<string, string> = {};
  const BATCH = 20;
  for (let i = 0; i < ids.length; i += BATCH) {
    const slice = ids.slice(i, i + BATCH);
    await Promise.all(
      slice.map(async (id) => {
        try {
          const node = await figma.getNodeByIdAsync(id);
          if (node && !node.removed && 'exportAsync' in node) {
            const bytes = await (node as SceneNode).exportAsync({ format: 'SVG' });
            map[id] = toCurrentColor(bytesToString(bytes));
          }
        } catch {
          // Skip previews that fail to export.
        }
      }),
    );
  }
  return map;
}

// Exports every size of each icon to SVG (as the generator does) and flags those
// whose output has an element carrying both a fill and a stroke — the
// recolor-with-alpha artifact. Runs after the main scan so verification stays
// instant. Reports the specific offending size.
async function runQualityChecks(targets: QualityTarget[]): Promise<Issue[]> {
  const issues: Issue[] = [];
  const BATCH = 10; // icons per batch (each exports up to 5 sizes)
  for (let i = 0; i < targets.length; i += BATCH) {
    const slice = targets.slice(i, i + BATCH);
    const perIcon = await Promise.all(
      slice.map(async (t) => {
        const flags = await Promise.all(
          t.nodes.map(async (node) => {
            try {
              const bytes = await node.exportAsync({ format: 'SVG' });
              if (!svgDrawsFillAndStroke(bytesToString(bytes))) return null;
              const m = /size=(\d+)/i.exec(node.name);
              return { nodeId: node.id, size: m ? Number(m[1]) : Number.NaN };
            } catch {
              return null;
            }
          }),
        );
        return flags.filter((f): f is { nodeId: string; size: number } => f !== null);
      }),
    );
    perIcon.forEach((offending, idx) => {
      if (offending.length === 0) return;
      offending.sort((a, b) => a.size - b.size);
      const sizes = offending.map((o) => (Number.isNaN(o.size) ? '?' : String(o.size)));
      issues.push({
        severity: 'error',
        rule: 'fill-and-stroke',
        message: `"${slice[idx].name}":`,
        targets: offending.map((o, i) => ({ nodeId: o.nodeId, label: sizes[i] })),
      });
    });
  }
  return issues;
}

interface PublishedManifest {
  [type: string]: { [size: string]: { [svgName: string]: string } };
}

// Compares the current Figma icons against the manifest from the latest npm
// release of @frosted-ui/icons (served via jsDelivr).
async function fetchReleaseDiff(current: Map<string, string>): Promise<ReleaseDiff> {
  const empty: ReleaseDiff = { comparedToVersion: null, error: null, added: [], removed: [] };
  try {
    let version: string | null = null;
    try {
      const rv = await fetch('https://data.jsdelivr.com/v1/packages/npm/@frosted-ui/icons/resolved');
      if (rv.ok) {
        const j = (await rv.json()) as { version?: string };
        version = j.version || null;
      }
    } catch {
      // version is best-effort; fall back to @latest below
    }

    const url = version
      ? `https://cdn.jsdelivr.net/npm/@frosted-ui/icons@${version}/manifest.json`
      : 'https://cdn.jsdelivr.net/npm/@frosted-ui/icons/manifest.json';
    const res = await fetch(url);
    if (!res.ok) {
      return { ...empty, comparedToVersion: version, error: `Could not load published manifest (${res.status}).` };
    }

    const manifest = (await res.json()) as PublishedManifest;
    const published = new Set<string>();
    for (const type of Object.keys(manifest)) {
      const sizes = manifest[type];
      for (const size of Object.keys(sizes)) {
        for (const svgName of Object.keys(sizes[size])) {
          // Strip the trailing "-<size>" to get the base icon name.
          published.add(svgName.replace(/-\d+$/, ''));
        }
      }
    }

    const added: { name: string; nodeId?: string }[] = [];
    for (const [base, nodeId] of current) {
      if (!published.has(base)) added.push({ name: base, nodeId });
    }
    const removed: { name: string }[] = [];
    for (const base of published) {
      if (!current.has(base)) removed.push({ name: base });
    }
    added.sort((a, b) => a.name.localeCompare(b.name));
    removed.sort((a, b) => a.name.localeCompare(b.name));

    return { comparedToVersion: version, error: null, added, removed };
  } catch (err) {
    return { ...empty, error: `Network error: ${(err as Error).message}` };
  }
}

async function focusNode(id: string): Promise<void> {
  const node = await figma.getNodeByIdAsync(id);
  if (!node || node.removed) return;

  let owner: BaseNode | null = node;
  while (owner && owner.type !== 'PAGE') owner = owner.parent;
  if (owner && owner.type === 'PAGE' && owner.id !== figma.currentPage.id) {
    await figma.setCurrentPageAsync(owner as PageNode);
  }
  if ('visible' in node) {
    const scene = node as SceneNode;
    figma.currentPage.selection = [scene];
    figma.viewport.scrollAndZoomIntoView([scene]);
  }
}

const SIZE_KEY = 'ui-size';
const DEFAULT_SIZE = { width: 380, height: 600 };
const MIN_SIZE = { width: 320, height: 400 };
const MAX_SIZE = { width: 1200, height: 1400 };

figma.showUI(__html__, { ...DEFAULT_SIZE, themeColors: true });

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, Math.round(value)));
}

async function scanAndDiff(): Promise<void> {
  const { result, baseNames, qualityTargets, previewByNode } = await scan();
  figma.ui.postMessage({ type: 'scan-result', result });

  figma.ui.postMessage({ type: 'quality-loading' });
  const qualityIssues = await runQualityChecks(qualityTargets);
  for (const issue of qualityIssues) {
    const rep = (issue.targets && issue.targets[0] && issue.targets[0].nodeId) || issue.nodeId;
    if (rep) {
      const preview = previewByNode.get(rep);
      if (preview) issue.previewId = preview;
    }
  }
  figma.ui.postMessage({ type: 'quality-result', issues: qualityIssues });

  // Render icon thumbnails for every flagged issue (scan + quality).
  const previewIds = new Set<string>();
  for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
  for (const issue of qualityIssues) if (issue.previewId) previewIds.add(issue.previewId);
  if (previewIds.size > 0) {
    const previews = await buildPreviews([...previewIds]);
    figma.ui.postMessage({ type: 'previews', previews });
  }

  figma.ui.postMessage({ type: 'diff-loading' });
  const diff = await fetchReleaseDiff(baseNames);
  figma.ui.postMessage({ type: 'diff-result', diff });
}

figma.ui.onmessage = async (msg: { type: string; id?: string; width?: number; height?: number }) => {
  switch (msg.type) {
    case 'rescan': {
      await scanAndDiff();
      break;
    }
    case 'focus': {
      if (msg.id) await focusNode(msg.id);
      break;
    }
    case 'open-sync': {
      figma.openExternal(SYNC_WORKFLOW_URL);
      break;
    }
    case 'resize': {
      const width = clamp(msg.width || DEFAULT_SIZE.width, MIN_SIZE.width, MAX_SIZE.width);
      const height = clamp(msg.height || DEFAULT_SIZE.height, MIN_SIZE.height, MAX_SIZE.height);
      figma.ui.resize(width, height);
      figma.clientStorage.setAsync(SIZE_KEY, { width, height });
      break;
    }
    case 'close': {
      figma.closePlugin();
      break;
    }
  }
};

(async () => {
  // Restore the designer's preferred window size before scanning.
  try {
    const saved = (await figma.clientStorage.getAsync(SIZE_KEY)) as
      | { width?: number; height?: number }
      | undefined;
    if (saved && saved.width && saved.height) {
      figma.ui.resize(
        clamp(saved.width, MIN_SIZE.width, MAX_SIZE.width),
        clamp(saved.height, MIN_SIZE.height, MAX_SIZE.height),
      );
    }
  } catch {
    // Fall back to the default size.
  }
  await scanAndDiff();
})();
