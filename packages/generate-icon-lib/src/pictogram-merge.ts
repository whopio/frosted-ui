import cheerio from 'cheerio';

/**
 * Pictogram-specific helpers for merging multiple background variants of the
 * same pictogram into a single React component. See `generatePictogramComponents`
 * in `services.ts` for how this fits together.
 */

/**
 * Attributes on a shape element that define its geometry (vs its appearance).
 * We don't gate alignment on these matching exactly across variants any more —
 * Figma's per-variant export introduces sub-pixel floating-point noise in `d`
 * coordinates (e.g. `47.9553` vs `47.9554`) that would needlessly trip a strict
 * equality check and push otherwise-mergeable pictograms onto the switched
 * fallback. Instead we treat the `light` variant's geometry as canonical and
 * surface a warning when any of these attributes drift, so genuinely
 * intentional per-variant geometry changes still get caught in PR review.
 */
const SHAPE_ATTRS = [
  'd',
  'points',
  'x',
  'y',
  'width',
  'height',
  'cx',
  'cy',
  'r',
  'rx',
  'ry',
  'transform',
];

const COLOR_ATTRS = ['fill', 'stroke'] as const;

/** SVG tags that actually render strokes/fills (vs structural wrappers). */
const SHAPE_TAGS = new Set(['path', 'circle', 'rect', 'ellipse', 'polygon', 'polyline', 'line']);

/**
 * Walks the SVG tree and returns every paint-bearing shape element in document
 * order, flattening any `<g>` wrappers along the way. We need flattening
 * because some pictograms (e.g. those with `<clipPath>`) come out of Figma
 * wrapped in a group — naive `svg.children()` would only see the wrapper, miss
 * the per-path color variance, and emit the light variant's body verbatim with
 * hardcoded fills.
 *
 * `<defs>` subtrees are skipped because their contents are referenced by id
 * (e.g. clipPath, gradient definitions) rather than rendered in place — we
 * don't want to compare or mutate them.
 */
function collectShapeElements(root: any): any[] {
  const out: any[] = [];
  const walk = (node: any) => {
    if (!node || node.type !== 'tag') return;
    if (node.name === 'defs') return;
    if (SHAPE_TAGS.has(node.name)) out.push(node);
    if (node.children) for (const child of node.children) walk(child);
  };
  if (root && root.children) for (const child of root.children) walk(child);
  return out;
}

/**
 * Synthetic variant name we add on top of the `light` / `dark` / `orange`
 * variants pulled from Figma. Its per-element values are derived from the
 * `light` and `dark` entries as `light-dark(L, D)` so the rendered color
 * tracks the page's `color-scheme` automatically.
 */
export const AUTO_VARIANT = 'auto';

export interface MergedPictogramAnalysis {
  /**
   * The reference SVG string with every varying fill/stroke attribute replaced
   * by a placeholder `__FILL_N__` / `__STROKE_N__`. Run this through the
   * existing `readyForJSX` transformer and then `.replace()` the placeholders
   * with `{f[N]}` / `{s[N]}` to get the final JSX.
   */
  placeholderSvg: string;
  /**
   * Maps each variant name to the per-element fill colors. Sparse: only the
   * elements whose fill differs across variants appear here.
   * Indexes match the placeholder numbers in `placeholderSvg`.
   */
  fillsByVariant: Record<string, Record<number, string>>;
  /** Same shape as `fillsByVariant` but for stroke colors. */
  strokesByVariant: Record<string, Record<number, string>>;
  /**
   * Total number of top-level shape elements (used by the template to decide
   * whether the FILLS / STROKES lookups are non-empty before emitting them).
   */
  elementCount: number;
  /**
   * Human-readable notes about any geometry drift between variants (e.g.
   * `element[3] d differs between light and dark`). Almost always sub-pixel
   * Figma export noise, but occasionally an artist genuinely redrew a path
   * differently per background — surface these so reviewers can spot-check
   * the rendered output for the dark/orange tiles vs the source.
   */
  geometryWarnings: string[];
}

export type AlignmentResult =
  | { aligned: true; analysis: MergedPictogramAnalysis }
  | { aligned: false; reason: string };

