# Frosted UI Typography System

> **For AI/LLM Code Generation**: This document explains the Frosted UI typography system for React Native. Follow these guidelines to ensure consistent, readable text across your application.

## Critical: Use Frosted UI's Text Component

**Always use `<Text>` from `@frosted-ui/react-native` instead of React Native's default `<Text>` component.**

```tsx
// ❌ WRONG: React Native's Text has no design system integration
import { Text } from 'react-native';

// ✅ CORRECT: Frosted UI's Text with typography tokens and theme awareness
import { Text } from '@frosted-ui/react-native';
```

### Why This Matters

Frosted UI's `<Text>` component:

1. **Applies typography tokens** — Consistent font sizes, line heights, and letter spacing
2. **Theme-aware colors** — Automatically uses the correct text color for light/dark mode
3. **Context-aware styling** — When placed inside components like `Button`, `Badge`, or `Callout`, text automatically receives the correct size and color
4. **Color prop support** — Accepts a `color` prop for semantic coloring

---

## Typography Scale

Frosted UI uses a 10-step typography scale (0-9). Each step defines `fontSize`, `lineHeight`, and `letterSpacing`.

| Size | Font Size | Line Height | Use Case                              |
| ---- | --------- | ----------- | ------------------------------------- |
| `0`  | 10px      | 12px        | Tiny labels, captions                 |
| `1`  | 12px      | 16px        | Small labels, helper text             |
| `2`  | 14px      | 20px        | Secondary text, descriptions          |
| `3`  | 16px      | 24px        | **Default body text** (mobile-first)  |
| `4`  | 18px      | 26px        | Small headings, emphasized text       |
| `5`  | 20px      | 28px        | Section headings                      |
| `6`  | 24px      | 30px        | **Default heading size**, page titles |
| `7`  | 28px      | 34px        | Large headings                        |
| `8`  | 32px      | 38px        | Hero headings                         |
| `9`  | 40px      | 48px        | Display text, hero sections           |

---

## Font Weights

| Weight      | Value | Use Case                                  |
| ----------- | ----- | ----------------------------------------- |
| `light`     | 300   | De-emphasized text                        |
| `regular`   | 400   | **Default for body text**                 |
| `medium`    | 500   | Labels, slightly emphasized text          |
| `semi-bold` | 600   | Sub-headings                              |
| `bold`      | 700   | **Default for headings**, strong emphasis |

---

## Typography Components

### `<Text>` — Body Text

The primary component for all text content.

```tsx
import { Text } from '@frosted-ui/react-native';

// Default body text (size="3", weight="regular", color=gray-12)
<Text>Default body text</Text>

// With size
<Text size="1">Small helper text</Text>
<Text size="2">Secondary text</Text>

// With weight
<Text weight="medium">Medium weight text</Text>
<Text weight="bold">Bold text</Text>

// With color (uses palette shade 11 for the specified color)
<Text color="blue">Blue colored text</Text>
<Text color="gray">Secondary/muted text</Text>

// Combining props
<Text size="1" weight="medium" color="gray">
  Small, medium-weight, gray text
</Text>
```

#### Text Props

| Prop     | Type                                                                | Default           | Description                               |
| -------- | ------------------------------------------------------------------- | ----------------- | ----------------------------------------- |
| `size`   | `'0'` - `'9'`                                                       | `'3'`             | Typography scale step                     |
| `weight` | `'light'` \| `'regular'` \| `'medium'` \| `'semi-bold'` \| `'bold'` | Inherited or none | Font weight                               |
| `color`  | `Color`                                                             | `gray` (shade 12) | Text color (uses shade 11 of the palette) |

---

### `<Heading>` — Headings and Titles

Use for page titles, section headings, and any hierarchical text structure.

```tsx
import { Heading } from '@frosted-ui/react-native';

// Default heading (size="6", weight="bold")
<Heading>Page Title</Heading>

// Different sizes for hierarchy
<Heading size="9">Hero Title</Heading>
<Heading size="7">Section Title</Heading>
<Heading size="5">Subsection Title</Heading>
<Heading size="4">Card Title</Heading>

// With color
<Heading color="blue">Colored Heading</Heading>

// Custom weight
<Heading size="6" weight="semi-bold">Semi-bold Heading</Heading>
```

#### Heading Props

