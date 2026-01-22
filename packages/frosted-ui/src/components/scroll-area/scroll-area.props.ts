import type { PropDef } from '../../helpers';

const sizes = ['1', '2', '3'] as const;
const scrollbarsValues = ['vertical', 'horizontal', 'both'] as const;
const typeValues = ['auto', 'always', 'scroll', 'hover'] as const;

const scrollAreaPropDefs = {
  size: { type: 'enum', values: sizes, default: '1' },
  scrollbars: { type: 'enum', values: scrollbarsValues, default: 'both' },
  /**
   * Describes the nature of scrollbar visibility, similar to how the scrollbar
   * preferences in macOS control visibility of native scrollbars.
   *
   * - `"auto"` - scrollbars are visible when content is overflowing
   * - `"always"` - scrollbars are always visible regardless of overflow
   * - `"scroll"` - scrollbars are visible when the user is scrolling
   * - `"hover"` - scrollbars are visible when scrolling or hovering over the scroll area
   */
  type: { type: 'enum', values: typeValues, default: 'hover' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  scrollbars: PropDef<(typeof scrollbarsValues)[number]>;
  type: PropDef<(typeof typeValues)[number]>;
};

export { scrollAreaPropDefs };
