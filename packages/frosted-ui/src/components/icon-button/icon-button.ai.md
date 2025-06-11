# Frosted UI IconButton Component

A square button component specifically designed for displaying icons. The IconButton component is built on top of BaseButton and provides the same visual variants and functionality as Button, but with equal width and height dimensions optimized for icon-only interfaces.

## Overview

The IconButton component is a specialized version of the Button component that maintains a square aspect ratio, making it perfect for icon-only interfaces like toolbars, navigation bars, and action panels. It inherits all the functionality from BaseButton while providing consistent square dimensions across all sizes.

Key features:

- **Square Dimensions**: Equal width and height for perfect icon display
- **5 Visual Variants**: classic, solid, soft, surface, ghost
- **4 Sizes**: Ranging from compact (size 1) to large (size 4)
- **Complete Color System**: All Frosted UI colors + semantic colors
- **Built-in Loading State**: Automatic spinner integration
- **High Contrast Mode**: Enhanced accessibility support
- **Consistent with Button**: Same API and behavior as Button component

## Basic Usage

```jsx
import { IconButton } from '@frosted-ui/core';
import { Bookmark16 } from '@frosted-ui/icons';

function BasicExample() {
  return (
    <IconButton>
      <Bookmark16 />
    </IconButton>
  );
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop           | Type                                                     | Default     | Description                                          |
| -------------- | -------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| `size`         | `'1' \| '2' \| '3' \| '4'`                               | `'2'`       | Controls button size (maintains square aspect ratio) |
| `variant`      | `'classic' \| 'solid' \| 'soft' \| 'surface' \| 'ghost'` | `'surface'` | Visual style variant                                 |
| `color`        | `string`                                                 | `undefined` | Color from Frosted UI palette or semantic colors     |
| `highContrast` | `boolean`                                                | `false`     | Enable high contrast mode for better accessibility   |
| `loading`      | `boolean`                                                | `false`     | Show loading spinner and disable interaction         |
| `disabled`     | `boolean`                                                | `false`     | Disable button interaction                           |
| `asChild`      | `boolean`                                                | `false`     | Render as child component (useful for links)         |
| `children`     | `ReactNode`                                              | -           | Icon content (typically an SVG icon)                 |

Plus all standard HTML button attributes (`onClick`, `type`, `form`, etc.).

## Examples

### Sizes

```jsx
import { Bookmark16, Bookmark20, Bookmark22 } from '@frosted-ui/icons';

function SizeExample() {
  return (
    <div className="flex items-center gap-2">
      <IconButton size="4">
        <Bookmark22 />
      </IconButton>
      <IconButton size="3">
        <Bookmark20 />
      </IconButton>
      <IconButton size="2">
        <Bookmark16 />
      </IconButton>
      <IconButton size="1">
        <Bookmark16 />
      </IconButton>
    </div>
  );
}
```

### Variants

```jsx
import { Bookmark16 } from '@frosted-ui/icons';

function VariantExample() {
  return (
    <div className="flex items-center gap-4">
      <IconButton variant="classic">
        <Bookmark16 />
      </IconButton>
      <IconButton variant="solid">
        <Bookmark16 />
      </IconButton>
      <IconButton variant="soft">
        <Bookmark16 />
      </IconButton>
      <IconButton variant="surface">
        <Bookmark16 />
      </IconButton>
      <IconButton variant="ghost">
        <Bookmark16 />
      </IconButton>
    </div>
  );
}
```

### Colors

```jsx
import { Heart16 } from '@frosted-ui/icons';

function ColorExample() {
  return (
    <div className="flex items-center gap-2">
      <IconButton color="indigo">
        <Heart16 />
      </IconButton>
      <IconButton color="cyan">
        <Heart16 />
      </IconButton>
      <IconButton color="orange">
        <Heart16 />
      </IconButton>
      <IconButton color="crimson">
        <Heart16 />
      </IconButton>
    </div>
  );
}
```

### Semantic Colors

```jsx
import { Info16, CheckCircle16, AlertTriangle16, X16 } from '@frosted-ui/icons';

function SemanticColorExample() {
  return (
    <div className="flex items-center gap-2">
      <IconButton color="info">
        <Info16 />
      </IconButton>
      <IconButton color="success">
        <CheckCircle16 />
      </IconButton>
      <IconButton color="warning">
        <AlertTriangle16 />
      </IconButton>
      <IconButton color="danger">
        <X16 />
      </IconButton>
    </div>
  );
}
```

### High Contrast Mode

```jsx
import { Settings16 } from '@frosted-ui/icons';