| Prop     | Type                                                                | Default           | Description           |
| -------- | ------------------------------------------------------------------- | ----------------- | --------------------- |
| `size`   | `'0'` - `'9'`                                                       | `'6'`             | Typography scale step |
| `weight` | `'light'` \| `'regular'` \| `'medium'` \| `'semi-bold'` \| `'bold'` | `'bold'`          | Font weight           |
| `color`  | `Color`                                                             | `gray` (shade 12) | Text color            |

---

### `<Label>` — Form Labels

Use for labeling form inputs. Use `nativeID` on Label and `aria-labelledby` on the input for accessibility.

```tsx
import { Label, TextField } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ gap: 8 }}>
  <Label nativeID="email">Email address</Label>
  <TextField.Input placeholder="you@example.com" aria-labelledby="email" />
</View>

// Disabled state
<Label nativeID="disabled-field" disabled>Disabled label</Label>
```

Label uses size `2` and weight `medium` by default.

---

### `<Code>` — Inline Code

For displaying code snippets, technical values, or monospace text.

```tsx
import { Code } from '@frosted-ui/react-native';

// Default (soft variant)
<Text>Run <Code>npm install</Code> to get started</Text>

// Variants
<Code variant="soft">soft code</Code>
<Code variant="solid">solid code</Code>
<Code variant="outline">outline code</Code>
<Code variant="ghost">ghost code</Code>

// With color
<Code color="green">success</Code>
<Code color="red">error</Code>

// Sizes match the typography scale
<Code size="1">small code</Code>
<Code size="3">larger code</Code>
```

---

## Automatic Text Styling in Components

**This is a key feature:** When you place `<Text>` inside certain Frosted UI components, the text automatically receives appropriate styling.

### Components That Auto-Style Text

| Component      | Text Behavior                                            |
| -------------- | -------------------------------------------------------- |
| `Button`       | Size matches button size, color based on variant         |
| `Badge`        | Size matches badge size, color based on variant          |
| `Callout`      | Size based on callout size, color from callout's palette |
| `Tabs.Trigger` | Appropriate size and color for tab state                 |

### Example: Button

```tsx
import { Button, Text } from '@frosted-ui/react-native';

// ✅ Text automatically gets correct size and color
<Button variant="solid" color="blue" size="2">
  <Text>Submit</Text>
</Button>

// ✅ Same result - Text inherits from Button
<Button variant="soft" color="danger">
  <Text>Delete</Text>
</Button>

// ❌ DON'T manually style text inside buttons
<Button variant="solid">
  <Text style={{ color: 'white', fontSize: 14 }}>Wrong</Text>
</Button>
```

### Example: Badge

```tsx
import { Badge, Text } from '@frosted-ui/react-native';

// ✅ Text automatically styled
<Badge color="success" variant="soft">
  <Text>Completed</Text>
</Badge>

<Badge color="warning" variant="solid">
  <Text>Pending</Text>
</Badge>
```

### Example: Callout

```tsx
import { Callout, Text } from '@frosted-ui/react-native';

// ✅ Text inherits callout's color and size
<Callout.Root color="info">
  <Callout.Text>
    <Text>This text is automatically styled</Text>
  </Callout.Text>
</Callout.Root>;
```

---

## Common Typography Patterns

### Page Header

```tsx
import { Heading, Text } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ gap: 4 }}>
  <Heading size="6">Settings</Heading>
  <Text size="2" color="gray">
    Manage your account preferences
  </Text>
</View>;
```

### Section Header

```tsx
import { Heading, Text } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ gap: 4 }}>
  <Heading size="4">Notifications</Heading>
  <Text size="2" color="gray">
    Choose how you want to be notified
  </Text>
</View>;
```

### List Item with Description

```tsx
import { Text } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ gap: 2 }}>
  <Text size="2" weight="medium">
    Email notifications
  </Text>
  <Text size="1" color="gray">
    Receive updates about your account
  </Text>
</View>;
```

### Form Field

```tsx
import { Label, Text, TextField } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ gap: 8 }}>
  <Label nativeID="email">Email address</Label>
  <TextField.Input placeholder="you@example.com" aria-labelledby="email" />
  <Text size="1" color="gray">
    We'll never share your email
  </Text>
</View>;
```

For inputs with icons, use the compound pattern:

