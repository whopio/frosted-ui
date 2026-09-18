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
 * The face vocabulary: simple round dot eyes that only ever change size,
 * squash, and tilt (a squashed dot reads as a lid: wink, sleepy, focus),
 * while the mouth below carries most of the emotion. Deliberately the
 * opposite construction of Grok Bot's tall leaning capsules.
 * New expressions must stay inside the fit envelope used by the face-fit
 * generator (see EYE_BAND in scripts/generate-bot-avatar-face-fit.js).
 */
const botAvatarExpressions = {
  neutral: [eye(0.365, 0.435, 0.125, 0.125, 0), eye(0.635, 0.435, 0.125, 0.125, 0)],
  happy: [eye(0.365, 0.425, 0.13, 0.09, 0), eye(0.635, 0.425, 0.13, 0.09, 0)],
  wide: [eye(0.36, 0.43, 0.16, 0.16, 0), eye(0.64, 0.43, 0.16, 0.16, 0)],
  wink: [eye(0.365, 0.435, 0.125, 0.125, 0), eye(0.635, 0.44, 0.13, 0.045, -8)],
  sleepy: [eye(0.365, 0.455, 0.125, 0.05, -6), eye(0.635, 0.455, 0.125, 0.05, 6)],
  angry: [eye(0.37, 0.44, 0.135, 0.055, 18), eye(0.63, 0.44, 0.135, 0.055, -18)],
  sad: [eye(0.365, 0.455, 0.115, 0.115, 0), eye(0.635, 0.455, 0.115, 0.115, 0)],
  suspicious: [eye(0.365, 0.435, 0.14, 0.05, 0), eye(0.635, 0.435, 0.14, 0.05, 0)],
} as const satisfies Record<string, readonly [BotAvatarEyeGeometry, BotAvatarEyeGeometry]>;

type BotAvatarExpression = keyof typeof botAvatarExpressions;

const botAvatarExpressionsList = Object.keys(botAvatarExpressions) as [BotAvatarExpression, ...BotAvatarExpression[]];

/** A point in the unit face box, `[x, y]`. */
type BotAvatarMouthPoint = readonly [number, number];

/**
 * The mouth: one closed filled path made of exactly four cubic segments
 * (13 points: `M p0, C c1 c2 p1, C c4 c5 p2, C c7 c8 p3, C c10 c11 p0, Z`).
 * Every expression shares this command structure, so the browser natively
 * interpolates the CSS `d` property between any two mouths — a smile flows
 * into a frown or a gasp with no JS running during the morph.
 */
interface BotAvatarMouthGeometry {
  points: readonly BotAvatarMouthPoint[];
}

/** Circle-approximation kappa: handle length that makes a cubic quarter-arc round. */
const K = 0.5523;

/**
 * Builds a blobby mouth through four anchors — left, bottom, right, top —
 * with vertical tangents at left/right and horizontal tangents at
 * bottom/top. Every anchor is smooth, so no mouth ever has a pointy corner:
 * a "loaf" (flat-ish top, deep round bottom) reads as a smile, the flipped
 * loaf as a frown, and equal radii make ovals for gasps.
 */
const blobMouth = (
  left: BotAvatarMouthPoint,
  bottom: BotAvatarMouthPoint,
  right: BotAvatarMouthPoint,
  top: BotAvatarMouthPoint,
): BotAvatarMouthGeometry => {
  const [lx, ly] = left;
  const [bx, by] = bottom;
  const [rx, ry] = right;
  const [tx, ty] = top;
  return {
    points: [
      [lx, ly],
      [lx, ly + K * (by - ly)],
      [bx - K * (bx - lx), by],
      [bx, by],
      [bx + K * (rx - bx), by],
      [rx, ry + K * (by - ry)],
      [rx, ry],
      [rx, ry - K * (ry - ty)],
      [tx + K * (rx - tx), ty],
      [tx, ty],
      [tx - K * (tx - lx), ty],
      [lx, ly - K * (ly - ty)],
      [lx, ly],
    ],
  };
};

