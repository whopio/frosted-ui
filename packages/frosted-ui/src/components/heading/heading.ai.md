# Frosted UI Heading Component

The dedicated component for all heading content in Frosted UI. Built on the same 10-step typography scale as Text but with heading-specific optimizations including adjusted font sizes, line heights, and specialized heading font families.

## Overview

The Heading component provides:

- **Semantic HTML** - Renders as proper heading elements (`h1` through `h6`)
- **Typography Optimization** - Heading-specific font size adjustments and line heights
- **Default Configuration** - Size 6 and bold weight for optimal heading hierarchy
- **Flexible Element Rendering** - Can render as h1-h6 or use asChild pattern
- **Complete Color System** - Full access to Frosted UI color palette with high contrast mode
- **Advanced Typography** - Leading trim, text alignment, and weight control
- **Accessibility Built-in** - Proper semantic markup for screen readers and SEO

The Heading component should be used for all heading content instead of Text to ensure proper semantic structure and optimized typography.

## Basic Usage

```jsx
import { Heading } from 'frosted-ui';

function BasicHeadings() {
  return (
    <div className="space-y-4">
      <Heading>Default heading (size 6, bold weight)</Heading>
      <Heading size="7" weight="medium">
        Large medium-weight heading
      </Heading>
      <Heading size="4" color="blue">
        Smaller blue heading
      </Heading>
    </div>
  );
}
```

## Props

### Required vs Optional Props

All Heading props are optional with intelligent defaults optimized for headings.

| Prop           | Type                                                                              | Default     | Description                     |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ------------------------------- |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `'6'`       | Font size step (0=10px, 9=40px) |
| `weight`       | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`                       | `'bold'`    | Font weight                     |
| `align`        | `'left' \| 'center' \| 'right'`                                                   | `undefined` | Text alignment                  |
| `trim`         | `'normal' \| 'start' \| 'end' \| 'both'`                                          | `undefined` | Leading edge trim               |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `undefined` | Text color                      |
| `highContrast` | `boolean`                                                                         | `undefined` | High contrast mode              |
| `as`           | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'`                                    | `'h1'`      | HTML heading level              |
| `asChild`      | `boolean`                                                                         | `false`     | Render as child element         |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes          |
| `children`     | `React.ReactNode`                                                                 | `undefined` | Heading content                 |

**Key Defaults:**

- **Size 6** (24px): Optimal for most section headings
- **Bold weight**: Standard heading emphasis
- **h1 element**: Proper semantic structure by default

## Typography Scale for Headings

### Size Examples with Recommended Usage

```jsx
function HeadingSizeScale() {
  return (
    <div className="space-y-4">
      <Heading size="0" as="h6">
        Micro heading (10px) - Fine details
      </Heading>
      <Heading size="1" as="h6">
        Tiny heading (12px) - Small sections
      </Heading>
      <Heading size="2" as="h5">
        Small heading (14px) - Subsections
      </Heading>
      <Heading size="3" as="h4">
        Medium heading (16px) - Minor headings
      </Heading>
      <Heading size="4" as="h3">
        Large heading (18px) - Subheadings
      </Heading>
      <Heading size="5" as="h2">
        Section heading (20px) - Section titles
      </Heading>
      <Heading size="6" as="h1">
        Page heading (24px) - Main titles (default)
      </Heading>
      <Heading size="7" as="h1">
        Large title (28px) - Important pages
      </Heading>
      <Heading size="8" as="h1">
        Display heading (32px) - Hero titles
      </Heading>
      <Heading size="9" as="h1">
        Jumbo heading (40px) - Landing pages
      </Heading>
    </div>
  );
}
```

### Weight Examples

```jsx
function HeadingWeights() {
  return (
    <div className="space-y-3">
      <Heading weight="light">Light heading (300) - Elegant display text</Heading>
      <Heading weight="regular">Regular heading (400) - Subtle headings</Heading>
      <Heading weight="medium">Medium heading (500) - Balanced emphasis</Heading>
      <Heading weight="semi-bold">Semi-bold heading (600) - Strong emphasis</Heading>
      <Heading weight="bold">Bold heading (700) - Standard headings (default)</Heading>
    </div>
  );
}
```

## Semantic HTML Structure

### Proper Heading Levels

```jsx
function ProperHeadingStructure() {
  return (
    <article className="space-y-6">
      <Heading size="8" as="h1">
        Main Article Title
      </Heading>

      <Heading size="6" as="h2">
        Section Heading
      </Heading>

      <Text size="3" as="p">
        Article content using Text component for body text...
      </Text>

      <Heading size="5" as="h3">
        Subsection Heading
      </Heading>

      <Text size="3" as="p">
        More content...
      </Text>

      <Heading size="4" as="h4">
        Minor Section
      </Heading>

      <Text size="3" as="p">
        Final content...
      </Text>
    </article>
  );
}
```

