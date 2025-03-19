import type { PropDef } from '../helpers';
import { alignProp, colorProp, highContrastProp, trimProp, weightProp } from '../helpers';

const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const textPropDefs = {
  size: { type: 'enum', values: sizes, default: undefined },
  weight: weightProp,
  align: alignProp,
  trim: trimProp,
  color: colorProp,
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  weight: typeof weightProp;
  align: typeof alignProp;
  trim: typeof trimProp;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { textPropDefs };
