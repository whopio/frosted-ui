import type { PropDef } from '../helpers';
import { colorProp, highContrastProp } from '../helpers';

const sizes = ['1', '2', '3', '4'] as const;
const variants = ['classic', 'solid', 'soft', 'surface', 'ghost'] as const;

const baseButtonPropDefs = {
  size: { type: 'enum', values: sizes, default: '2', responsive: true },
  variant: { type: 'enum', values: variants, default: 'surface' },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { baseButtonPropDefs };
