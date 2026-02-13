# Frosted UI Separator Component

A visual element used to divide content and create clear sections within interfaces.

## Overview

The Separator component provides a simple way to create visual divisions between content sections. It supports both horizontal and vertical orientations, multiple sizes, and customizable colors. Built on Radix UI primitives with Frosted UI styling and design tokens.

## Basic Usage

```jsx
import { Separator, Text } from '@frosted-ui/core';

function App() {
  return (
    <div className="space-y-4">
      <Text>First section of content</Text>
      <Separator />
      <Text>Second section of content</Text>
    </div>
  );
}
```

## Props

### Required Props

None - all props are optional with sensible defaults.

### Optional Props

| Prop          | Type                         | Default        | Description                                                        |
| ------------- | ---------------------------- | -------------- | ------------------------------------------------------------------ |
| `size`        | `'1' \| '2' \| '3' \| '4'`   | `'1'`          | The thickness/prominence of the separator                          |
| `color`       | `string`                     | `'gray'`       | The color - supports all Frosted UI colors                         |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the separator                                   |
| `decorative`  | `boolean`                    | `true`         | Whether the separator is purely decorative (affects accessibility) |

## Examples

### Basic Horizontal Separator

```jsx
function BasicExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Heading size="3">Account Settings</Heading>
        <Text color="gray">Manage your account preferences and security.</Text>
      </div>

      <Separator />

      <div className="space-y-2">
        <Heading size="3">Privacy Settings</Heading>
        <Text color="gray">Control your privacy and data sharing options.</Text>
      </div>

      <Separator />

      <div className="space-y-2">
        <Heading size="3">Notification Settings</Heading>
        <Text color="gray">Customize how you receive notifications.</Text>
      </div>
    </div>
  );
}
```

### Vertical Separators

```jsx
function VerticalExample() {
  return (
    <div className="flex items-center gap-4">
      <Text size="2">Home</Text>
      <Separator orientation="vertical" />
      <Text size="2">About</Text>
      <Separator orientation="vertical" />
      <Text size="2">Services</Text>
      <Separator orientation="vertical" />
      <Text size="2">Contact</Text>
    </div>
  );
}
```

### Different Sizes

```jsx
function SizesExample() {
  return (
    <div className="space-y-6 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 1 (Subtle)
        </Text>
        <Separator size="1" />
      </div>

      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 2 (Normal)
        </Text>
        <Separator size="2" />
      </div>

      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 3 (Medium)
        </Text>
        <Separator size="3" />
      </div>

      <div className="space-y-2">
        <Text size="1" color="gray">
          Size 4 (Prominent)
        </Text>
        <Separator size="4" />
      </div>
    </div>
  );
}
```

### Color Variants

```jsx
function ColorExample() {
  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" color="gray">
          Default Gray
        </Text>
        <Separator color="gray" size="2" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="blue">
          Blue
        </Text>
        <Separator color="blue" size="2" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="green">
          Green
        </Text>
        <Separator color="green" size="2" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="red">
          Red
        </Text>
        <Separator color="red" size="2" />
      </div>

      <div className="space-y-2">
        <Text size="2" color="orange">
          Orange
        </Text>
        <Separator color="orange" size="2" />
      </div>
    </div>
  );
}
```

### Navigation Separators

```jsx
function NavigationExample() {
  const navItems = [
    { label: 'Dashboard', active: true },
    { label: 'Projects', active: false },
    { label: 'Team', active: false },
    { label: 'Settings', active: false },
  ];

  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <Text
            size="2"
            weight={item.active ? 'medium' : 'normal'}
            color={item.active ? 'blue' : 'gray'}
            className="cursor-pointer hover:text-blue-11"
          >
            {item.label}
          </Text>
          {index < navItems.length - 1 && <Separator orientation="vertical" size="1" />}
        </React.Fragment>
      ))}
    </nav>
  );
}
```

### Card Content Separators

```jsx
function CardExample() {
  return (
    <Card className="max-w-[350px]">
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Heading size="3">User Profile</Heading>
          <Text color="gray">Manage your personal information</Text>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Text size="2">Name</Text>
            <Text size="2" color="gray">
              John Doe
            </Text>
          </div>

          <div className="flex items-center justify-between">
            <Text size="2">Email</Text>
            <Text size="2" color="gray">
              john@example.com
            </Text>
          </div>

          <div className="flex items-center justify-between">
            <Text size="2">Role</Text>
            <Badge variant="soft" color="blue">
              Admin
            </Badge>
          </div>
        </div>

        <Separator />

        <div className="flex gap-2">
          <Button size="2" variant="soft">
            Edit
          </Button>
          <Button size="2" variant="outline">
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}
```

