import type { PropDef } from '../helpers';
import { colorProp, highContrastProp } from '../helpers';

const sizes = ['1', '2', '3'] as const;

const checkboxPropDefs = {
  size: { type: 'enum', values: sizes, default: '2', responsive: true },
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { checkboxPropDefs };
