import { PropDef, colorProp } from '../helpers';
import { flexPropDefs } from './flex.props';

const sizes = ['1', '2', '3'] as const;
const variants = ['classic', 'surface', 'soft'] as const;

const textFieldPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'surface' },
  color: { ...colorProp, default: 'gray' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
};

const textFieldSlotPropDefs = {
  color: colorProp,
  gap: flexPropDefs.gap,
} satisfies {
  color: typeof colorProp;
  gap: typeof flexPropDefs.gap;
};

export { textFieldPropDefs, textFieldSlotPropDefs };
