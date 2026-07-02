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

function findIconsPage(): { page: PageNode; usedFallback: boolean } {
  const target = figma.root.children.find((p) => normalize(p.name) === 'icons' || normalize(p.name) === 'producticons');
  if (target) return { page: target, usedFallback: false };
  return { page: figma.currentPage, usedFallback: true };
}

async function scan(): Promise<{ result: ScanResult; baseNames: Map<string, string> }> {
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

      const sizeCounts = new Map<number, number>();

      for (const variant of variants) {
        variantCount += 1;
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

  return { result, baseNames };
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

figma.showUI(__html__, { width: 380, height: 600, themeColors: true });

async function scanAndDiff(): Promise<void> {
  const { result, baseNames } = await scan();
  figma.ui.postMessage({ type: 'scan-result', result });
  figma.ui.postMessage({ type: 'diff-loading' });
  const diff = await fetchReleaseDiff(baseNames);
  figma.ui.postMessage({ type: 'diff-result', diff });
}

figma.ui.onmessage = async (msg: { type: string; id?: string }) => {
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
    case 'close': {
      figma.closePlugin();
      break;
    }
  }
};

(async () => {
  await scanAndDiff();
})();