### AsChild Pattern

```jsx
function HeadingAsChildExamples() {
  return (
    <div className="space-y-4">
      {/* Custom element with Heading styles */}
      <Heading asChild size="7" weight="medium" color="blue">
        <div role="heading" aria-level="1">
          Custom heading element
        </div>
      </Heading>

      {/* Link styled as heading */}
      <Heading asChild size="5" color="blue">
        <a href="/section">Navigational heading link</a>
      </Heading>

      {/* Interactive heading */}
      <Heading asChild size="6" weight="medium">
        <button className="bg-transparent border-none cursor-pointer text-left">Collapsible section heading</button>
      </Heading>
    </div>
  );
}
```

## Color System Integration

### Basic Colors

```jsx
function HeadingColors() {
  return (
    <div className="space-y-4">
      <Heading color="blue">Information section heading</Heading>
      <Heading color="green">Success or completion heading</Heading>
      <Heading color="amber">Warning or attention heading</Heading>
      <Heading color="red">Error or critical heading</Heading>
      <Heading color="purple">Creative or featured heading</Heading>
      <Heading color="gray">Subtle or secondary heading</Heading>
    </div>
  );
}
```

### High Contrast Mode

```jsx
function HighContrastHeadings() {
  return (
    <div className="space-y-4">
      <Heading color="blue">Regular blue heading (step 11)</Heading>
      <Heading color="blue" highContrast>
        High contrast blue heading (step 12)
      </Heading>

      <Heading color="green">Regular green heading</Heading>
      <Heading color="green" highContrast>
        High contrast green heading
      </Heading>
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticHeadings() {
  return (
    <div className="space-y-4">
      <Heading color="danger">Error Section</Heading>
      <Heading color="warning">Warning Section</Heading>
      <Heading color="success">Success Section</Heading>
      <Heading color="info">Information Section</Heading>
    </div>
  );
}
```

## Text Alignment

```jsx
function HeadingAlignment() {
  return (
    <div className="max-w-[600px] space-y-6">
      <Heading size="7" align="left">
        Left-aligned heading for standard layouts
      </Heading>

      <Heading size="6" align="center">
        Center-aligned heading for hero sections
      </Heading>

      <Heading size="5" align="right">
        Right-aligned heading for special layouts
      </Heading>
    </div>
  );
}
```

## Leading Trim for Precise Layout

```jsx
function HeadingTrimExamples() {
  return (
    <div className="space-y-6">
      {/* Without trim */}
      <div className="bg-blue-2 border-t border-b border-blue-6 border-dashed">
        <Heading size="7" trim="normal">
          Without trim - notice extra space
        </Heading>
      </div>

      {/* With trim */}
      <div className="bg-blue-2 border-t border-b border-blue-6 border-dashed">
        <Heading size="7" trim="both">
          With trim - perfectly aligned
        </Heading>
      </div>

      {/* Practical usage in cards */}
      <div className="p-4 bg-gray-1 border border-gray-6 rounded-lg">
        <Heading size="5" trim="start" className="mb-3">
          Card Title with Start Trim
        </Heading>
        <Text size="2" color="gray">
          Card content starts exactly aligned with the trimmed heading.
        </Text>
      </div>
    </div>
  );
}
```

## Real-World Usage Patterns

### Page Layout Structure

```jsx
function PageLayoutExample() {
  return (
    <div className="max-w-[800px] space-y-8">
      {/* Hero section */}
      <header className="text-center space-y-4">
        <Heading size="9" weight="bold" align="center">
          Welcome to Our Platform
        </Heading>
        <Heading size="4" weight="regular" color="gray" align="center">
          Build amazing interfaces with our design system
        </Heading>
      </header>

      {/* Main content */}
      <main className="space-y-6">
        <section>
          <Heading size="6" as="h2">
            Getting Started
          </Heading>
          <Text size="3" as="p" className="mt-3">
            Begin your journey with our comprehensive component library.
          </Text>
        </section>

        <section>
          <Heading size="5" as="h3">
            Installation
          </Heading>
          <Text size="3" as="p" className="mt-3">
            Install the package and start building immediately.
          </Text>
        </section>
      </main>
    </div>
  );
}
```

### Card Components