### List Item Separators

```jsx
function ListExample() {
  const items = [
    { title: 'First item', description: 'Description for the first item' },
    { title: 'Second item', description: 'Description for the second item' },
    { title: 'Third item', description: 'Description for the third item' },
    { title: 'Fourth item', description: 'Description for the fourth item' },
  ];

  return (
    <div className="w-full max-w-[400px]">
      {items.map((item, index) => (
        <React.Fragment key={item.title}>
          <div className="py-3">
            <Text size="2" weight="medium">
              {item.title}
            </Text>
            <Text size="1" color="gray">
              {item.description}
            </Text>
          </div>
          {index < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </div>
  );
}
```

### Toolbar Separators

```jsx
function ToolbarExample() {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-2 rounded-3">
      <IconButton size="1" variant="ghost">
        <BoldIcon />
      </IconButton>
      <IconButton size="1" variant="ghost">
        <ItalicIcon />
      </IconButton>
      <IconButton size="1" variant="ghost">
        <UnderlineIcon />
      </IconButton>

      <Separator orientation="vertical" size="1" className="mx-1" />

      <IconButton size="1" variant="ghost">
        <AlignLeftIcon />
      </IconButton>
      <IconButton size="1" variant="ghost">
        <AlignCenterIcon />
      </IconButton>
      <IconButton size="1" variant="ghost">
        <AlignRightIcon />
      </IconButton>

      <Separator orientation="vertical" size="1" className="mx-1" />

      <IconButton size="1" variant="ghost">
        <LinkIcon />
      </IconButton>
      <IconButton size="1" variant="ghost">
        <ImageIcon />
      </IconButton>
    </div>
  );
}
```

### Semantic Separators

```jsx
function SemanticExample() {
  return (
    <div className="space-y-4 w-full max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium" color="green">
          Success Section
        </Text>
        <Text size="1" color="gray">
          Everything is working correctly
        </Text>
      </div>

      <Separator color="green" size="2" />

      <div className="space-y-2">
        <Text size="2" weight="medium" color="orange">
          Warning Section
        </Text>
        <Text size="1" color="gray">
          Please review these items
        </Text>
      </div>

      <Separator color="orange" size="2" />

      <div className="space-y-2">
        <Text size="2" weight="medium" color="red">
          Error Section
        </Text>
        <Text size="1" color="gray">
          These items need immediate attention
        </Text>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="w-full max-w-[500px] space-y-6">
      {/* Using Frosted UI spacing tokens */}
      <div className="space-y-3">
        <Heading size="4" weight="medium">
          Dashboard Overview
        </Heading>
        <Text size="2" color="gray">
          Monitor your key metrics and recent activity.
        </Text>
      </div>

      <Separator size="3" />

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Text size="1" weight="medium" color="gray">
            Total Users
          </Text>
          <Text size="5" weight="bold">
            2,847
          </Text>
        </div>

        <div className="space-y-2">
          <Text size="1" weight="medium" color="gray">
            Active Sessions
          </Text>
          <Text size="5" weight="bold">
            124
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors including `danger`, `warning`, `success`, and `info`. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Separator component includes accessibility considerations:

- **Semantic Role**: Uses the proper `separator` role by default
- **Decorative Option**: Can be marked as decorative to be ignored by screen readers
- **Orientation**: Properly communicates horizontal vs vertical orientation
- **Color Independence**: Visual separation doesn't rely solely on color

### Accessibility Guidelines

```jsx
// Good: Decorative separator (default)
<div>
  <Text>Section 1</Text>
  <Separator /> {/* decorative={true} by default */}
  <Text>Section 2</Text>
</div>

// Good: Semantic separator for screen readers
<div>
  <Text>Navigation</Text>
  <Separator decorative={false} />
  <Text>Content</Text>
</div>

// Good: Clear visual hierarchy without relying only on color
<div>
  <Heading size="3">Important Section</Heading>
  <Separator size="3" color="blue" />
  <Text>This section has both visual weight and color distinction</Text>
