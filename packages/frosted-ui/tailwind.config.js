import preset from './preset/index';
import { darkOne, darkTwo, light } from './preset/themes';

/** @type {import('tailwindcss').Config} */
export const presets = [
  preset({
    content: ['./components/**/*.{ts,tsx}'],
    themes: [light, darkOne, darkTwo],
  }),
];
export const plugins = [];
