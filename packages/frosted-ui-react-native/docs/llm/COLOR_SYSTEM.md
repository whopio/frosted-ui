# Frosted UI Color System

> **For AI/LLM Code Generation**: This document explains the Frosted UI color system for React Native. Follow these guidelines exactly to produce consistent, accessible, and beautiful UIs.

## Overview

Frosted UI uses a **semantic color system** built on 12-step color palettes based on [Radix Colors](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale). Each color has solid shades (1-12) and alpha/transparent shades (a1-a12). Colors are theme-aware and automatically adapt to light and dark modes.

---

## Color Types

### AccentColor (27 Named Colors)

These are the core palette colors available in the design system:

```typescript
type AccentColor =
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson' // Reds
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet' // Purples/Pinks
  | 'iris'
  | 'indigo' // Indigos
  | 'blue'
  | 'cyan'
  | 'sky' // Blues
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'mint' // Greens
  | 'lime'
  | 'lemon'
  | 'yellow'
  | 'amber' // Yellows
  | 'orange' // Orange
  | 'brown'
  | 'gold'
  | 'bronze' // Browns
  | 'magenta' // Magenta
  | 'gray'; // Neutral
```

### SemanticColor (Contextual Meaning)

Semantic colors map to accent colors based on app configuration:

```typescript
type SemanticColor = 'danger' | 'warning' | 'success' | 'info';
```

**Default mappings:**

- `danger` → `red` (alternatives: `tomato`, `ruby`)
- `warning` → `amber` (alternative: `yellow`)
- `success` → `green` (alternatives: `teal`, `jade`, `grass`)
- `info` → `sky` (alternative: `blue`)

### DynamicAccentColor

```typescript
type DynamicAccentColor = 'accent';
```

The special `'accent'` color uses the app's configured accent color from `ThemeProvider`. **This is the default for most components.**

### Color (Union Type)

```typescript
type Color = AccentColor | SemanticColor | DynamicAccentColor;
```

This is what component `color` props accept.

---

## Color Palette Structure

Frosted UI's color system is based on [Radix Colors](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale). Each palette has 12 steps, where each step was designed for specific use cases.

### Quick Reference Table

| Step         | Primary Use Case                        |
| ------------ | --------------------------------------- |
| `1`          | Very subtle background                  |
| `2`          | Subtle background                       |
| `3`          | UI element background                   |
| `4`          | Hovered UI element background           |
| `5`          | Active / Selected UI element background |
| `6`          | Subtle borders and separators           |
| `7`          | UI element border and focus rings       |
| `8`          | Hovered UI element border               |
| `9`          | Solid backgrounds                       |
| `10`         | Hovered solid backgrounds               |
| `11`         | Low-contrast text                       |
| `12`         | High-contrast text                      |
| `9-contrast` | Text color designed for use ON shade 9  |

---

### Steps 1–2: Backgrounds

Step `2` is designed for app backgrounds and subtle component backgrounds.

**Appropriate use cases:**

- Striped table background (alternating rows)
- Code block background
- Card background
- Sidebar background
- Canvas area background
- Section backgrounds

```typescript
// Main app background
backgroundColor: colors.background; // Uses white in light mode and gray['1'] in dark mode

// Subtle colored background for a section
backgroundColor: gray['2']; // or palette['2']

// Card with subtle tint
backgroundColor: palette.a2;
```

---

### Steps 3–5: Component Backgrounds

Steps `3`, `4`, and `5` are designed for interactive UI component backgrounds.

| Step | State                             |
| ---- | --------------------------------- |
| `3`  | **Default** state                 |
| `4`  | **Hover** state                   |
| `5`  | **Pressed** or **Selected** state |

```typescript
// Interactive list item
const listItemStyle = {
  backgroundColor: isSelected
    ? palette.a5 // Selected
    : isHovered
      ? palette.a4 // Hover
      : palette.a3, // Default
};

// If component has transparent default state, use 3 for hover
const ghostButtonHover = {
  backgroundColor: isHovered ? palette.a3 : 'transparent',
};
```

**Important:** Steps `11` and `12` (text colors) are guaranteed to have sufficient contrast when used on step `2`, `3`, `4` and `5` backgrounds from the same scale.

---

### Steps 6–8: Borders

Steps `6`, `7`, and `8` are designed for borders and separators.

