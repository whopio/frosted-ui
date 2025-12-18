import {
  Button,
  Code,
  Icon,
  IconButton,
  Text,
  useTheme,
  useThemeVars,
} from '@frosted-ui/react-native';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, StyleSheet, View } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const LOGO_LIGHT = require('../assets/images/react-native-reusables-light.png');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const LOGO_DARK = require('../assets/images/react-native-reusables-dark.png');

const LOGO = {
  light: LOGO_LIGHT,
  dark: LOGO_DARK,
};

const SCREEN_OPTIONS = {
  title: 'Frosted UI x React Native',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    padding: 16,
  },
  textContainer: {
    gap: 8,
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  roundedFull: {
    borderRadius: 9999,
  },
});

export default function Screen() {
  const { colorScheme } = useTheme();
  const { colors } = useThemeVars();

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View style={s.container}>
        <Image source={LOGO[colorScheme]} style={IMAGE_STYLE} resizeMode="contain" />
        <View style={s.textContainer}>
          <Text size="3" style={{ color: colors.palettes.gray.a10 }}>
            1. Edit{' '}
            <Code color="blue" size="3">
              app/index.tsx
            </Code>{' '}
            to get started.
          </Text>
          <Text size="3" style={{ color: colors.palettes.gray.a10 }}>
            2. Save to see your changes instantly.
          </Text>
        </View>
        <View style={s.buttonsContainer}>
          <Link href="/kitchen-sink" asChild>
            <Button size="3" variant="solid">
              <Text>View components</Text>
            </Button>
          </Link>
          <Link href="https://reactnativereusables.com" asChild>
            <Button size="3" color="gray" variant="soft">
              <Text>Browse the docs</Text>
            </Button>
          </Link>
          <Link href="https://github.com/founded-labs/react-native-reusables" asChild>
            <Button size="3" variant="ghost" color="blue">
              <Icon as={StarIcon} />
              <Text>Star the repo</Text>
            </Button>
          </Link>
        </View>
      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <IconButton
      onPressIn={toggleColorScheme}
      size="3"
      variant="ghost"
      color="gray"
      style={s.roundedFull}>
      <Icon as={THEME_ICONS[colorScheme]} size={20} />
    </IconButton>
  );
}
