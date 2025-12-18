import { DarkTheme, DefaultTheme, type Theme } from '@react-navigation/native';
import { themeVars } from './theme-vars';

const light = themeVars.colors.light;
const dark = themeVars.colors.dark;

/**
 * Navigation theme using Frosted UI design system colors.
 *
 * React Navigation uses these colors to style the navigation UI elements
 * (headers, tab bars, drawers, etc.) throughout your app.
 *
 * @see https://reactnavigation.org/docs/themes
 */
export const NAV_THEME: Record<'light' | 'dark', Theme> = {
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
       * typically a red/attention-grabbing color.
       */
      notification: light.palettes.red['9'],

      /**
       * primary - The primary/accent color for interactive elements.
       * Used for: Active tab icon tint, focused input borders,
       * header button colors, link colors.
       */
      primary: light.palettes.blue['9'],

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

      /** notification - Badge color (stays red in both modes) */
      notification: dark.palettes.red['9'],

      /** primary - Active/accent color in dark mode */
      primary: dark.palettes.blue['9'],

      /** text - Text color in dark mode */
      text: dark.palettes.gray['12'],
    },
  },
};