function HighContrastExample() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <IconButton variant="classic">
          <Settings16 />
        </IconButton>
        <IconButton variant="solid">
          <Settings16 />
        </IconButton>
        <IconButton variant="soft">
          <Settings16 />
        </IconButton>
        <IconButton variant="surface">
          <Settings16 />
        </IconButton>
      </div>
      <div className="flex gap-2">
        <IconButton variant="classic" highContrast>
          <Settings16 />
        </IconButton>
        <IconButton variant="solid" highContrast>
          <Settings16 />
        </IconButton>
        <IconButton variant="soft" highContrast>
          <Settings16 />
        </IconButton>
        <IconButton variant="surface" highContrast>
          <Settings16 />
        </IconButton>
      </div>
    </div>
  );
}
```

### Loading States

```jsx
import { Download16 } from '@frosted-ui/icons';

function LoadingExample() {
  return (
    <div className="flex items-center gap-4">
      <IconButton loading variant="classic">
        <Download16 />
      </IconButton>
      <IconButton loading variant="solid">
        <Download16 />
      </IconButton>
      <IconButton loading variant="soft">
        <Download16 />
      </IconButton>
      <IconButton loading variant="surface">
        <Download16 />
      </IconButton>
      <IconButton loading variant="ghost">
        <Download16 />
      </IconButton>
    </div>
  );
}
```

### Toolbar Pattern

```jsx
import { Bold16, Italic16, Underline16, AlignLeft16, AlignCenter16, AlignRight16 } from '@frosted-ui/icons';

function ToolbarExample() {
  return (
    <div className="flex items-center gap-1 p-1 bg-gray-2 rounded-3">
      <div className="flex gap-1">
        <IconButton variant="ghost" size="1">
          <Bold16 />
        </IconButton>
        <IconButton variant="ghost" size="1">
          <Italic16 />
        </IconButton>
        <IconButton variant="ghost" size="1">
          <Underline16 />
        </IconButton>
      </div>
      <div className="w-px h-4 bg-gray-6"></div>
      <div className="flex gap-1">
        <IconButton variant="ghost" size="1">
          <AlignLeft16 />
        </IconButton>
        <IconButton variant="ghost" size="1">
          <AlignCenter16 />
        </IconButton>
        <IconButton variant="ghost" size="1">
          <AlignRight16 />
        </IconButton>
      </div>
    </div>
  );
}
```

### Navigation Pattern

```jsx
import { Home16, Search16, Settings16, User16 } from '@frosted-ui/icons';

function NavigationExample() {
  return (
    <div className="flex flex-col gap-1 p-2 bg-panel-solid border border-gray-6 rounded-4">
      <IconButton variant="soft" color="blue">
        <Home16 />
      </IconButton>
      <IconButton variant="ghost">
        <Search16 />
      </IconButton>
      <IconButton variant="ghost">
        <Settings16 />
      </IconButton>
      <IconButton variant="ghost">
        <User16 />
      </IconButton>
    </div>
  );
}
```

### As Child (Link)

```jsx
import { ExternalLink16 } from '@frosted-ui/icons';

