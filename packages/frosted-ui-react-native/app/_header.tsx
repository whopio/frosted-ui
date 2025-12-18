import { Icon, IconButton, useTheme, useThemeVars } from '@frosted-ui/react-native';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { Platform, StyleSheet, View } from 'react-native';

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

const styles = StyleSheet.create({
  themeToggle: {
    borderRadius: 9999,
    ...(Platform.OS === 'web' && { marginRight: 16 }),
  },
});

function HeaderBackground() {
  const { colors } = useThemeVars();
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: colors.panelSolid,
          borderBottomWidth: 1,
          borderBottomColor: colors.stroke,
        },
      ]}
    />
  );
}

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <IconButton
      onPressIn={toggleColorScheme}
      size="3"
      variant="ghost"
      color="gray"
      style={styles.themeToggle}>
      <Icon as={THEME_ICONS[colorScheme]} size={20} />
    </IconButton>
  );
}

export function useHeaderOptions() {
  const { colorScheme } = useTheme();
  return {
    headerTransparent: true,
    headerBlurEffect: colorScheme === 'dark' ? ('dark' as const) : ('light' as const),
    headerBackground: Platform.OS !== 'ios' ? () => <HeaderBackground /> : undefined,
    headerRight: () => <ThemeToggle />,
  };
}