```jsx
function CardWithHeadings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px]">
      {/* Feature card */}
      <div className="p-6 bg-gray-1 border border-gray-6 rounded-lg space-y-3">
        <Heading size="5" weight="bold" color="blue">
          Advanced Features
        </Heading>
        <Text size="2" color="gray">
          Discover powerful tools for modern development
        </Text>
        <ul className="space-y-2 mt-4">
          <li className="flex items-center gap-2">
            <Text size="1" color="green">
              ✓
            </Text>
            <Text size="2">Type-safe components</Text>
          </li>
          <li className="flex items-center gap-2">
            <Text size="1" color="green">
              ✓
            </Text>
            <Text size="2">Design tokens integration</Text>
          </li>
        </ul>
      </div>

      {/* Pricing card */}
      <div className="p-6 bg-blue-1 border border-blue-6 rounded-lg space-y-3">
        <Heading size="4" weight="medium" color="blue">
          Pro Plan
        </Heading>
        <div className="flex items-baseline gap-2">
          <Heading size="8" weight="bold" color="blue">
            $29
          </Heading>
          <Text size="2" color="blue">
            /month
          </Text>
        </div>
        <Text size="2" color="blue">
          Everything you need for professional projects
        </Text>
      </div>
    </div>
  );
}
```

### Navigation Headers

```jsx
function NavigationExample() {
  return (
    <div className="space-y-6">
      {/* Main navigation */}
      <nav className="flex items-center justify-between p-4 border-b border-gray-6">
        <Heading size="4" weight="bold" color="blue">
          Brand Name
        </Heading>
        <div className="flex items-center gap-6">
          <Text size="2" weight="medium">
            Features
          </Text>
          <Text size="2" weight="medium">
            Pricing
          </Text>
          <Text size="2" weight="medium">
            About
          </Text>
        </div>
      </nav>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-2">
        <Text color="gray">Components</Text>
        <Text color="gray">/</Text>
        <Text color="gray">Typography</Text>
        <Text color="gray">/</Text>
        <Heading size="2" weight="medium">
          Heading
        </Heading>
      </nav>
    </div>
  );
}
```

### Dashboard Layout

