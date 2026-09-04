import { botAvatarFaceFit } from './bot-avatar.face-fit';
import type { BotAvatarAtlasShape } from './bot-avatar.shapes';

/**
 * One eye, in unit coordinates relative to the avatar box (0..1).
 * `cx`/`cy` is the eye center, `w`/`h` its size, `tilt` its rotation in
 * degrees (positive is clockwise).
 */
interface BotAvatarEyeGeometry {
  cx: number;
  cy: number;
  w: number;
  h: number;
  tilt: number;
}

const eye = (cx: number, cy: number, w: number, h: number, tilt: number): BotAvatarEyeGeometry => ({
  cx,
  cy,
  w,
  h,
  tilt,
});

/**
 * The face vocabulary: two capsule eyes per expression, following the Grok
 * Bot construction (all expression comes from eye size, spacing, and tilt;
 * mirrored tilts read as emotion, parallel tilt is the resting signature).
 * Kept deliberately small; new expressions must stay inside the fit envelope
 * used by the face-fit generator (x 0.27..0.73, y 0.26..0.62).
 */
const botAvatarExpressions = {
  neutral: [eye(0.36, 0.44, 0.13, 0.3, -10), eye(0.64, 0.44, 0.13, 0.3, -10)],
  happy: [eye(0.36, 0.42, 0.14, 0.17, -10), eye(0.64, 0.42, 0.14, 0.17, -10)],
  wide: [eye(0.36, 0.44, 0.17, 0.34, -6), eye(0.64, 0.44, 0.17, 0.34, -6)],
  wink: [eye(0.36, 0.44, 0.13, 0.3, -10), eye(0.64, 0.46, 0.15, 0.05, -10)],
  sleepy: [eye(0.36, 0.48, 0.14, 0.13, -10), eye(0.64, 0.48, 0.14, 0.13, -10)],
  angry: [eye(0.36, 0.45, 0.13, 0.24, -22), eye(0.64, 0.45, 0.13, 0.24, 22)],
  sad: [eye(0.36, 0.46, 0.13, 0.24, 18), eye(0.64, 0.46, 0.13, 0.24, -18)],
  suspicious: [eye(0.36, 0.44, 0.15, 0.1, 0), eye(0.64, 0.44, 0.15, 0.1, 0)],
} as const satisfies Record<string, readonly [BotAvatarEyeGeometry, BotAvatarEyeGeometry]>;

type BotAvatarExpression = keyof typeof botAvatarExpressions;

const botAvatarExpressionsList = Object.keys(botAvatarExpressions) as [BotAvatarExpression, ...BotAvatarExpression[]];

/**
 * The mouth, in the same unit coordinates as the eyes. It is a single filled
 * div whose personality comes entirely from `border-radius`: a "D" (flat top,
 * full bottom arc) reads as a smile, the flipped D as a frown, a circle as a
 * gasp. `radius` must always be the 8-value percentage form so the browser
 * interpolates border-radius smoothly when the expression changes.
 */
interface BotAvatarMouthGeometry {
  cx: number;
  cy: number;
  w: number;
  h: number;
  tilt: number;
  radius: string;
}

const mouth = (cx: number, cy: number, w: number, h: number, tilt: number, radius: string): BotAvatarMouthGeometry => ({
  cx,
  cy,
  w,
  h,
  tilt,
  radius,
});

/** Fully rounded (ellipse/pill-ish) — flat resting mouths and round gasps. */
const ROUND = '50% 50% 50% 50% / 50% 50% 50% 50%';
/** Smile: near-flat top, one continuous arc along the bottom. */
const SMILE = '12% 12% 50% 50% / 20% 20% 80% 80%';
/** Frown: the smile flipped upside down. */
const FROWN = '50% 50% 12% 12% / 80% 80% 20% 20%';

const botAvatarMouths = {
  neutral: mouth(0.5, 0.625, 0.16, 0.05, -3, ROUND),
  happy: mouth(0.5, 0.615, 0.26, 0.11, 0, SMILE),
  wide: mouth(0.5, 0.66, 0.12, 0.12, 0, ROUND),
  wink: mouth(0.52, 0.625, 0.19, 0.055, -8, SMILE),
  sleepy: mouth(0.5, 0.64, 0.08, 0.08, 0, ROUND),
  angry: mouth(0.5, 0.645, 0.2, 0.08, 0, FROWN),
  sad: mouth(0.5, 0.65, 0.16, 0.065, 0, FROWN),
  suspicious: mouth(0.5, 0.63, 0.12, 0.045, -6, ROUND),
} as const satisfies Record<BotAvatarExpression, BotAvatarMouthGeometry>;

/**
 * The minifig face vocabulary, used by AgentAvatar: small round dot eyes
 * (turning into short dashes/brows for the emotional expressions) and a
 * mouth that carries most of the emotion — the classic LEGO construction,
 * deliberately low-detail so it stays readable at the smallest sizes.
 */
