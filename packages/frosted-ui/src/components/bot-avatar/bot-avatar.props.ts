import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';
import type { BotAvatarShape } from './bot-avatar.shapes';
import { botAvatarShapes } from './bot-avatar.shapes';

const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const botAvatarPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
  shape: { type: 'enum', values: botAvatarShapes, default: 'circle' },
  color: { ...colorProp, default: undefined },
  highContrast: highContrastProp,
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  shape: PropDef<BotAvatarShape>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
};

export { botAvatarPropDefs };
