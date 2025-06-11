# Frosted UI Typography System

A comprehensive guide to using Frosted UI's typography system with React components and Tailwind CSS utilities.

## Overview

Frosted UI provides a robust typography system built on a 10-step scale (0-9) that includes coordinated font sizes, line heights, letter spacing, and weights. The system is designed for consistent, accessible typography across web applications.

## Typography Scale

### Font Sizes

The typography scale uses a 10-step system (0-9) with carefully crafted sizes:

| Step | Size | Use Case             |
| ---- | ---- | -------------------- |
| 0    | 10px | Micro text, captions |
| 1    | 12px | Small text, labels   |
| 2    | 14px | Secondary text       |
| 3    | 16px | Body text (default)  |
| 4    | 18px | Large body text      |
| 5    | 20px | Small headings       |
| 6    | 24px | Medium headings      |
| 7    | 28px | Large headings       |
| 8    | 32px | Extra large headings |
| 9    | 40px | Display headings     |

### Line Heights

Each font size has a corresponding optimized line height:

| Step | Line Height | Ratio |
| ---- | ----------- | ----- |
| 0    | 12px        | 1.2   |
| 1    | 16px        | 1.33  |
| 2    | 20px        | 1.43  |
| 3    | 24px        | 1.5   |
| 4    | 26px        | 1.44  |
| 5    | 28px        | 1.4   |
| 6    | 30px        | 1.25  |
| 7    | 34px        | 1.21  |
| 8    | 38px        | 1.19  |
| 9    | 48px        | 1.2   |

### Letter Spacing

Optimized letter spacing for each step:

| Step | Letter Spacing |
| ---- | -------------- |
| 0    | 0.01em         |
| 1    | 0.01em         |
| 2    | 0.01em         |
| 3    | 0.01em         |
| 4    | 0.01em         |
| 5    | 0.01em         |
| 6    | 0.01em         |
| 7    | 0.005em        |
| 8    | 0em            |
| 9    | 0em            |

## Font Weights

The system provides 5 semantic font weights:

| Weight    | Value | CSS Variable              |
| --------- | ----- | ------------------------- |
| light     | 300   | `--font-weight-light`     |
| regular   | 400   | `--font-weight-regular`   |
| medium    | 500   | `--font-weight-medium`    |
| semi-bold | 600   | `--font-weight-semi-bold` |
| bold      | 700   | `--font-weight-bold`      |

## Font Families

### System Font Stacks

| Type     | CSS Variable            | Default Stack                                                                                                                   |
| -------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Default  | `--default-font-family` | `-apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)', system-ui, sans-serif` |
| Heading  | `--heading-font-family` | Same as default                                                                                                                 |
| Code     | `--code-font-family`    | `'Menlo', 'Consolas (Custom)', 'Bitstream Vera Sans Mono', monospace`                                                           |
| Strong   | `--strong-font-family`  | Same as default                                                                                                                 |
| Emphasis | `--em-font-family`      | `'Times New Roman', 'Times', serif`                                                                                             |
| Quote    | `--quote-font-family`   | `'Times New Roman', 'Times', serif`                                                                                             |

### Custom Font Configuration

Override font families using CSS variables:

```css
.frosted-ui {
  --default-font-family: 'Inter', sans-serif;
  --heading-font-family: 'Playfair Display', serif;
  --code-font-family: 'Fira Code', monospace;
}
```

## React Components

### Text Component

The `<Text>` component is used for body text and spans:

```tsx
import { Text } from '@frosted-ui/react';

// Basic usage
<Text>Default body text (size 3)</Text>

// With props
<Text size="4" weight="medium" color="blue">
  Large medium-weight blue text
</Text>

// As different elements
<Text as="p" size="2">Paragraph text</Text>
<Text as="label" size="1" weight="medium">Form label</Text>
```

#### Text Props

| Prop           | Type                                                                              | Default     | Description        |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ------------------ |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `undefined` | Font size step     |
| `weight`       | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`                       | `undefined` | Font weight        |
| `align`        | `'left' \| 'center' \| 'right'`                                                   | `undefined` | Text alignment     |
| `trim`         | `'normal' \| 'start' \| 'end' \| 'both'`                                          | `undefined` | Leading trim       |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `undefined` | Text color         |
| `highContrast` | `boolean`                                                                         | `false`     | High contrast mode |
| `as`           | `'span' \| 'div' \| 'p' \| 'label'`                                               | `'span'`    | HTML element       |
| `asChild`      | `boolean`                                                                         | `false`     | Render as child    |

### Heading Component

The `<Heading>` component is used for headings and titles:

```tsx
import { Heading } from '@frosted-ui/react';

// Basic usage (defaults to size 6, weight bold)
<Heading>Page Title</Heading>

// With props
<Heading size="8" weight="medium" color="blue">
  Large heading
</Heading>

