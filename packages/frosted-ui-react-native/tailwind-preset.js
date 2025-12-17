/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Frosted UI Tailwind Preset for React Native / NativeWind
 *
 * Usage in your tailwind.config.js:
 *
 * const { frostedPreset } = require('@frosted-ui/react-native/tailwind-preset');
 *
 * module.exports = {
 *   content: ['./App.{js,jsx,ts,tsx}', './src/**\/*.{js,jsx,ts,tsx}'],
 *   presets: [require('nativewind/preset'), frostedPreset],
 *   // your custom theme extensions...
 * };
 */

const { hairlineWidth } = require('nativewind/theme');
const frostedColors = require('@frosted-ui/colors');

// ============================================================================
// Semantic color tokens (CSS variable references)
// ============================================================================

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

// ============================================================================
// Typography scale (CSS variable references)
// ============================================================================

const typographyScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(
  (acc, step) => ({
    ...acc,
    [`${step}`]: [
      `var(--font-size-${step})`,
      {
        lineHeight: `var(--line-height-${step})`,
        letterSpacing: `var(--letter-spacing-${step})`,
      },
    ],
  }),
  {}
);

const fontWeightScale = {
  thin: '100',
  extralight: '200',
  light: 'var(--font-weight-light)',
  normal: 'var(--font-weight-regular)',
  medium: 'var(--font-weight-medium)',
  semibold: '600',
  bold: 'var(--font-weight-bold)',
  extrabold: '800',
  black: '900',
};

const lineHeightScale = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
};

const letterSpacingScale = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

// ============================================================================
// Color tokens
// ============================================================================

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

/**
 * Creates color tokens from @frosted-ui/colors exports
 */
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

// Accent color tokens (defaults to blue, overridable via CSS variables)
const accentColorTokens = {
  1: 'var(--accent-1)',
  2: 'var(--accent-2)',
  3: 'var(--accent-3)',
  4: 'var(--accent-4)',
  5: 'var(--accent-5)',
  6: 'var(--accent-6)',
  7: 'var(--accent-7)',
  8: 'var(--accent-8)',
  9: 'var(--accent-9)',
  '9-contrast': 'var(--accent-9-contrast)',
  10: 'var(--accent-10)',
  11: 'var(--accent-11)',
  12: 'var(--accent-12)',
  a1: 'var(--accent-a1)',
  a2: 'var(--accent-a2)',
  a3: 'var(--accent-a3)',
  a4: 'var(--accent-a4)',
  a5: 'var(--accent-a5)',
  a6: 'var(--accent-a6)',
  a7: 'var(--accent-a7)',
  a8: 'var(--accent-a8)',
  a9: 'var(--accent-a9)',
  a10: 'var(--accent-a10)',
  a11: 'var(--accent-a11)',
  a12: 'var(--accent-a12)',
};

// ============================================================================
// Frosted UI Preset
// ============================================================================

/** @type {import('tailwindcss').Config} */
const frostedPreset = {
  darkMode: 'class',
  theme: {
    fontSize: typographyScale,
    lineHeight: lineHeightScale,
    letterSpacing: letterSpacingScale,
    fontWeight: fontWeightScale,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      accent: accentColorTokens,
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

// ============================================================================
// Helper to create content paths for frosted-ui components
// ============================================================================

/**
 * Returns the content paths needed for Tailwind to scan frosted-ui components.
 * Add these to your tailwind.config.js content array.
 *
 * @example
 * content: [
 *   './App.{js,jsx,ts,tsx}',
 *   ...getFrostedUIContentPaths(),
 * ],
 */
function getFrostedUIContentPaths() {
  return [
    './node_modules/@frosted-ui/react-native/dist/**/*.js',
    // Also include src for development/linking scenarios
    './node_modules/@frosted-ui/react-native/src/**/*.{ts,tsx}',
  ];
}

/**
 * Utility to merge your Tailwind config with Frosted UI preset.
 * This is an alternative to using presets if you need more control.
 *
 * @param {import('tailwindcss').Config} userConfig - Your Tailwind config
 * @returns {import('tailwindcss').Config} - Merged config with Frosted UI theme
 *
 * @example
 * const { withFrostedUI } = require('@frosted-ui/react-native/tailwind-preset');
 *
 * module.exports = withFrostedUI({
 *   content: ['./App.{js,jsx,ts,tsx}'],
 *   theme: {
 *     extend: {
 *       // your customizations
 *     },
 *   },
 * });
 */
function withFrostedUI(userConfig = {}) {
  const contentPaths = getFrostedUIContentPaths();

  return {
    ...userConfig,
    darkMode: userConfig.darkMode || 'class',
    content: [...(userConfig.content || []), ...contentPaths],
    presets: [require('nativewind/preset'), frostedPreset, ...(userConfig.presets || [])],
    theme: {
      ...userConfig.theme,
      extend: {
        ...frostedPreset.theme.extend,
        ...(userConfig.theme?.extend || {}),
      },
    },
    future: {
      ...frostedPreset.future,
      ...(userConfig.future || {}),
    },
    plugins: [...(frostedPreset.plugins || []), ...(userConfig.plugins || [])],
  };
}

module.exports = {
  frostedPreset,
  getFrostedUIContentPaths,
  withFrostedUI,
};
