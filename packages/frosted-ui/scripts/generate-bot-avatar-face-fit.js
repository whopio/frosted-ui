/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Generates src/components/bot-avatar/bot-avatar.face-fit.ts from the SVG
// paths in bot-avatar.shapes.ts.
//
// For each silhouette it finds the largest whole-face scale (s) and offset
// (dx, dy) at which the worst-case face envelope (eyes + mouth) fits fully
// inside the shape, so nothing pokes out of tight silhouettes. Among the
// placements that reach that scale it picks the one centered in the feasible
// region, so on lopsided silhouettes (fan, pixel-triangle, slanted…) the
// face sits where the room actually is instead of hugging the geometric
// center of the box.
//
// The envelope boxes below are the unions of the extreme extents across every
// expression in bot-avatar.expressions.ts (plus tilt/rounding padding). When
// the expression or mouth geometry changes, update these and re-run:
//   node scripts/generate-bot-avatar-face-fit.js

const fs = require('fs');
const path = require('path');

/** Anchor around which the fit scales the face (see bot-avatar.expressions.ts). */
const FACE_CENTER = [0.5, 0.45];

/**
 * Hand-tuned vertical offsets for shapes whose face placement is aesthetic
 * rather than purely geometric. Used when the solver confirms the face still
 * fits at full scale there; otherwise the solved offset wins.
 */
const PREFERRED_DY = {};

/** Union of eye extents across expressions (the lifted wide gasp reaches
 * highest, the sunken sad droop lowest; includes tilt padding for the lidded
 * dash eyes). */
const EYE_BAND = { x0: 0.255, y0: 0.318, x1: 0.745, y1: 0.532 };
/** Union of mouth extents across expressions (happy is the widest and
 * deepest smile, the dropped wide-gasp oval reaches highest and lowest). */
const MOUTH_BAND = { x0: 0.315, y0: 0.567, x1: 0.685, y1: 0.747 };

/** Clearance to the silhouette edge, applied by inflating the envelopes. */
const MARGIN = 0.004;
/** Perimeter sampling step along envelope edges. */
const SAMPLE_STEP = 0.025;
/** Dense samples per source cubic when flattening the outline. */
const DENSE_PER_SEGMENT = 16;

const SRC = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.shapes.ts');
const OUT = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.face-fit.ts');

// --------------------------------------------------------------------------
// Shape loading + flattening.

const src = fs.readFileSync(SRC, 'utf8');
const body = src.slice(src.indexOf('const botAvatarShapePaths = {'), src.indexOf('} as const'));
const entryRe = /(?:'([\w-]+)'|(\w+)):\s*\n?\s*'([^']+)'/g;
const shapes = [];
let match;
while ((match = entryRe.exec(body))) shapes.push({ name: match[1] || match[2], d: match[3] });
if (shapes.length === 0) throw new Error('No shapes parsed from bot-avatar.shapes.ts');

function parseCubics(d) {
  const tokens = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g);
  const cubics = [];
  let i = 0;
  let current = null;
  let start = null;
  const num = () => parseFloat(tokens[i++]);
  while (i < tokens.length) {
    const cmd = tokens[i++];
    if (cmd === 'M') {
      current = [num(), num()];
      start = current;
    } else if (cmd === 'C') {
      do {
        const c1 = [num(), num()];
        const c2 = [num(), num()];
        const p1 = [num(), num()];
        cubics.push([current, c1, c2, p1]);
        current = p1;
      } while (i < tokens.length && !/[A-Za-z]/.test(tokens[i]));
    } else if (cmd === 'L') {
      do {
        const p1 = [num(), num()];
        const c1 = [current[0] + (p1[0] - current[0]) / 3, current[1] + (p1[1] - current[1]) / 3];
        const c2 = [current[0] + (2 * (p1[0] - current[0])) / 3, current[1] + (2 * (p1[1] - current[1])) / 3];
        cubics.push([current, c1, c2, p1]);
        current = p1;
      } while (i < tokens.length && !/[A-Za-z]/.test(tokens[i]));
    } else if (cmd === 'Z' || cmd === 'z') {
      if (Math.hypot(current[0] - start[0], current[1] - start[1]) > 1e-6) {
        const p0 = current;
        const p1 = start;
        const c1 = [p0[0] + (p1[0] - p0[0]) / 3, p0[1] + (p1[1] - p0[1]) / 3];
        const c2 = [p0[0] + (2 * (p1[0] - p0[0])) / 3, p0[1] + (2 * (p1[1] - p0[1])) / 3];
        cubics.push([p0, c1, c2, p1]);
      }
      current = start;
    } else {
      throw new Error(`Unsupported path command "${cmd}"`);
    }
  }
  return cubics;
}

const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

function evalCubic([p0, c1, c2, p1], t) {
  const a = lerp(p0, c1, t);
  const b = lerp(c1, c2, t);
  const c = lerp(c2, p1, t);
  const d = lerp(a, b, t);
  const e = lerp(b, c, t);
  return lerp(d, e, t);
}

function densify(cubics) {
  const points = [];
  for (const cubic of cubics) {
    for (let k = 0; k < DENSE_PER_SEGMENT; k++) {
      points.push(evalCubic(cubic, k / DENSE_PER_SEGMENT));
    }
  }
  return points;
}

// --------------------------------------------------------------------------
// Fitting.

