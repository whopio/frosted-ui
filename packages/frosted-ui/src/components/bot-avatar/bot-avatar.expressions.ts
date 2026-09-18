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
  neutral: [eye(0.35, 0.43, 0.145, 0.145, 0), eye(0.65, 0.43, 0.145, 0.145, 0)],
  happy: [eye(0.35, 0.418, 0.15, 0.095, 0), eye(0.65, 0.418, 0.15, 0.095, 0)],
  wide: [eye(0.345, 0.42, 0.18, 0.18, 0), eye(0.655, 0.42, 0.18, 0.18, 0)],
  wink: [eye(0.35, 0.43, 0.145, 0.145, 0), eye(0.65, 0.437, 0.15, 0.05, -9)],
  sleepy: [eye(0.35, 0.455, 0.145, 0.052, -7), eye(0.65, 0.455, 0.145, 0.052, 7)],
  angry: [eye(0.355, 0.442, 0.155, 0.062, 21), eye(0.645, 0.442, 0.155, 0.062, -21)],
  // Sad eyes droop: lowered, slightly squashed, outer ends tilted down.
  sad: [eye(0.35, 0.462, 0.128, 0.115, -12), eye(0.65, 0.462, 0.128, 0.115, 12)],
  // Suspicious: uneven lids — one pressed flat, the other half-open.
  suspicious: [eye(0.35, 0.437, 0.155, 0.055, 0), eye(0.65, 0.428, 0.155, 0.08, 0)],
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
  neutral: blobMouth([0.385, 0.615], [0.5, 0.652], [0.615, 0.615], [0.5, 0.59]),
  // A wide beaming smile — deep round bottom, corners lifted high.
  happy: blobMouth([0.315, 0.598], [0.5, 0.735], [0.685, 0.598], [0.5, 0.58]),
  wide: ovalMouth(0.5, 0.645, 0.075, 0.09),
  // Lopsided smirk pairing the closed eye.
  wink: blobMouth([0.378, 0.627], [0.518, 0.705], [0.645, 0.586], [0.505, 0.586]),
  sleepy: ovalMouth(0.5, 0.658, 0.044, 0.052),
  // Frowns invert the loaf: the crescent arches UP in the middle and the
  // corners droop below it — the same four smooth anchors, so they still
  // morph from any smile. Angry is the wide heavy slab, sad the deeper arch.
  angry: blobMouth([0.345, 0.688], [0.5, 0.672], [0.655, 0.688], [0.5, 0.614]),
  sad: blobMouth([0.383, 0.692], [0.5, 0.676], [0.617, 0.692], [0.5, 0.606]),
  // A short doubtful dash pulled off-center and tilted.
  suspicious: blobMouth([0.43, 0.642], [0.515, 0.658], [0.6, 0.625], [0.515, 0.61]),
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
