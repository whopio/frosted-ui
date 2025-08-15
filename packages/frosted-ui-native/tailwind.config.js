import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';
const { getColorNames } = require('./utils/color-utils.js');

// Function to generate color scales programmatically
function generateColorScales() {
  // Get color names programmatically from frosted-ui-colors
  const colors = getColorNames();

  const colorScales = {};

  colors.forEach((colorName) => {
    colorScales[colorName] = {};

    // Add regular shades (1-12)
    for (let i = 1; i <= 12; i++) {
      colorScales[colorName][i] = `var(--${colorName}-${i})`;
    }

    // Add alpha shades (a1-a12)
    for (let i = 1; i <= 12; i++) {
      colorScales[colorName][`a${i}`] = `var(--${colorName}-a${i})`;
    }
  });

  return colorScales;
}
// console.log(getColorNames());

// Function to generate safelist pattern dynamically
function generateSafelistPattern() {
  const colors = getColorNames();
  const colorPattern = colors.join('|');
  return new RegExp(
    `(bg|border|text|stroke|fill)-(${colorPattern})-(1|2|3|4|5|6|7|8|9|10|11|12|a1|a2|a3|a4|a5|a6|a7|a8|a9|a10|a11|a12)`,
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['app/**/*.{tsx,jsx,ts,js}', 'components/**/*.{tsx,jsx,ts,js}'],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern: generateSafelistPattern(),
    },
  ],
  theme: {
    extend: {
      colors: generateColorScales(),
      fontFamily: {
        heading: undefined,
        body: undefined,
        mono: undefined,
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [gluestackPlugin],
};