</div>
```

## Advanced Usage

### Responsive Separators

```jsx
function ResponsiveExample() {
  return (
    <div className="space-y-4 w-full">
      {/* Mobile: horizontal separators */}
      <div className="md:hidden space-y-4">
        <Text>Mobile Item 1</Text>
        <Separator />
        <Text>Mobile Item 2</Text>
        <Separator />
        <Text>Mobile Item 3</Text>
      </div>

      {/* Desktop: vertical separators */}
      <div className="hidden md:flex items-center gap-4">
        <Text>Desktop Item 1</Text>
        <Separator orientation="vertical" />
        <Text>Desktop Item 2</Text>
        <Separator orientation="vertical" />
        <Text>Desktop Item 3</Text>
      </div>
    </div>
  );
}
```

### Dynamic Separators

```jsx
function DynamicExample() {
  const [sections, setSections] = React.useState([
    { id: 1, title: 'Section 1', content: 'First section content', type: 'normal' },
    { id: 2, title: 'Section 2', content: 'Second section content', type: 'warning' },
    { id: 3, title: 'Section 3', content: 'Third section content', type: 'error' }
  ]);

  const getSeparatorColor = (type: string) => {
    switch (type) {
      case 'warning': return 'orange';
      case 'error': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="w-full max-w-[400px]">
      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          <div className="py-3">
            <Text size="2" weight="medium">{section.title}</Text>
            <Text size="1" color="gray">{section.content}</Text>
          </div>
          {index < sections.length - 1 && (
            <Separator
              color={getSeparatorColor(section.type)}
              size={section.type === 'normal' ? '1' : '2'}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
```

### Custom Separator Patterns

```jsx
function CustomPatternsExample() {
  return (
    <div className="space-y-8 w-full max-w-[400px]">
      {/* Gradient-like effect with multiple separators */}
      <div className="space-y-1">
        <Text size="2" weight="medium">
          Gradient Effect
        </Text>
        <div className="space-y-1">
          <Separator size="3" color="blue" />
          <Separator size="2" color="blue" />
          <Separator size="1" color="blue" />
        </div>
      </div>

      {/* Emphasis pattern */}
      <div className="space-y-2">
        <Text size="2" weight="medium">
          Emphasis Pattern
        </Text>
        <Separator size="1" />
        <Separator size="3" color="blue" />
        <Separator size="1" />
      </div>

      {/* Color progression */}
      <div className="space-y-2">
        <Text size="2" weight="medium">
          Color Progression
        </Text>
        <div className="space-y-1">
          <Separator size="2" color="green" />
          <Separator size="2" color="yellow" />
          <Separator size="2" color="orange" />
          <Separator size="2" color="red" />
        </div>
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

- Use separators to create clear visual hierarchy
- Choose appropriate sizes based on content importance
- Use semantic colors when separators have meaning
- Consider responsive behavior for different screen sizes
- Use consistent separator styles throughout your interface

### Don'ts

- Don't overuse separators - they can create visual clutter
- Avoid using separators as the only way to distinguish content
- Don't use very thick separators unless they serve a specific purpose
- Avoid mixing different separator styles inconsistently
- Don't rely solely on color to convey meaning

### Visual Hierarchy

```jsx
// Good: Clear hierarchy with appropriate sizes
<div className="space-y-4">
  <Heading size="4">Main Section</Heading>
  <Separator size="3" />

  <Heading size="3">Subsection</Heading>
  <Separator size="2" />

  <Text>Content with minor divisions</Text>
  <Separator size="1" />
  <Text>More content</Text>
</div>

// Avoid: Inconsistent or excessive separators
<div className="space-y-2">
  <Text>Item 1</Text>
  <Separator size="4" />
  <Text>Item 2</Text>
  <Separator size="1" />
  <Text>Item 3</Text>
  <Separator size="3" />
</div>
```

## Related Components

- **[Card](../card/card.ai.md)** - Often used with separators to divide card content
- **[Text](../text/text.ai.md)** - Content that separators divide
- **[Heading](../heading/heading.ai.md)** - Section headers that work with separators
- **[Button](../button/button.ai.md)** - Action groups that may need separation
- **[Badge](../badge/badge.ai.md)** - Status indicators that complement separator organization
