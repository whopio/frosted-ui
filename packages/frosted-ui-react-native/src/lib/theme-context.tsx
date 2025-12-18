import * as React from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

type ColorScheme = 'light' | 'dark';

type ThemeContextValue = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
  /** Initial color scheme. Defaults to system preference. */
  defaultColorScheme?: ColorScheme;
};

/**
 * Provider for theme context that allows programmatic color scheme control.
 * Wrap your app with this provider to enable theme toggling.
 *
 * When this provider is used, all Frosted UI components will respond to
 * the programmatic color scheme instead of the system preference.
 *
 * @example
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 */
function ThemeProvider({ children, defaultColorScheme }: ThemeProviderProps) {
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
    }),
    [colorScheme, toggleColorScheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook to access and control the current color scheme.
 * Must be used within a ThemeProvider.
 *
 * @example
 * const { colorScheme, toggleColorScheme } = useTheme();
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

export { ThemeContext, ThemeProvider, useColorScheme, useTheme };
export type { ColorScheme, ThemeContextValue, ThemeProviderProps };
