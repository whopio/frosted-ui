import * as React from 'react';

/**
 * The background-color variant a pictogram is intended to render against. The
 * generator emits a per-variant fills/strokes lookup so a single component can
 * render any variant without re-importing.
 */
export type PictogramVariant = 'light' | 'dark' | 'orange';

export interface PictogramProps extends Omit<React.SVGProps<SVGSVGElement>, 'children'> {
  /**
   * Which background-color variant to render. Defaults to `'light'`.
   */
  variant?: PictogramVariant;
}