| Step | Use Case                                                                                      |
| ---- | --------------------------------------------------------------------------------------------- |
| `6`  | Subtle borders on **non-interactive** elements (cards, alerts, separators, sidebars, headers) |
| `7`  | Subtle borders on **interactive** elements (buttons, inputs)                                  |
| `8`  | **Stronger** borders on interactive elements, **focus rings**                                 |

```typescript
// Non-interactive card border - use the stroke token
borderColor: colors.stroke;

// Interactive input border
borderColor: isFocused ? palette.a8 : isHovered ? gray.a7 : colors.stroke;

// Separator/divider - use the stroke token
backgroundColor: colors.stroke;

// Focus ring (accessibility critical!)
outlineColor: palette.a8;
```

---

### Steps 9–10: Solid Backgrounds

Steps `9` and `10` are designed for solid, high-chroma backgrounds.

**Step `9` is the purest step**—it has the highest chroma (color saturation) with the least amount of white or black mixed in. This makes it ideal for:

- Solid button backgrounds
- Website/App section backgrounds
- Header backgrounds
- Badge backgrounds
- Progress bar fills
- Graphics and logos
- Accent borders
- Colored shadows

**Step `10`** is designed for hover states where step `9` is the default.

```typescript
// Solid button
const solidButtonStyle = {
  backgroundColor: isPressed
    ? palette['10'] // with brightness filter
    : isHovered
      ? palette['10']
      : palette['9'],
};

// Progress bar indicator
backgroundColor: palette['9'];

// Checkbox when checked
backgroundColor: palette['9'];
```

#### Contrast Text on Step 9

Most colors use **white** text on step 9. However, these lighter colors require **dark** text:

| Color     | `9-contrast` value |
| --------- | ------------------ |
| `sky`     | Dark (`#1C2024`)   |
| `mint`    | Dark (`#1A211E`)   |
| `lime`    | Dark (`#162715`)   |
| `yellow`  | Dark (`#21201C`)   |
| `amber`   | Dark (`#21201C`)   |
| `lemon`   | Dark (`#20240D`)   |
| `magenta` | Dark (`#141212`)   |

**Always use `palette['9-contrast']`** for text on solid backgrounds—never assume white will work.

```tsx
// ✅ Correct: Use 9-contrast
<View style={{ backgroundColor: palette['9'] }}>
  <Text style={{ color: palette['9-contrast'] }}>Always readable</Text>
</View>

// ❌ Wrong: Hardcoded white fails on yellow, amber, sky, etc.
<View style={{ backgroundColor: palette['9'] }}>
  <Text style={{ color: 'white' }}>May be unreadable!</Text>
</View>
```

---

### Steps 11–12: Text

Steps `11` and `12` are designed for text.

| Step | Use Case                                   | Contrast Level       |
| ---- | ------------------------------------------ | -------------------- |
| `11` | Low-contrast text, secondary text, icons   | APCA Lc 60 on step 2 |
| `12` | High-contrast text, primary text, headings | APCA Lc 90 on step 2 |

```typescript
// Primary text (high contrast)
color: gray['12'];

// Secondary text (lower contrast but still accessible)
color: gray['11']; // or gray.a11

// Tertiary text
color: gray['10']; // or gray.a10

// Colored text that's accessible
color: palette['11']; // or palette.a11

// Icon color (matches low-contrast text)
color: palette.a11;
```

---

### Alpha Shades (Transparent Variants)

Every solid shade has a corresponding alpha (transparent) shade: `a1`, `a2`, `a3`... `a12`.

**When to use alpha shades:**

| Prefer Alpha (`aX`)              | Prefer Solid (`X`)               |
| -------------------------------- | -------------------------------- |
| Overlays on images/gradients     | Standalone solid surfaces        |
| Soft/ghost component backgrounds | Solid buttons                    |
| Borders (blend better)           | When exact color matching needed |
| Layered UI elements              |                                  |

```typescript
// ✅ Alpha shades blend naturally over any background
backgroundColor: palette.a3; // Soft button bg
borderColor: palette.a6; // Border

// ✅ Solid shades for pure solid fills
backgroundColor: palette['9']; // Solid button
```

**Key insight:** Alpha shades produce more natural, less jarring results when layered over varied backgrounds (images, gradients, other colors).

---

### Black & White Alpha Palettes

In addition to colored palettes, Frosted UI provides `black` and `white` alpha-only palettes for overlays and universal transparency effects:

```typescript
colors.palettes.black.a1; // through a12 - black with increasing opacity
colors.palettes.white.a1; // through a12 - white with increasing opacity

// Example: Overlay for modal backdrop
backgroundColor: colors.palettes.black.a6; // Semi-transparent black overlay
```