/**
 * Compares the rendered SVGs of all background variants for a single pictogram
 * and decides whether they can be collapsed into one React component:
 *  - Every variant must have the same number of top-level shape elements.
 *  - Every element must have the same tag across all variants.
 *
 * If those structural checks pass, the `light` variant's geometry is treated
 * as canonical and we build a per-element color lookup from each variant's
 * same-indexed elements. Geometry attributes (`d`, `points`, `transform`,
 * etc.) are NOT required to match across variants — Figma's exporter rounds
 * coordinates slightly differently per background which would otherwise push
 * almost every pictogram onto the switched fallback. When geometry does
 * drift we record a warning in `analysis.geometryWarnings` so reviewers can
 * confirm dark/orange still look right.
 *
 * Only structural mismatches (different element count or different tag at the
 * same index) fall back to per-variant inlining — that's a sign the artist
 * actually drew different artwork per background.
 */
export function analyzePictogramAlignment(svgsByVariant: Record<string, string>): AlignmentResult {
  const variants = Object.keys(svgsByVariant);
  if (variants.length === 0) return { aligned: false, reason: 'no variants provided' };

  // The ambient `@types/cheerio` shipped with this repo doesn't expose
  // `cheerio.Element` as a namespace type, so we type the parsed-element
  // arrays as `any[]` and rely on the well-known `.name` / `.attribs` shape
  // at runtime.
  // We use `collectShapeElements` rather than `.children()` so wrappers like
  // `<g clipPath="...">` don't hide per-element color variance — see the
  // function's docstring above.
  const docs: Record<string, ReturnType<typeof cheerio.load>> = {};
  const elementsByVariant: Record<string, any[]> = {};
  for (const variant of variants) {
    const $ = cheerio.load(svgsByVariant[variant], { xmlMode: true });
    docs[variant] = $;
    elementsByVariant[variant] = collectShapeElements($('svg').get(0));
  }

  const refVariant = variants[0];
  const refElements = elementsByVariant[refVariant];
  const elementCount = refElements.length;

  // Element-count check first: a different count means an extra/missing shape
  // (the artist drew them differently per background — can't be merged).
  for (const variant of variants) {
    const count = elementsByVariant[variant].length;
    if (count !== elementCount) {
      return {
        aligned: false,
        reason: `path-count differs (${refVariant}=${elementCount}, ${variant}=${count})`,
      };
    }
  }

  // Element-by-element structural check. We only bail out for tag mismatches
  // (a genuine topology difference); geometry drift is recorded as a warning
  // and the `light` variant's geometry wins. See the function docstring above.
  const geometryWarnings: string[] = [];
  for (let i = 0; i < elementCount; i++) {
    const refEl = refElements[i];
    for (const variant of variants) {
      if (variant === refVariant) continue;
      const otherEl = elementsByVariant[variant][i];
      if (otherEl.name !== refEl.name) {
        return {
          aligned: false,
          reason: `element[${i}] tag differs (${refVariant}=${refEl.name}, ${variant}=${otherEl.name})`,
        };
      }
      for (const attr of SHAPE_ATTRS) {
        if ((refEl.attribs[attr] || '') !== (otherEl.attribs[attr] || '')) {
          geometryWarnings.push(`element[${i}] ${attr} differs between ${refVariant} and ${variant}`);
        }
      }
    }
  }

  // Aligned. Build the per-element fills/strokes lookup and the placeholder SVG.
  const fillsByVariant: Record<string, Record<number, string>> = {};
  const strokesByVariant: Record<string, Record<number, string>> = {};
  for (const variant of variants) {
    fillsByVariant[variant] = {};
    strokesByVariant[variant] = {};
  }
  // The `auto` lookup is populated below once the per-Figma-variant entries
  // are known. Initializing here keeps the bucket present in the serialized
  // FILLS table even when no fills vary (an empty record is harmless).
  fillsByVariant[AUTO_VARIANT] = {};
  strokesByVariant[AUTO_VARIANT] = {};

  // Re-parse the reference SVG so we can mutate it safely without affecting `docs`.
  const $ref = cheerio.load(svgsByVariant[refVariant], { xmlMode: true });
  const refMutable: any[] = collectShapeElements($ref('svg').get(0));

  for (let i = 0; i < elementCount; i++) {
    for (const colorAttr of COLOR_ATTRS) {
      const valueByVariant: Record<string, string | undefined> = {};
      for (const variant of variants) {
        const el = elementsByVariant[variant][i];
        valueByVariant[variant] = el.attribs[colorAttr];
      }
      const distinctValues = new Set(Object.values(valueByVariant));
      const allSame = distinctValues.size === 1;
      if (allSame) continue;

      // Varying attribute: stash actual values per variant in the lookup, and
      // replace the reference attribute with a placeholder we can post-process
      // back into a JSX expression after `readyForJSX`.
      for (const variant of variants) {
        const value = valueByVariant[variant];
        if (value != null) {
          if (colorAttr === 'fill') fillsByVariant[variant][i] = value;
          else strokesByVariant[variant][i] = value;
        }
      }
      const placeholder = colorAttr === 'fill' ? `__FUI_FILL_${i}__` : `__FUI_STROKE_${i}__`;
      $ref(refMutable[i]).attr(colorAttr, placeholder);
    }
  }

  // Derive the `auto` entries. For every element where either the `light` or
  // `dark` variant has a value, emit `light-dark(L, D)` so the color tracks
  // the page's color-scheme. When only one of the two has a value, fall back
  // to the present value for both arms — the result still renders, and is
  // identical to what `variant="light"` (or `"dark"`) would have produced.
  deriveAutoEntries(fillsByVariant);
  deriveAutoEntries(strokesByVariant);

  return {
    aligned: true,
    analysis: {
      placeholderSvg: $ref.xml(),
      fillsByVariant,
      strokesByVariant,
      elementCount,
      geometryWarnings,
    },
  };
}

