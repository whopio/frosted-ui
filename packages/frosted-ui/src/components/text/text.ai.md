# Frosted UI Text Component

The foundational typography component for all text content in Frosted UI. Built on a 10-step size scale (0-9) with coordinated font weights, colors, and advanced typography features like leading trim and text alignment.

## Overview

The Text component provides:

- **10-Step Typography Scale** - Sizes 0-9 with coordinated line heights and letter spacing
- **Flexible Element Rendering** - Can render as span, div, p, label, or use asChild pattern
- **Complete Color System** - Full access to Frosted UI color palette with high contrast mode
- **Advanced Typography** - Leading trim for precise text alignment and spacing
- **Weight Control** - Five semantic font weights from light to bold
- **Text Alignment** - Left, center, and right alignment options
- **Foundation Component** - Base for other typography components like Heading and Blockquote

The Text component serves as the cornerstone of the Frosted UI typography system, providing consistent, accessible text rendering across all applications.

## Basic Usage

```jsx
import { Text } from 'frosted-ui';

function BasicText() {
  return (
    <div className="space-y-3">
      <Text>Default text (size 3, regular weight)</Text>
      <Text size="4" weight="medium">
        Large medium-weight text
      </Text>
      <Text size="2" color="gray">
        Secondary gray text
      </Text>
    </div>
  );
}
```

## Props

### All Props Optional

All Text props are optional with intelligent defaults.

