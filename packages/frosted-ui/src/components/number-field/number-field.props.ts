import { PropDef, colorProp } from '../../helpers';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['surface', 'soft'] as const;
const buttonLayouts = ['split', 'trailing', 'none'] as const;

const numberFieldPropDefs = {
  size: { type: 'enum', values: sizes, default: '2' },
  variant: { type: 'enum', values: variants, default: 'surface' },
  color: { ...colorProp, default: 'gray' },
  buttonLayout: { type: 'enum', values: buttonLayouts, default: 'trailing' },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
  buttonLayout: PropDef<(typeof buttonLayouts)[number]>;
};

const numberFieldSlotPropDefs = {
  color: colorProp,
} satisfies {
  color: typeof colorProp;
};

export { numberFieldPropDefs, numberFieldSlotPropDefs };
