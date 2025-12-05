/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const frostedColors = require('@frosted-ui/colors');

const isObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const createColorVars = ({ isDark }) => {
  const entries = Object.entries(frostedColors)
    .filter(([name, value]) => {
      if (!isObject(value)) return false;
      if (name.includes('P3')) return false;
      const hasDarkSuffix = /Dark/.test(name);
      return isDark ? hasDarkSuffix : !hasDarkSuffix;
    })
    .flatMap(([name, palette]) => {
      const isAlphaPalette = name.endsWith('A');
      const normalizedName = (() => {
        if (/Dark/.test(name)) {
          return name.replace(/DarkA?$/, '').toLowerCase();
        }
        if (isAlphaPalette) {
          return name.slice(0, -1).toLowerCase();
        }
        return name.toLowerCase();
      })();

      return Object.entries(palette).reduce((acc, [shadeKey, colorValue]) => {
        const match = shadeKey.match(/(\d+)$/);
        if (!match) return acc;

        const suffix = `${isAlphaPalette ? '-a' : '-'}${match[1]}`;
        acc.push([`--${normalizedName}${suffix}`, colorValue]);
        return acc;
      }, []);
    })
    .sort(([a], [b]) => (a > b ? 1 : a < b ? -1 : 0));

  return Object.fromEntries(entries);
};

const baseLightVars = {
  '--color-background': 'white',
  '--color-overlay': 'var(--black-a6)',
  '--color-panel-solid': 'white',
  '--color-panel-translucent': 'rgba(255, 255, 255, 0.85)',
  '--color-surface': 'rgba(255, 255, 255, 0.9)',
  '--color-stroke': 'var(--gray-a5)',
  '--font-size-0': '10px',
  '--font-size-1': '12px',
  '--font-size-2': '14px',
  '--font-size-3': '16px',
  '--font-size-4': '18px',
  '--font-size-5': '20px',
  '--font-size-6': '24px',
  '--font-size-7': '28px',
  '--font-size-8': '32px',
  '--font-size-9': '40px',
  '--font-weight-light': '300',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-bold': '700',
  '--line-height-0': '12px',
  '--line-height-1': '16px',
  '--line-height-2': '20px',
  '--line-height-3': '24px',
  '--line-height-4': '26px',
  '--line-height-5': '28px',
  '--line-height-6': '30px',
  '--line-height-7': '34px',
  '--line-height-8': '38px',
  '--line-height-9': '48px',
  '--letter-spacing-0': '0.01em',
  '--letter-spacing-1': '0.01em',
  '--letter-spacing-2': '0.01em',
  '--letter-spacing-3': '0.01em',
  '--letter-spacing-4': '0.01em',
  '--letter-spacing-5': '0.01em',
  '--letter-spacing-6': '0.01em',
  '--letter-spacing-7': '0.005em',
  '--letter-spacing-8': '0em',
  '--letter-spacing-9': '0em',
};

const baseDarkVars = {
  '--color-background': 'var(--gray-1)',
  '--color-overlay': 'var(--black-a8)',
  '--color-panel-solid': 'var(--gray-2)',
  '--color-panel-translucent': 'var(--gray-2-translucent)',
  '--color-surface': 'rgba(0, 0, 0, 0.25)',
  '--color-stroke': 'var(--gray-a4)',
  '--gray-2-translucent': '#1D1D1DD9',
  '--mauve-2-translucent': '#1E1D1ED9',
  '--slate-2-translucent': '#1B1D1ED9',
  '--sage-2-translucent': '#1A1C1BD9',
  '--olive-2-translucent': '#1B1C1AD9',
  '--sand-2-translucent': '#1D1D1BD9',
  '--font-size-0': '10px',
  '--font-size-1': '12px',
  '--font-size-2': '14px',
  '--font-size-3': '16px',
  '--font-size-4': '18px',
  '--font-size-5': '20px',
  '--font-size-6': '24px',
  '--font-size-7': '28px',
  '--font-size-8': '32px',
  '--font-size-9': '40px',
  '--font-weight-light': '300',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-bold': '700',
  '--line-height-0': '12px',
  '--line-height-1': '16px',
  '--line-height-2': '20px',
  '--line-height-3': '24px',
  '--line-height-4': '26px',
  '--line-height-5': '28px',
  '--line-height-6': '30px',
  '--line-height-7': '34px',
  '--line-height-8': '38px',
  '--line-height-9': '48px',
  '--letter-spacing-0': '0.01em',
  '--letter-spacing-1': '0.01em',
  '--letter-spacing-2': '0.01em',
  '--letter-spacing-3': '0.01em',
  '--letter-spacing-4': '0.01em',
  '--letter-spacing-5': '0.01em',
  '--letter-spacing-6': '0.01em',
  '--letter-spacing-7': '0.005em',
  '--letter-spacing-8': '0em',
  '--letter-spacing-9': '0em',
};

const formatVarLines = (vars) => Object.entries(vars).map(([name, value]) => `${name}: ${value};`);

const indentBlock = (block, indent = 2) => {
  const padding = ' '.repeat(indent);
  return block
    .split('\n')
    .map((line) => (line.trim().length ? `${padding}${line}` : line))
    .join('\n');
};

const stepNineContrastVars = {
  '--tomato-9-contrast': 'white',
  '--red-9-contrast': 'white',
  '--ruby-9-contrast': 'white',
  '--crimson-9-contrast': 'white',
  '--pink-9-contrast': 'white',
  '--plum-9-contrast': 'white',
  '--purple-9-contrast': 'white',
  '--violet-9-contrast': 'white',
  '--iris-9-contrast': 'white',
  '--cyan-9-contrast': 'white',
  '--teal-9-contrast': 'white',
  '--jade-9-contrast': 'white',
  '--green-9-contrast': 'white',
  '--grass-9-contrast': 'white',
  '--brown-9-contrast': 'white',
  '--sky-9-contrast': '#1C2024',
  '--mint-9-contrast': '#1A211E',
  '--yellow-9-contrast': '#21201C',
  '--amber-9-contrast': '#21201C',
  '--gold-9-contrast': 'white',
  '--bronze-9-contrast': 'white',
  '--gray-9-contrast': 'white',
  '--blue-9-contrast': 'white',
  '--orange-9-contrast': 'white',
  '--indigo-9-contrast': 'white',
  '--magenta-9-contrast': '#141212',
  '--lemon-9-contrast': '#20240D',
  '--lime-9-contrast': '#162715',
};

const buildSelectorBlock = (selector, sections) => {
  const lines = sections.flatMap((vars) => formatVarLines(vars));
  return `${selector} {\n${indentBlock(lines.join('\n'))}\n}`;
};

const lightColorVars = createColorVars({ isDark: false });
const darkColorVars = createColorVars({ isDark: true });

const cssSections = [
  '@tailwind base;',
  '@tailwind components;',
  '@tailwind utilities;',
  '',
  '@layer base {',
  indentBlock(buildSelectorBlock(':root', [baseLightVars, stepNineContrastVars, lightColorVars])),
  '',
  indentBlock(
    buildSelectorBlock('.dark:root', [baseDarkVars, stepNineContrastVars, darkColorVars])
  ),
  '}',
  '',
];

const css = cssSections.join('\n');

const targetPath = path.join(__dirname, '..', 'global.css');

fs.writeFileSync(targetPath, css);
console.log(`Updated ${path.relative(process.cwd(), targetPath)}`);
