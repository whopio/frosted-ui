/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Generates src/components/bot-avatar/bot-avatar.face-fit.ts from the SVG
// paths in bot-avatar.shapes.ts.
//
// For each silhouette it finds the largest whole-face scale (s) and vertical
// offset (dy) at which the worst-case face envelope fits fully inside the
// shape. Two tables are emitted: eyes-only, and eyes + mouth (used whenever
// the `mouth` prop is on) — so a mouth never pokes out of a tight silhouette
// and eyes-only faces don't pay for room they don't use.
//
// The envelope boxes below are the unions of the extreme extents across every
// expression in bot-avatar.expressions.ts (plus tilt/rounding padding). When
// the expression or mouth geometry changes, update these and re-run:
//   node scripts/generate-bot-avatar-face-fit.js

const fs = require('fs');
const path = require('path');

/** Anchor around which the fit scales the face (see bot-avatar.expressions.ts). */
const FACE_CENTER = [0.5, 0.45];

/** Union of eye extents across expressions (wide is the widest/tallest). */
const EYE_BAND = { x0: 0.27, y0: 0.26, x1: 0.73, y1: 0.62 };
/** Union of mouth extents across expressions (happy is widest, wide lowest). */
const MOUTH_BAND = { x0: 0.345, y0: 0.55, x1: 0.655, y1: 0.73 };

/** Clearance to the silhouette edge, applied by inflating the envelopes. */
const MARGIN = 0.004;
/** Perimeter sampling step along envelope edges. */
const SAMPLE_STEP = 0.025;
/** Dense samples per source cubic when flattening the outline. */
const DENSE_PER_SEGMENT = 16;

const SRC = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.shapes.ts');
const OUT = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.face-fit.ts');

// --------------------------------------------------------------------------
// Shape loading + flattening (same parsing rules as the shape-css generator).

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

/** True when every envelope sample, transformed by (s, dy), is inside. */
function fits(poly, samples, s, dy) {
  for (const [px, py] of samples) {
    const x = FACE_CENTER[0] + (px - FACE_CENTER[0]) * s;
    const y = FACE_CENTER[1] + (py - FACE_CENTER[1]) * s + dy;
    if (!insidePolygon(poly, [x, y])) return false;
  }
  return true;
}

/** Largest s (≤ 1) over a dy sweep; ties resolved toward the smallest |dy|. */
function solve(poly, samples) {
  let best = null;
  for (let dyStep = -8; dyStep <= 20; dyStep++) {
    const dy = dyStep / 100;
    if (!fits(poly, samples, 0.4, dy)) continue;
    let lo = 0.4;
    let hi = 1;
    if (fits(poly, samples, 1, dy)) {
      lo = 1;
    } else {
      for (let iter = 0; iter < 24; iter++) {
        const mid = (lo + hi) / 2;
        if (fits(poly, samples, mid, dy)) lo = mid;
        else hi = mid;
      }
    }
    const s = Math.floor(lo * 100) / 100;
    if (!best || s > best.s || (s === best.s && Math.abs(dy) < Math.abs(best.dy))) {
      best = { s, dy };
    }
  }
  if (!best) throw new Error('Face does not fit at minimum scale');
  return best;
}

const eyesSamples = rectSamples(EYE_BAND);
const mouthSamples = [...eyesSamples, ...rectSamples(MOUTH_BAND)];

const eyesTable = [];
const mouthTable = [];
for (const { name, d } of shapes) {
  const poly = densify(parseCubics(d));
  const eyesFit = solve(poly, eyesSamples);
  const mouthFit = solve(poly, mouthSamples);
  eyesTable.push({ name, ...eyesFit });
  mouthTable.push({ name, ...mouthFit });
}

// --------------------------------------------------------------------------
// Emit.

const fmt = (v) => {
  const r = Math.round(v * 100) / 100;
  return Object.is(r, -0) ? '0' : String(r);
};
const entries = (table) =>
  table
    .map(({ name, s, dy }) => `  ${/-/.test(name) ? `'${name}'` : name}: { s: ${fmt(s)}, dy: ${fmt(dy)} },`)
    .join('\n');

const out = `// Generated by scripts/generate-bot-avatar-face-fit.js — do not edit by hand.
//
// For each silhouette: the whole-face scale (s) and vertical offset (dy) at
// which the worst-case face envelope fits fully inside the shape. Two tables:
// eyes only, and eyes + mouth (used whenever the mouth is shown), so mouths
// never poke out of tight silhouettes and eyes-only faces keep their size.
// Precomputed at build time so no geometry is solved at runtime.

import type { BotAvatarShape } from './bot-avatar.shapes';

const botAvatarFaceFit: Record<BotAvatarShape, { s: number; dy: number }> = {
${entries(eyesTable)}
};

const botAvatarFaceFitWithMouth: Record<BotAvatarShape, { s: number; dy: number }> = {
${entries(mouthTable)}
};

export { botAvatarFaceFit, botAvatarFaceFitWithMouth };
`;

fs.writeFileSync(OUT, out);
console.log(`Wrote ${OUT} (${shapes.length} shapes)`);
console.log('shape            eyes-only        with-mouth');
for (let i = 0; i < eyesTable.length; i++) {
  const e = eyesTable[i];
  const m = mouthTable[i];
  console.log(
    `${e.name.padEnd(16)} s=${fmt(e.s).padEnd(5)} dy=${fmt(e.dy).padEnd(6)} s=${fmt(m.s).padEnd(5)} dy=${fmt(m.dy)}`,
  );
}
