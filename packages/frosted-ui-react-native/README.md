# @frosted-ui/react-native

A beautiful, accessible component library for React Native with a built-in design system.

## Installation

### For Bare React Native Projects

1. Install the package and its peer dependencies:

```bash
npm install @frosted-ui/react-native
# or
yarn add @frosted-ui/react-native
# or
pnpm add @frosted-ui/react-native
```

2. Install peer dependencies:

```bash
npm install react react-native react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg lucide-react-native
# or
yarn add react react-native react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg lucide-react-native
# or
pnpm add react react-native react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg lucide-react-native
```

3. **Setup React Native Reanimated**: Follow the [React Native Reanimated installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/).

4. **Setup React Native Screens**: Follow the [React Native Screens installation guide](https://github.com/software-mansion/react-native-screens#installation).

5. **Setup React Native SVG**: Follow the [React Native SVG installation guide](https://github.com/software-mansion/react-native-svg#installation).

### For Expo Projects

The package works with Expo projects as well. Follow the same installation steps above, and Expo will handle the native module linking automatically.

## Usage

```tsx
import { Button, Text, ThemeProvider } from '@frosted-ui/react-native';

export default function App() {
  return (
    <ThemeProvider>
      <Button variant="surface" size="2">
        <Text>Hello World</Text>
      </Button>
    </ThemeProvider>
  );
}
```

### Theme Management

The library provides a `ThemeProvider` for managing light/dark mode:

```tsx
import { ThemeProvider, useTheme } from '@frosted-ui/react-native';

function MyComponent() {
  const { colorScheme, toggleColorScheme } = useTheme();
  
  return (
    <Button onPress={toggleColorScheme}>
      <Text>Current theme: {colorScheme}</Text>
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  );
}
```

### Accessing Theme Colors

Use `useThemeVars` to access the design system colors in your components:

```tsx
import { useThemeVars } from '@frosted-ui/react-native';

function MyComponent() {
  const { colors, isDark } = useThemeVars();
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.palettes.gray['12'] }}>
        Hello World
      </Text>
    </View>
  );
}
```

## Requirements

- React >= 18.0.0
- React Native >= 0.70.0
- React Native Reanimated >= 3.0.0
- React Native Safe Area Context >= 4.0.0
- React Native Screens >= 3.0.0
- React Native SVG >= 13.0.0
- Lucide React Native >= 0.300.0

## Components

This library includes a comprehensive set of UI components:

- Accordion
- Alert Dialog
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- Dropdown Menu
- Hover Card
- Icon
- Label
- Popover
- Progress
- Radio Group
- Select
- Separator
- Skeleton
- Spinner
- Switch
- Tabs
- Text
- Text Field
- Text Area
- Tooltip

## Styling

This library uses React Native's built-in styling system with a comprehensive design system. All components support light and dark mode out of the box, and include multiple color palettes (28+ accent colors) and variants.

## License

MIT
