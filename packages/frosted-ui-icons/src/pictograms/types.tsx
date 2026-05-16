import * as React from 'react';

/**
 * The background-color tuning a pictogram is rendered with.
 *
 * - `'light'` / `'dark'` / `'orange'` are the three explicit backgrounds the
 *   artwork is designed against.
 * - `'auto'` (the default) emits CSS `light-dark()` color values so the
 *   pictogram automatically follows the page's `color-scheme`. Use this in
 *   any themed app that toggles between light and dark — including any
 *   `<Theme appearance="…">` from `frosted-ui`.
 *
 * Browser support for `light-dark()` is Baseline since 2024 (Chrome 123,
 * Safari 17.5, Firefox 120).
 */
export type PictogramVariant = 'light' | 'dark' | 'orange' | 'auto';

export interface PictogramProps extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  /**
   * Which background-color tuning to render. Defaults to `'auto'`, which uses
   * `light-dark()` to follow the page's color scheme.
   */
  variant?: PictogramVariant;
}
