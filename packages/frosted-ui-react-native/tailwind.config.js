/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { hairlineWidth } = require('nativewind/theme');
const frostedColors = require('@frosted-ui/colors');

const semanticColorVars = {
  background: 'var(--color-background)',
  overlay: 'var(--color-overlay)',
  'panel-solid': 'var(--color-panel-solid)',
  'panel-translucent': 'var(--color-panel-translucent)',
  surface: 'var(--color-surface)',
  stroke: 'var(--color-stroke)',
  'gray-2-translucent': 'var(--gray-2-translucent)',
  'mauve-2-translucent': 'var(--mauve-2-translucent)',
  'slate-2-translucent': 'var(--slate-2-translucent)',
  'sage-2-translucent': 'var(--sage-2-translucent)',
  'olive-2-translucent': 'var(--olive-2-translucent)',
  'sand-2-translucent': 'var(--sand-2-translucent)',
};

const contrastColorNames = [
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'sky',
  'mint',
  'yellow',
  'amber',
  'gold',
  'bronze',
  'gray',
  'blue',
  'orange',
  'indigo',
  'magenta',
  'lemon',
  'lime',
];

const contrastColorTokens = contrastColorNames.reduce((acc, name) => {
  acc[`${name}-9-contrast`] = `var(--${name}-9-contrast)`;
  return acc;
}, {});

const createFrostedColorTokens = (paletteExports) =>
  Object.entries(paletteExports).reduce((acc, [paletteName, paletteValues]) => {
    const isObjectPalette =
      paletteValues && typeof paletteValues === 'object' && !Array.isArray(paletteValues);
    const isAlphaPalette = paletteName.endsWith('A');
    const baseName = (isAlphaPalette ? paletteName.slice(0, -1) : paletteName) || '';
    const normalizedBase = baseName.toLowerCase();
    const isSupportedName = /^[a-z]+$/.test(normalizedBase) && !paletteName.includes('P3');

    if (!isObjectPalette || !isSupportedName) {
      return acc;
    }

    Object.entries(paletteValues).forEach(([shadeKey]) => {
      const stepMatch = shadeKey.match(/(\d+)$/);

      if (!stepMatch) {
        return;
      }

      const variantSuffix = `${isAlphaPalette ? 'a' : ''}${stepMatch[1]}`;
      const cssVarName = `--${normalizedBase}-${variantSuffix}`;
      acc[`${normalizedBase}-${variantSuffix}`] = `var(${cssVarName})`;
    });

    return acc;
  }, {});

const frostedColorTokens = createFrostedColorTokens(frostedColors);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      ...frostedColorTokens,
      ...contrastColorTokens,
      ...semanticColorVars,
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
