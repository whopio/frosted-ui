# Frosted UI Design System — LLM Reference

> This documentation is designed for AI/LLM consumption when generating React Native applications using the Frosted UI design system.

## Purpose

These guides provide structured, detailed information about Frosted UI conventions, patterns, and best practices. AI models should reference these documents when generating code to ensure consistency with the design system.

## Available Documentation

| Document | Description |
|----------|-------------|
| [COLOR_SYSTEM.md](./COLOR_SYSTEM.md) | Complete guide to the color system, palettes, shades, variants, and accessibility |
| [TYPOGRAPHY.md](./TYPOGRAPHY.md) | Typography scale, font weights, Text/Heading components, and automatic text styling |
| [COMPONENTS.md](./COMPONENTS.md) | Full component reference with props, variants, and usage examples |
| [DESIGN_PATTERNS.md](./DESIGN_PATTERNS.md) | **For Design Engineers** — UX patterns, layout composition, visual design principles |

## Quick Import Reference

```typescript
// Core imports
import {
  // Theme
  ThemeProvider,
  useTheme,
  useThemeTokens,
  
  // Components
  Button,
  Badge,
  Callout,
  Card,
  Checkbox,
  Dialog,
  Heading,
  IconButton,
  Progress,
  RadioGroup,
  Select,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tabs,
  Text,
  TextArea,
  TextField,
  Tooltip,
  
  // Types
  type AccentColor,
  type Color,
  type SemanticColor,
} from '@frosted-ui/react-native';
```

## Key Principles

### Component Usage
1. **Use Frosted UI's Text** — Always use `<Text>` from `@frosted-ui/react-native`, not React Native's default
2. **Text auto-styles in components** — `<Text>` inside `Button`, `Badge`, `Callout` etc. automatically gets correct size and color
3. **Use semantic colors** — `danger`, `warning`, `success`, `info` instead of explicit color names for status indicators
4. **Default to accent** — Most components default to the app's accent color; only override when semantically meaningful

### Button Hierarchy
5. **Primary action** — `variant="solid"` (one per view)
6. **Secondary action** — `variant="soft" color="gray"`
7. **Toolbar/neutral** — `variant="surface"` (pairs with form inputs)
8. **Tertiary/inline** — `variant="ghost"`

### Visual Design
9. **Theme-aware** — All colors automatically adapt to light/dark mode
10. **Consistent spacing** — Use 4, 8, 12, 16, 24, 32px scale for gaps and padding
11. **Accessible** — Color combinations are designed to meet WCAG contrast requirements

## App Structure Template

```tsx
import { ThemeProvider, PortalHost } from '@frosted-ui/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider accentColor="blue">
        {/* Your app content */}
        <PortalHost />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
```

