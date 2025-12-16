import { Button, Code, Icon, IconButton, Text } from '@/components';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View } from 'react-native';

const LOGO = {
  light: require('../assets/images/react-native-reusables-light.png'),
  dark: require('../assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <Image source={LOGO[colorScheme ?? 'light']} style={IMAGE_STYLE} resizeMode="contain" />
        <View className="gap-2 p-4">
          <Text size="3" className="text-gray-a10">
            1. Edit{' '}
            <Code color="blue" size="3">
              app/index.tsx
            </Code>{' '}
            to get started.
          </Text>
          <Text size="3" className="text-gray-a10">
            2. Save to see your changes instantly.
          </Text>
        </View>
        <View className="flex-row flex-wrap justify-center gap-2">
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
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <IconButton
      onPressIn={toggleColorScheme}
      size="3"
      variant="ghost"
      color="gray"
      className="rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </IconButton>
  );
}
