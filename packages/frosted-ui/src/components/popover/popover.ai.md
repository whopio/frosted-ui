# Frosted UI Popover Component

A floating content area that appears when triggered by user interaction, perfect for displaying additional information, forms, or actions without navigating away from the current context.

## Overview

The Popover component provides a non-modal overlay that's positioned relative to a trigger element. Unlike tooltips, popovers can contain interactive content and remain open until explicitly closed. The component is built using multiple sub-components that work together to provide a complete popover experience.

## Basic Usage

```jsx
import { Popover, Button, Text } from '@frosted-ui/core';

function BasicPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content className="max-w-[300px]">
        <Text>This is the popover content that appears when the trigger is clicked.</Text>
      </Popover.Content>
    </Popover.Root>
  );
}
```

## Props

### Popover.Root Props

| Prop           | Type                      | Default     | Description                                                     |
| -------------- | ------------------------- | ----------- | --------------------------------------------------------------- |
| `open`         | `boolean`                 | `undefined` | The controlled open state of the popover                        |
| `defaultOpen`  | `boolean`                 | `false`     | The open state of the popover when initially rendered           |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Event handler called when the open state of the popover changes |
| `modal`        | `boolean`                 | `false`     | Whether the popover should render in a modal state              |

### Popover.Trigger Props

The trigger accepts any valid React element as a child and passes through all standard HTML attributes.

### Popover.Content Props

| Prop               | Type                                     | Default         | Description                                                |
| ------------------ | ---------------------------------------- | --------------- | ---------------------------------------------------------- |
| `size`             | `'1' \| '2' \| '3' \| '4'`               | `'2'`           | The size of the popover content area                       |
| `variant`          | `'solid' \| 'translucent'`               | `'translucent'` | The visual style variant                                   |
| `side`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'`      | The preferred side of the trigger to render against        |
| `align`            | `'start' \| 'center' \| 'end'`           | `'center'`      | The preferred alignment against the trigger                |
| `sideOffset`       | `number`                                 | `8`             | The distance in pixels from the trigger                    |
| `alignOffset`      | `number`                                 | `0`             | An offset in pixels from the alignment axis                |
| `collisionPadding` | `number`                                 | `10`            | The padding between the arrow and the edges of the content |
| `container`        | `HTMLElement`                            | `undefined`     | Specify a container element to portal the content into     |
| `forceMount`       | `boolean`                                | `false`         | Used to force mounting when more control is needed         |

### Popover.Close Props

The close trigger accepts any valid React element as a child and passes through all standard HTML attributes.

## Examples

### Comment Popover

```jsx
import { Popover, Button, TextArea, Avatar, Checkbox, Text } from '@frosted-ui/core';

function CommentPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Comment</Button>
      </Popover.Trigger>
      <Popover.Content className="w-[360px]">
        <div className="flex gap-3">
          <Avatar size="2" fallback="A" />
          <div className="flex-1 space-y-3">
            <TextArea placeholder="Write a comment…" className="h-[80px]" />
            <div className="flex items-center justify-between">
              <Text size="2" asChild>
                <label className="flex items-center gap-2">
                  <Checkbox />
                  Send to group
                </label>
              </Text>
              <Popover.Close>
                <Button size="1">Comment</Button>
              </Popover.Close>
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
```

### Settings Popover

```jsx
import { Popover, IconButton, Heading, SegmentedControl, Separator, Switch, Text } from '@frosted-ui/core';

function SettingsPopover() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton variant="ghost" size="3">
          <SettingsIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content variant="translucent" align="center" className="w-[280px]">
        <div className="space-y-4">
          <Heading size="3">Appearance</Heading>

          <SegmentedControl.Root value={theme} onValueChange={setTheme}>
            <SegmentedControl.List>
              <SegmentedControl.Trigger value="light">Light</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="dark">Dark</SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>

          <Separator size="4" />

          <Text asChild size="2">
            <label className="flex items-center gap-2">
              <Switch />
              Auto switching
            </label>
          </Text>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
```

### Profile Actions Popover

