/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import { join, relative } from 'path';
import themeProvider from 'tailwindcss-themer';
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
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
        fontSize: {
          paragraph1: [
            '1.188rem',
            {
              lineHeight: '1.75rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          paragraph2: [
            '1rem',
            {
              lineHeight: '1.5rem',
              letterSpacing: '-0.015em',
              fontWeight: '400',
            },
          ],
          paragraph3: [
            '0.875rem',
            {
              lineHeight: '1.313rem',
              letterSpacing: '-0.015em',
              fontWeight: '400',
            },
          ],
          paragraph4: [
            '0.75rem',
            {
              lineHeight: '1.063rem',
              letterSpacing: '-0.015em',
              fontWeight: '400',
            },
          ],
          text1: [
            '1rem',
            {
              lineHeight: '1.188rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text2: [
            '0.938rem',
            {
              lineHeight: '1.125rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text3: [
            '0.875rem',
            {
              lineHeight: '1.063rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text4: [
            '0.813rem',
            {
              lineHeight: '1rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text5: [
            '0.75rem',
            {
              lineHeight: '0.938rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text6: [
            '0.688rem',
            {
              lineHeight: '0.875rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          text7: [
            '0.625rem',
            {
              lineHeight: '0.813rem',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            },
          ],
          subtitle1: [
            '1rem',
            {
              lineHeight: '1.188rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          subtitle2: [
            '0.938rem',
            {
              lineHeight: '1.125rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          subtitle3: [
            '0.875rem',
            {
              lineHeight: '1.063rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          subtitle4: [
            '0.813rem',
            {
              lineHeight: '1rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          subtitle5: [
            '0.75rem',
            {
              lineHeight: '0.938rem',
              letterSpacing: '-0.01em',
              fontWeight: 500,
            },
          ],
          subtitle6: [
            '0.688rem',
            {
              lineHeight: '0.875rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          subtitle7: [
            '0.625rem',
            {
              lineHeight: '0.813rem',
              letterSpacing: '-0.01em',
              fontWeight: '500',
            },
          ],
          button1: [
            '1.063rem',
            {
              lineHeight: '1.313rem',
              letterSpacing: '-0.005em',
              fontWeight: '600',
            },
          ],
          button2: [
            '1rem',
            {
              lineHeight: '1.188rem',
              letterSpacing: '-0.005em',
              fontWeight: '600',
            },
          ],
          button3: [
            '0.938rem',
            {
              lineHeight: '1.125rem',
              letterSpacing: '-0.005em',
              fontWeight: '600',
            },
          ],
          button4: [
            '0.875rem',
            {
              lineHeight: '1.063rem',
              letterSpacing: '-0.005em',
              fontWeight: '600',
            },
          ],
          button5: [
            '0.813rem',
            {
              lineHeight: '1rem',
              letterSpacing: '-0.005em',
              fontWeight: '600',
            },
          ],
          // All uppercase
          overline1: [
            '0.875rem',
            {
              lineHeight: '1.063rem',
              letterSpacing: '0.06em',
              fontWeight: '600',
            },
          ],
          overline2: [
            '0.813rem',
            {
              lineHeight: '1rem',
              letterSpacing: '0.06em',
              fontWeight: '600',
            },
          ],
          overline3: [
            '0.75rem',
            {
              lineHeight: '0.938rem',
              letterSpacing: '0.06em',
              fontWeight: '600',
            },
          ],
          overline4: [
            '0.688rem',
            {
              lineHeight: '0.813rem',
              letterSpacing: '0.06em',
              fontWeight: '600',
            },
          ],
          header1: [
            '2.5rem',
            {
              lineHeight: '3.5rem',
              letterSpacing: '-0.0125em',
              fontWeight: '600',
            },
          ],
          header2: [
            '2rem',
            {
              lineHeight: '2.813rem',
              letterSpacing: '-0.0125em',
              fontWeight: '600',
            },
          ],
          header3: [
            '1.5rem',
            {
              lineHeight: '2.125rem',
              letterSpacing: '-0.0125em',
              fontWeight: '600',
            },
          ],
          header4: [
            '1.125rem',
            {
              lineHeight: '1.563rem',
              letterSpacing: '-0.0125em',
              fontWeight: '600',
            },
          ],
          header5: [
            '1rem',
            {
              lineHeight: '1.375rem',
              letterSpacing: '-0.0125em',
              fontWeight: '600',
            },
          ],
          // font-family display
          display1: [
            '2.5rem',
            {
              lineHeight: '3rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          display2: [
            '2rem',
            {
              lineHeight: '2.375rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          display3: [
            '1.5rem',
            {
              lineHeight: '1.813rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          display4: [
            '1.125rem',
            {
              lineHeight: '1.375rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          displayL1: [
            '4.5rem',
            {
              lineHeight: '5.4rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          displayL2: [
            '4rem',
            {
              lineHeight: '4.8rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          displayL3: [
            '3.5rem',
            {
              lineHeight: '4.2rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          displayL4: [
            '3rem',
            {
              lineHeight: '3.6rem',
              letterSpacing: '0em',
              fontWeight: '700',
            },
          ],
          // All uppercase & font-family mono
          mono1: [
            '1.125rem',
            {
              lineHeight: '1.313rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
          mono2: [
            '1rem',
            {
              lineHeight: '1.188rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
          mono3: [
            '0.938rem',
            {
              lineHeight: '1.125rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
          mono4: [
            '0.875rem',
            {
              lineHeight: '1rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
          mono5: [
            '0.813rem',
            {
              lineHeight: '0.938rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
          mono6: [
            '0.75rem',
            {
              lineHeight: '0.875rem',
              letterSpacing: '-0.01em',
              fontWeight: '600',
            },
          ],
        },
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
