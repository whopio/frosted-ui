import { radixColorScales } from '../../helpers/radix-colors';
import type { BotAvatarShape } from './bot-avatar.shapes';
import { botAvatarShapes } from './bot-avatar.shapes';

type BotAvatarIdentityColor = (typeof radixColorScales)[number];

interface BotAvatarIdentity {
  shape: BotAvatarShape;
  color: BotAvatarIdentityColor;
}

/** 32-bit FNV-1a hash. Stable across sessions and platforms. */
const fnv1a = (input: string, seed: number): number => {
  let hash = (0x811c9dc5 ^ seed) >>> 0;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash;
};

/**
 * Derives a stable shape + color pair from any identifier (e.g. a bot id or
 * name), so the same bot always gets the same avatar. Shape and color are
 * hashed with different seeds so they vary independently.
 */
const getBotAvatarIdentity = (identity: string): BotAvatarIdentity => ({
  shape: botAvatarShapes[fnv1a(identity, 0) % botAvatarShapes.length],
  color: radixColorScales[fnv1a(identity, 1) % radixColorScales.length],
});

export { getBotAvatarIdentity };
export type { BotAvatarIdentity };