/** An oval mouth (gasps, slack sleepy mouths) via the same blob structure. */
const ovalMouth = (cx: number, cy: number, rx: number, ry: number): BotAvatarMouthGeometry =>
  blobMouth([cx - rx, cy], [cx, cy + ry], [cx + rx, cy], [cx, cy - ry]);

/**
 * Mouths per expression — the primary carrier of emotion, sized to read at
 * roster sizes. When editing extents here, keep the MOUTH_BAND envelope in
 * scripts/generate-bot-avatar-face-fit.js in sync and regenerate the fit.
 */
const botAvatarMouths = {
  neutral: blobMouth([0.395, 0.63], [0.5, 0.664], [0.605, 0.63], [0.5, 0.606]),
  happy: blobMouth([0.335, 0.615], [0.5, 0.728], [0.665, 0.615], [0.5, 0.598]),
  wide: ovalMouth(0.5, 0.652, 0.062, 0.075),
  wink: blobMouth([0.39, 0.636], [0.515, 0.705], [0.632, 0.601], [0.508, 0.601]),
  sleepy: ovalMouth(0.5, 0.665, 0.038, 0.044),
  angry: blobMouth([0.355, 0.658], [0.5, 0.686], [0.645, 0.658], [0.5, 0.6]),
  sad: blobMouth([0.385, 0.66], [0.5, 0.682], [0.615, 0.66], [0.5, 0.63]),
  suspicious: blobMouth([0.4, 0.652], [0.5, 0.664], [0.6, 0.625], [0.5, 0.618]),
} as const satisfies Record<BotAvatarExpression, BotAvatarMouthGeometry>;

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
  const { s, dx, dy } = botAvatarFaceFit[shape];
  const fit = (e: BotAvatarEyeGeometry): BotAvatarEyeGeometry => ({
    cx: FACE_CENTER_X + (e.cx - FACE_CENTER_X) * s + dx,
    cy: FACE_CENTER_Y + (e.cy - FACE_CENTER_Y) * s + dy,
    w: e.w * s,
    h: e.h * s,
    tilt: e.tilt,
  });
  return [fit(left), fit(right)];
};

/** The mouth for an expression, run through the same per-shape face fit as
 * the eyes so the whole face scales and shifts as one unit. */
const getBotAvatarMouth = (expression: BotAvatarExpression, shape: BotAvatarAtlasShape): BotAvatarMouthGeometry => {
  const m = botAvatarMouths[expression];
  const { s, dx, dy } = botAvatarFaceFit[shape];
  return {
    points: m.points.map(([x, y]): BotAvatarMouthPoint => [
      FACE_CENTER_X + (x - FACE_CENTER_X) * s + dx,
      FACE_CENTER_Y + (y - FACE_CENTER_Y) * s + dy,
    ]),
  };
};

const round = (v: number) => Math.round(v * 100) / 100;

/**
 * Serializes a mouth to an SVG path string in the face's 0..100 viewBox.
 * Always `M + 4×C + Z` with the same point count, so two serialized mouths
 * interpolate when transitioned via the CSS `d` property.
 */
const botAvatarMouthPath = (mouth: BotAvatarMouthGeometry): string => {
  const p = mouth.points;
  const pt = ([x, y]: BotAvatarMouthPoint) => `${round(x * 100)} ${round(y * 100)}`;
  let d = `M ${pt(p[0])}`;
  for (let i = 1; i + 2 < p.length; i += 3) {
    d += ` C ${pt(p[i])} ${pt(p[i + 1])} ${pt(p[i + 2])}`;
  }
  return `${d} Z`;
};

export {
  botAvatarExpressions,
  botAvatarExpressionsList,
  botAvatarMouthPath,
  botAvatarMouths,
  getBotAvatarEyes,
  getBotAvatarMouth,
};
export type { BotAvatarExpression, BotAvatarEyeGeometry, BotAvatarMouthGeometry };