---

## Component Variants & Color Usage

### Automatic Text Colors

**Components automatically style their child `<Text>` elements.** When you pass `<Text>` as a child to components like `Button`, `Badge`, `Callout`, etc., the text color is automatically set based on the component's `color` and `variant` props.

```tsx
// ✅ Text automatically gets the correct color - no manual styling needed
<Button color="danger" variant="solid">
  <Text>Delete Account</Text>
</Button>

<Badge color="success" variant="soft">
  <Text>Completed</Text>
</Badge>

<Callout.Root color="warning">
  <Callout.Text>
    <Text>Please review before proceeding</Text>
  </Callout.Text>
</Callout.Root>
```

**Do NOT manually override text colors inside components** unless you have a specific design requirement. The component handles contrast and accessibility automatically.

```tsx
// ❌ Bad: Unnecessary manual color override
<Button color="accent" variant="solid">
  <Text style={{ color: 'white' }}>Submit</Text>
</Button>

// ✅ Good: Let Button handle text color automatically
<Button color="accent" variant="solid">
  <Text>Submit</Text>
</Button>
```

---

### The Standard Variants

Many components support these variants. Here's how they use color:

#### 1. `solid` — High-emphasis, primary actions

```typescript
{
  backgroundColor: palette['9'],           // Primary color
  color: palette['9-contrast'],            // Contrast text (white or dark)
}
// Hover: palette['10']
// Pressed: palette['10'] with brightness(0.92) filter
```

#### 2. `soft` — Medium-emphasis, secondary actions

```typescript
{
  backgroundColor: palette.a3,             // Subtle transparent background
  color: palette.a11 || palette['11'],     // Readable text
}
// Hover: palette.a4
// Pressed: palette.a5
```

#### 3. `surface` — Low-emphasis, neutral containers

```typescript
{
  backgroundColor: palette.a2,             // Very subtle background
  borderColor: palette.a6 || palette.a7,   // Visible border
  borderWidth: 1,
  color: palette.a11,                      // Text
}
// Often used with panelSolid background and gray borders
```

#### 4. `outline` — Minimal, text-only with border

```typescript
{
  backgroundColor: 'transparent',
  borderColor: palette.a7 || palette.a8,
  borderWidth: 1,
  color: palette.a11,
}
```

#### 5. `ghost` — No background, just text

```typescript
{
  backgroundColor: 'transparent',          // Or palette.a3 on hover
  color: palette.a11,
}
// Hover: palette.a3
// Pressed: palette.a4
```

---

## Common Patterns

### Focus Rings

Always use `a8` for focus outlines:

```typescript
const focusStyle = focused
  ? {
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: palette.a8,
      outlineOffset: 2,
    }
  : undefined;
```

### Disabled States

Use gray palette with alpha shades:

```typescript
const disabledStyle = {
  backgroundColor: gray.a3,
  color: gray.a8, // Dimmed text
};
```

### Text Colors

```typescript
// Default text (no color specified)
color: gray['12']; // High contrast foreground

// Secondary text
color: gray.a11;

// Tertiary text (placeholders, descriptions)
color: gray.a10;

// Colored, accessible text
color: palette.a11; // Or palette['11']

// Text on solid backgrounds
color: palette['9-contrast']; // White or dark based on palette, designed to be readable on palette['9'] shade.
```

### Borders & Separators

**Use `colors.stroke` for default gray borders and separators.** This is a pre-defined semantic token that provides the correct gray border color for the current theme.

```typescript
// Default border/separator - USE THIS for gray borders
borderColor: colors.stroke; // Pre-defined semantic token (gray.a5 in light, gray.a4 in dark)

// Separator component
backgroundColor: colors.stroke;

// Colored separator (when you need a tinted separator)
backgroundColor: palette.a6;

// Input border states
borderColor: colors.stroke; // Default - use the stroke token
borderColor: gray.a7; // Hover
borderColor: palette.a8; // Focus
```

**Important:** Prefer `colors.stroke` over manually using `gray.a5` or `gray.a6` for default borders. The stroke token ensures consistency across the design system.

### Theme Surface & Stroke Tokens

