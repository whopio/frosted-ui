/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const { hairlineWidth } = require('nativewind/theme');
const frostedColors = require('@frosted-ui/colors');

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
    extend: {
      colors: {
        ...frostedColorTokens,
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
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
