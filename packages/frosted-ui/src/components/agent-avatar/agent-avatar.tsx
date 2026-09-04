'use client';

import * as React from 'react';
import { BotAvatar } from '../bot-avatar/bot-avatar';
import type { BotAvatarProps } from '../bot-avatar/bot-avatar';
import type { BotAvatarShape } from '../bot-avatar/bot-avatar.shapes';

/**
 * AgentAvatar is a BotAvatar with a single, fixed silhouette: the classic
 * minifig head (stud on top, rounded-square face). Everything else — the eye
 * system, expressions, statuses, gaze and pointer tracking, the imperative
 * handle, notification badge, and identity-derived color — is shared.
 *
 * There is deliberately no `shape` prop: agents are recognizable by color
 * and expression, while the head silhouette itself is the brand.
 */
interface AgentAvatarProps extends Omit<BotAvatarProps, 'shape'> {}

// 'lego-head' lives in the internal shape atlas but is reserved for this
// component, so it is not part of BotAvatar's public shape union (and can
// never be assigned by BotAvatar's identity hash). The cast is the single
// place that bridges the two.
const LEGO_HEAD = 'lego-head' as unknown as BotAvatarShape;

const AgentAvatar = (props: AgentAvatarProps) => <BotAvatar {...props} shape={LEGO_HEAD} />;
AgentAvatar.displayName = 'AgentAvatar';

export { AgentAvatar };
export type { AgentAvatarProps };