```jsx
import { Popover, Avatar, Button, Text, Heading, Separator } from '@frosted-ui/core';

function ProfilePopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Avatar size="2" fallback="JD" className="cursor-pointer" />
      </Popover.Trigger>
      <Popover.Content align="end" className="w-[240px]">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar size="3" fallback="JD" />
            <div className="space-y-1">
              <Heading size="2">John Doe</Heading>
              <Text size="1" color="gray">
                john@example.com
              </Text>
            </div>
          </div>

          <Separator size="4" />

          <div className="space-y-1">
            <Button variant="ghost" size="1" className="w-full justify-start">
              Profile Settings
            </Button>
            <Button variant="ghost" size="1" className="w-full justify-start">
              Billing
            </Button>
            <Button variant="ghost" size="1" className="w-full justify-start">
              Team
            </Button>
          </div>

          <Separator size="4" />

          <Popover.Close>
            <Button variant="ghost" size="1" className="w-full justify-start" color="red">
              Sign out
            </Button>
          </Popover.Close>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
```

### Size Variants

```jsx
import { Popover, Button, Text } from '@frosted-ui/core';

function SizeVariants() {
  return (
    <div className="flex items-start gap-4">
      <Popover.Root>
        <Popover.Trigger>
          <Button size="1">Size 1</Button>
        </Popover.Trigger>
        <Popover.Content size="1" className="max-w-[200px]">
          <Text size="1">Small popover with minimal padding</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="2">Size 2</Button>
        </Popover.Trigger>
        <Popover.Content size="2" className="max-w-[250px]">
          <Text size="2">Default size popover with standard padding</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="2">Size 3</Button>
        </Popover.Trigger>
        <Popover.Content size="3" className="max-w-[300px]">
          <Text size="2">Large popover with generous padding for complex content</Text>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button size="3">Size 4</Button>
        </Popover.Trigger>
        <Popover.Content size="4" className="max-w-[350px]">
          <Text size="3">Extra large popover with maximum padding</Text>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
```

### Variant Examples

```jsx
import { Popover, Button, Text, Heading } from '@frosted-ui/core';

function VariantExamples() {
  return (
    <div className="flex items-start gap-4">
      <Popover.Root>
        <Popover.Trigger>
          <Button variant="soft">Translucent</Button>
        </Popover.Trigger>
        <Popover.Content variant="translucent" className="w-[280px]">
          <div className="space-y-2">
            <Heading size="3">Translucent Popover</Heading>
            <Text color="gray">
              This popover has a translucent background with backdrop blur for a modern glass effect.
            </Text>
          </div>
        </Popover.Content>
      </Popover.Root>

      <Popover.Root>
        <Popover.Trigger>
          <Button variant="surface">Solid</Button>
        </Popover.Trigger>
        <Popover.Content variant="solid" className="w-[280px]">
          <div className="space-y-2">
            <Heading size="3">Solid Popover</Heading>
            <Text color="gray">This popover has a solid background for maximum contrast and readability.</Text>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
```

### Form Popover

```jsx
import { Popover, Button, Text, Heading, TextArea, TextField } from '@frosted-ui/core';

function FormPopover() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>Quick Feedback</Button>
      </Popover.Trigger>
      <Popover.Content className="w-[320px]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Heading size="3">Send Feedback</Heading>

          <div className="space-y-3">
            <TextField placeholder="Subject" />
            <TextArea placeholder="Your feedback..." className="h-[100px]" />
          </div>

          <div className="flex items-center justify-end gap-2">
            <Popover.Close>
              <Button variant="ghost" size="1">
                Cancel
              </Button>
            </Popover.Close>
            <Button type="submit" size="1" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'}
            </Button>
          </div>
        </form>
      </Popover.Content>
    </Popover.Root>
  );
}
```

### Controlled Popover