function deriveAutoEntries(byVariant: Record<string, Record<number, string>>): void {
  const light = byVariant.light;
  const dark = byVariant.dark;
  if (!light && !dark) return;
  const indexes = new Set<string>([
    ...Object.keys(light || {}),
    ...Object.keys(dark || {}),
  ]);
  for (const i of indexes) {
    const idx = Number(i);
    const l = light ? light[idx] : undefined;
    const d = dark ? dark[idx] : undefined;
    if (!l && !d) continue;
    byVariant[AUTO_VARIANT][idx] = `light-dark(${l ?? d}, ${d ?? l})`;
  }
}

/**
 * Replaces the `__FUI_FILL_N__` / `__FUI_STROKE_N__` placeholders inserted by
 * `analyzePictogramAlignment` with `style={{ fill: f[N] }}` / `style={{ stroke: s[N] }}`
 * JSX expressions. Run AFTER putting the SVG through the standard `readyForJSX`
 * pipeline.
 *
 * We use `style` rather than the SVG `fill` / `stroke` attributes because the
 * `auto` variant emits CSS `light-dark()` color functions, which are valid as
 * CSS values but not as plain SVG `<paint>` attribute values. Rendering them
 * via `style` means the same lookup mechanism works for hex colors and
 * `light-dark()` strings alike.
 */
export function injectFillStrokeLookups(jsx: string): string {
  const withStyles = jsx
    .replace(/fill=["']__FUI_FILL_(\d+)__["']/g, 'style={{fill:f[$1]}}')
    .replace(/stroke=["']__FUI_STROKE_(\d+)__["']/g, 'style={{stroke:s[$1]}}');
  // Coalesce repeated `style={{ ... }}` props on the same JSX element. Two
  // varying color attrs on one element produce two separate `style` props
  // which React would warn about and only keep the last of.
  return mergeStyleProps(withStyles);
}

function mergeStyleProps(jsx: string): string {
  // Walk each opening JSX tag (incl. self-closing) and merge any style props
  // inside it. Tag bodies don't contain `<` or `>` so a flat character class
  // suffices.
  return jsx.replace(/<[a-zA-Z][^<>]*\/?>/g, (tag) => {
    const styles: string[] = [];
    const stripped = tag.replace(/\s*style=\{\{([^}]+)\}\}/g, (_, body) => {
      styles.push(body);
      return '';
    });
    if (styles.length <= 1) return tag;
    const merged = ` style={{${styles.join(',')}}}`;
    if (stripped.endsWith('/>')) {
      return stripped.slice(0, -2) + `${merged} />`;
    }
    return stripped.slice(0, -1) + `${merged}>`;
  });
}

/**
 * Serializes a per-variant lookup like `{ light: { 2: '#151515' }, dark: { 2: '#222' } }`
 * into a JS object literal suitable for inlining into a generated component.
 * Returns `'{}'` when the lookup is fully empty (no varying attrs of this kind).
 */
export function serializeLookup(lookup: Record<string, Record<number, string>>): string {
  const variants = Object.keys(lookup);
  if (variants.length === 0) return '{}';
  const isEmpty = variants.every((v) => Object.keys(lookup[v]).length === 0);
  if (isEmpty) return '{}';
  return JSON.stringify(lookup);
}
