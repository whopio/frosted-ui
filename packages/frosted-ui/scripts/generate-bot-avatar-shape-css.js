/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Generates src/components/bot-avatar/bot-avatar.shapes.css from the SVG
// paths in bot-avatar.shapes.ts.
//
// Every silhouette is resampled into the SAME number of cubic segments and
// emitted as a CSS `shape()` value. Identical command lists are what makes
// `transition: clip-path` interpolate between any two shapes (the morph).
// Sampling is anchored at the top of each silhouette and follows a
// consistent winding so morphs never spin, and it is curvature-weighted so
// corners and spikes keep their sharpness at a fixed segment budget.
//
// Run: node scripts/generate-bot-avatar-shape-css.js

const fs = require('fs');
const path = require('path');

/** Cubic segments shared by every shape. Raising this improves fidelity for
 * the spikiest shapes (soft-boom) at the cost of CSS size. */
const SEGMENTS = 80;
/** Fraction of the sample budget allocated by curvature (vs arc length). */
const CURVATURE_WEIGHT = 0.6;
/** Dense samples per source cubic for arc-length/curvature tables. */
const DENSE_PER_SEGMENT = 64;

const SRC = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.shapes.ts');
const OUT = path.join(__dirname, '../src/components/bot-avatar/bot-avatar.shapes.css');

// ---------------------------------------------------------------------------
// Parse the TS source for shape names + path data (M/C/Z absolute only).

const src = fs.readFileSync(SRC, 'utf8');
const body = src.slice(src.indexOf('const botAvatarShapePaths = {'), src.indexOf('} as const'));
const entryRe = /(?:'([\w-]+)'|(\w+)):\s*\n?\s*'([^']+)'/g;
const shapes = [];
let match;
while ((match = entryRe.exec(body))) shapes.push({ name: match[1] || match[2], d: match[3] });
if (shapes.length === 0) throw new Error('No shapes parsed from bot-avatar.shapes.ts');

/** Parses an absolute M/C/Z path into a list of cubics [p0, c1, c2, p1]. */
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
      // Consecutive coordinate sets without a repeated letter are implicit C's.
      do {
        const c1 = [num(), num()];
        const c2 = [num(), num()];
        const p1 = [num(), num()];
        cubics.push([current, c1, c2, p1]);
        current = p1;
      } while (i < tokens.length && !/[A-Za-z]/.test(tokens[i]));
    } else if (cmd === 'Z' || cmd === 'z') {
      if (Math.hypot(current[0] - start[0], current[1] - start[1]) > 1e-6) {
        // Close with a straight segment expressed as a cubic.
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

/** Densely samples the outline into a closed polyline. */
function densify(cubics) {
  const points = [];
  for (const cubic of cubics) {
    for (let k = 0; k < DENSE_PER_SEGMENT; k++) {
      points.push(evalCubic(cubic, k / DENSE_PER_SEGMENT));
    }
  }
  return points;
}

function signedArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[(i + 1) % points.length];
    area += x0 * y1 - x1 * y0;
  }
  return area / 2;
}

/** Rotates a closed polyline so it starts at the topmost crossing of the
 * vertical line through the shape center — the morph anchor. */
function anchorAtTop(points) {
  const cx = 0.5;
  let bestIndex = 0;
  let bestY = Infinity;
  for (let i = 0; i < points.length; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[(i + 1) % points.length];
    if ((x0 - cx) * (x1 - cx) <= 0 && x0 !== x1) {
      const t = (cx - x0) / (x1 - x0);
      const y = y0 + (y1 - y0) * t;
      if (y < bestY) {
        bestY = y;
        bestIndex = i;
      }
    }
  }
  // Insert the exact crossing point and start there.
  const [x0, y0] = points[bestIndex];
  const [x1, y1] = points[(bestIndex + 1) % points.length];
  const t = (cx - x0) / (x1 - x0);
  const crossing = [cx, y0 + (y1 - y0) * t];
  return [crossing, ...points.slice(bestIndex + 1), ...points.slice(0, bestIndex + 1)];
}

/** Resamples a closed polyline into `count` points spaced by a blend of
 * arc length and absolute turning angle (curvature). */
