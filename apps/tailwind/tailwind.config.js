import { radixThemePlugin } from '@whop/frosted-ui';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    radixThemePlugin({
      useTailwindColorNames: false, // optional
      useTailwindRadiusNames: false, // optional
      mapMissingTailwindColors: false, // optional
    }),
  ],
};