function LinkIconButtonExample() {
  return (
    <IconButton asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <ExternalLink16 />
      </a>
    </IconButton>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
import { Plus16, Minus16 } from '@frosted-ui/icons';

function IntegrationExample() {
  return (
    <div className="flex items-center gap-2">
      <IconButton variant="solid" color="green" className="ring-2 ring-green-6">
        <Plus16 />
      </IconButton>
      <IconButton variant="soft" color="red" className="border border-red-7">
        <Minus16 />
      </IconButton>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';
import { Heart16, Share16 } from '@frosted-ui/icons';

function TypographyIntegrationExample() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-1 border border-gray-6 rounded-4">
      <div className="space-y-1">
        <Heading size="3" weight="medium">
          Article Title
        </Heading>
        <Text size="2" color="gray">
          Published 2 hours ago
        </Text>
      </div>
      <div className="flex gap-1">
        <IconButton variant="ghost" size="1">
          <Heart16 />
        </IconButton>
        <IconButton variant="ghost" size="1">
          <Share16 />
        </IconButton>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The IconButton component uses the same color system as Button:

- **Solid variant**: Uses step 9 for background, 9-contrast for text
- **Soft variant**: Uses steps 3-5 for backgrounds, 11 for text
- **Surface variant**: Uses panel-solid background, step 11 for text
- **Ghost variant**: Uses alpha backgrounds on hover/active
- **Classic variant**: Uses step 9 with gradients and shadows

## Accessibility

The IconButton component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with focus management
- **Screen Reader Support**: Proper labeling and state announcements
- **High Contrast Support**: Enhanced visibility with `highContrast` prop
- **Loading States**: Proper `aria-busy` attribute during loading
- **Disabled States**: Correct `aria-disabled` and `disabled` attributes
- **Focus Management**: Visible focus indicators with proper contrast
- **Icon Labeling**: Always provide `aria-label` for screen readers

```jsx
import { Delete16, Edit16 } from '@frosted-ui/icons';

function AccessibilityExample() {
  return (
    <div className="flex gap-2">
      <IconButton variant="solid" color="danger" highContrast aria-label="Delete item">
        <Delete16 />
      </IconButton>
      <IconButton loading aria-label="Saving changes" disabled>
        <Edit16 />
      </IconButton>
    </div>
  );
}
```

## Advanced Usage

### Action Panels

```jsx
import { Copy16, Move16, Archive16, Trash16 } from '@frosted-ui/icons';

function ActionPanelExample() {
  return (
    <div className="flex flex-col gap-2 p-3 bg-panel-solid border border-gray-6 rounded-4 max-w-[200px]">
      <div className="flex items-center gap-2">
        <IconButton variant="ghost" size="1">
          <Copy16 />
        </IconButton>
        <Text size="2">Copy</Text>
      </div>
      <div className="flex items-center gap-2">
        <IconButton variant="ghost" size="1">
          <Move16 />
        </IconButton>
        <Text size="2">Move</Text>
      </div>
      <div className="flex items-center gap-2">
        <IconButton variant="ghost" size="1">
          <Archive16 />
        </IconButton>
        <Text size="2">Archive</Text>
      </div>
      <div className="w-full h-px bg-gray-6"></div>
      <div className="flex items-center gap-2">
        <IconButton variant="ghost" size="1" color="danger">
          <Trash16 />
        </IconButton>
        <Text size="2" color="danger">
          Delete
        </Text>
      </div>
    </div>
  );
}
```

### Floating Action Buttons

```jsx
import { Plus16, Message16 } from '@frosted-ui/icons';

function FloatingActionExample() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <IconButton variant="solid" color="blue" size="3" className="shadow-lg shadow-blue-a4">
        <Plus16 />
      </IconButton>
      <IconButton variant="surface" size="2" className="shadow-md shadow-black-a2">
        <Message16 />
      </IconButton>
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Always provide `aria-label`** for screen reader accessibility
- **Use appropriate icon sizes** (16px for size 1-2, 20px for size 3, 22px for size 4)
- **Choose semantic colors** for actions (danger for delete, success for approve)
- **Use ghost variant** for toolbar and navigation contexts
- **Use solid variant** for primary floating actions
- **Group related actions** together with proper spacing

```jsx
// ✅ Good - Proper labeling and semantic colors
import { Save16, Cancel16 } from '@frosted-ui/icons';

function GoodExample() {
  return (
    <div className="flex gap-2">
      <IconButton variant="solid" color="success" aria-label="Save changes">
        <Save16 />
      </IconButton>
      <IconButton variant="ghost" aria-label="Cancel editing">
        <Cancel16 />
      </IconButton>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use text content** in IconButton (use Button instead)
- **Don't forget `aria-label`** for accessibility
- **Don't use mismatched icon sizes** for the button size
- **Don't use standard Tailwind colors** (use Frosted UI tokens only)
- **Don't use size 4** unless the button needs high prominence

```jsx
// ❌ Bad - Missing aria-label, wrong content type, standard Tailwind
import { Settings16 } from '@frosted-ui/icons';

function BadExample() {
  return (
    <div className="flex gap-2">
      <IconButton className="bg-blue-500 text-white">
        <Settings16 />
      </IconButton>
      <IconButton>Settings {/* ❌ Don't use text in IconButton */}</IconButton>
    </div>
  );
}
```

## Related Components

- **[Button](../button/button.ai.md)** - For buttons with text content
- **[Text](../text/text.ai.md)** - For action panel labels
- **[Heading](../heading/heading.ai.md)** - For section headers
- **[Spinner](../spinner/spinner.ai.md)** - For custom loading implementations
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling

```

```
