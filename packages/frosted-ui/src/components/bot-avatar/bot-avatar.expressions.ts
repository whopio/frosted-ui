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
): [BotAvatarEyeGeometry, BotAvatarEyeGeometry] => {
  const [left, right] = botAvatarExpressions[expression];
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

export { botAvatarExpressions, botAvatarExpressionsList, getBotAvatarEyes };
export type { BotAvatarExpression, BotAvatarEyeGeometry };
