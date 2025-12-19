import { Button, Code, Icon, Text, useTheme, useThemeTokens } from '@frosted-ui/react-native';
import { Link, Stack } from 'expo-router';
import { StarIcon } from 'lucide-react-native';
import * as React from 'react';
import { Image, type ImageStyle, StyleSheet, View } from 'react-native';
import { useHeaderOptions } from './_header';

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const LOGO_LIGHT = require('../assets/images/react-native-reusables-light.png');
// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const LOGO_DARK = require('../assets/images/react-native-reusables-dark.png');

const LOGO = {
  light: LOGO_LIGHT,
  dark: LOGO_DARK,
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
});

export default function Screen() {
  const { colorScheme } = useTheme();
  const { colors } = useThemeTokens();
  const headerOptions = useHeaderOptions();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Frosted UI',
          ...headerOptions,
        }}
      />
      <View style={s.container}>
        <Image source={LOGO[colorScheme]} style={IMAGE_STYLE} resizeMode="contain" />
        <View style={s.textContainer}>
          <Text size="3" style={{ color: colors.palettes.gray.a10 }}>
            1. Edit <Code size="3">app/index.tsx</Code> to get started.
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
          <Link href="/design-patterns" asChild>
            <Button size="3" variant="surface">
              <Text>Design patterns</Text>
            </Button>
          </Link>
          <Link
            href="https://github.com/whopio/frosted-ui/tree/main/packages/frosted-ui-react-native"
            asChild>
            <Button size="3" variant="soft" color="gray">
              <Icon as={StarIcon} />
              <Text>Star the repo</Text>
            </Button>
          </Link>
        </View>
      </View>
    </>
  );
}
