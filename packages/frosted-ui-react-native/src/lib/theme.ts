import { useMemo } from 'react';
import { useSemanticColors } from './theme-context';
import { themeTokens } from './theme-tokens';

const light = themeTokens.colors.light;
const dark = themeTokens.colors.dark;

import { Platform } from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type FontStyle = {
  fontFamily: string;
  fontWeight: FontWeight;
};

interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  fonts: {
    regular: FontStyle;
    medium: FontStyle;
    bold: FontStyle;
    heavy: FontStyle;
  };
}

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const fontsByPlatform: Record<string, Theme['fonts']> = {
  web: {
    regular: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '400',
    },
    medium: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '500',
    },
    bold: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '600',
    },
    heavy: {
      fontFamily: WEB_FONT_STACK,
      fontWeight: '700',
    },
  },
  ios: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '700',
    },
  },
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'sans-serif',
      fontWeight: '700',
    },
  },
};

export const fonts: Theme['fonts'] =
  Platform.select(fontsByPlatform) ?? fontsByPlatform.default;

const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
  fonts,
};


const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: 'rgb(10, 132, 255)',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
  fonts,
};

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
