const {
  frostedPreset,
  getFrostedUIContentPaths,
} = require('@frosted-ui/react-native/tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    ...getFrostedUIContentPaths(),
  ],
  presets: [require('nativewind/preset'), frostedPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