// Semantic HTML
<Heading as="h1" size="9">Main Title</Heading>
<Heading as="h2" size="7">Section Title</Heading>
```

#### Heading Props

| Prop           | Type                                                                              | Default     | Description        |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ------------------ |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `'6'`       | Font size step     |
| `weight`       | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`                       | `'bold'`    | Font weight        |
| `align`        | `'left' \| 'center' \| 'right'`                                                   | `undefined` | Text alignment     |
| `trim`         | `'normal' \| 'start' \| 'end' \| 'both'`                                          | `undefined` | Leading trim       |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `undefined` | Text color         |
| `highContrast` | `boolean`                                                                         | `false`     | High contrast mode |
| `as`           | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`                                    | `'h1'`      | HTML heading level |
| `asChild`      | `boolean`                                                                         | `false`     | Render as child    |

## Typography Tailwind Tokens

The Frosted UI plugin generates the following typography-related Tailwind utilities:

### Font Size Tokens (text-\*)

Generated from the 10-step typography scale:

| Utility  | Value | CSS Variable         |
| -------- | ----- | -------------------- |
| `text-0` | 10px  | `var(--font-size-0)` |
| `text-1` | 12px  | `var(--font-size-1)` |
| `text-2` | 14px  | `var(--font-size-2)` |
| `text-3` | 16px  | `var(--font-size-3)` |
| `text-4` | 18px  | `var(--font-size-4)` |
| `text-5` | 20px  | `var(--font-size-5)` |
| `text-6` | 24px  | `var(--font-size-6)` |
| `text-7` | 28px  | `var(--font-size-7)` |
| `text-8` | 32px  | `var(--font-size-8)` |
| `text-9` | 40px  | `var(--font-size-9)` |

### Line Height Tokens (leading-\*)

Coordinated line heights for each font size:

| Utility     | Value | CSS Variable           |
| ----------- | ----- | ---------------------- |
| `leading-0` | 12px  | `var(--line-height-0)` |
| `leading-1` | 16px  | `var(--line-height-1)` |
| `leading-2` | 20px  | `var(--line-height-2)` |
| `leading-3` | 24px  | `var(--line-height-3)` |
| `leading-4` | 26px  | `var(--line-height-4)` |
| `leading-5` | 28px  | `var(--line-height-5)` |
| `leading-6` | 30px  | `var(--line-height-6)` |
| `leading-7` | 34px  | `var(--line-height-7)` |
| `leading-8` | 38px  | `var(--line-height-8)` |
| `leading-9` | 48px  | `var(--line-height-9)` |

### Letter Spacing Tokens (tracking-\*)

Optimized letter spacing for each scale step:

| Utility      | Value   | CSS Variable              |
| ------------ | ------- | ------------------------- |
| `tracking-0` | 0.01em  | `var(--letter-spacing-0)` |
| `tracking-1` | 0.01em  | `var(--letter-spacing-1)` |
| `tracking-2` | 0.01em  | `var(--letter-spacing-2)` |
| `tracking-3` | 0.01em  | `var(--letter-spacing-3)` |
| `tracking-4` | 0.01em  | `var(--letter-spacing-4)` |
| `tracking-5` | 0.01em  | `var(--letter-spacing-5)` |
| `tracking-6` | 0.01em  | `var(--letter-spacing-6)` |
| `tracking-7` | 0.005em | `var(--letter-spacing-7)` |
| `tracking-8` | 0em     | `var(--letter-spacing-8)` |
| `tracking-9` | 0em     | `var(--letter-spacing-9)` |

### Font Weight Tokens

Semantic font weight utilities:

| Utility       | Value | CSS Variable                 |
| ------------- | ----- | ---------------------------- |
| `font-light`  | 300   | `var(--font-weight-light)`   |
| `font-normal` | 400   | `var(--font-weight-regular)` |
| `font-medium` | 500   | `var(--font-weight-medium)`  |
| `font-bold`   | 700   | `var(--font-weight-bold)`    |

Note: `font-semibold` (600) maps to standard Tailwind, not the design system variable.

### Font Family Tokens

Typography-specific font family utilities:

| Utility        | CSS Variable                 | Purpose                            |
| -------------- | ---------------------------- | ---------------------------------- |
| `font-sans`    | `var(--default-font-family)` | Body text, default text            |
| `font-heading` | `var(--heading-font-family)` | Headings (same as default)         |
| `font-strong`  | `var(--strong-font-family)`  | Strong/bold text (same as default) |
| `font-code`    | `var(--code-font-family)`    | Code, monospace text               |
| `font-em`      | `var(--em-font-family)`      | Emphasis, italic text              |
| `font-quote`   | `var(--quote-font-family)`   | Blockquotes                        |

### Usage Examples

```html
<!-- Typography scale coordination -->
<h1 class="text-8 leading-8 tracking-8 font-bold">Display Heading</h1>
<h2 class="text-6 leading-6 tracking-6 font-medium">Section Heading</h2>
<p class="text-3 leading-3 tracking-3 font-normal">Body text content</p>
<span class="text-1 leading-1 tracking-1 font-medium">Small label</span>

