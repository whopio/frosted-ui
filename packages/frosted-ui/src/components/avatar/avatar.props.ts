import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';

const sizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const variants = ['round', 'square'] as const;

const avatarPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
  variant: { type: 'enum', values: variants, default: 'round' },
  color: { ...colorProp, default: undefined },
  highContrast: highContrastProp,
  fallback: { type: 'ReactNode', default: undefined, required: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  variant: PropDef<(typeof variants)[number]>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
  fallback: PropDef<React.ReactNode>;
};

export { avatarPropDefs };
