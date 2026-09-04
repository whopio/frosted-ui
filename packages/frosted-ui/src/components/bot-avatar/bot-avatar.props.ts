import type { PropDef } from '../../helpers';
import { colorProp, highContrastProp } from '../../helpers';
import type { BotAvatarExpression } from './bot-avatar.expressions';
import { botAvatarExpressionsList } from './bot-avatar.expressions';
import type { BotAvatarShape } from './bot-avatar.shapes';
import { botAvatarShapes } from './bot-avatar.shapes';
import type { BotAvatarStatus } from './bot-avatar.status';
import { botAvatarStatuses } from './bot-avatar.status';

const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const botAvatarPropDefs = {
  size: { type: 'enum', values: sizes, default: '3' },
  shape: { type: 'enum', values: botAvatarShapes, default: 'circle' },
  color: { ...colorProp, default: undefined },
  highContrast: highContrastProp,
  identity: { type: 'string', default: undefined },
  notification: { type: 'boolean', default: false },
  expression: {
    type: 'enum',
    values: botAvatarExpressionsList,
    default: undefined as BotAvatarExpression | undefined,
  },
  status: {
    type: 'enum',
    values: botAvatarStatuses,
    default: undefined as BotAvatarStatus | undefined,
  },
  followPointer: { type: 'boolean', default: false },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  shape: PropDef<BotAvatarShape>;
  color: typeof colorProp;
  highContrast: typeof highContrastProp;
  identity: PropDef<string>;
  notification: PropDef<boolean>;
  expression: PropDef<BotAvatarExpression>;
  status: PropDef<BotAvatarStatus>;
  followPointer: PropDef<boolean>;
};

export { botAvatarPropDefs };
