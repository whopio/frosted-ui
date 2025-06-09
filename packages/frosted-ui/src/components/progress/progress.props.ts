import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';

const sizes = ['1', '2', '3'] as const;
const variants = ['classic', 'surface', 'soft'] as const;

const progressPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
  variant: { type: 'enum', values: variants, default: 'soft' },
  color: { ...colorProp, default: undefined },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { progressPropDefs };