```tsx
<View style={{ gap: 8 }}>
  <Label nativeID="search">Search</Label>
  <TextField.Root>
    <TextField.Slot>
      <SearchIcon size={16} />
    </TextField.Slot>
    <TextField.Input placeholder="Search..." aria-labelledby="search" />
  </TextField.Root>
</View>
```

### Error Message

```tsx
import { Text } from '@frosted-ui/react-native';

<Text size="1" color="red">
  This field is required
</Text>;
```

### Empty State

```tsx
import { Heading, Text } from '@frosted-ui/react-native';
import { View } from 'react-native';

<View style={{ alignItems: 'center', gap: 8 }}>
  <Heading size="4">No results found</Heading>
  <Text size="2" color="gray" style={{ textAlign: 'center' }}>
    Try adjusting your search or filters
  </Text>
</View>;
```

---

## Typography Hierarchy Guidelines

### Recommended Size Pairings

| Context      | Heading Size | Body Size  | Description Size |
| ------------ | ------------ | ---------- | ---------------- |
| Hero section | `8` or `9`   | `3` or `4` | `2`              |
| Page title   | `6` or `7`   | `2` or `3` | `2`              |
| Section      | `4` or `5`   | `2`        | `1` or `2`       |
| Card         | `3` or `4`   | `2`        | `1`              |
| List item    | `2` (medium) | —          | `1`              |
| Form field   | —            | `2`        | `1`              |

### Visual Hierarchy Tips

1. **Limit heading levels** — Use 2-3 heading sizes max per screen
2. **Consistent spacing** — Use `gap: 4` between heading and description
3. **Color for hierarchy** — Use `color="gray"` for secondary/description text
4. **Weight for emphasis** — Use `weight="medium"` for labels, `weight="bold"` for headings

---

## ✅ DO's

### Use the Frosted UI Text component

```tsx
// ✅ Correct
import { Text } from '@frosted-ui/react-native';
<Text size="2">Hello world</Text>;
```

### Use semantic components

```tsx
// ✅ Use Heading for titles
<Heading size="5">Section Title</Heading>

// ✅ Use Text for body content
<Text>Body content goes here</Text>

// ✅ Use Label for form labels
<Label>Email address</Label>

// ✅ Use Code for technical content
<Text>Install with <Code>npm install</Code></Text>
```

### Let components handle text styling

```tsx
// ✅ Button handles text color and size automatically
<Button color="danger">
  <Text>Delete</Text>
</Button>
```

### Use color="gray" for secondary text

```tsx
// ✅ Gray for descriptions and helper text
<Text color="gray" size="2">
  Optional helper text
</Text>
```

---

## ❌ DON'Ts

### Don't use React Native's Text

```tsx
// ❌ Wrong
import { Text } from 'react-native';
```

### Don't manually style text inside components

```tsx
// ❌ Don't override colors in buttons/badges
<Button variant="solid">
  <Text style={{ color: 'white' }}>Submit</Text>
</Button>
```

### Don't use arbitrary font sizes

```tsx
// ❌ Don't use custom font sizes
<Text style={{ fontSize: 15 }}>Custom size</Text>

// ✅ Use the typography scale
<Text size="2">Correct size</Text>
```

### Don't skip the size prop for intentional sizing

```tsx
// ❌ Ambiguous - what size is this?
<Text>Some text</Text>

// ✅ Default size is mobile-friendly
<Text>Body text</Text> // Defaults to size="3"
```

---

## Quick Reference

### Text Sizes for Common Use Cases

| Use Case                   | Size                          |
| -------------------------- | ----------------------------- |
| Page title                 | `6` - `9` (Heading)           |
| Section title              | `4` - `5` (Heading)           |
| Card title                 | `3` - `4` (Heading)           |
| Body text                  | `3` (default)                 |
| Secondary/description text | `3` with `color="gray"`       |
| Helper text                | `1` - `2` with `color="gray"` |
| Small labels               | `1`                           |
| Tiny captions              | `0`                           |

### Default Component Styling

| Component | Default Size         | Default Weight   |
| --------- | -------------------- | ---------------- |
| `Text`    | `'3'` (mobile-first) | None (inherited) |
| `Heading` | `6`                  | `bold`           |
| `Label`   | `2`                  | `medium`         |
| `Code`    | `2`                  | None             |
