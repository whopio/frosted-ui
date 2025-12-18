import { NAV_THEME } from '@/lib/theme';
import {
  ThemeProvider as FrostedThemeProvider,
  useTheme,
  useThemeTokens,
} from '@frosted-ui/react-native';
import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function RootLayoutContent() {
  const { colorScheme } = useTheme();
  const { colors } = useThemeTokens();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(colors.background);
  }, [colors.background]);

  return (
    <NavigationThemeProvider value={NAV_THEME[colorScheme]}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack />
      <PortalHost />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <FrostedThemeProvider>
      <RootLayoutContent />
    </FrostedThemeProvider>
  );
}
