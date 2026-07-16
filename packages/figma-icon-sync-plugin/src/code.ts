/// <reference types="@figma/plugin-typings" />

// Keep this in sync with the generator (packages/generate-icon-lib).
const ALLOWED_SIZES = [12, 16, 20, 24, 32];

// Pictograms use background variants (not pixel sizes) and render at 240×240.
const PICTOGRAM_BACKGROUNDS = ['light', 'dark', 'orange'];
const PICTOGRAM_DIMENSION = 240;

// The Actions pages for the sync workflows. Opening them lets a designer press
// GitHub's own "Run workflow" button — no token needed, gated by GitHub's own
// repo permissions.
const SYNC_WORKFLOW_URL = 'https://github.com/whopio/frosted-ui/actions/workflows/sync-icons.yml';
const PICTOGRAM_SYNC_WORKFLOW_URL =
  'https://github.com/whopio/frosted-ui/actions/workflows/sync-pictograms.yml';

type Kind = 'icons' | 'pictograms';
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
  kind: Kind;
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

// The four styles every icon should ship, in display order.
const VARIANT_STYLES: { key: string; label: string }[] = [
  { key: 'regular', label: 'Regular' },
  { key: 'filled', label: 'Filled' },
  { key: 'bold', label: 'Bold' },
  { key: 'bold-filled', label: 'Bold Filled' },
];

// Classifies a name into one of the four variant styles from its kebab tokens.
function variantStyle(tokens: string[]): string {
  const bold = tokens.includes('bold');
  const filled = tokens.includes('filled');
  if (bold && filled) return 'bold-filled';
  if (bold) return 'bold';
  if (filled) return 'filled';
  return 'regular';
}

