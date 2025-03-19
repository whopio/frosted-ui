import type { PropDef } from '../helpers';
import { colorProp } from '../helpers';

const sizes = ['1', '2', '3', '4'] as const;

const separatorPropDefs = {
  size: { type: 'enum', values: sizes, default: '1' },
  color: { ...colorProp, default: 'gray' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
};

export { separatorPropDefs };