const botAvatarLegoExpressions = {
  neutral: [eye(0.37, 0.42, 0.11, 0.11, 0), eye(0.63, 0.42, 0.11, 0.11, 0)],
  happy: [eye(0.37, 0.41, 0.11, 0.11, 0), eye(0.63, 0.41, 0.11, 0.11, 0)],
  wide: [eye(0.37, 0.42, 0.14, 0.14, 0), eye(0.63, 0.42, 0.14, 0.14, 0)],
  wink: [eye(0.37, 0.42, 0.11, 0.11, 0), eye(0.63, 0.43, 0.13, 0.04, -8)],
  sleepy: [eye(0.37, 0.44, 0.12, 0.04, -4), eye(0.63, 0.44, 0.12, 0.04, -4)],
  angry: [eye(0.37, 0.43, 0.13, 0.05, 20), eye(0.63, 0.43, 0.13, 0.05, -20)],
  sad: [eye(0.37, 0.43, 0.13, 0.05, -14), eye(0.63, 0.43, 0.13, 0.05, 14)],
  suspicious: [eye(0.37, 0.43, 0.14, 0.05, 0), eye(0.63, 0.43, 0.14, 0.05, 0)],
} as const satisfies Record<BotAvatarExpression, readonly [BotAvatarEyeGeometry, BotAvatarEyeGeometry]>;

const botAvatarLegoMouths = {
  neutral: mouth(0.5, 0.6, 0.3, 0.1, 0, SMILE),
  happy: mouth(0.5, 0.61, 0.36, 0.15, 0, SMILE),
  wide: mouth(0.5, 0.63, 0.13, 0.13, 0, ROUND),
  wink: mouth(0.52, 0.6, 0.26, 0.09, -6, SMILE),
  sleepy: mouth(0.5, 0.62, 0.08, 0.08, 0, ROUND),
  angry: mouth(0.5, 0.62, 0.24, 0.09, 0, FROWN),
  sad: mouth(0.5, 0.625, 0.2, 0.08, 0, FROWN),
  suspicious: mouth(0.5, 0.615, 0.15, 0.05, -4, ROUND),
} as const satisfies Record<BotAvatarExpression, BotAvatarMouthGeometry>;

/** Which face vocabulary an avatar draws from: Grok-style capsules
 * (BotAvatar) or the minifig dots-and-smile (AgentAvatar). */
type BotAvatarFaceVariant = 'capsule' | 'lego';

const faceCatalogue: Record<
  BotAvatarFaceVariant,
  {
    eyes: Record<BotAvatarExpression, readonly [BotAvatarEyeGeometry, BotAvatarEyeGeometry]>;
    mouths: Record<BotAvatarExpression, BotAvatarMouthGeometry>;
  }
> = {
  capsule: { eyes: botAvatarExpressions, mouths: botAvatarMouths },
  lego: { eyes: botAvatarLegoExpressions, mouths: botAvatarLegoMouths },
};

/** Anchor around which the per-shape face fit scales the whole face. */
const FACE_CENTER_X = 0.5;
const FACE_CENTER_Y = 0.45;

/**
 * Returns the two eyes for an expression, adjusted to fit inside the given
 * body shape via the precomputed per-shape offset/scale table (a lookup, not
 * a per-render solver). The adjustment is applied to the face as a whole so
 * spacing, proportions, and tilts are preserved.
 */
const getBotAvatarEyes = (
  expression: BotAvatarExpression,
  shape: BotAvatarAtlasShape,
  variant: BotAvatarFaceVariant = 'capsule',
): [BotAvatarEyeGeometry, BotAvatarEyeGeometry] => {
  const [left, right] = faceCatalogue[variant].eyes[expression];
  const { s, dy } = botAvatarFaceFit[shape];
  const fit = (e: BotAvatarEyeGeometry): BotAvatarEyeGeometry => ({
    cx: FACE_CENTER_X + (e.cx - FACE_CENTER_X) * s,
    cy: FACE_CENTER_Y + (e.cy - FACE_CENTER_Y) * s + dy,
    w: e.w * s,
    h: e.h * s,
    tilt: e.tilt,
  });
  return [fit(left), fit(right)];
};

/** The mouth for an expression, run through the same per-shape face fit as
 * the eyes so the whole face scales and shifts as one unit. */
const getBotAvatarMouth = (
  expression: BotAvatarExpression,
  shape: BotAvatarAtlasShape,
  variant: BotAvatarFaceVariant = 'capsule',
): BotAvatarMouthGeometry => {
  const m = faceCatalogue[variant].mouths[expression];
  const { s, dy } = botAvatarFaceFit[shape];
  return {
    ...m,
    cx: FACE_CENTER_X + (m.cx - FACE_CENTER_X) * s,
    cy: FACE_CENTER_Y + (m.cy - FACE_CENTER_Y) * s + dy,
    w: m.w * s,
    h: m.h * s,
  };
};

export { botAvatarExpressions, botAvatarExpressionsList, getBotAvatarEyes, getBotAvatarMouth };
export type { BotAvatarExpression, BotAvatarEyeGeometry, BotAvatarFaceVariant, BotAvatarMouthGeometry };