function resample(points, count) {
  const n = points.length;
  const stepLength = [];
  const stepTurn = [];
  let totalLength = 0;
  let totalTurn = 0;
  for (let i = 0; i < n; i++) {
    const p = points[i];
    const q = points[(i + 1) % n];
    const r = points[(i + 2) % n];
    const len = Math.hypot(q[0] - p[0], q[1] - p[1]);
    const a1 = Math.atan2(q[1] - p[1], q[0] - p[0]);
    const a2 = Math.atan2(r[1] - q[1], r[0] - q[0]);
    let turn = Math.abs(a2 - a1);
    if (turn > Math.PI) turn = 2 * Math.PI - turn;
    stepLength.push(len);
    stepTurn.push(turn);
    totalLength += len;
    totalTurn += turn;
  }
  // Per-step weight, normalized so length and curvature budgets are blendable.
  const weights = [];
  let totalWeight = 0;
  for (let i = 0; i < n; i++) {
    const w =
      ((1 - CURVATURE_WEIGHT) * stepLength[i]) / totalLength +
      (totalTurn > 0 ? (CURVATURE_WEIGHT * stepTurn[i]) / totalTurn : 0);
    weights.push(w);
    totalWeight += w;
  }
  const out = [];
  let target = 0;
  let acc = 0;
  let i = 0;
  for (let s = 0; s < count; s++) {
    target = (s / count) * totalWeight;
    while (acc + weights[i] < target && i < n - 1) {
      acc += weights[i];
      i++;
    }
    const within = weights[i] > 0 ? (target - acc) / weights[i] : 0;
    out.push(lerp(points[i], points[(i + 1) % n], Math.min(1, Math.max(0, within))));
  }
  return out;
}

/** Fits a closed chordal Catmull-Rom spline through the points; returns
 * cubics [p0, c1, c2, p1] (count segments, closing back to points[0]). */
function fitCubics(points) {
  const n = points.length;
  const tangent = [];
  for (let i = 0; i < n; i++) {
    const prev = points[(i - 1 + n) % n];
    const next = points[(i + 1) % n];
    const dPrev = Math.max(Math.hypot(points[i][0] - prev[0], points[i][1] - prev[1]), 1e-9);
    const dNext = Math.max(Math.hypot(next[0] - points[i][0], next[1] - points[i][1]), 1e-9);
    // Chordal finite difference: stable for uneven (curvature-weighted) spacing.
    tangent.push([(next[0] - prev[0]) / (dPrev + dNext), (next[1] - prev[1]) / (dPrev + dNext)]);
  }
  const cubics = [];
  for (let i = 0; i < n; i++) {
    const p0 = points[i];
    const p1 = points[(i + 1) % n];
    const d = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
    cubics.push([
      p0,
      [p0[0] + (tangent[i][0] * d) / 3, p0[1] + (tangent[i][1] * d) / 3],
      [p1[0] - (tangent[(i + 1) % n][0] * d) / 3, p1[1] - (tangent[(i + 1) % n][1] * d) / 3],
      p1,
    ]);
  }
  return cubics;
}

/** Max distance from `from` points to the polyline `to` (one-sided Hausdorff). */
function maxDeviation(from, to) {
  let worst = 0;
  for (const p of from) {
    let best = Infinity;
    for (let i = 0; i < to.length; i++) {
      const a = to[i];
      const b = to[(i + 1) % to.length];
      const abx = b[0] - a[0];
      const aby = b[1] - a[1];
      const lenSq = abx * abx + aby * aby;
      const t = lenSq > 0 ? Math.min(1, Math.max(0, ((p[0] - a[0]) * abx + (p[1] - a[1]) * aby) / lenSq)) : 0;
      const dx = p[0] - (a[0] + abx * t);
      const dy = p[1] - (a[1] + aby * t);
      best = Math.min(best, dx * dx + dy * dy);
      if (best === 0) break;
    }
    worst = Math.max(worst, Math.sqrt(best));
  }
  return worst;
}

// One decimal of a percent = 5e-4 of the box worst case (~0.08px at the
// largest avatar size) — below the resampling deviation floor.
const pct = (v) => `${Math.round(v * 1000) / 10}%`;

// ---------------------------------------------------------------------------

