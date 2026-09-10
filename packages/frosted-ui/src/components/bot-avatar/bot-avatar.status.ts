import type { BotAvatarExpression } from './bot-avatar.expressions';

/**
 * The agent lifecycle, following Grok Bot's presence model: the avatar itself
 * carries the status, instead of a separate indicator.
 */
const botAvatarStatuses = ['idle', 'thinking', 'working', 'waiting', 'blocked', 'done'] as const;

type BotAvatarStatus = (typeof botAvatarStatuses)[number];

/**
 * Default expression per status. An explicit `expression` prop overrides the
 * mapping; the status motion preset applies either way.
 */
const botAvatarStatusExpressions: Record<BotAvatarStatus, BotAvatarExpression> = {
  idle: 'neutral',
  thinking: 'neutral',
  working: 'suspicious',
  waiting: 'wide',
  blocked: 'sad',
  done: 'happy',
};

export { botAvatarStatusExpressions, botAvatarStatuses };
export type { BotAvatarStatus };