// Strips trailing Bold/Filled modifiers (any order) to get the family's display
// base name, e.g. "CarBoldFilled" -> "Car", "Arrow Up Bold" -> "Arrow Up".
function baseLabel(name: string): string {
  let s = name.trim();
  let prev: string;
  do {
    prev = s;
    s = s.replace(/[\s-]*(bold|filled)\s*$/i, '').trim();
  } while (s !== prev);
  return s || name.trim();
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
    const strokeVal = (strokeAttr ? strokeAttr[1] : strokeStyle ? strokeStyle[1] : '').trim().toLowerCase();

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

// Container/wrapper nodes that shouldn't live inside a clean icon — the final
// artwork should be flat vectors/booleans, never nested frames, groups, or
// instances. (BOOLEAN_OPERATION is intentionally excluded: it's the flattening
// op whose direct children are vectors.)
function isContainerType(type: string): boolean {
  return (
    type === 'FRAME' ||
    type === 'GROUP' ||
    type === 'SECTION' ||
    type === 'COMPONENT' ||
    type === 'COMPONENT_SET' ||
    type === 'INSTANCE'
  );
}

// True if any visible descendant is a frame/group/instance wrapper — i.e. the
// icon has nested "mess" instead of being a single flattened shape.
function hasNestedContainer(node: SceneNode): boolean {
  if (!('children' in node)) return false;
  for (const child of node.children) {
    if (child.visible === false) continue;
    if (isContainerType(child.type)) return true;
    if (hasNestedContainer(child)) return true;
  }
  return false;
}

// The rendered content should be exactly one flattened shape. We only count
// visible children (hidden layers are caught separately) — so a lone vector or
// a single union passes, while multiple shapes, a group/frame wrapper, or any
// nested frame/group buried inside the shape does not.
function isSingleShape(variant: ComponentNode): boolean {
  const visible = variant.children.filter((c) => c.visible !== false);
  if (visible.length !== 1) return false;
  if (!isShapeType(visible[0].type)) return false;
  if (hasNestedContainer(visible[0])) return false;
  return true;
}

// Pictograms are legitimately multi-path/multi-color, so the icon "single
// flattened shape" rule doesn't apply. The analog is a single clean top-level
// layer: exactly one visible child (one frame/group holding the artwork) and no
// hidden/stray layers anywhere inside.
function isSinglePictogramLayer(comp: ComponentNode): boolean {
  if (hasHiddenDescendant(comp)) return false;
  const visible = comp.children.filter((c) => c.visible !== false);
  return visible.length === 1;
}

// Icon shapes must use horizontal + vertical "Scale" constraints so they resize
// with the frame. Checks every visible layer in the subtree (nested vectors
// inside a boolean op / group also need Scale, not just the top-level layer).
function hasNonScaleConstraints(node: SceneNode & ChildrenMixin): boolean {
  for (const child of node.children) {
    if (child.visible === false) continue;
    if ('constraints' in child) {
      const con = (child as SceneNode & { constraints: Constraints }).constraints;
      if (con.horizontal !== 'SCALE' || con.vertical !== 'SCALE') return true;
    }
    if ('children' in child && hasNonScaleConstraints(child as SceneNode & ChildrenMixin)) {
      return true;
    }
  }
  return false;
}

// Builds a per-icon warning whose detail pills jump to each affected size.
function sizeScopedIssue(rule: string, name: string, verb: string, entries: { nodeId: string; size: number }[]): Issue {
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
  // Base name (modifiers stripped) -> which of the 4 styles exist, for the
  // "complete icon set" check.
  const families = new Map<
    string,
    { display: string; present: Set<string>; repId: string; hasRegular: boolean }
  >();

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

      // Track the variant family (base name minus Bold/Filled) so we can flag
      // incomplete sets — we aim for Regular / Filled / Bold / Bold Filled.
      const baseKey = tokens.filter((t) => t !== 'bold' && t !== 'filled').join('-');
      if (baseKey !== '') {
        const style = variantStyle(tokens);
        let fam = families.get(baseKey);
        if (!fam) {
          fam = { display: baseLabel(name), present: new Set<string>(), repId: child.id, hasRegular: false };
          families.set(baseKey, fam);
        }
        fam.present.add(style);
        // Prefer the regular variant as the family's display name + preview.
        if (style === 'regular') {
          fam.display = baseLabel(name);
          fam.repId = child.id;
          fam.hasRegular = true;
        }
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
      const badConstraintsAt: { nodeId: string; size: number }[] = [];

      for (const variant of variants) {
        variantCount += 1;

        // Structure checks (independent of the size label being valid).
        const sizeGuess = /size=(\d+)/i.exec(variant.name);
        const structSize = sizeGuess ? Number(sizeGuess[1]) : Number.NaN;
        if (hasHiddenDescendant(variant)) hiddenAt.push({ nodeId: variant.id, size: structSize });
        if (!isSingleShape(variant)) notSingleAt.push({ nodeId: variant.id, size: structSize });
        if (hasNonScaleConstraints(variant)) badConstraintsAt.push({ nodeId: variant.id, size: structSize });

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
        issues.push(sizeScopedIssue('not-single-shape', name, "isn't a single flattened shape", notSingleAt));
      }

      // Rule: the icon shape must use Scale/Scale constraints so it resizes with
      // the frame.
      if (badConstraintsAt.length > 0) {
        issues.push(sizeScopedIssue('bad-constraints', name, "isn't set to Scale", badConstraintsAt));
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

  // Incomplete variant sets — every icon should ship Regular / Filled / Bold /
  // Bold Filled.
  for (const fam of families.values()) {
    const missing = VARIANT_STYLES.filter((s) => !fam.present.has(s.key));
    if (missing.length === 0) continue;
    issues.push({
      severity: 'warning',
      rule: 'incomplete-set',
      message: `"${fam.display}" is missing ${missing.map((s) => s.label).join(', ')}.`,
      nodeId: fam.repId,
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
    kind: 'icons',
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

// Parses a Figma variant name like "pictogram=Cone, background=Light" into a
// lowercase-keyed prop map (matches parseVariantProps in the generator).
function parseVariantProps(name: string): { [key: string]: string } {
  const out: { [key: string]: string } = {};
  for (const part of name.split(',')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim().toLowerCase();
    const value = part.slice(idx + 1).trim();
    if (key) out[key] = value;
  }
  return out;
}

// The generator collects COMPONENTs from a top-level container named
// "Pictogram(s)" (a COMPONENT_SET, FRAME, or GROUP).
function isPictogramContainer(node: SceneNode): boolean {
  const isContainerType = node.type === 'COMPONENT_SET' || node.type === 'FRAME' || node.type === 'GROUP';
  return isContainerType && /^pictograms?$/i.test(node.name.trim());
}

function findPictogramsPage(): { page: PageNode; usedFallback: boolean } {
  const byName = figma.root.children.find((p) => normalize(p.name) === 'pictograms');
  if (byName) return { page: byName, usedFallback: false };
  // Fallback: any page that contains a "Pictogram(s)" container.
  for (const p of figma.root.children) {
    const found = p.findOne((n) => isPictogramContainer(n));
    if (found) return { page: p, usedFallback: true };
  }
  return { page: figma.currentPage, usedFallback: true };
}

function capitalize(s: string): string {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// Scans the Pictograms page: pictograms are full-color COMPONENTs identified by
// `pictogram=<name>, background=<Light|Dark|Orange>` variant properties, sized
// 240×240. Mirrors getPictograms() in the generator.
interface PictogramShapeTarget {
  name: string;
  previewId: string;
  variants: { bg: string; node: ComponentNode }[];
}

async function scanPictograms(): Promise<{
  result: ScanResult;
  baseNames: Map<string, string>;
  previewByNode: Map<string, string>;
  shapeTargets: PictogramShapeTarget[];
}> {
  await figma.loadAllPagesAsync();
  const { page, usedFallback } = findPictogramsPage();

  const issues: Issue[] = [];
  const previewByNode = new Map<string, string>();
  const baseNames = new Map<string, string>();

  const containers = page.findAll((n) => isPictogramContainer(n));
  const insideIds = new Set<string>();
  const components: ComponentNode[] = [];
  for (const container of containers) {
    if (!('findAll' in container)) continue;
    const comps = (container as SceneNode & ChildrenMixin).findAll((n) => n.type === 'COMPONENT');
    for (const comp of comps) {
      if (!insideIds.has(comp.id)) {
        insideIds.add(comp.id);
        components.push(comp as ComponentNode);
      }
    }
  }

  // Family = pictogram identity (name); tracks which backgrounds exist.
  const families = new Map<
    string,
    {
      display: string;
      backgrounds: Set<string>;
      repId: string;
      previewId: string;
      variants: { bg: string; node: ComponentNode }[];
      badConstraints: { bg: string; nodeId: string }[];
      notSingle: { bg: string; nodeId: string }[];
    }
  >();
  const seenVariants = new Set<string>();
  const backgroundsSeen = new Set<string>();
  const compFamilyKey: { compId: string; famKey: string }[] = [];
  let variantCount = 0;

  for (const comp of components) {
    const props = parseVariantProps(comp.name);
    const pictogram = (props.pictogram || '').trim();
    const background = (props.background || '').trim();

    if (!pictogram || !background) {
      issues.push({
        severity: 'error',
        rule: 'pictogram-empty-name',
        message: `A pictogram variant is named "${comp.name}" (expected "pictogram=Name, background=Light|Dark|Orange").`,
        nodeId: comp.id,
      });
      continue;
    }

    variantCount += 1;
    const bgLower = background.toLowerCase();
    backgroundsSeen.add(bgLower);

    if (/\d/.test(pictogram)) {
      issues.push({
        severity: 'error',
        rule: 'pictogram-number-in-name',
        message: `"${pictogram}" has a number in its name (numbers aren't allowed).`,
        nodeId: comp.id,
      });
    }

    if (!PICTOGRAM_BACKGROUNDS.includes(bgLower)) {
      issues.push({
        severity: 'error',
        rule: 'pictogram-invalid-background',
        message: `"${pictogram}" has background "${background}" (allowed: Light, Dark, Orange).`,
        nodeId: comp.id,
      });
    }

    const w = Math.round(comp.width);
    const h = Math.round(comp.height);
    if (w !== PICTOGRAM_DIMENSION || h !== PICTOGRAM_DIMENSION) {
      issues.push({
        severity: 'warning',
        rule: 'pictogram-dimension',
        message: `"${pictogram}" ${background} is ${w}×${h} (expected ${PICTOGRAM_DIMENSION}×${PICTOGRAM_DIMENSION}).`,
        nodeId: comp.id,
      });
    }

    const famKey = normalize(pictogram);
    let fam = families.get(famKey);
    if (!fam) {
      fam = {
        display: pictogram,
        backgrounds: new Set<string>(),
        repId: comp.id,
        previewId: comp.id,
        variants: [],
        badConstraints: [],
        notSingle: [],
      };
      families.set(famKey, fam);
    }
    fam.backgrounds.add(bgLower);
    // Prefer the light variant as the family's representative + preview.
    if (bgLower === 'light') {
      fam.repId = comp.id;
      fam.previewId = comp.id;
      fam.display = pictogram;
    }

    const dupKey = `${famKey}|${bgLower}`;
    if (seenVariants.has(dupKey)) {
      issues.push({
        severity: 'error',
        rule: 'pictogram-duplicate',
        message: `"${pictogram}" has multiple "${background}" variants.`,
        nodeId: comp.id,
      });
    } else {
      seenVariants.add(dupKey);
      if (PICTOGRAM_BACKGROUNDS.includes(bgLower)) {
        // Track one node per real background for the cross-variant shape check.
        fam.variants.push({ bg: bgLower, node: comp });
        // Rule: layers must use Scale/Scale constraints so the artwork resizes
        // with its frame (same check as regular icons).
        if (hasNonScaleConstraints(comp)) fam.badConstraints.push({ bg: bgLower, nodeId: comp.id });
        // Rule: a single clean top-level layer, no loose/hidden layers.
        if (!isSinglePictogramLayer(comp)) fam.notSingle.push({ bg: bgLower, nodeId: comp.id });
      }
    }
    compFamilyKey.push({ compId: comp.id, famKey });
  }

  // Map every in-container component to its family preview (the light variant).
  for (const { compId, famKey } of compFamilyKey) {
    const fam = families.get(famKey);
    if (fam) previewByNode.set(compId, fam.previewId);
  }

  // Base name -> representative id, for the release diff.
  for (const fam of families.values()) {
    const base = kebab(fam.display);
    if (base && !baseNames.has(base)) baseNames.set(base, fam.repId);
  }

  // Rule: every pictogram should ship Light / Dark / Orange backgrounds.
  for (const fam of families.values()) {
    const missing = PICTOGRAM_BACKGROUNDS.filter((b) => !fam.backgrounds.has(b));
    if (missing.length > 0) {
      issues.push({
        severity: 'warning',
        rule: 'pictogram-incomplete-backgrounds',
        message: `"${fam.display}" is missing ${missing.map(capitalize).join(', ')}.`,
        nodeId: fam.repId,
      });
    }
  }

  // Rule: layers must use Scale/Scale constraints (mirrors the icon check). Pills
  // jump to each affected background.
  for (const fam of families.values()) {
    if (fam.badConstraints.length === 0) continue;
    const sorted = [...fam.badConstraints].sort(
      (a, b) => PICTOGRAM_BACKGROUNDS.indexOf(a.bg) - PICTOGRAM_BACKGROUNDS.indexOf(b.bg),
    );
    issues.push({
      severity: 'error',
      rule: 'pictogram-bad-constraints',
      message: `"${fam.display}" isn't set to Scale:`,
      nodeId: fam.repId,
      targets: sorted.map((b) => ({ nodeId: b.nodeId, label: capitalize(b.bg) })),
    });
  }

  // Rule: each pictogram should be a single clean top-level layer (mirrors the
  // icon single-shape check). Pills jump to each affected background.
  for (const fam of families.values()) {
    if (fam.notSingle.length === 0) continue;
    const sorted = [...fam.notSingle].sort(
      (a, b) => PICTOGRAM_BACKGROUNDS.indexOf(a.bg) - PICTOGRAM_BACKGROUNDS.indexOf(b.bg),
    );
    issues.push({
      severity: 'error',
      rule: 'pictogram-not-single-layer',
      message: `"${fam.display}" isn't a single layer:`,
      nodeId: fam.repId,
      targets: sorted.map((b) => ({ nodeId: b.nodeId, label: capitalize(b.bg) })),
    });
  }

  // Orphans: components that look like pictograms but live outside a container.
  const allComponents = page.findAllWithCriteria({ types: ['COMPONENT'] });
  const orphans = allComponents.filter((c) => {
    if (insideIds.has(c.id)) return false;
    const props = parseVariantProps(c.name);
    return !!props.pictogram && !!props.background;
  });
  if (orphans.length > 0) {
    issues.push({
      severity: 'warning',
      rule: 'pictogram-orphan',
      message: `${orphans.length} pictogram component${
        orphans.length === 1 ? '' : 's'
      } are not inside a "Pictogram" container and will be skipped.`,
      nodeId: orphans[0].id,
    });
  }

  for (const issue of issues) {
    const rep = issue.nodeId || (issue.targets && issue.targets[0] && issue.targets[0].nodeId);
    if (rep) {
      const preview = previewByNode.get(rep);
      if (preview) issue.previewId = preview;
    }
  }

  // Cross-variant shape check targets: pictograms with 2+ real backgrounds.
  const shapeTargets: PictogramShapeTarget[] = [];
  for (const fam of families.values()) {
    if (fam.variants.length >= 2) {
      shapeTargets.push({ name: fam.display, previewId: fam.previewId, variants: fam.variants });
    }
  }

  issues.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === 'error' ? -1 : 1));

  const errorCount = issues.filter((i) => i.severity === 'error').length;
  const warningCount = issues.length - errorCount;

  const result: ScanResult = {
    kind: 'pictograms',
    pageName: page.name,
    usedFallbackPage: usedFallback,
    iconCount: families.size,
    variantCount,
    categoryCount: backgroundsSeen.size,
    orphanCount: orphans.length,
    passed: families.size > 0 && errorCount === 0,
    errorCount,
    warningCount,
    issues,
  };

  return { result, baseNames, previewByNode, shapeTargets };
}

// Geometry-bearing attributes on an SVG shape (matches SHAPE_ATTRS in the
// generator's pictogram-merge.ts).
const PICTOGRAM_SHAPE_TAGS = ['path', 'circle', 'rect', 'ellipse', 'polygon', 'polyline', 'line'];
const PICTOGRAM_GEOM_ATTRS = ['d', 'points', 'x', 'y', 'width', 'height', 'cx', 'cy', 'r', 'rx', 'ry', 'transform'];

// Rounds every number in a geometry string to the nearest integer so Figma's
// per-variant sub-pixel export noise (e.g. 47.9553 vs 47.9554) doesn't count as
// a real shape difference — only genuinely different artwork does.
function normalizeGeometry(value: string): string {
  return value.replace(/-?\d*\.?\d+(?:e-?\d+)?/gi, (m) => String(Math.round(parseFloat(m))));
}

// Builds an ordered per-shape signature (tag + normalized geometry) for an
// exported pictogram SVG, mirroring collectShapeElements()/SHAPE_ATTRS in the
// generator. <defs> is stripped because its contents are referenced by id, not
// rendered in place.
function pictogramShapeSignature(svg: string): string[] {
  const body = svg.replace(/<defs[\s\S]*?<\/defs>/gi, '');
  const re = new RegExp(`<(${PICTOGRAM_SHAPE_TAGS.join('|')})\\b([^>]*?)\\/?>`, 'gi');
  const sigs: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    const tag = m[1].toLowerCase();
    const attrs = m[2];
    const parts = [tag];
    for (const attr of PICTOGRAM_GEOM_ATTRS) {
      const am = new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i').exec(attrs);
      parts.push(`${attr}=${am ? normalizeGeometry(am[1]) : ''}`);
    }
    sigs.push(parts.join('|'));
  }
  return sigs;
}

function sameSignature(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

// Exports each background variant of a pictogram and flags those whose geometry
// diverges from the reference (Light) — the case where the generator can't merge
// the variants and instead inlines a separate SVG per background (and dark/orange
// can end up rendering the wrong shape). Runs after the main scan so verification
// stays instant.
async function runPictogramShapeChecks(targets: PictogramShapeTarget[]): Promise<Issue[]> {
  const issues: Issue[] = [];
  const BATCH = 8;
  for (let i = 0; i < targets.length; i += BATCH) {
    const slice = targets.slice(i, i + BATCH);
    const results = await Promise.all(
      slice.map(async (t) => {
        try {
          const sigs = await Promise.all(
            t.variants.map(async (v) => ({
              bg: v.bg,
              nodeId: v.node.id,
              sig: pictogramShapeSignature(bytesToString(await v.node.exportAsync({ format: 'SVG' }))),
            })),
          );
          const ref = sigs.find((s) => s.bg === 'light') || sigs[0];
          const differing = sigs.filter((s) => s !== ref && !sameSignature(s.sig, ref.sig));
          if (differing.length === 0) return null;
          return { target: t, refBg: ref.bg, differing };
        } catch {
          return null;
        }
      }),
    );
    for (const r of results) {
      if (!r) continue;
      const labels = r.differing.map((d) => capitalize(d.bg)).join(', ');
      issues.push({
        severity: 'error',
        rule: 'pictogram-mismatched-shapes',
        message: `"${r.target.name}": ${labels} ${
          r.differing.length === 1 ? 'differs' : 'differ'
        } from ${capitalize(r.refBg)}.`,
        previewId: r.target.previewId,
        targets: r.differing.map((d) => ({ nodeId: d.nodeId, label: capitalize(d.bg) })),
      });
    }
  }
  return issues;
}

// Recolors an exported SVG to currentColor so previews match how the generated
// component renders (and adapt to the plugin's light/dark theme).
function toCurrentColor(svg: string): string {
  return svg.replace(/\b(fill|stroke)\s*=\s*"(?!none")[^"]*"/gi, '$1="currentColor"');
}

// Exports the given preview nodes to inline SVG markup, keyed by node id, for
// rendering thumbnails next to each issue. Icons are recolored to currentColor
// (monochrome); pictograms keep their original full-color artwork.
async function buildPreviews(ids: string[], recolor: boolean): Promise<Record<string, string>> {
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
            const svg = bytesToString(bytes);
            map[id] = recolor ? toCurrentColor(svg) : svg;
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

// Compares the current Figma icons/pictograms against the manifest from the
// latest npm release of @frosted-ui/icons (served via jsDelivr). Icons and
// pictograms ship in the same package under separate manifest files.
async function fetchReleaseDiff(current: Map<string, string>, kind: Kind): Promise<ReleaseDiff> {
  const empty: ReleaseDiff = { comparedToVersion: null, error: null, added: [], removed: [] };
  const manifestFile = kind === 'pictograms' ? 'pictograms-manifest.json' : 'manifest.json';
  // Strips the size/background suffix to recover the base name.
  const toBase = (svgName: string): string =>
    kind === 'pictograms'
      ? svgName.replace(/-(light|dark|orange)-pictogram$/i, '')
      : svgName.replace(/-\d+$/, '');
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
      ? `https://cdn.jsdelivr.net/npm/@frosted-ui/icons@${version}/${manifestFile}`
      : `https://cdn.jsdelivr.net/npm/@frosted-ui/icons/${manifestFile}`;
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
          published.add(toBase(svgName));
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

async function scanIconsFlow(): Promise<void> {
  const { result, baseNames, qualityTargets, previewByNode } = await scan();
  figma.ui.postMessage({ type: 'scan-result', kind: 'icons', result });

  figma.ui.postMessage({ type: 'quality-loading', kind: 'icons' });
  const qualityIssues = await runQualityChecks(qualityTargets);
  for (const issue of qualityIssues) {
    const rep = (issue.targets && issue.targets[0] && issue.targets[0].nodeId) || issue.nodeId;
    if (rep) {
      const preview = previewByNode.get(rep);
      if (preview) issue.previewId = preview;
    }
  }
  figma.ui.postMessage({ type: 'quality-result', kind: 'icons', issues: qualityIssues });

  // Render icon thumbnails for every flagged issue (scan + quality).
  const previewIds = new Set<string>();
  for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
  for (const issue of qualityIssues) if (issue.previewId) previewIds.add(issue.previewId);
  if (previewIds.size > 0) {
    const previews = await buildPreviews([...previewIds], true);
    figma.ui.postMessage({ type: 'previews', kind: 'icons', previews });
  }

  figma.ui.postMessage({ type: 'diff-loading', kind: 'icons' });
  const diff = await fetchReleaseDiff(baseNames, 'icons');
  figma.ui.postMessage({ type: 'diff-result', kind: 'icons', diff });
}

async function scanPictogramsFlow(): Promise<void> {
  const { result, baseNames, shapeTargets } = await scanPictograms();
  figma.ui.postMessage({ type: 'scan-result', kind: 'pictograms', result });

  figma.ui.postMessage({ type: 'quality-loading', kind: 'pictograms' });
  const shapeIssues = await runPictogramShapeChecks(shapeTargets);
  figma.ui.postMessage({ type: 'quality-result', kind: 'pictograms', issues: shapeIssues });

  // Pictograms keep their full color in previews (recolor = false).
  const previewIds = new Set<string>();
  for (const issue of result.issues) if (issue.previewId) previewIds.add(issue.previewId);
  for (const issue of shapeIssues) if (issue.previewId) previewIds.add(issue.previewId);
  if (previewIds.size > 0) {
    const previews = await buildPreviews([...previewIds], false);
    figma.ui.postMessage({ type: 'previews', kind: 'pictograms', previews });
  }

  figma.ui.postMessage({ type: 'diff-loading', kind: 'pictograms' });
  const diff = await fetchReleaseDiff(baseNames, 'pictograms');
  figma.ui.postMessage({ type: 'diff-result', kind: 'pictograms', diff });
}

async function scanAll(): Promise<void> {
  await figma.loadAllPagesAsync();
  await scanIconsFlow();
  await scanPictogramsFlow();
}

figma.ui.onmessage = async (msg: {
  type: string;
  id?: string;
  kind?: Kind;
  width?: number;
  height?: number;
}) => {
  switch (msg.type) {
    case 'rescan': {
      await scanAll();
      break;
    }
    case 'focus': {
      if (msg.id) await focusNode(msg.id);
      break;
    }
    case 'open-sync': {
      figma.openExternal(msg.kind === 'pictograms' ? PICTOGRAM_SYNC_WORKFLOW_URL : SYNC_WORKFLOW_URL);
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
    const saved = (await figma.clientStorage.getAsync(SIZE_KEY)) as { width?: number; height?: number } | undefined;
    if (saved && saved.width && saved.height) {
      figma.ui.resize(
        clamp(saved.width, MIN_SIZE.width, MAX_SIZE.width),
        clamp(saved.height, MIN_SIZE.height, MAX_SIZE.height),
      );
    }
  } catch {
    // Fall back to the default size.
  }
  await scanAll();
})();