/** Even-odd ray cast. */
function insidePolygon(poly, [x, y]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Sample points along a rect's perimeter (margin-inflated), plus corners. */
function rectSamples(rect) {
  const x0 = rect.x0 - MARGIN;
  const y0 = rect.y0 - MARGIN;
  const x1 = rect.x1 + MARGIN;
  const y1 = rect.y1 + MARGIN;
  const points = [];
  const edge = (ax, ay, bx, by) => {
    const len = Math.hypot(bx - ax, by - ay);
    const n = Math.max(1, Math.ceil(len / SAMPLE_STEP));
    for (let k = 0; k <= n; k++) points.push([ax + ((bx - ax) * k) / n, ay + ((by - ay) * k) / n]);
  };
  edge(x0, y0, x1, y0);
  edge(x1, y0, x1, y1);
  edge(x1, y1, x0, y1);
  edge(x0, y1, x0, y0);
  return points;
}

/** True when every envelope sample, transformed by (s, dx, dy), is inside. */
function fits(poly, samples, s, dx, dy) {
  for (const [px, py] of samples) {
    const x = FACE_CENTER[0] + (px - FACE_CENTER[0]) * s + dx;
    const y = FACE_CENTER[1] + (py - FACE_CENTER[1]) * s + dy;
    if (!insidePolygon(poly, [x, y])) return false;
  }
  return true;
}

/**
 * Largest s (≤ 1) over a (dx, dy) grid. Vertical ties resolve toward the
 * face's designed home (smallest |dy|) — the resting height is an aesthetic
 * choice, not a leftover. Horizontally the face is then centered in the room
 * the silhouette has at that height (midpoint of the feasible dx range), so
 * lopsided shapes carry the face where their mass is instead of at x=0.5.
 */
function solve(poly, samples, preferredDy) {
  if (preferredDy !== undefined && fits(poly, samples, 1, 0, preferredDy)) {
    return { s: 1, dx: 0, dy: preferredDy };
  }
  // Pass 1: the best reachable scale, pruning cells that can't beat it.
  let sBest = 0;
  for (let dxStep = -15; dxStep <= 15; dxStep++) {
    for (let dyStep = -10; dyStep <= 20; dyStep++) {
      const dx = dxStep / 100;
      const dy = dyStep / 100;
      if (sBest > 0 && !fits(poly, samples, Math.min(1, sBest + 0.01), dx, dy)) continue;
      let lo = 0.4;
      let hi = 1;
      if (fits(poly, samples, 1, dx, dy)) {
        lo = 1;
      } else if (fits(poly, samples, 0.4, dx, dy)) {
        for (let iter = 0; iter < 24; iter++) {
          const mid = (lo + hi) / 2;
          if (fits(poly, samples, mid, dx, dy)) lo = mid;
          else hi = mid;
        }
      } else {
        continue;
      }
      sBest = Math.max(sBest, Math.floor(lo * 100) / 100);
    }
  }
  if (sBest === 0) throw new Error('Face does not fit at minimum scale');
  // Pass 2: smallest |dy| that holds sBest at some dx, then the midpoint of
  // the feasible dx range at that dy.
  let bestDy;
  const dxAt = new Map();
  for (let dyStep = -10; dyStep <= 20; dyStep++) {
    const dy = dyStep / 100;
    const dxs = [];
    for (let dxStep = -15; dxStep <= 15; dxStep++) {
      const dx = dxStep / 100;
      if (fits(poly, samples, sBest, dx, dy)) dxs.push(dx);
    }
    if (dxs.length === 0) continue;
    dxAt.set(dy, dxs);
    if (bestDy === undefined || Math.abs(dy) < Math.abs(bestDy)) bestDy = dy;
  }
  const dxs = dxAt.get(bestDy);
  const dxMid = (dxs[0] + dxs[dxs.length - 1]) / 2;
  // The range midpoint may fall in a gap of a concave region; snap to the
  // nearest feasible dx.
  const dx = dxs.reduce((a, b) => (Math.abs(b - dxMid) < Math.abs(a - dxMid) ? b : a));
  return { s: sBest, dx, dy: bestDy };
}

const faceSamples = [...rectSamples(EYE_BAND), ...rectSamples(MOUTH_BAND)];

const faceTable = [];
for (const { name, d } of shapes) {
  const poly = densify(parseCubics(d));
  const faceFit = solve(poly, faceSamples, PREFERRED_DY[name]);
  faceTable.push({ name, ...faceFit });
}

// --------------------------------------------------------------------------
// Emit.

const fmt = (v) => {
  const r = Math.round(v * 100) / 100;
  return Object.is(r, -0) ? '0' : String(r);
};
const entries = (table) =>
  table
    .map(
      ({ name, s, dx, dy }) =>
        `  ${/-/.test(name) ? `'${name}'` : name}: { s: ${fmt(s)}, dx: ${fmt(dx)}, dy: ${fmt(dy)} },`,
    )
    .join('\n');

const out = `// Generated by scripts/generate-bot-avatar-face-fit.js — do not edit by hand.
//
// For each silhouette: the whole-face scale (s) and offset (dx, dy) at which
// the worst-case face envelope (eyes + mouth) fits fully inside the shape,
// centered in the room the silhouette actually has. Precomputed at build
// time so no geometry is solved at runtime.

import type { BotAvatarAtlasShape } from './bot-avatar.shapes';

const botAvatarFaceFit: Record<BotAvatarAtlasShape, { s: number; dx: number; dy: number }> = {
${entries(faceTable)}
};

export { botAvatarFaceFit };
`;

fs.writeFileSync(OUT, out);
console.log(`Wrote ${OUT} (${shapes.length} shapes)`);
for (const { name, s, dx, dy } of faceTable) {
  console.log(`${name.padEnd(16)} s=${fmt(s).padEnd(5)} dx=${fmt(dx).padEnd(6)} dy=${fmt(dy)}`);
}
