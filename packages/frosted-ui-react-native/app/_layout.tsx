import { useNavTheme } from '@/lib/theme';
import {
  ThemeProvider as FrostedThemeProvider,
  PortalHost,
  useTheme,
  useThemeTokens,
  type AccentColor,
} from '@frosted-ui/react-native';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { AccentColorContext } from './_accent-color-context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function RootLayoutContent() {
  const { colorScheme } = useTheme();
  const { colors } = useThemeTokens();
  const navTheme = useNavTheme();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  return (
    <NavigationThemeProvider value={navTheme[colorScheme]}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack />
      <PortalHost />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  const [accentColor, setAccentColorState] = useState<AccentColor>('blue');

  const setAccentColor = useCallback((color: AccentColor) => {
    setAccentColorState(color);
  }, []);

  const contextValue = React.useMemo(
    () => ({ accentColor, setAccentColor }),
    [accentColor, setAccentColor]
  );

  return (
    <AccentColorContext.Provider value={contextValue}>
      <FrostedThemeProvider accentColor={accentColor}>
        <RootLayoutContent />
      </FrostedThemeProvider>
    </AccentColorContext.Provider>
  );
}
