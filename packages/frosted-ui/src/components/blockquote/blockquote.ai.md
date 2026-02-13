# Frosted UI Blockquote Component

A semantic blockquote component for displaying quoted text with consistent styling and integrated typography features. The component is built on the Text component foundation with special blockquote styling including a left border accent.

## Overview

The Blockquote component provides:

- **Semantic HTML** - Renders as proper `<blockquote>` element
- **Typography Integration** - Built on the Text component with all typography features
- **Visual Distinction** - Left border accent using design system colors
- **Responsive Styling** - Adaptive border thickness and padding
- **Color System Support** - Full access to Frosted UI color palette
- **Accessibility** - Proper semantic markup for screen readers

The component automatically includes a left border accent and appropriate padding, making quoted text visually distinct from surrounding content.

## Basic Usage

```jsx
import { Blockquote } from 'frosted-ui';

function QuoteExample() {
  return <Blockquote>I love how we have the freedom to explore skeuomorphism</Blockquote>;
}
```

## Props

### All Props Optional

All Blockquote props are optional and inherit from the Text component.

| Prop           | Type                                                                              | Default     | Description             |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ----------------------- |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `undefined` | Font size step          |
| `weight`       | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`                       | `undefined` | Font weight             |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `undefined` | Text and border color   |
| `highContrast` | `boolean`                                                                         | `undefined` | High contrast text mode |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes  |
| `children`     | `React.ReactNode`                                                                 | `undefined` | Quote content           |

**Default behavior when props are undefined:**

- Uses Text component defaults (typically size 3, regular weight, gray-12 color)
- Border uses accent color at a6 transparency level
- Responsive padding and border thickness

## Examples

### Basic Quote

```jsx
function BasicQuote() {
  return (
    <div className="max-w-[600px] space-y-4">
      <Blockquote>The best way to find out if you can trust somebody is to trust them.</Blockquote>

      <Text size="2" color="gray">
        — Ernest Hemingway
      </Text>
    </div>
  );
}
```

### Different Sizes

```jsx
function QuoteSizes() {
  return (
    <div className="max-w-[600px] space-y-6">
      <div>
        <Text size="2" weight="medium" color="gray">
          Small Quote (Size 2)
        </Text>
        <Blockquote size="2">Small quoted text for inline citations or brief quotes.</Blockquote>
      </div>

      <div>
        <Text size="2" weight="medium" color="gray">
          Default Quote (Size 3)
        </Text>
        <Blockquote>Standard blockquote size for most content and article quotes.</Blockquote>
      </div>

      <div>
        <Text size="2" weight="medium" color="gray">
          Large Quote (Size 4)
        </Text>
        <Blockquote size="4">Larger quotes for emphasis or featured testimonials.</Blockquote>
      </div>

      <div>
        <Text size="2" weight="medium" color="gray">
          Display Quote (Size 5)
        </Text>
        <Blockquote size="5" weight="medium">
          Display-sized quotes for hero sections or prominent testimonials.
        </Blockquote>
      </div>
    </div>
  );
}
```

### Colored Quotes

```jsx
function ColoredQuotes() {
  return (
    <div className="max-w-[600px] space-y-4">
      <Blockquote color="blue">Information quote with blue accent and text color.</Blockquote>

      <Blockquote color="green">Success or positive quote with green accent.</Blockquote>

      <Blockquote color="amber">Warning or important quote with amber accent.</Blockquote>

      <Blockquote color="red">Critical or negative quote with red accent.</Blockquote>

      <Blockquote color="purple">Creative or artistic quote with purple accent.</Blockquote>
    </div>
  );
}
```

### Typography Combinations

```jsx
function TypographyQuotes() {
  return (
    <div className="max-w-[600px] space-y-6">
      <div>
        <Blockquote size="4" weight="light" color="gray">
          Light weight quote for elegant, delicate emphasis.
        </Blockquote>
        <Text size="2" color="gray">
          — Design Philosophy
        </Text>
      </div>

      <div>
        <Blockquote size="3" weight="medium" color="blue">
          Medium weight quote for balanced emphasis and readability.
        </Blockquote>
        <Text size="2" color="blue">
          — UX Guidelines
        </Text>
      </div>

      <div>
        <Blockquote size="3" weight="bold" color="red" highContrast>
          Bold, high-contrast quote for strong statements.
        </Blockquote>
        <Text size="2" color="red">
          — Critical Feedback
        </Text>
      </div>
    </div>
  );
}
```

### Testimonial Layout

```jsx
function TestimonialCard() {
  return (
    <div className="max-w-[500px] p-6 bg-gray-2 border border-gray-6 rounded-lg">
      <Blockquote size="4" color="blue">
        Frosted UI has completely transformed how we build interfaces. The design system is intuitive and the components
        are exactly what we needed.
      </Blockquote>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 bg-blue-9 rounded-full flex items-center justify-center">
          <Text size="2" weight="medium" className="text-blue-9-contrast">
            SM
          </Text>
        </div>
        <div>
          <Text size="2" weight="medium">
            Sarah Martinez
          </Text>
          <Text size="1" color="gray">
            Lead Designer, TechCorp
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### Article Quote with Citation

```jsx
function ArticleQuote() {
  return (
    <article className="max-w-[700px] space-y-6">
      <Text size="3">
        The importance of design systems in modern web development cannot be overstated. As applications grow in
        complexity, maintaining consistency becomes crucial.
      </Text>

      <Blockquote size="4" weight="medium" color="purple">
        A design system is a collection of reusable components, guided by clear standards, that can be assembled
        together to build any number of applications.
      </Blockquote>

      <Text size="2" color="gray" className="text-center">
        — Brad Frost, <em>Atomic Design</em>
      </Text>

      <Text size="3">
        This philosophy drives the development of modern component libraries, ensuring teams can work efficiently while
        maintaining design consistency.
      </Text>
    </article>
  );
}
```

### Multi-paragraph Quote

```jsx
function LongQuote() {
  return (
    <div className="max-w-[600px]">
      <Blockquote size="3" color="blue">
        <Text>
          The real problem is not whether machines think but whether men do. The mystery which surrounds a thinking
          machine already surrounds a thinking man.
        </Text>

        <Text className="mt-3">
          We are not trying to make machines that think like men, but rather trying to make machines that can solve
          problems.
        </Text>
      </Blockquote>

      <Text size="2" color="gray" className="mt-4">
        — B.F. Skinner, <em>Contingencies of Reinforcement</em>
      </Text>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Quote with Design System Layout

```jsx
function IntegratedQuote() {
  return (
    <div className="max-w-[800px] grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-4">
        <Heading size="6" weight="bold">
          Design Philosophy
        </Heading>

        <Text size="3">Our approach to interface design focuses on clarity, consistency, and user empowerment.</Text>

        <Blockquote size="4" color="blue" className="my-6">
          Great design is not just about how it looks, but how it works. Every element should serve a purpose and
          enhance the user experience.
        </Blockquote>

        <Text size="3">This philosophy guides every decision in our design system.</Text>
      </div>

      {/* Sidebar with related quote */}
      <div className="p-4 bg-gray-1 border border-gray-4 rounded-lg">
        <Text size="2" weight="medium" color="gray" className="mb-3">
          Related Quote
        </Text>

        <Blockquote size="2" color="gray">
          Simplicity is the ultimate sophistication.
        </Blockquote>

        <Text size="1" color="gray" className="mt-2">
          — Leonardo da Vinci
        </Text>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. The color prop affects both the text color and the left border accent. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

### Semantic HTML

- Uses proper `<blockquote>` element for semantic meaning
- Screen readers announce content as quoted text
- Maintains proper document outline and structure
- Works with browser reader modes and text extraction

### Typography Accessibility

- Inherits all Text component accessibility features
- Supports high contrast mode with `highContrast` prop
- Maintains readable text contrast ratios
- Scales appropriately with system font size preferences

### Best Practices

1. **Provide attribution** - Always include source attribution when appropriate
2. **Use semantic structure** - Place citations outside the blockquote element
3. **Maintain readability** - Choose appropriate size and weight combinations
4. **Consider context** - Use colors that support the content's meaning
5. **Test with screen readers** - Verify proper announcement of quoted content

## Advanced Usage

### Custom Styling

```jsx
function CustomBlockquote() {
  return (
    <Blockquote size="4" color="blue" className="font-quote italic bg-blue-1 p-4 rounded-r-lg border-l-4 border-blue-7">
      Custom styled blockquote with additional styling and typography.
    </Blockquote>
  );
}
```

### Responsive Quotes

```jsx
function ResponsiveQuote() {
  return (
    <Blockquote size="3" color="purple" className="md:text-4 md:leading-4 lg:text-5 lg:leading-5">
      Quote that scales up in size on larger screens for better visual hierarchy.
    </Blockquote>
  );
}
```

### Interactive Quote

```jsx
function InteractiveQuote() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-[600px]">
      <Blockquote size="3" color="blue">
        {isExpanded
          ? "The full quote reveals additional context and depth that provides complete understanding of the author's perspective and intention."
          : 'The full quote reveals additional context...'}
      </Blockquote>

      <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-11 hover:text-blue-12 text-2 mt-2">
        {isExpanded ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
}
```

## Best Practices

### Content Guidelines

1. **Use for actual quotes** - Reserve for genuine quoted content, not emphasis
2. **Keep attribution separate** - Place citations outside the blockquote element
3. **Choose appropriate length** - Best for substantial quotes, not single words
4. **Maintain source accuracy** - Ensure quoted content is accurate and properly attributed

### Styling Guidelines

1. **Size selection** - Use size 3-4 for most content, larger sizes for featured quotes
2. **Color purpose** - Use colors that support content meaning (blue for information, etc.)
3. **Weight balance** - Medium weight for emphasis, regular for standard quotes
4. **Layout spacing** - Provide adequate margin around blockquotes

### Accessibility Guidelines

1. **Semantic markup** - Always use the Blockquote component for quoted content
2. **Clear attribution** - Make source attribution visible and accessible
3. **Readable contrast** - Use `highContrast` when needed for better readability
4. **Logical flow** - Integrate quotes naturally into content flow

### Performance Considerations

1. **Component efficiency** - Built on Text component for minimal overhead
2. **CSS optimization** - Uses CSS custom properties for efficient styling
3. **Bundle size** - Lightweight component with minimal dependencies

## Related Components

- **[Text](../text/text.ai.md)** - Base typography component that Blockquote extends
- **[Heading](../heading/heading.ai.md)** - For section titles above quotes
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - Complete typography system
- **[Card](../card/card.ai.md)** - For testimonial and quote card layouts
