import { PropDef, colorProp } from '../../helpers';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['surface', 'soft'] as const;

const textAreaPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'surface' },
  color: { ...colorProp, default: 'gray' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
};

export { textAreaPropDefs };
