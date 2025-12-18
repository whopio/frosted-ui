import {
  DropdownMenu,
  Icon,
  IconButton,
  useTheme,
  useThemeTokens,
  type AccentColor,
} from '@frosted-ui/react-native';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { ActionSheetIOS, Platform, StyleSheet, View } from 'react-native';
import { useAccentColorConfig } from './_accent-color-context';

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

// Popular accent colors to show in the picker
const ACCENT_COLORS: { value: AccentColor; label: string }[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'indigo', label: 'Indigo' },
  { value: 'purple', label: 'Purple' },
  { value: 'violet', label: 'Violet' },
  { value: 'magenta', label: 'Magenta' },
  { value: 'pink', label: 'Pink' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'amber', label: 'Amber' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'lime', label: 'Lime' },
  { value: 'green', label: 'Green' },
  { value: 'teal', label: 'Teal' },
  { value: 'cyan', label: 'Cyan' },
];

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    ...(Platform.OS === 'web' && { marginRight: 16 }),
  },
  iconButton: {
    borderRadius: 9999,
  },
});

function HeaderBackground() {
  const { colors } = useThemeTokens();
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

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <IconButton onPressIn={toggleColorScheme} size="3" variant="ghost" style={styles.iconButton}>
      <Icon as={THEME_ICONS[colorScheme]} size={20} />
    </IconButton>
  );
}

function AccentColorPicker() {
  const { accentColor, setAccentColor } = useAccentColorConfig();
  const { colors } = useThemeTokens();

  const colorCircle = (
    <View
      style={{
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: colors.palettes.accent['9'],
      }}
    />
  );

  // iOS: Use native ActionSheet
  // Note: userInterfaceStyle for dark mode doesn't work in Expo Go, only in dev client builds
  if (Platform.OS === 'ios') {
    const handlePress = () => {
      const options = [...ACCENT_COLORS.map((c) => c.label), 'Cancel'];
      const cancelButtonIndex = options.length - 1;

      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: 'Accent Color',
          options,
          cancelButtonIndex,
          tintColor: colors.palettes.accent['9'],
        },
        (buttonIndex) => {
          if (buttonIndex !== cancelButtonIndex && buttonIndex < ACCENT_COLORS.length) {
            setAccentColor(ACCENT_COLORS[buttonIndex].value);
          }
        }
      );
    };

    return (
      <IconButton size="3" variant="ghost" style={styles.iconButton} onPress={handlePress}>
        {colorCircle}
      </IconButton>
    );
  }

  // Web/Android: Use DropdownMenu
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <IconButton size="3" variant="ghost" style={styles.iconButton}>
          {colorCircle}
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="end" sideOffset={8}>
        <DropdownMenu.Label>Accent Color</DropdownMenu.Label>
        <DropdownMenu.RadioGroup
          value={accentColor}
          onValueChange={(v) => setAccentColor(v as AccentColor)}>
          {ACCENT_COLORS.map((color) => (
            <DropdownMenu.RadioItem key={color.value} value={color.value}>
              {color.label}
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function HeaderRight() {
  return (
    <View style={styles.headerRight}>
      <AccentColorPicker />
      <ThemeToggle />
    </View>
  );
}

export function useHeaderOptions() {
  const { colorScheme } = useTheme();
  return {
    headerTransparent: true,
    headerBlurEffect: colorScheme === 'dark' ? ('dark' as const) : ('light' as const),
    headerBackground: Platform.OS !== 'ios' ? () => <HeaderBackground /> : undefined,
    headerRight: () => <HeaderRight />,
  };
}
