import { botAvatarFaceFit } from './bot-avatar.face-fit';
import type { BotAvatarAtlasShape } from './bot-avatar.shapes';

/** A point in the unit face box, `[x, y]`. */
type BotAvatarFacePoint = readonly [number, number];

/**
 * Every face feature — both eyes and the mouth — is one closed filled path
 * made of exactly four cubic segments (13 points: `M p0, C c1 c2 p1, C c4 c5
 * p2, C c7 c8 p3, C c10 c11 p0, Z`). Sharing one command structure across
 * every feature of every expression means the browser natively interpolates
 * the CSS `d` property between any two shapes — a circle eye flows into a
 * smiling crescent, a smile into a frown — with no JS running during the
 * morph.
 */
interface BotAvatarFaceShape {
  points: readonly BotAvatarFacePoint[];
}

/** Circle-approximation kappa: handle length that makes a cubic quarter-arc round. */
const K = 0.5523;

/**
 * Builds a blobby shape through four anchors — left, bottom, right, top —
 * with vertical tangents at left/right and horizontal tangents at
 * bottom/top. Every anchor is smooth, so no feature ever has a pointy
 * corner: a "loaf" (flat-ish top, deep round bottom) reads as a smile, the
 * inverted loaf (the arc bulging UP, corners drooping below it) as a frown
 * or as a smiling crescent eye, and equal radii make circles and ovals.
 */