| Prop           | Type                                                                              | Default     | Description                     |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ------------------------------- |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `undefined` | Font size step (0=10px, 9=40px) |
| `weight`       | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`                       | `undefined` | Font weight                     |
| `align`        | `'left' \| 'center' \| 'right'`                                                   | `undefined` | Text alignment                  |
| `trim`         | `'normal' \| 'start' \| 'end' \| 'both'`                                          | `undefined` | Leading edge trim               |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `undefined` | Text color                      |
| `highContrast` | `boolean`                                                                         | `undefined` | High contrast mode              |
| `as`           | `'span' \| 'div' \| 'label' \| 'p'`                                               | `'span'`    | HTML element type               |
| `asChild`      | `boolean`                                                                         | `false`     | Render as child element         |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes          |
| `children`     | `React.ReactNode`                                                                 | `undefined` | Text content                    |

**Default behavior when props are undefined:**

- Uses system default size (typically renders as size 3)
- Uses regular font weight
- Uses default text color (gray-12)
- Renders as span element

## Typography Scale

### Size Examples

```jsx
function SizeScale() {
  return (
    <div className="space-y-3">
      <Text size="0">Micro text (10px) - Labels, captions</Text>
      <Text size="1">Small text (12px) - Secondary info</Text>
      <Text size="2">Secondary text (14px) - Metadata</Text>
      <Text size="3">Body text (16px) - Default content</Text>
      <Text size="4">Large body (18px) - Important content</Text>
      <Text size="5">Small heading (20px) - Subheadings</Text>
      <Text size="6">Medium heading (24px) - Section titles</Text>
      <Text size="7">Large heading (28px) - Page titles</Text>
      <Text size="8">Display text (32px) - Hero content</Text>
      <Text size="9">Jumbo text (40px) - Display headlines</Text>
    </div>
  );
}
```

### Weight Examples

```jsx
function WeightScale() {
  return (
    <div className="space-y-3">
      <Text weight="light">Light weight (300) - Delicate, elegant text</Text>
      <Text weight="regular">Regular weight (400) - Standard body text</Text>
      <Text weight="medium">Medium weight (500) - Emphasized content</Text>
      <Text weight="semi-bold">Semi-bold weight (600) - Strong emphasis</Text>
      <Text weight="bold">Bold weight (700) - Headlines, CTAs</Text>
    </div>
  );
}
```

## Element Rendering

### HTML Element Types

```jsx
function ElementTypes() {
  return (
    <div className="space-y-4">
      {/* Span (default) */}
      <Text>Default span element</Text>

      {/* Paragraph */}
      <Text as="p">Paragraph element for block text</Text>

      {/* Div */}
      <Text as="div">Div element for block containers</Text>

      {/* Label */}
      <Text as="label" size="2" weight="medium">
        Form label element
      </Text>
    </div>
  );
}
```

### AsChild Pattern

```jsx
function AsChildExamples() {
  return (
    <div className="space-y-4">
      {/* Render Text styles on a custom element */}
      <Text asChild size="4" weight="medium" color="blue">
        <strong>Important emphasized text</strong>
      </Text>

      {/* Render Text styles on a link */}
      <Text asChild size="3" color="blue">
        <a href="/docs">Styled link with Text properties</a>
      </Text>

      {/* Render Text styles on a button */}
      <Text asChild size="2" weight="medium">
        <button className="bg-transparent border-none cursor-pointer">Custom button text</button>
      </Text>
    </div>
  );
}
```

**Note:** For headings (`h1`, `h2`, etc.), use the dedicated `<Heading>` component instead of Text with asChild.

## Color System Integration

### Basic Colors

```jsx
function ColorExamples() {
  return (
    <div className="space-y-3">
      <Text color="blue">Information text in blue</Text>
      <Text color="green">Success text in green</Text>
      <Text color="amber">Warning text in amber</Text>
      <Text color="red">Error text in red</Text>
      <Text color="purple">Creative text in purple</Text>
      <Text color="gray">Secondary text in gray</Text>
    </div>
  );
}
```

### High Contrast Mode

```jsx
function HighContrastExamples() {
  return (
    <div className="space-y-3">
      <Text color="blue">Regular blue text (step 11)</Text>
      <Text color="blue" highContrast>
        High contrast blue text (step 12)
      </Text>

      <Text color="green">Regular green text</Text>
      <Text color="green" highContrast>
        High contrast green text
      </Text>

      <Text color="red">Regular red text</Text>
      <Text color="red" highContrast>
        High contrast red text
      </Text>
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticColors() {
  return (
    <div className="space-y-3">
      <Text color="danger">Danger state text</Text>
      <Text color="warning">Warning state text</Text>
      <Text color="success">Success state text</Text>
      <Text color="info">Info state text</Text>
    </div>
  );
}
```

## Text Alignment

```jsx
function TextAlignment() {
  return (
    <div className="max-w-[400px] space-y-4 p-4 border border-gray-6 rounded-lg">
      <Text align="left" className="block">
        Left-aligned text that flows naturally from the left edge
      </Text>

      <Text align="center" className="block">
        Center-aligned text for emphasis or headers
      </Text>

      <Text align="right" className="block">
        Right-aligned text for signatures or timestamps
      </Text>
    </div>
  );
}
```

## Leading Trim

Leading trim removes extra space above and below text for precise alignment.

```jsx
function LeadingTrimExamples() {
  return (
    <div className="space-y-6">
      {/* Without trim - extra space visible */}
      <div className="bg-blue-2 border-t border-b border-blue-6 border-dashed">
        <Text size="5" trim="normal">
          Without trim - notice the extra space
        </Text>
      </div>

      {/* With trim - precise alignment */}
      <div className="bg-blue-2 border-t border-b border-blue-6 border-dashed">
        <Text size="5" trim="both">
          With trim - perfectly aligned edges
        </Text>
      </div>

      {/* Start trim only */}
      <div className="bg-green-2 border-t border-b border-green-6 border-dashed">
        <Text size="5" trim="start">
          Start trim - removes top space only
        </Text>
      </div>

      {/* End trim only */}
      <div className="bg-amber-2 border-t border-b border-amber-6 border-dashed">
        <Text size="5" trim="end">
          End trim - removes bottom space only
        </Text>
      </div>
    </div>
  );
}
```

## Advanced Typography Patterns

### Text Hierarchy

```jsx
function TextHierarchy() {
  return (
    <article className="max-w-[600px] space-y-4">
      <Heading size="6" weight="bold">
        Article Title
      </Heading>

      <Heading size="4" weight="medium" color="gray">
        Subtitle or section heading
      </Heading>

      <Text size="3" as="p">
        This is the main body text that provides detailed information. It uses the default size 3 which is optimized for
        readability in longer content blocks.
      </Text>

      <Text size="2" color="gray" as="p">
        This is secondary information like metadata, timestamps, or additional context that supports the main content.
      </Text>

      <Text size="1" color="gray">
        Fine print, legal text, or micro-copy details
      </Text>
    </article>
  );
}
```

### Inline Text Formatting

```jsx
function InlineFormatting() {
  return (
    <Text size="4" as="p" className="max-w-[500px]">
      This paragraph demonstrates{' '}
      <Text asChild weight="medium" color="blue">
        <span>inline emphasis</span>
      </Text>{' '}
      and{' '}
      <Text asChild size="3" weight="bold" color="red">
        <span>mixed formatting</span>
      </Text>{' '}
      within a single text block using the asChild pattern.
    </Text>
  );
}
```

### Form Integration

```jsx
function FormTextExamples() {
  return (
    <div className="max-w-[400px] space-y-4">
      {/* Field labels */}
      <div>
        <Text as="label" size="2" weight="medium" className="block mb-1">
          Email Address *
        </Text>
        <input type="email" className="w-full p-2 border border-gray-6 rounded text-3" />
        <Text size="1" color="gray" className="mt-1 block">
          We'll never share your email address
        </Text>
      </div>

      {/* Error states */}
      <div>
        <Text as="label" size="2" weight="medium" className="block mb-1">
          Password *
        </Text>
        <input type="password" className="w-full p-2 border border-red-7 rounded text-3" />
        <Text size="1" color="red" className="mt-1 block">
          Password must be at least 8 characters
        </Text>
      </div>

      {/* Success states */}
      <div>
        <Text as="label" size="2" weight="medium" className="block mb-1">
          Username *
        </Text>
        <input type="text" className="w-full p-2 border border-green-7 rounded text-3" />
        <Text size="1" color="green" className="mt-1 block">
          Username is available
        </Text>
      </div>
    </div>
  );
}
```

### Card Content

```jsx
function CardTextLayout() {
  return (
    <div className="max-w-[350px] p-6 bg-gray-1 border border-gray-6 rounded-lg space-y-3">
      <Text size="4" weight="bold" color="blue">
        Premium Plan
      </Text>

      <Text size="7" weight="bold" className="flex items-baseline gap-1">
        $29
        <Text size="2" weight="regular" color="gray">
          /month
        </Text>
      </Text>

      <Text size="2" color="gray">
        Perfect for growing teams that need advanced features and priority support.
      </Text>

      <ul className="space-y-2 mt-4">
        <li className="flex items-center gap-2">
          <Text size="1" color="green">
            ✓
          </Text>
          <Text size="2">Unlimited projects</Text>
        </li>
        <li className="flex items-center gap-2">
          <Text size="1" color="green">
            ✓
          </Text>
          <Text size="2">Priority support</Text>
        </li>
        <li className="flex items-center gap-2">
          <Text size="1" color="green">
            ✓
          </Text>
          <Text size="2">Advanced analytics</Text>
        </li>
      </ul>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Integration

```jsx
function LayoutIntegration() {
  return (
    <div className="max-w-[800px] grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Main content column */}
      <div className="space-y-4">
        <Text size="5" weight="bold">
          Design System Benefits
        </Text>

        <Text size="3" className="leading-6">
          Using a consistent typography scale ensures visual harmony
          and improves the overall user experience across all interfaces.
        </Text>

        <div className="p-4 bg-blue-1 border border-blue-6 rounded-lg">
          <Text size="2" weight="medium" color="blue" className="mb-2 block">
            Pro Tip
          </Text>
          <Text size="2" color="blue">
            Stick to the 0-9 size scale for consistent spacing and hierarchy.
          </Text>
        </div>
      </div>

      {/* Sidebar column */}
      <div className="space-y-4">
        <Text size="3" weight="medium" color="gray">
          Typography Scale
        </Text>

        <div className="space-y-2">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="flex items-center gap-3 py-1">
              <Text size="1" weight="medium" color="gray" className="w-8">
                {i}
              </Text>
              <Text size={i.toString() as any}>
                Size {i} example
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. When a color is specified, the text uses the 11th step by default, or the 12th step when `highContrast` is enabled. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

### Semantic HTML

- Uses appropriate HTML elements based on the `as` prop
- Maintains proper heading hierarchy when used for titles
- Supports screen reader navigation and text extraction
- Works with browser reader modes and accessibility tools

### Color Contrast

- Default text uses high-contrast gray-12 for optimal readability
- Colored text uses step 11 for sufficient contrast on light backgrounds
- `highContrast` prop switches to step 12 for maximum contrast
- All color combinations meet WCAG accessibility standards

### Typography Accessibility

- Font sizes scale appropriately with user's system font size preferences
- Line heights are optimized for readability across all sizes
- Letter spacing is carefully tuned for each size step
- Supports system font preferences and custom font stacks

### Best Practices

1. **Use semantic elements** - Choose appropriate `as` prop values for proper HTML structure
2. **Maintain hierarchy** - Use consistent size progression for content organization
3. **Consider contrast** - Use `highContrast` when text appears on colored backgrounds
4. **Test readability** - Verify text remains readable at different zoom levels
5. **Provide alternatives** - Ensure color is not the only way to convey information

## Advanced Usage

### Responsive Typography

```jsx
function ResponsiveText() {
  return (
    <div className="space-y-4">
      <Text size="4" className="md:text-5 lg:text-6">
        Responsive text that scales up on larger screens
      </Text>

      <Text size="2" className="md:text-3" color="gray">
        Secondary text that also scales responsively
      </Text>
    </div>
  );
}
```

### Custom CSS Integration

```jsx
function CustomStyling() {
  return (
    <div className="space-y-4">
      <Text
        size="4"
        weight="medium"
        className="font-heading text-gradient bg-gradient-to-r from-blue-9 to-purple-9 bg-clip-text text-transparent"
      >
        Custom gradient text effect
      </Text>

      <Text
        size="3"
        className="first-letter:text-6 first-letter:font-bold first-letter:text-blue-9 first-letter:float-left first-letter:mr-2 first-letter:mt-1"
      >
        Drop cap styling for article beginnings and editorial layouts.
      </Text>
    </div>
  );
}
```

### Dynamic Text

```jsx
import { useState } from 'react';

function DynamicText() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = (useState < 'idle') | 'success' | ('error' > 'idle');

  return (
    <div className="space-y-4">
      <Text size="4" weight="medium">
        Counter:{' '}
        <Text asChild color={count > 10 ? 'green' : 'blue'}>
          <span>{count}</span>
        </Text>
      </Text>

      <Text size="2" color={status === 'success' ? 'green' : status === 'error' ? 'red' : 'gray'}>
        Status: {status}
      </Text>

      <div className="flex gap-2">
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setStatus('success')}>Success</button>
        <button onClick={() => setStatus('error')}>Error</button>
      </div>
    </div>
  );
}
```

## Best Practices

### Component Selection Guidelines

1. **Use Text for body content** - Paragraphs, labels, descriptions, inline text
2. **Use Heading for headings** - Page titles, section headers, any heading content
3. **Use supported `as` props only** - Only `'span'`, `'div'`, `'label'`, `'p'` are supported
4. **Never use Text for headings** - Always use the dedicated `<Heading>` component instead

### Size Selection Guidelines

1. **Size 0-1**: Micro text, labels, captions, fine print
2. **Size 2**: Secondary text, metadata, helper text
3. **Size 3**: Primary body text, standard content (most common)
4. **Size 4**: Large body text, emphasized content
5. **Size 5-9**: Use with `<Heading>` component, not Text

### Weight Guidelines

1. **Light**: Large display text, delicate emphasis
2. **Regular**: Body text, standard content
3. **Medium**: Emphasis, labels, subheadings
4. **Semi-bold**: Strong emphasis, important information
5. **Bold**: Strong emphasis, important text (use `<Heading>` for actual headings)

### Element Guidelines

1. **span** (default): Inline text, emphasis, formatting
2. **p**: Paragraph blocks, body content
3. **div**: Block containers, text containers
4. **label**: Form labels and input labels
5. **❌ Never use**: `h1`, `h2`, `h3`, `h4`, `h5`, `h6` - use `<Heading>` instead

### Color Usage

1. **Default (no color)**: Primary content text
2. **Gray**: Secondary information, metadata
3. **Blue**: Links, informational content
4. **Green**: Success states, positive actions
5. **Amber**: Warnings, cautions
6. **Red**: Errors, critical information
7. **Semantic colors**: Use `danger`, `warning`, `success`, `info` for consistent state indication

### Performance Considerations

1. **Component efficiency**: Lightweight implementation with minimal overhead
2. **CSS optimization**: Uses CSS custom properties for efficient styling
3. **Bundle impact**: Core component with no external dependencies
4. **Rendering performance**: Optimized for frequent re-renders

## Related Components

- **[Heading](../heading/heading.ai.md)** - Specialized component for headings and titles
- **[Blockquote](../blockquote/blockquote.ai.md)** - For quoted text built on Text foundation
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - Complete typography system overview
- **[Code](../code/code.ai.md)** - For inline code and syntax highlighting
- **[Link](../link/link.ai.md)** - For interactive text links and navigation
