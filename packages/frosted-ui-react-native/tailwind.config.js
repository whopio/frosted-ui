/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Tailwind config for the frosted-ui-react-native package development
 * Uses the shared preset from tailwind-preset.js
 */

const { frostedPreset } = require('./tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset'), frostedPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
