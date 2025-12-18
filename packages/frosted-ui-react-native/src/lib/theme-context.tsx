import * as React from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import type { AccentColor } from './types';

type ColorScheme = 'light' | 'dark';

// Allowed colors for each semantic color type (matching web version)
type DangerColor = 'tomato' | 'red' | 'ruby';
type WarningColor = 'yellow' | 'amber';
type SuccessColor = 'teal' | 'jade' | 'green' | 'grass';
type InfoColor = 'blue' | 'sky';

// Semantic color configuration
type SemanticColorConfig = {
  accentColor: AccentColor;
  dangerColor: DangerColor;
  warningColor: WarningColor;
  successColor: SuccessColor;
  infoColor: InfoColor;
};

// Default semantic colors (matching web defaults)
const defaultSemanticColors: SemanticColorConfig = {
  accentColor: 'blue',
  dangerColor: 'red',
  warningColor: 'amber',
  successColor: 'green',
  infoColor: 'sky',
};

type ThemeContextValue = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
} & SemanticColorConfig;

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
  /** Initial color scheme. Defaults to system preference. */
  defaultColorScheme?: ColorScheme;
  /** Accent color for primary actions and highlights. Defaults to 'blue'. */
  accentColor?: AccentColor;
  /** Color for danger/error states. Defaults to 'red'. */
  dangerColor?: DangerColor;
  /** Color for warning states. Defaults to 'amber'. */
  warningColor?: WarningColor;
  /** Color for success states. Defaults to 'green'. */
  successColor?: SuccessColor;
  /** Color for informational states. Defaults to 'sky'. */
  infoColor?: InfoColor;
};

/**
 * Provider for theme context that allows programmatic color scheme control
 * and semantic color customization.
 *
 * Wrap your app with this provider to enable theme toggling and custom colors.
 *
 * @example
 * function App() {
 *   return (
 *     <ThemeProvider
 *       accentColor="purple"
 *       dangerColor="tomato"
 *       warningColor="yellow"
 *       successColor="teal"
 *       infoColor="blue"
 *     >
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 */
function ThemeProvider({
  children,
  defaultColorScheme,
  accentColor = defaultSemanticColors.accentColor,
  dangerColor = defaultSemanticColors.dangerColor,
  warningColor = defaultSemanticColors.warningColor,
  successColor = defaultSemanticColors.successColor,
  infoColor = defaultSemanticColors.infoColor,
}: ThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme();
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    defaultColorScheme ?? (systemColorScheme === 'dark' ? 'dark' : 'light')
  );

  const toggleColorScheme = React.useCallback(() => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = React.useMemo(
    () => ({
      colorScheme,
      setColorScheme,
      toggleColorScheme,
      accentColor,
      dangerColor,
      warningColor,
      successColor,
      infoColor,
    }),
    [
      colorScheme,
      toggleColorScheme,
      accentColor,
      dangerColor,
      warningColor,
      successColor,
      infoColor,
    ]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook to access and control the current color scheme.
 * Must be used within a ThemeProvider.
 *
 * @example
 * const { colorScheme, toggleColorScheme, accentColor } = useTheme();
 */
function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Internal hook to get the current color scheme.
 * Checks ThemeContext first, falls back to system preference.
 * Used by useThemeTokens.
 */
function useColorScheme(): ColorScheme {
  const context = React.useContext(ThemeContext);
  const systemColorScheme = useSystemColorScheme();

  // If ThemeProvider is used, respect the programmatic value
  if (context) {
    return context.colorScheme;
  }

  // Otherwise fall back to system preference
  return systemColorScheme === 'dark' ? 'dark' : 'light';
}

/**
 * Internal hook to get the semantic color configuration.
 * Returns defaults if not within a ThemeProvider.
 */
function useSemanticColors(): SemanticColorConfig {
  const context = React.useContext(ThemeContext);
  return context ?? defaultSemanticColors;
}

export {
  defaultSemanticColors,
  ThemeContext,
  ThemeProvider,
  useColorScheme,
  useSemanticColors,
  useTheme,
};
export type {
  ColorScheme,
  DangerColor,
  InfoColor,
  SemanticColorConfig,
  SuccessColor,
  ThemeContextValue,
  ThemeProviderProps,
  WarningColor,
};