```jsx
import { Popover, Button, Text } from '@frosted-ui/core';

function ControlledPopover() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Text size="2">Popover is {open ? 'open' : 'closed'}</Text>
        <Button variant="outline" size="1" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'} Programmatically
        </Button>
      </div>

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <Button>Controlled Popover</Button>
        </Popover.Trigger>
        <Popover.Content className="max-w-[280px]">
          <div className="space-y-2">
            <Text weight="medium">Controlled State</Text>
            <Text size="2" color="gray">
              This popover's open state is controlled by external state.
            </Text>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<Popover.Content className="w-[320px]">
  <div className="space-y-4"> {/* Uses --space-4 */}
    <div className="flex items-center gap-3"> {/* Uses --space-3 */}
      <Content />
    </div>
  </div>
</Popover.Content>

// Use Typography components for text content
<Popover.Content>
  <Heading size="3">Title</Heading>
  <Text color="gray">Description text</Text>
</Popover.Content>
```

### Responsive Sizing

```jsx
// Use arbitrary values for custom widths
<Popover.Content className="w-[280px] sm:w-[360px]">
  <ResponsiveContent />
</Popover.Content>

// Use max-width constraints
<Popover.Content className="max-w-[400px]">
  <FlexibleContent />
</Popover.Content>
```

## Accessibility

The Popover component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with Escape to close
- **Focus Management**: Proper focus trapping and restoration
- **ARIA Attributes**: Correct ARIA labeling and relationships
- **Screen Reader**: Compatible with screen reader technologies
- **Portal Rendering**: Content rendered in a portal to avoid z-index issues

### Keyboard Shortcuts

- `Space` or `Enter` on trigger: Opens the popover
- `Escape`: Closes the popover
- `Tab`: Moves focus through interactive elements within the popover

## Best Practices

### Content Guidelines

- **Keep content focused**: Popovers should contain related information or actions
- **Limit nesting**: Avoid placing other overlay components inside popovers
- **Size appropriately**: Use the size prop to match content density
- **Consider mobile**: Ensure popover content works well on smaller screens

### Positioning

- **Smart defaults**: The component automatically repositions to stay in viewport
- **Consider trigger**: Place popovers where they won't obscure important content
- **Side alignment**: Use `side` and `align` props for optimal positioning

### Performance

- **Lazy content**: Use `forceMount={false}` to mount content only when needed
- **Portal wisely**: Use the `container` prop when you need specific portal behavior

## Advanced Usage

### Custom Trigger Elements

```jsx
import { Popover, Card, Text } from '@frosted-ui/core';

function CustomTrigger() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Card asChild className="cursor-pointer hover:bg-gray-2">
          <div className="p-4">
            <Text>Click me for details</Text>
          </div>
        </Card>
      </Popover.Trigger>
      <Popover.Content>
        <Text>Popover content triggered by a custom card</Text>
      </Popover.Content>
    </Popover.Root>
  );
}
```

### Rich Content with Actions

```jsx
import { Popover, Button, Text, Heading, Badge, Separator } from '@frosted-ui/core';

function RichContentPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button>View Details</Button>
      </Popover.Trigger>
      <Popover.Content className="w-[300px]">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <Heading size="3">Task Details</Heading>
              <Text size="2" color="gray">
                ID: #1234
              </Text>
            </div>
            <Badge color="green">Active</Badge>
          </div>

          <Separator size="4" />

          <div className="space-y-2">
            <Text size="2" weight="medium">
              Description
            </Text>
            <Text size="2" color="gray">
              Complete the user interface design for the new dashboard component.
            </Text>
          </div>

          <div className="flex gap-2">
            <Button size="1" variant="soft">
              Edit
            </Button>
            <Popover.Close>
              <Button size="1" variant="outline">
                Close
              </Button>
            </Popover.Close>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
```

## Related Components

- **[Tooltip](../tooltip/tooltip.ai.md)** - For simple, non-interactive hover information
- **[Dialog](../dialog/dialog.ai.md)** - For modal overlays that require user attention
- **[Dropdown Menu](../dropdown-menu/dropdown-menu.ai.md)** - For action menus and navigation
- **[Hover Card](../hover-card/hover-card.ai.md)** - For rich hover previews
- **[Button](../button/button.ai.md)** - Common trigger element for popovers
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text content within popovers

```

```