<!-- Font families -->
<p class="font-sans">Default body text</p>
<code class="font-code text-2">Code snippet</code>
<em class="font-em">Emphasized text</em>
<blockquote class="font-quote text-4">Quote text</blockquote>
```

## Advanced Usage

### Responsive Typography

Combine with Tailwind's responsive prefixes:

```html
<h1 class="text-6 md:text-7 lg:text-8">Responsive heading that scales up on larger screens</h1>

<p class="text-2 md:text-3">Body text that increases on medium screens and up</p>
```

### Typography Combinations

Common patterns using the design system:

```html
<!-- Article heading -->
<h1 class="text-8 font-bold leading-8 tracking-8 text-gray-12">Article Title</h1>

<!-- Subheading -->
<h2 class="text-6 font-medium leading-6 tracking-6 text-gray-11">Section Title</h2>

<!-- Body text -->
<p class="text-3 font-normal leading-3 tracking-3 text-gray-12">Body content with optimal readability</p>

<!-- Caption -->
<p class="text-1 font-medium leading-1 tracking-1 text-gray-10">Image caption or metadata</p>
```

### Custom CSS with Design Tokens

Access typography tokens directly in CSS:

```css
.custom-text {
  font-size: var(--font-size-4);
  line-height: var(--line-height-4);
  letter-spacing: var(--letter-spacing-4);
  font-weight: var(--font-weight-medium);
  font-family: var(--default-font-family);
}

.custom-heading {
  font-size: var(--font-size-7);
  line-height: var(--heading-line-height-7);
  font-weight: var(--font-weight-bold);
  font-family: var(--heading-font-family);
}
```

## Typography Guidelines

### Size Selection

- **Size 0-1**: Micro text, captions, labels
- **Size 2**: Secondary text, metadata
- **Size 3**: Primary body text (most common)
- **Size 4**: Large body text, important content
- **Size 5-6**: Small to medium headings
- **Size 7-8**: Large headings
- **Size 9**: Display headings, hero text

### Weight Selection

- **Light (300)**: Delicate text, large headings where appropriate
- **Regular (400)**: Default body text
- **Medium (500)**: Emphasis, subheadings, important text
- **Semi-bold (600)**: Strong emphasis
- **Bold (700)**: Headings, strong emphasis, calls-to-action

### Accessibility Considerations

1. **Contrast**: Use `highContrast` prop or high-contrast color tokens for better readability
2. **Semantic HTML**: Use appropriate heading levels (`h1-h6`) with the `as` prop
3. **Responsive scaling**: Consider increasing font sizes on mobile devices
4. **Line height**: The system provides optimal line heights, but consider content context

### Best Practices

1. **Consistency**: Stick to the scale rather than arbitrary sizes
2. **Hierarchy**: Use size and weight systematically to create clear content hierarchy
3. **Readability**: Size 3 is optimized for body text readability
4. **Performance**: System fonts load faster than custom fonts
5. **Responsive**: Scale typography appropriately across devices

## Migration from Other Systems

### From Tailwind Default

```html
<!-- Before -->
<h1 class="text-4xl font-bold">Title</h1>
<p class="text-base">Body text</p>

<!-- After -->
<h1 class="text-8 font-bold">Title</h1>
<p class="text-3">Body text</p>
```

### From Custom CSS

```css
/* Before */
.title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
}

/* After */
.title {
  font-size: var(--font-size-8);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-8);
}
```

## CSS Variables Reference

### Complete Typography Token List

```css
/* Font Sizes */
--font-size-0: 10px;
--font-size-1: 12px;
--font-size-2: 14px;
--font-size-3: 16px;
--font-size-4: 18px;
--font-size-5: 20px;
--font-size-6: 24px;
--font-size-7: 28px;
--font-size-8: 32px;
--font-size-9: 40px;

/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semi-bold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-0: 12px;
--line-height-1: 16px;
--line-height-2: 20px;
--line-height-3: 24px;
--line-height-4: 26px;
--line-height-5: 28px;
--line-height-6: 30px;
--line-height-7: 34px;
--line-height-8: 38px;
--line-height-9: 48px;

/* Letter Spacing */
--letter-spacing-0: 0.01em;
--letter-spacing-1: 0.01em;
--letter-spacing-2: 0.01em;
--letter-spacing-3: 0.01em;
--letter-spacing-4: 0.01em;
--letter-spacing-5: 0.01em;
--letter-spacing-6: 0.01em;
--letter-spacing-7: 0.005em;
--letter-spacing-8: 0em;
--letter-spacing-9: 0em;

/* Heading Line Heights */
--heading-line-height-1: 16px;
--heading-line-height-2: 18px;
--heading-line-height-3: 22px;
--heading-line-height-4: 24px;
--heading-line-height-5: 26px;
--heading-line-height-6: 30px;
--heading-line-height-7: 36px;
--heading-line-height-8: 40px;
--heading-line-height-9: 60px;
```

This typography system ensures consistent, accessible, and scalable text rendering across your entire application while providing both React component and Tailwind utility approaches for maximum flexibility.
