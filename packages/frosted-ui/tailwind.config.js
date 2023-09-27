import preset from './src/preset/index';
import { darkOne, darkTwo, light } from './src/preset/themes';

/** @type {import('tailwindcss').Config} */
export const presets = [
  preset({
    content: ['./src/components/**/*.{ts,tsx}', './stories/*.{ts,tsx}'],
    themes: [light, darkOne, darkTwo],
  }),
];
export const plugins = [];