```typescript
// Screen background (the default app background color)
colors.background; // 'white' in light, gray['1'] in dark

// Panel/Card solid
colors.panelSolid; // Elevated surface, used for bottom sheets, side drawers, dialogs, popovers, dropdowns.

// Panel translucent (with backdrop blur)
colors.panelTranslucent; // Semi-transparent. Used for bottom sheets, side drawers, dialogs, popovers, dropdowns, but needs to be combined with backdrop blur

// Surface (subtle overlay)
colors.surface; // Used in text field, text area background color in a 'surface' variant

// Default border/separator color (IMPORTANT - use this for gray borders!)
colors.stroke; // gray.a5 in light, gray.a4 in dark - use for separators, card borders, input borders
```

---

## Accessing Colors in Components

### Using `useThemeTokens`

```typescript
import { useThemeTokens } from '@frosted-ui/react-native';

function MyComponent({ color }: { color?: Color }) {
  const { colors, isDark } = useThemeTokens();

  // Get the palette for the specified color (defaults to 'accent')
  const palette = colors.palettes[color ?? 'accent'];

  // Gray is always available for neutral/disabled states
  const gray = colors.palettes.gray;

  // Theme surfaces and stroke
  const background = colors.background;
  const panelBg = colors.panelSolid;
  const borderColor = colors.stroke; // Use for default gray borders

  return (
    <View
      style={{
        backgroundColor: palette.a3,
        borderColor: colors.stroke, // Use stroke token for gray borders
        borderWidth: 1,
      }}>
      <Text style={{ color: palette['11'] }}>Hello</Text>
    </View>
  );
}
```

### Semantic Colors Are Pre-resolved

`useThemeTokens` automatically adds semantic palettes:

```typescript
const { colors } = useThemeTokens();

// These work automatically:
colors.palettes.accent; // → The app's accent color palette
colors.palettes.danger; // → The app's danger color palette
colors.palettes.warning; // → The app's warning color palette
colors.palettes.success; // → The app's success color palette
colors.palettes.info; // → The app's info color palette
```

---

## ThemeProvider Configuration

Apps wrap their root in `ThemeProvider` to set colors:

```tsx
<ThemeProvider
  accentColor="purple" // Default: 'blue'
  dangerColor="tomato" // Default: 'red' (must be: tomato | red | ruby)
  warningColor="yellow" // Default: 'amber' (must be: yellow | amber)
  successColor="teal" // Default: 'green' (must be: teal | jade | green | grass)
  infoColor="blue" // Default: 'sky' (must be: blue | sky)
>
  <App />
</ThemeProvider>
```

---

## ✅ DO's

### Use semantic colors for status/feedback

```tsx
// ✅ Good: Uses semantic 'danger' - adapts to app config
<Button color="danger">Delete</Button>
<Badge color="success">Completed</Badge>
<Callout color="warning">
  <Text>Please review before proceeding</Text>
</Callout>
```

### Default to 'accent' (or omit color prop)

```tsx
// ✅ Good: Uses app's accent color
<Button>Submit</Button>
<Button color="accent">Submit</Button>  // Explicit but same result
```

### Use alpha shades for overlays and soft backgrounds

```tsx
// ✅ Good: Transparent shades blend naturally
backgroundColor: palette.a3;
borderColor: palette.a6;
```

### Use gray for neutral/disabled states

```tsx
// ✅ Good: Consistent disabled appearance
const disabledTextColor = gray.a8;
const disabledBackground = gray.a3;
```

### Use '9-contrast' for text on solid backgrounds

```tsx
// ✅ Good: Ensures readable text on any solid color
<View style={{ backgroundColor: palette['9'] }}>
  <Text style={{ color: palette['9-contrast'] }}>Visible</Text>
</View>
```

### Respect variant conventions

```tsx
// ✅ Good: Each variant has a specific visual weight
<Button variant="solid">Primary Action</Button>   // High emphasis
<Button variant="soft">Secondary</Button>         // Medium emphasis
<Button variant="ghost">Tertiary</Button>         // Low emphasis
```

### Use the correct shade for each interaction state

```tsx
// ✅ Good: Follows the 3-4-5 pattern for component states
const bgColor = isSelected
  ? palette.a5 // Selected/Active
  : isHovered
    ? palette.a4 // Hover
    : palette.a3; // Default
```

---

## ❌ DON'Ts

### Don't hardcode color values

```tsx
// ❌ Bad: Hardcoded colors break theming
<View style={{ backgroundColor: '#3B82F6' }}>

// ✅ Good: Use palette shades
<View style={{ backgroundColor: palette['9'] }}>
```

### Don't mix shade numbers arbitrarily

