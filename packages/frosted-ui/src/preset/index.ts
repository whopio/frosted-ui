/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { join, relative } from 'path';
import themeProvider from 'tailwindcss-themer';
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import { fontSize } from '../lib/font-sizes';
import { light } from './themes/light';

export type ThemeConfig = Parameters<typeof themeProvider>[0]['themes'];

export default function frostedPreset({
  content,
  themes,
}: {
  content?: string[];
  themes?: ThemeConfig;
}) {
  const themePlugin = themeProvider({
    defaultTheme: {
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: '0px' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0px' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        fontFamily: {
          sans: ["'Inter'", ..._fontFamily.sans],
          mono: ["'Klamp 105 Mono'", ..._fontFamily.mono],
          display: ["'Maison Neue Extended Black'", ..._fontFamily.sans],
        },
        fontSize,
        colors: light.extend.colors,
        boxShadow: {
          sm: '0px 1px 4px rgba(0, 0, 0, 0.08)',
          md: '0px 2px 8px rgba(0, 0, 0, 0.08)',
          lg: '0px 2px 16px rgba(0, 0, 0, 0.08)',
          xl: '0px 6px 16px rgba(0, 0, 0, 0.10)',
          '2xl': '0px 8px 40px rgba(0, 0, 0, 0.10)',
        },
        // These are defined at :root by css variable
        backgroundImage: () => ({
          'gold-gradient': 'var(--gold-gradient)',
          'perk-software-gradient': 'var(--perk-software-gradient)',
          'perk-discord-gradient': 'var(--perk-discord-gradient)',
          'perk-content-gradient': 'var(--perk-content-gradient)',
          'perk-file-gradient': 'var(--perk-file-gradient)',
          'perk-link-gradient': 'var(--perk-link-gradient)',
          'perk-custom-gradient': 'var(--perk-custom-gradient)',
          'perk-telegram-gradient': 'var(--perk-telegram-gradient)',
          'perk-proxy-gradient': 'var(--perk-proxy-gradient)',
          'perk-course-gradient': 'var(--perk-course-gradient)',
          'perk-ebook-gradient': 'var(--perk-ebook-gradient)',
          'perk-tradingview-gradient': 'var(--perk-tradingview-gradient)',
        }),
      },
    },
    themes: [...(themes ? themes : [])],
  });

  return {
    plugins: [
      themePlugin,
      require('tailwindcss-radix')({
        variantPrefix: false,
      }),
      require('tailwindcss-animate'),
    ],
    content: [
      ...(content || []),
      join(relative(process.cwd(), __dirname), '../components/**/*.js'),
    ],
  };
}