const blob = (
  left: BotAvatarFacePoint,
  bottom: BotAvatarFacePoint,
  right: BotAvatarFacePoint,
  top: BotAvatarFacePoint,
): BotAvatarFaceShape => {
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

/** An axis-aligned oval (circle eyes, gasp mouths) via the blob structure. */
const oval = (cx: number, cy: number, rx: number, ry: number): BotAvatarFaceShape =>
  blob([cx - rx, cy], [cx, cy + ry], [cx + rx, cy], [cx, cy - ry]);

/** Rotates a shape around a point (degrees, positive clockwise on screen). */
const rotate = (shape: BotAvatarFaceShape, cx: number, cy: number, deg: number): BotAvatarFaceShape => {
  const a = (deg * Math.PI) / 180;
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return {
    points: shape.points.map(([x, y]): BotAvatarFacePoint => [
      cx + (x - cx) * cos - (y - cy) * sin,
      cy + (x - cx) * sin + (y - cy) * cos,
    ]),
  };
};

/** A tilted oval — the lidded dash eyes (sleepy, angry, suspicious, sad). */
const rotOval = (cx: number, cy: number, rx: number, ry: number, deg: number): BotAvatarFaceShape =>
  rotate(oval(cx, cy, rx, ry), cx, cy, deg);

/**
 * A smiling ∩-arc eye centered on `cx` — the inverted-loaf crescent, the
 * universal "happy eyes" of minimal cartoon faces.
 */
const crescentEye = (cx: number, cy: number): BotAvatarFaceShape =>
  blob([cx - 0.074, cy + 0.027], [cx, cy + 0.019], [cx + 0.074, cy + 0.027], [cx, cy - 0.032]);

/**
 * The face vocabulary. Two principles drive it:
 *
 * - Emotional posture: the whole face rides the emotion. Joy lifts the
 *   features (cheeks push the eyes up and out), surprise stretches the
 *   eye–jaw gap, sadness wilts down and inward, anger compresses the eyes
 *   down toward the pressed mouth. The morph transition carries the posture
 *   shift, so the face visibly sinks as it turns sad.
 * - Legibility floor: no feature is thinner than ~4.5% of the box, so every
 *   expression stays identifiable at roster sizes (~20px).
 *
 * New geometry must stay inside the fit envelopes used by the face-fit
 * generator (see EYE_BAND / MOUTH_BAND in
 * scripts/generate-bot-avatar-face-fit.js); update them and regenerate when
 * extents change.
 */
const botAvatarExpressions = {
  neutral: [oval(0.35, 0.43, 0.0725, 0.0725), oval(0.65, 0.43, 0.0725, 0.0725)],
  // Beaming ∩∩ crescents, lifted and pushed slightly outward by the smile.
  happy: [crescentEye(0.346, 0.416), crescentEye(0.654, 0.416)],
  wide: [oval(0.345, 0.408, 0.09, 0.09), oval(0.655, 0.408, 0.09, 0.09)],
  // One open eye, one joyful little arc.
  wink: [
    oval(0.35, 0.43, 0.0725, 0.0725),
    rotate(blob([0.58, 0.452], [0.65, 0.443], [0.72, 0.452], [0.65, 0.398]), 0.65, 0.43, -6),
  ],
  sleepy: [rotOval(0.35, 0.463, 0.0725, 0.032, -7), rotOval(0.65, 0.463, 0.0725, 0.032, 7)],
  // Slanted lids bearing down toward the pressed mouth.
  angry: [rotOval(0.355, 0.452, 0.0775, 0.037, 21), rotOval(0.645, 0.452, 0.0775, 0.037, -21)],
  // Drooping: lowered, squashed, pulled inward, outer ends tilted down.
  sad: [rotOval(0.353, 0.474, 0.064, 0.0575, -12), rotOval(0.647, 0.474, 0.064, 0.0575, 12)],
  // Uneven lids — one pressed flat, the other half-open.
  suspicious: [rotOval(0.35, 0.437, 0.0775, 0.031, 0), rotOval(0.65, 0.428, 0.0775, 0.044, 0)],
} as const satisfies Record<string, readonly [BotAvatarFaceShape, BotAvatarFaceShape]>;

type BotAvatarExpression = keyof typeof botAvatarExpressions;

const botAvatarExpressionsList = Object.keys(botAvatarExpressions) as [BotAvatarExpression, ...BotAvatarExpression[]];

/**
 * Mouths per expression — the primary carrier of emotion, sized to read at
 * roster sizes.
 */
const botAvatarMouths = {
  neutral: blob([0.385, 0.612], [0.5, 0.655], [0.615, 0.612], [0.5, 0.586]),
  // A wide beaming smile — deep round bottom, corners lifted high.
  happy: blob([0.315, 0.59], [0.5, 0.727], [0.685, 0.59], [0.5, 0.572]),
  // Gasp: the jaw drops away from the raised eyes.
  wide: oval(0.5, 0.657, 0.075, 0.09),
  // Lopsided smirk pairing the closed eye.
  wink: blob([0.378, 0.627], [0.518, 0.705], [0.645, 0.586], [0.505, 0.586]),
  sleepy: oval(0.5, 0.664, 0.044, 0.052),
  // Frowns invert the loaf: the crescent arches UP in the middle and the
  // corners droop below it. Angry is the wide heavy slab pressed up toward
  // the scowling eyes, sad the deeper arch sunk lower.
  angry: blob([0.345, 0.678], [0.5, 0.662], [0.655, 0.678], [0.5, 0.604]),
  sad: blob([0.383, 0.7], [0.5, 0.684], [0.617, 0.7], [0.5, 0.614]),
  // A short doubtful dash pulled off-center and tilted.
  suspicious: blob([0.425, 0.645], [0.515, 0.664], [0.605, 0.625], [0.515, 0.606]),
} as const satisfies Record<BotAvatarExpression, BotAvatarFaceShape>;

/** Anchor around which the per-shape face fit scales the whole face. */
const FACE_CENTER_X = 0.5;
const FACE_CENTER_Y = 0.45;

/** Applies the precomputed per-shape face fit (a lookup, not a solver) to a
 * shape's points, so the whole face scales and shifts as one unit and
 * spacing, proportions, and tilts are preserved. */
const fitShape = (shape: BotAvatarFaceShape, s: number, dx: number, dy: number): BotAvatarFaceShape => ({
  points: shape.points.map(([x, y]): BotAvatarFacePoint => [
    FACE_CENTER_X + (x - FACE_CENTER_X) * s + dx,
    FACE_CENTER_Y + (y - FACE_CENTER_Y) * s + dy,
  ]),
});

/** The two eyes for an expression, adjusted to fit inside the given body shape. */
const getBotAvatarEyes = (
  expression: BotAvatarExpression,
  shape: BotAvatarAtlasShape,
): [BotAvatarFaceShape, BotAvatarFaceShape] => {
  const [left, right] = botAvatarExpressions[expression];
  const { s, dx, dy } = botAvatarFaceFit[shape];
  return [fitShape(left, s, dx, dy), fitShape(right, s, dx, dy)];
};

/** The mouth for an expression, run through the same per-shape face fit as
 * the eyes so the whole face scales and shifts as one unit. */
const getBotAvatarMouth = (expression: BotAvatarExpression, shape: BotAvatarAtlasShape): BotAvatarFaceShape => {
  const { s, dx, dy } = botAvatarFaceFit[shape];
  return fitShape(botAvatarMouths[expression], s, dx, dy);
};

const round = (v: number) => Math.round(v * 100) / 100;

/**
 * Serializes a face shape to an SVG path string in the face's 0..100
 * viewBox. Always `M + 4×C + Z` with the same point count, so two serialized
 * shapes interpolate when transitioned via the CSS `d` property.
 */
const botAvatarFacePath = (shape: BotAvatarFaceShape): string => {
  const p = shape.points;
  const pt = ([x, y]: BotAvatarFacePoint) => `${round(x * 100)} ${round(y * 100)}`;
  let d = `M ${pt(p[0])}`;
  for (let i = 1; i + 2 < p.length; i += 3) {
    d += ` C ${pt(p[i])} ${pt(p[i + 1])} ${pt(p[i + 2])}`;
  }
  return `${d} Z`;
};

export {
  botAvatarExpressions,
  botAvatarExpressionsList,
  botAvatarFacePath,
  botAvatarMouths,
  getBotAvatarEyes,
  getBotAvatarMouth,
};
export type { BotAvatarExpression, BotAvatarFaceShape };