```tsx
// ❌ Bad: Random shade numbers create visual inconsistency
backgroundColor: palette['4']; // Why 4? Use established patterns

// ✅ Good: Follow the variant patterns
backgroundColor: palette.a3; // Soft background (established pattern)
backgroundColor: palette['9']; // Solid background (established pattern)
```

### Don't use solid shades where alpha shades work better

```tsx
// ❌ Bad: Solid shade may look harsh over images/gradients
backgroundColor: palette['3'];

// ✅ Good: Alpha shade blends naturally
backgroundColor: palette.a3;
```

### Don't use incorrect contrast combinations

```tsx
// ❌ Bad: Low contrast, hard to read
<View style={{ backgroundColor: palette['9'] }}>
  <Text style={{ color: palette['11'] }}>Hard to read</Text>
</View>

// ✅ Good: Use the contrast color for shade 9
<View style={{ backgroundColor: palette['9'] }}>
  <Text style={{ color: palette['9-contrast'] }}>Easy to read</Text>
</View>
```

### Don't ignore the gray palette for neutral states

```tsx
// ❌ Bad: Using accent color for disabled state
const disabledColor = palette.a5;

// ✅ Good: Disabled states use gray
const disabledColor = gray.a8;
```

### Don't create custom status colors

```tsx
// ❌ Bad: Custom colors for statuses
<Badge color="tomato">Error</Badge>  // Should use semantic color

// ✅ Good: Use semantic colors for status
<Badge color="danger">Error</Badge>
```

### Don't skip focus states

```tsx
// ❌ Bad: No focus indication
<Pressable style={{ ... }}>

// ✅ Good: Include focus ring using a8
<Pressable
  style={({ focused }) => ({
    ...(focused && {
      outlineWidth: 2,
      outlineColor: palette.a8,
    })
  })}
>
```

### Don't override component colors unnecessarily

```tsx
// ❌ Bad: Overriding Button's built-in text color
<Button color="danger">
  <Text style={{ color: 'red' }}>Delete</Text>
</Button>

// ✅ Good: Let components handle their own colors
<Button color="danger">
  <Text>Delete</Text>
</Button>
```

---

## Quick Reference: Shade Cheatsheet

> **Variable definitions:**
>
> - `colors` = the return value of `useThemeTokens()` → `const { colors } = useThemeTokens();`
> - `palette` = `colors.palettes[color]` where `color` is the component's color prop (e.g., `'accent'`, `'danger'`, `'blue'`)
> - `gray` = `colors.palettes.gray` — the base neutral palette, used for text, borders, disabled states, and neutral UI elements

### Semantic Tokens (use these first)

| Use Case                   | Token               |
| -------------------------- | ------------------- |
| App background             | `colors.background` |
| Panel / card background    | `colors.panelSolid` |
| Default border / separator | `colors.stroke`     |

### Colored Elements (using `palette` from component's color)

| Use Case                       | Shade                   |
| ------------------------------ | ----------------------- |
| Subtle tinted background       | `palette.a2`            |
| Component background (default) | `palette.a3`            |
| Component background (hover)   | `palette.a4`            |
| Component background (active)  | `palette.a5`            |
| Colored border                 | `palette.a6`            |
| Interactive border (hover)     | `palette.a7`            |
| Focus ring                     | `palette.a8`            |
| Solid background               | `palette['9']`          |
| Solid background (hover)       | `palette['10']`         |
| Colored text / icon            | `palette.a11`           |
| Text on solid background       | `palette['9-contrast']` |

### Neutral / Gray Elements (using `gray` palette)

| Use Case                    | Shade        |
| --------------------------- | ------------ |
| Default foreground text     | `gray['12']` |
| Secondary text              | `gray.a11`   |
| Tertiary / placeholder text | `gray.a10`   |
| Disabled text               | `gray.a8`    |
| Disabled background         | `gray.a3`    |
| Interactive border (hover)  | `gray.a7`    |

---

## Color Accessibility Notes

- All shade 9 colors meet WCAG contrast requirements with their `9-contrast` value
- Steps `11` and `12` are guaranteed APCA Lc 60 and Lc 90 contrast respectively on step `2` backgrounds
- Some light colors (`sky`, `mint`, `yellow`, `amber`, `lemon`, `lime`, `magenta`) use dark text for `9-contrast` instead of white
- Always test color combinations in both light and dark modes
- Use semantic colors (`danger`, `warning`, `success`, `info`) for status indicators to ensure proper contrast is maintained across theme configurations
