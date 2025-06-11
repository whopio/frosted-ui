# Frosted UI Button Component

A versatile button component that provides multiple visual variants, sizes, and loading states. The Button component is built on top of BaseButton and supports all Frosted UI design tokens.

## Overview

The Button component is a core interactive element in Frosted UI that offers five distinct visual variants (classic, solid, soft, surface, ghost), four sizes, comprehensive color system support, and built-in loading states. It supports icons, custom styling, and accessibility features out of the box.

Key features:

- **5 Visual Variants**: classic, solid, soft, surface, ghost
- **4 Sizes**: Ranging from compact (size 1) to large (size 4)
- **Complete Color System**: All Frosted UI colors + semantic colors
- **Built-in Loading State**: Automatic spinner integration
- **Icon Support**: Easy icon composition with proper spacing
- **High Contrast Mode**: Enhanced accessibility support
- **Flexible Rendering**: Can render as child components with `asChild`

## Basic Usage

```jsx
import { Button } from '@frosted-ui/core';

function BasicExample() {
  return <Button>Click me</Button>;
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop           | Type                                                     | Default     | Description                                        |
| -------------- | -------------------------------------------------------- | ----------- | -------------------------------------------------- |
| `size`         | `'1' \| '2' \| '3' \| '4'`                               | `'2'`       | Controls button size and typography scale          |
| `variant`      | `'classic' \| 'solid' \| 'soft' \| 'surface' \| 'ghost'` | `'surface'` | Visual style variant                               |
| `color`        | `string`                                                 | `undefined` | Color from Frosted UI palette or semantic colors   |
| `highContrast` | `boolean`                                                | `false`     | Enable high contrast mode for better accessibility |
| `loading`      | `boolean`                                                | `false`     | Show loading spinner and disable interaction       |
| `disabled`     | `boolean`                                                | `false`     | Disable button interaction                         |
| `asChild`      | `boolean`                                                | `false`     | Render as child component (useful for links)       |
| `children`     | `ReactNode`                                              | -           | Button content (text, icons, etc.)                 |

Plus all standard HTML button attributes (`onClick`, `type`, `form`, etc.).

## Examples

### Sizes

```jsx
function SizeExample() {
  return (
    <div className="flex items-center gap-2">
      <Button size="4">Large</Button>
      <Button size="3">Medium</Button>
      <Button size="2">Default</Button>
      <Button size="1">Small</Button>
    </div>
  );
}
```

### Variants

```jsx
function VariantExample() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="classic">Classic</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
```

### Colors

```jsx
function ColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Button color="indigo">Indigo</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="orange">Orange</Button>
      <Button color="crimson">Crimson</Button>
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
}
```

### High Contrast Mode

```jsx
function HighContrastExample() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button variant="classic">Normal</Button>
        <Button variant="solid">Normal</Button>
        <Button variant="soft">Normal</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="classic" highContrast>
          High Contrast
        </Button>
        <Button variant="solid" highContrast>
          High Contrast
        </Button>
        <Button variant="soft" highContrast>
          High Contrast
        </Button>
      </div>
    </div>
  );
}
```

### With Icons

```jsx
import { Download16 } from '@frosted-ui/icons';

function IconExample() {
  return (
    <div className="flex items-center gap-2">
      <Button>
        <Download16 />
        Download
      </Button>
      <Button variant="soft">
        <Download16 />
        Download
      </Button>
    </div>
  );
}
```

### Loading States

```jsx
import { Download16, Spinner } from '@frosted-ui/core';

