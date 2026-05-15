import cheerio from 'cheerio';

/**
 * Pictogram-specific helpers for merging multiple background variants of the
 * same pictogram into a single React component. See `generatePictogramComponents`
 * in `services.ts` for how this fits together.
 */

/**
 * Attributes on a shape element that define its geometry (vs its appearance).
 * Two variants of the same pictogram are considered "aligned" when every shape
 * element matches on every one of these attributes — only color attrs (fill /
 * stroke) are allowed to differ.
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
}

export type AlignmentResult =
  | { aligned: true; analysis: MergedPictogramAnalysis }
  | { aligned: false; reason: string };

/**
 * Compares the rendered SVGs of all background variants for a single pictogram
 * and decides whether they can be collapsed into one React component:
 *  - Every variant must have the same number of top-level shape elements.
 *  - Every element must have the same tag and the same geometry attributes
 *    (`d`, `points`, `transform`, etc.) across all variants.
 * Only color attributes (`fill`, `stroke`) are allowed to differ.
 *
 * When aligned, returns the data needed to render the unified component.
 * When unaligned, returns a human-readable reason so we can log a warning and
 * fall back to per-variant inlining.
 */
export function analyzePictogramAlignment(svgsByVariant: Record<string, string>): AlignmentResult {
  const variants = Object.keys(svgsByVariant);
  if (variants.length === 0) return { aligned: false, reason: 'no variants provided' };

  // The ambient `@types/cheerio` shipped with this repo doesn't expose
  // `cheerio.Element` as a namespace type, so we type the parsed-element
  // arrays as `any[]` and rely on the well-known `.name` / `.attribs` shape
  // at runtime.
  const docs: Record<string, ReturnType<typeof cheerio.load>> = {};
  const elementsByVariant: Record<string, any[]> = {};
  for (const variant of variants) {
    const $ = cheerio.load(svgsByVariant[variant], { xmlMode: true });
    docs[variant] = $;
    elementsByVariant[variant] = $('svg').children().toArray();
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

  // Element-by-element geometry check.
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
          return {
            aligned: false,
            reason: `element[${i}] ${attr} differs between ${refVariant} and ${variant}`,
          };
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

  // Re-parse the reference SVG so we can mutate it safely without affecting `docs`.
  const $ref = cheerio.load(svgsByVariant[refVariant], { xmlMode: true });
  const refMutable: any[] = $ref('svg').children().toArray();

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

  return {
    aligned: true,
    analysis: {
      placeholderSvg: $ref.xml(),
      fillsByVariant,
      strokesByVariant,
      elementCount,
    },
  };
}

/**
 * Replaces the `__FUI_FILL_N__` / `__FUI_STROKE_N__` placeholders inserted by
 * `analyzePictogramAlignment` with `{f[N]}` / `{s[N]}` JSX expressions. Run this
 * AFTER putting the SVG through the standard `readyForJSX` pipeline.
 */
export function injectFillStrokeLookups(jsx: string): string {
  return jsx
    .replace(/fill=["']__FUI_FILL_(\d+)__["']/g, 'fill={f[$1]}')
    .replace(/stroke=["']__FUI_STROKE_(\d+)__["']/g, 'stroke={s[$1]}');
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