const rules = [];
const report = [];
const previews = [];
for (const { name, d } of shapes) {
  let cubics = parseCubics(d);
  let dense = densify(cubics);
  // Consistent winding (positive signed area in y-down screen space).
  if (signedArea(dense) < 0) {
    cubics = cubics.map(([p0, c1, c2, p1]) => [p1, c2, c1, p0]).reverse();
    dense = densify(cubics);
  }
  const anchored = anchorAtTop(dense);
  const resampled = resample(anchored, SEGMENTS);
  const fitted = fitCubics(resampled);

  const fittedDense = densify(fitted);
  const deviation = Math.max(maxDeviation(fittedDense, anchored), maxDeviation(anchored, fittedDense));
  report.push({ name, deviation });

  if (process.argv.includes('--preview')) {
    const fmt = (v) => (Math.round(v * 1000) / 1000).toString();
    const dOut =
      `M${fmt(fitted[0][0][0])} ${fmt(fitted[0][0][1])}` +
      fitted
        .map(([, c1, c2, p1]) => `C${fmt(c1[0])} ${fmt(c1[1])} ${fmt(c2[0])} ${fmt(c2[1])} ${fmt(p1[0])} ${fmt(p1[1])}`)
        .join('') +
      'Z';
    previews.push({ name, original: d, resampled: dOut });
  }

  const from = fitted[0][0];
  const commands = fitted.map(
    ([, c1, c2, p1]) =>
      `curve to ${pct(p1[0])} ${pct(p1[1])} with ${pct(c1[0])} ${pct(c1[1])}/${pct(c2[0])} ${pct(c2[1])}`,
  );
  rules.push(
    `.fui-BotAvatarShape:where(.fui-shape-${name}) {\n` +
      `  --bot-avatar-clip-shape: shape(from ${pct(from[0])} ${pct(from[1])},${commands.join(',')},close);\n` +
      `}`,
  );
}

const header = `/* Generated by scripts/generate-bot-avatar-shape-css.js — do not edit by hand.
 *
 * Every silhouette is the SAME number of cubic segments (${SEGMENTS}), so the
 * browser interpolates \`clip-path\` between any two of them — that is the
 * shape morph. Percentage coordinates scale with the element (no SVG
 * clipPath needed where shape() is supported). */
`;

fs.writeFileSync(OUT, `${header}\n${rules.join('\n\n')}\n`);

report.sort((a, b) => b.deviation - a.deviation);
console.log(`Wrote ${OUT} (${shapes.length} shapes, ${SEGMENTS} segments each)`);
console.log('Worst deviation from source silhouette (fraction of avatar size):');
for (const { name, deviation } of report.slice(0, 8)) {
  console.log(`  ${name.padEnd(16)} ${(deviation * 100).toFixed(3)}%`);
}
const size = fs.statSync(OUT).size;
console.log(`CSS size: ${(size / 1024).toFixed(1)} KB`);

if (previews.length > 0) {
  // Original silhouette filled black; resampled outline in red on top.
  // Anywhere red shows against the black fill, the resampling deviates.
  const cols = 7;
  const cell = 120;
  const pad = 10;
  const rows = Math.ceil(previews.length / cols);
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${cols * cell}" height="${rows * (cell + 16)}" style="background:#fff">`,
  ];
  previews.forEach(({ name, original, resampled }, i) => {
    const x = (i % cols) * cell + pad;
    const y = Math.floor(i / cols) * (cell + 16) + pad;
    const s = cell - 2 * pad;
    svg.push(`<g transform="translate(${x} ${y}) scale(${s})">`);
    svg.push(`<path d="${original}" fill="#000"/>`);
    svg.push(`<path d="${resampled}" fill="none" stroke="#f00" stroke-width="${1.25 / s}"/>`);
    svg.push('</g>');
    svg.push(
      `<text x="${x + s / 2}" y="${y + s + 12}" font-size="10" text-anchor="middle" font-family="sans-serif">${name}</text>`,
    );
  });
  svg.push('</svg>');
  const previewPath = '/tmp/bot-avatar-morph-preview.svg';
  fs.writeFileSync(previewPath, svg.join('\n'));
  console.log(`Preview: ${previewPath}`);
}
