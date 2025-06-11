# Frosted UI Color System

A comprehensive color system built on [Radix Colors](https://www.radix-ui.com/colors) with 12-step color scales, supporting both CSS custom properties and Tailwind CSS classes.

## Overview

The Frosted UI color system provides:

- **12-step color scales** for consistent color usage
- **Light and dark mode** support
- **Alpha variants** for transparency effects
- **CSS custom properties** and **Tailwind classes**
- **Automatic gray pairing** with accent colors
- **Surface colors** for background effects

## Key Features

### 🎯 Accessibility Made Easy

Text colors are **guaranteed to pass target contrast ratios** against the corresponding background colors, ensuring your UI meets accessibility standards without manual testing.

### 🌙 Automatic Dark Mode

Switching to dark theme is as simple as applying a class to a container. **Dark mode Just Works™** - all colors automatically adapt with proper contrast and appearance.

**How it works:** The Tailwind plugin is configured with `darkMode: 'class'` and all color definitions use CSS custom properties that automatically change their values when `.dark` or `.dark-theme` classes are applied to a parent container.

### 🔍 Transparent Variants

Each scale has a **matching alpha color variant**, which is handy for UI components that need to blend into colored backgrounds or create overlay effects.

### 📊 APCA Text Contrast

Contrast targets are based on the **modern APCA contrast algorithm**, which accurately predicts how human vision perceives text, providing better accessibility than traditional contrast methods.

### 🎨 P3 Color Gamut Support

Accounts for the blending differences in **wide gamut color spaces** and enables the brightest yellows and reds possible on modern displays.

### 🎛️ Designed for User Interfaces

**Each step is designed with a specific use case in mind**, such as backgrounds, hover states, borders, overlays, or text - eliminating guesswork in color selection.

## Color Categories

### Accent Colors

**Regular Colors:** tomato, red, ruby, crimson, pink, plum, purple, violet, iris, cyan, teal, jade, green, grass, brown, blue, orange, indigo

**Bright Colors:** sky, mint, yellow, amber, lime, lemon, magenta

**Metal Colors:** gold, bronze

### Gray Colors

**Pure:** gray

**Desaturated:** mauve, slate, sage, olive, sand

### Semantic Colors

- **Info:** `sky` (default), `blue`
- **Success:** `green` (default), `teal`, `jade`, `grass`
- **Warning:** `amber` (default), `yellow`
- **Danger:** `red` (default), `tomato`, `ruby`

## 12-Step Color Scale

Each color follows the [Radix Colors scale system](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale) with specific use cases for each step:

| Step | Use Case                                |
| ---- | --------------------------------------- |
| 1    | App background                          |
| 2    | Subtle background                       |
| 3    | UI element background                   |
| 4    | Hovered UI element background           |
| 5    | Active / Selected UI element background |
| 6    | Subtle borders and separators           |
| 7    | UI element border and focus rings       |
| 8    | Hovered UI element border               |
| 9    | Solid backgrounds                       |
| 10   | Hovered solid backgrounds               |
| 11   | Low-contrast text                       |
| 12   | High-contrast text                      |

### Scale Groups:

- **Steps 1-2:** Backgrounds (app and subtle component backgrounds)
- **Steps 3-5:** Component backgrounds (normal, hover, active/selected states)
- **Steps 6-8:** Borders (subtle, interactive, hovered interactive)
- **Steps 9-10:** Solid backgrounds (normal and hover states)
- **Steps 11-12:** Text (low and high contrast)

## Usage with CSS Custom Properties

### Basic Color Usage

```css
/* Accent colors */
color: var(--accent-9); /* Solid color */
color: var(--accent-11); /* Low-contrast text */
color: var(--accent-12); /* High-contrast text */

/* Specific color */
color: var(--blue-9); /* Blue solid */
background: var(--blue-3); /* Blue background */
border: var(--blue-6); /* Blue border */

/* Gray colors */
color: var(--gray-12); /* High-contrast gray text */
background: var(--gray-2); /* Gray background */
```

### Alpha Variants (Transparency)

```css
/* Alpha variants for overlays */
background: var(--accent-a5); /* Semi-transparent accent */
background: var(--blue-a8); /* Semi-transparent blue */
background: var(--black-a6); /* Semi-transparent black */
background: var(--white-a9); /* Semi-transparent white */
```

### Surface Colors

```css
/* Surface colors for frosted glass effects */
background: var(--color-surface-accent); /* Accent surface */
background: var(--blue-surface); /* Blue surface */
background: var(--gray-surface); /* Gray surface */
```

### Semantic Colors

```css
/* Pre-defined semantic colors */
background: var(--color-background); /* App background */
background: var(--color-panel-solid); /* Panel background */
background: var(--color-panel-translucent); /* Translucent panel */
border: var(--color-stroke); /* Border color */
background: var(--color-overlay); /* Modal overlay */
```

## Usage with Tailwind CSS

### Basic Colors

```html
<!-- Accent colors -->
<div class="bg-accent-3 text-accent-11 border-accent-6">Accent colored component</div>

<!-- Specific colors -->
<div class="bg-blue-2 text-blue-12 border-blue-7">Blue component</div>

<!-- Gray colors -->
<div class="bg-gray-1 text-gray-12 border-gray-5">Gray component</div>
```

### Alpha Variants

```html
<!-- Semi-transparent backgrounds -->
<div class="bg-accent-a5">Semi-transparent accent</div>
<div class="bg-blue-a8">Semi-transparent blue overlay</div>
<div class="bg-black-a6">Semi-transparent black overlay</div>
```

### Surface Colors

```html
<!-- Surface backgrounds -->
<div class="bg-surface-accent">Accent surface</div>
<div class="bg-blue-surface">Blue surface</div>
```

### Semantic Backgrounds

```html
<!-- Semantic colors -->
<div class="bg-background">App background</div>
<div class="bg-panel-solid">Solid panel</div>
<div class="bg-panel-translucent">Translucent panel</div>
```

### Contrast Colors

```html
<!-- Always use built-in contrast colors for step 9 backgrounds -->
<div class="bg-blue-9 text-blue-9-contrast">Blue button with optimal contrast</div>
<div class="bg-yellow-9 text-yellow-9-contrast">Yellow button with optimal contrast</div>
<div class="bg-accent-9 text-accent-9-contrast">Accent button with optimal contrast</div>
<div class="bg-red-9 text-red-9-contrast">Red button with optimal contrast</div>
```

## Theme Configuration

### Whop Defaults

At Whop, the default configuration is:

- **Default gray color:** `gray`
- **Default accent color:** `blue`

These defaults provide a clean, professional appearance that works well for most applications.

### Setting Accent Color

```html
<!-- Using data attributes -->
<div data-accent-color="blue" class="frosted-ui">
  <!-- All accent- classes will use blue -->
</div>
```

### Setting Gray Color

```html
<!-- Using data attributes -->
<div data-gray-color="slate" class="frosted-ui">
  <!-- All gray- classes will use slate -->
</div>
```

### Dark Mode

```html
<!-- Dark mode using class -->
<div class="dark frosted-ui">
  <!-- Dark mode colors -->
</div>

<!-- Or using data attribute -->
<div class="dark-theme frosted-ui">
  <!-- Dark mode colors -->
</div>
```

### Setting Semantic Colors

```html
<!-- Configure semantic colors -->
<div
  class="frosted-ui"
  data-danger-color="tomato"
  data-warning-color="yellow"
  data-success-color="jade"
  data-info-color="blue"
>
  <!-- Semantic colors will use the specified variants -->
</div>
```

## Semantic Colors

Semantic colors provide consistent meaning across your application with dedicated color scales for common UI states.

### Available Semantic Colors

Each semantic color works exactly like regular colors with all 12 steps, alpha variants, surfaces, and contrast colors:

#### Danger (Default: `red`)

```html
<!-- CSS Custom Properties -->
<div style="background: var(--danger-9); color: var(--danger-9-contrast)">Danger</div>
<div style="background: var(--danger-3); color: var(--danger-12)">Danger background</div>

<!-- Tailwind Classes -->
<div class="bg-danger-9 text-danger-9-contrast">Danger button</div>
<div class="bg-danger-3 text-danger-12 border-danger-6">Danger background</div>
```

**Available variants:** `red` (default), `tomato`, `ruby`

#### Warning (Default: `amber`)

```html
<!-- CSS Custom Properties -->
<div style="background: var(--warning-9); color: var(--warning-9-contrast)">Warning</div>

<!-- Tailwind Classes -->
<div class="bg-warning-9 text-warning-9-contrast">Warning button</div>
```

**Available variants:** `amber` (default), `yellow`

#### Success (Default: `green`)

```html
<!-- CSS Custom Properties -->
<div style="background: var(--success-9); color: var(--success-9-contrast)">Success</div>

<!-- Tailwind Classes -->
<div class="bg-success-9 text-success-9-contrast">Success button</div>
```

**Available variants:** `green` (default), `teal`, `jade`, `grass`

#### Info (Default: `sky`)

```html
<!-- CSS Custom Properties -->
<div style="background: var(--info-9); color: var(--info-9-contrast)">Info</div>

<!-- Tailwind Classes -->
<div class="bg-info-9 text-info-9-contrast">Info button</div>
```

**Available variants:** `sky` (default), `blue`

### Using Semantic Colors as Accent

You can also use semantic colors as your accent color:

```html
<!-- Use danger as accent color -->
<div class="frosted-ui" data-accent-color="danger">
  <button class="bg-accent-9 text-accent-9-contrast">Now uses danger color</button>
</div>

<!-- Use success as accent color -->
<div class="frosted-ui" data-accent-color="success">
  <button class="bg-accent-9 text-accent-9-contrast">Now uses success color</button>
</div>
```

### Complete Semantic Example

```html
<div class="frosted-ui" data-danger-color="tomato" data-success-color="jade">
  <!-- Error message -->
  <div class="bg-danger-2 border border-danger-6 text-danger-11 p-4 rounded">
    <strong class="text-danger-12">Error:</strong> Something went wrong
  </div>

  <!-- Success message -->
  <div class="bg-success-2 border border-success-6 text-success-11 p-4 rounded">
    <strong class="text-success-12">Success:</strong> Operation completed
  </div>

  <!-- Action buttons -->
  <button class="bg-danger-9 text-danger-9-contrast px-4 py-2 rounded">Delete</button>
  <button class="bg-success-9 text-success-9-contrast px-4 py-2 rounded">Save</button>
</div>
```

## Complete Example

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="frosted-ui.css" />
  </head>
  <body>
    <!-- Light theme with blue accent and slate gray -->
    <div class="frosted-ui" data-accent-color="blue" data-gray-color="slate">
      <!-- App background -->
      <div class="bg-background min-h-screen">
        <!-- Panel with frosted glass effect -->
        <div class="bg-panel-translucent backdrop-blur-xl p-6 rounded-lg">
          <!-- Primary button -->
          <button class="bg-accent-9 text-accent-9-contrast hover:bg-accent-10 px-4 py-2 rounded">
            Primary Action
          </button>

          <!-- Secondary button -->
          <button class="bg-gray-3 text-gray-12 hover:bg-gray-4 border border-gray-6 px-4 py-2 rounded">
            Secondary Action
          </button>

          <!-- Text with proper contrast -->
          <p class="text-gray-12">High contrast text</p>
          <p class="text-gray-11">Lower contrast text</p>

          <!-- Accent text -->
          <p class="text-accent-11">Accent colored text</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Available Color Names

### All Accent Colors

`tomato`, `red`, `ruby`, `crimson`, `pink`, `plum`, `purple`, `violet`, `iris`, `cyan`, `teal`, `jade`, `green`, `grass`, `brown`, `blue`, `orange`, `indigo`, `sky`, `mint`, `yellow`, `amber`, `lime`, `lemon`, `magenta`, `gold`, `bronze`

### All Gray Colors

`gray`, `mauve`, `slate`, `sage`, `olive`, `sand`

## Color Scale Steps

For any color, you can use steps 1-12:

- **CSS:** `var(--blue-1)` through `var(--blue-12)`
- **Tailwind:** `bg-blue-1` through `bg-blue-12`

## Alpha Variants

For transparency, use alpha variants:

- **CSS:** `var(--blue-a1)` through `var(--blue-a12)`
- **Tailwind:** `bg-blue-a1` through `bg-blue-a12`

## Important Contrast Information

### Text on Solid Backgrounds (Step 9)

Each color has a built-in `--[color]-9-contrast` token that provides the optimal contrast text color for step 9 backgrounds. **Always use these contrast tokens** instead of manually choosing white or black.

```html
<!-- ✅ RECOMMENDED: Use built-in contrast colors -->
<div class="bg-blue-9 text-blue-9-contrast">Blue with optimal contrast</div>
<div class="bg-yellow-9 text-yellow-9-contrast">Yellow with optimal contrast</div>
<div class="bg-accent-9 text-accent-9-contrast">Accent with optimal contrast</div>
<div class="bg-red-9 text-red-9-contrast">Red with optimal contrast</div>
<div class="bg-mint-9 text-mint-9-contrast">Mint with optimal contrast</div>

<!-- ❌ AVOID: Manual white/black selection -->
<div class="bg-yellow-9 text-black">Avoid manual color selection</div>
<div class="bg-blue-9 text-white">Let the system handle contrast</div>
```

```css
/* CSS Custom Properties */
background: var(--blue-9);
color: var(--blue-9-contrast); /* Automatically white */

background: var(--yellow-9);
color: var(--yellow-9-contrast); /* Automatically dark */

background: var(--accent-9);
color: var(--accent-9-contrast); /* Optimal for any accent color */
```

**Background:** Most step 9 colors use white text, but `sky`, `mint`, `lime`, `yellow`, and `amber` require dark text. The contrast tokens handle this automatically.

### Guaranteed Contrast

Steps 11 and 12 (text colors) are guaranteed to meet **Lc 60 and Lc 90 APCA contrast ratios** respectively on step 2 backgrounds from the same scale. APCA (Advanced Perceptual Contrast Algorithm) is a modern contrast algorithm that more accurately predicts how human vision perceives text contrast compared to traditional WCAG methods.

## Best Practices

1. **Use step 1-2** for app and component backgrounds
2. **Use step 3-5** for interactive component backgrounds (normal, hover, active)
3. **Use step 6-8** for borders (subtle, interactive, hover)
4. **Use step 9-10** for solid backgrounds (normal, hover)
5. **Use step 11-12** for text (low-contrast, high-contrast)
6. **Use alpha variants** for overlays and transparent effects
7. **Use surface colors** for frosted glass effects
8. **Use accent colors** for primary actions and brand elements
9. **Use gray colors** for neutral elements

## Automatic Gray Pairing

The system automatically pairs accent colors with appropriate gray scales:

- Red family colors → `mauve` gray
- Blue family colors → `slate` gray
- Green family colors → `sage` gray
- Yellow family colors → `sand` gray
- Purple family colors → `gray` (pure)

This ensures visual harmony when using `accent-` and `gray-` classes together.

## How Automatic Dark Mode Works with Tailwind

The Frosted UI Tailwind plugin implements automatic dark mode through a powerful combination of CSS custom properties and Tailwind's class-based dark mode system.

### Plugin Configuration

The plugin is configured with:

```javascript
return {
  darkMode: 'class', // Uses class-based dark mode
  theme: {
    colors: {
      // All colors map to CSS custom properties
      blue: {
        1: 'var(--blue-1)',
        2: 'var(--blue-2)',
        // ... all 12 steps
        '9-contrast': 'var(--blue-9-contrast)',
        surface: 'var(--blue-surface)',
      },
      // Same pattern for all colors
    },
  },
};
```

### CSS Custom Properties Layer

The underlying CSS automatically switches color values based on dark mode classes:

```css
/* Light mode (default) */
:where(.frosted-ui) {
  --color-background: white;
  --color-panel-solid: white;
  --blue-1: #fbfdff;
  --blue-9: #0090ff;
}

/* Dark mode (when .dark or .dark-theme is applied) */
:is(.dark, .dark-theme),
:is(.dark, .dark-theme) :where(.frosted-ui:not(.light, .light-theme)) {
  --color-background: var(--gray-1);
  --color-panel-solid: var(--gray-2);
  --blue-1: #0f1419;
  --blue-9: #0090ff;
}
```

### Tailwind Class Behavior

This means **the exact same Tailwind classes work in both light and dark mode**:

```html
<!-- These classes automatically adapt to light/dark mode -->
<div class="bg-background text-gray-12">App background with high-contrast text</div>

<button class="bg-blue-9 text-blue-9-contrast">Button that works in both modes</button>

<div class="bg-panel-translucent">Panel with frosted glass effect</div>
```

### Automatic Dark Mode Styling

**When you style with the Frosted UI Tailwind plugin, for the most part there's no need to style the dark mode because our color system is automatic.** Unlike traditional Tailwind dark mode that requires manual styling for every color change:

```html
<!-- ❌ Traditional Tailwind approach -->
<div class="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700">
  Manual dark mode styling required
</div>

<!-- ✅ Frosted UI approach - same classes work in both modes -->
<div class="bg-background text-gray-12 border-gray-6">Dark mode works automatically - no extra styling needed!</div>
```

**Key insight:** You write your Tailwind classes once using Frosted UI colors, and they automatically adapt to both light and dark themes without any additional styling.

### Activation

Simply apply the dark mode class to any parent container:

```html
<!-- Light mode -->
<div class="frosted-ui">
  <div class="bg-background">Light background</div>
</div>

<!-- Dark mode -->
<div class="frosted-ui dark">
  <div class="bg-background">Dark background (automatically)</div>
</div>
```

### Key Benefits for Developers

1. **Automatic dark mode** - For the most part, dark mode works out of the box without any additional styling
2. **Write once, works everywhere** - Same Tailwind classes automatically adapt to both light and dark modes
3. **Simplified workflow** - Focus on design, not dark mode implementation details
4. **Automatic contrast** - All color relationships and accessibility standards are preserved
5. **Simple activation** - Just add/remove one class to switch modes
6. **Nested control** - Can mix light/dark areas with `.light-theme` overrides
7. **Framework agnostic** - Works with any JavaScript framework or vanilla HTML

This approach eliminates the complexity of managing separate light and dark color schemes while ensuring perfect visual consistency and accessibility in both modes.
