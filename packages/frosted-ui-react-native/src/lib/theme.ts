import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';
import { useMemo } from 'react';
import { useSemanticColors } from './theme-context';
import { themeTokens } from './theme-tokens';

const light = themeTokens.colors.light;
const dark = themeTokens.colors.dark;

/**
 * Hook to get navigation theme using Frosted UI design system colors.
 * Reacts to the accent color from ThemeProvider.
 *
 * React Navigation uses these colors to style the navigation UI elements
 * (headers, tab bars, drawers, etc.) throughout your app.
 *
 * @see https://reactnavigation.org/docs/themes
 */
export function useNavTheme(): Record<'light' | 'dark', Theme> {
  const { accentColor, dangerColor } = useSemanticColors();

  return useMemo(() => {
    const lightAccent = light.palettes[accentColor];
    const darkAccent = dark.palettes[accentColor];
    const lightDanger = light.palettes[dangerColor];
    const darkDanger = dark.palettes[dangerColor];

    return {
      light: {
        ...DefaultTheme,
        colors: {
          /**
           * background - The main background color of screens.
           * Used for: Screen backgrounds, the area behind content.
           */
          background: light.background,

          /**
           * border - Color for borders and dividers.
           * Used for: Header bottom border, tab bar top border,
           * separator lines between list items.
           */
          border: light.stroke,

          /**
           * card - Background color for card-like elements.
           * Used for: Header background, tab bar background,
           * drawer background, modal backgrounds.
           */
          card: light.panelSolid,

          /**
           * notification - Color for notification badges.
           * Used for: Badge dots on tab bar icons (e.g., unread count),
           * uses the danger color from ThemeProvider.
           */
          notification: lightDanger['9'],

          /**
           * primary - The primary/accent color for interactive elements.
           * Used for: Active tab icon tint, focused input borders,
           * header button colors, link colors.
           */
          primary: lightAccent['a11'],

          /**
           * text - Default text color.
           * Used for: Header title, tab bar labels, drawer item text,
           * and any navigation-related text.
           */
          text: light.palettes.gray['12'],
        },
      },
      dark: {
        ...DarkTheme,
        colors: {
          /** background - Screen backgrounds in dark mode */
          background: dark.background,

          /** border - Borders/dividers in dark mode */
          border: dark.stroke,

          /** card - Header/tab bar backgrounds in dark mode */
          card: dark.panelSolid,

          /** notification - Badge color uses danger color */
          notification: darkDanger['9'],

          /** primary - Active/accent color in dark mode */
          primary: darkAccent['a11'],

          /** text - Text color in dark mode */
          text: dark.palettes.gray['12'],
        },
      },
    };
  }, [accentColor, dangerColor]);
}

/**
 * @deprecated Use useNavTheme() hook instead for dynamic accent color support.
 * Static navigation theme with hardcoded blue accent.
 */
export const NAV_THEME: Record<'light' | 'dark', Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: light.background,
      border: light.stroke,
      card: light.panelSolid,
      notification: light.palettes.red['9'],
      primary: light.palettes.blue['a11'],
      text: light.palettes.gray['12'],
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: dark.background,
      border: dark.stroke,
      card: dark.panelSolid,
      notification: dark.palettes.red['9'],
      primary: dark.palettes.blue['a11'],
      text: dark.palettes.gray['12'],
    },
  },
};