function LoadingExample() {
  return (
    <div className="flex flex-col gap-4 max-w-[650px]">
      {/* Built-in loading prop */}
      <div className="flex items-center gap-4">
        <Button loading variant="classic">
          Loading
        </Button>
        <Button loading variant="solid">
          Loading
        </Button>
        <Button loading variant="soft">
          Loading
        </Button>
      </div>

      {/* Custom loading with icons */}
      <div className="flex items-center gap-4">
        <Button variant="classic">
          <Spinner loading={false}>
            <Download16 />
          </Spinner>
          Download
        </Button>
        <Button variant="classic" disabled>
          <Spinner loading>
            <Download16 />
          </Spinner>
          Downloading...
        </Button>
      </div>
    </div>
  );
}
```

### As Child (Link Button)

```jsx
function LinkButtonExample() {
  return (
    <Button asChild>
      <a href="/dashboard">Go to Dashboard</a>
    </Button>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  return (
    <form className="flex flex-col gap-3 max-w-[300px]">
      <input type="email" placeholder="Enter email" className="p-2 border border-gray-7 rounded" />
      <div className="flex gap-2">
        <Button type="submit" variant="solid" color="blue">
          Submit
        </Button>
        <Button type="button" variant="ghost">
          Cancel
        </Button>
      </div>
    </form>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="solid" color="blue" className="ring-2 ring-blue-6">
        Primary Action
      </Button>
      <Button variant="surface" className="border border-gray-7">
        Secondary
      </Button>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  return (
    <div className="flex flex-col gap-3">
      <Heading size="4" weight="bold">
        Complete Action
      </Heading>
      <Text size="2" color="gray">
        Choose an action to continue with your workflow.
      </Text>
      <div className="flex gap-2">
        <Button variant="solid" color="success">
          Continue
        </Button>
        <Button variant="ghost" color="gray">
          Cancel
        </Button>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The Button component automatically uses the appropriate color steps from the 12-step scale:

- **Solid variant**: Uses step 9 for background, 9-contrast for text
- **Soft variant**: Uses steps 3-5 for backgrounds, 11 for text
- **Surface variant**: Uses panel-solid background, step 11 for text
- **Ghost variant**: Uses alpha backgrounds on hover/active
- **Classic variant**: Uses step 9 with gradients and shadows

## Accessibility

The Button component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader Support**: Proper labeling and state announcements
- **High Contrast Support**: Enhanced visibility with `highContrast` prop
- **Loading States**: Proper `aria-busy` attribute during loading
- **Disabled States**: Correct `aria-disabled` and `disabled` attributes
- **Focus Management**: Visible focus indicators with proper contrast

```jsx
function AccessibilityExample() {
  return (
    <div className="flex gap-2">
      <Button variant="solid" highContrast aria-label="Save document">
        Save
      </Button>
      <Button loading aria-label="Processing request">
        Processing...
      </Button>
    </div>
  );
}
```

## Advanced Usage

### Custom Button Combinations

```jsx
function AdvancedExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Action group */}
      <div className="flex gap-1 p-1 bg-gray-2 rounded-5">
        <Button variant="ghost" size="1">
          Edit
        </Button>
        <Button variant="ghost" size="1">
          Share
        </Button>
        <Button variant="ghost" size="1">
          Delete
        </Button>
      </div>

      {/* Call-to-action pattern */}
      <div className="flex items-center justify-between p-4 bg-blue-1 border border-blue-6 rounded-4">
        <div className="space-y-1">
          <Heading size="3">Upgrade Your Plan</Heading>
          <Text size="2" color="gray">
            Get access to premium features
          </Text>
        </div>
        <Button variant="solid" color="blue">
          Upgrade Now
        </Button>
      </div>
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use semantic colors** for actions (success for confirm, danger for delete)
- **Choose appropriate variants** (solid for primary, surface for secondary)
- **Include loading states** for async operations
- **Use proper sizing** (size 1 for compact areas, size 3-4 for prominence)
- **Combine with icons** for better visual communication
- **Enable high contrast** when accessibility is critical

```jsx
// ✅ Good - Semantic colors and proper hierarchy
function GoodExample() {
  return (
    <div className="flex gap-2">
      <Button variant="solid" color="success">
        Save Changes
      </Button>
      <Button variant="surface">Cancel</Button>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use standard Tailwind colors** (use Frosted UI tokens only)
- **Don't use too many solid buttons** in one interface
- **Don't forget loading states** for async actions
- **Don't use size 4** unless the button needs high prominence
- **Don't mix different button styles** inconsistently

```jsx
// ❌ Bad - Standard Tailwind classes and poor hierarchy
function BadExample() {
  return (
    <div className="flex gap-2">
      <button className="bg-blue-500 text-white px-4 py-2">Save</button>
      <button className="bg-green-500 text-white px-4 py-2">Cancel</button>
    </div>
  );
}
```

## Related Components

- **[IconButton](../icon-button/icon-button.ai.md)** - For icon-only buttons
- **[Text](../text/text.ai.md)** - For button labels and descriptions
- **[Heading](../heading/heading.ai.md)** - For button section headers
- **[Spinner](../spinner/spinner.ai.md)** - For custom loading implementations
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