```jsx
function DashboardExample() {
  return (
    <div className="space-y-6">
      {/* Dashboard header */}
      <header className="flex items-center justify-between">
        <div>
          <Heading size="7" weight="bold">
            Dashboard
          </Heading>
          <Text size="2" color="gray" className="mt-1">
            Welcome back, Sarah
          </Text>
        </div>
        <div className="flex items-center gap-3">
          <Text size="2" color="gray">
            Last updated: 2 min ago
          </Text>
        </div>
      </header>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-1 border border-gray-6 rounded-lg">
          <Heading size="2" weight="medium" color="gray">
            Total Users
          </Heading>
          <Heading size="6" weight="bold" className="mt-2">
            12,450
          </Heading>
        </div>
        <div className="p-4 bg-green-1 border border-green-6 rounded-lg">
          <Heading size="2" weight="medium" color="green">
            Active Sessions
          </Heading>
          <Heading size="6" weight="bold" color="green" className="mt-2">
            2,341
          </Heading>
        </div>
        <div className="p-4 bg-blue-1 border border-blue-6 rounded-lg">
          <Heading size="2" weight="medium" color="blue">
            Revenue
          </Heading>
          <Heading size="6" weight="bold" color="blue" className="mt-2">
            $45,120
          </Heading>
        </div>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Integration

```jsx
function CompleteLayoutExample() {
  return (
    <div className="max-w-[900px] space-y-8">
      {/* Article header */}
      <header className="space-y-4 text-center">
        <Heading size="8" weight="bold" trim="both">
          Building Modern Design Systems
        </Heading>
        <Heading size="4" weight="regular" color="gray">
          A comprehensive guide to component-driven development
        </Heading>
        <div className="flex items-center justify-center gap-4 text-2 text-gray-11">
          <Text>By Design Team</Text>
          <Text>•</Text>
          <Text>March 15, 2024</Text>
          <Text>•</Text>
          <Text>8 min read</Text>
        </div>
      </header>

      {/* Article content */}
      <article className="prose max-w-none space-y-6">
        <Heading size="6" as="h2" className="mb-4">
          Introduction to Design Systems
        </Heading>

        <Text size="3" as="p">
          Design systems have revolutionized how teams build consistent, scalable user interfaces...
        </Text>

        <Heading size="5" as="h3" className="mt-8 mb-4">
          Core Principles
        </Heading>

        <Text size="3" as="p">
          The foundation of any good design system rests on clear principles...
        </Text>

        <div className="p-6 bg-blue-1 border border-blue-6 rounded-lg my-8">
          <Heading size="4" color="blue" className="mb-3">
            Pro Tip
          </Heading>
          <Text size="3" color="blue">
            Always start with typography and color before building complex components.
          </Text>
        </div>
      </article>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. When a color is specified, headings use the 11th step by default, or the 12th step when `highContrast` is enabled. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

### Semantic HTML Structure

- Always renders proper heading elements (`h1` through `h6`)
- Maintains logical heading hierarchy for screen readers
- Supports keyboard navigation and focus management
- Works with browser accessibility tools and extensions

### Heading Hierarchy Best Practices

```jsx
function AccessibleStructure() {
  return (
    <main>
      <Heading size="8" as="h1">
        Page Title (only one h1 per page)
      </Heading>

      <section>
        <Heading size="6" as="h2">
          Main Section
        </Heading>

        <Heading size="5" as="h3">
          Subsection
        </Heading>

        <Heading size="4" as="h4">
          Minor heading
        </Heading>
      </section>

      <section>
        <Heading size="6" as="h2">
          Another Main Section
        </Heading>
      </section>
    </main>
  );
}
```

### Screen Reader Support

- Headings are properly announced with level information
- Color information is supplemented with visual hierarchy
- Focus indicators are clearly visible and functional
- Content structure is navigable via heading landmarks

### Best Practices

1. **Use proper heading levels** - Follow h1 > h2 > h3 hierarchy
2. **One h1 per page** - Use size prop to control visual appearance
3. **Don't skip levels** - Go from h2 to h3, not h2 to h4
4. **Use `highContrast`** - When headings appear on colored backgrounds
5. **Provide clear hierarchy** - Use size and weight to create visual distinction

## Advanced Usage

### Responsive Headings

```jsx
function ResponsiveHeadings() {
  return (
    <div className="space-y-6">
      <Heading size="6" className="md:text-7 lg:text-8" as="h1">
        Responsive hero heading
      </Heading>

      <Heading size="4" className="md:text-5" color="gray" as="h2">
        Responsive section heading
      </Heading>
    </div>
  );
}
```

### Dynamic Headings

```jsx
function DynamicHeadings() {
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const priorityConfig = {
    low: { color: 'gray' as const, size: '4' as const },
    medium: { color: 'blue' as const, size: '5' as const },
    high: { color: 'red' as const, size: '6' as const }
  };

  return (
    <div className="space-y-4">
      <Heading
        {...priorityConfig[priority]}
        weight="bold"
        as="h2"
      >
        Task Priority: {priority}
      </Heading>

      <div className="flex gap-2">
        <button onClick={() => setPriority('low')}>Low</button>
        <button onClick={() => setPriority('medium')}>Medium</button>
        <button onClick={() => setPriority('high')}>High</button>
      </div>
    </div>
  );
}
```

### Custom Styling

```jsx
function CustomHeadings() {
  return (
    <div className="space-y-6">
      <Heading
        size="8"
        weight="bold"
        className="bg-gradient-to-r from-blue-9 to-purple-9 bg-clip-text text-transparent"
        as="h1"
      >
        Gradient Heading Effect
      </Heading>

      <Heading
        size="6"
        className="relative before:absolute before:inset-0 before:bg-blue-3 before:-z-10 before:rounded px-3 py-1"
        color="blue"
        as="h2"
      >
        Highlighted Heading
      </Heading>
    </div>
  );
}
```

## Best Practices

### Component Selection Guidelines

1. **Always use Heading for headings** - Never use Text component for heading content
2. **Use proper semantic levels** - Match visual size with appropriate `as` prop
3. **Maintain hierarchy** - Use consistent size progression for content organization
4. **Consider SEO** - Proper heading structure improves search engine indexing

### Size Selection Guidelines

1. **Size 0-2**: Minor headings, small sections, metadata headers
2. **Size 3-4**: Subheadings, secondary sections
3. **Size 5-6**: Section headings, primary content areas (size 6 is default)
4. **Size 7-8**: Page titles, major headings, hero sections
5. **Size 9**: Display headings, landing pages, marketing content

### Weight Guidelines

1. **Light**: Display headings, elegant emphasis
2. **Regular**: Subtle headings, secondary information
3. **Medium**: Balanced headings, section titles
4. **Semi-bold**: Strong section headings
5. **Bold**: Primary headings, standard emphasis (default)

### Accessibility Guidelines

1. **Logical structure** - Use proper heading levels (h1 > h2 > h3)
2. **One h1 per page** - Multiple h1s confuse screen readers
3. **Don't skip levels** - Always maintain proper hierarchy
4. **Use descriptive text** - Headings should clearly describe their sections
5. **Test with screen readers** - Verify heading navigation works properly

### Performance Considerations

1. **Optimized typography** - Uses heading-specific font adjustments
2. **CSS custom properties** - Efficient styling with design tokens
3. **Minimal overhead** - Lightweight implementation
4. **SEO benefits** - Proper semantic structure improves page ranking

## Related Components

- **[Text](../text/text.ai.md)** - For body content and non-heading text
- **[Blockquote](../blockquote/blockquote.ai.md)** - For quoted content with visual distinction
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - Complete typography system overview
- **[Card](../card/card.ai.md)** - For content containers with headings
- **[Button](../button/button.ai.md)** - For interactive actions in content headers
