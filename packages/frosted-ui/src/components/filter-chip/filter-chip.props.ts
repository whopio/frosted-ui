import type { PropDef } from '../../helpers';
import { colorProp } from '../../helpers';

const sizes = ['1', '2', '3'] as const;

const filterChipPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  color: colorProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
};

export { filterChipPropDefs };
