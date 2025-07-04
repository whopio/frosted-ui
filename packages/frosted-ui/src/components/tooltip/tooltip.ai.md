# Frosted UI Tooltip Component

A floating label that provides additional information when users hover or focus on an element.

## Overview

The Tooltip component displays contextual information in a small overlay that appears when users interact with trigger elements. It supports two modes: always showing on hover/focus, or only when content overflows. Built on Radix UI primitives with Frosted UI styling and design tokens.

## Basic Usage

```jsx
import { Tooltip, IconButton } from '@frosted-ui/core';

function App() {
  return (
    <Tooltip content="Add to favorites">
      <IconButton>
        <StarIcon />
      </IconButton>
    </Tooltip>
  );
}
```

## Props

### Required Props

| Prop       | Type              | Description                               |
| ---------- | ----------------- | ----------------------------------------- |
| `content`  | `React.ReactNode` | The content to display inside the tooltip |
| `children` | `React.ReactNode` | The element that triggers the tooltip     |

### Optional Props

| Prop                      | Type                                     | Default     | Description                                                                      |
| ------------------------- | ---------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `type`                    | `'always' \| 'overflow'`                 | `'always'`  | When to show the tooltip - always on hover/focus, or only when content overflows |
| `open`                    | `boolean`                                | `undefined` | Control the open state                                                           |
| `defaultOpen`             | `boolean`                                | `undefined` | The initial open state                                                           |
| `onOpenChange`            | `(open: boolean) => void`                | `undefined` | Callback fired when open state changes                                           |
| `delayDuration`           | `number`                                 | `700`       | The duration from when mouse enters until tooltip opens                          |
| `disableHoverableContent` | `boolean`                                | `false`     | Whether to prevent the tooltip from staying open when hovering over content      |
| `container`               | `HTMLElement`                            | `undefined` | Custom container for the tooltip portal                                          |
| `side`                    | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`     | The preferred side of the trigger to render against                              |
| `align`                   | `'start' \| 'center' \| 'end'`           | `'center'`  | The preferred alignment against the trigger                                      |
| `sideOffset`              | `number`                                 | `4`         | Distance in pixels from the trigger                                              |
| `alignOffset`             | `number`                                 | `0`         | Offset in pixels along the alignment axis                                        |
| `collisionPadding`        | `number`                                 | `10`        | Padding to prevent collision with viewport edges                                 |

## Examples

### Basic Tooltip

```jsx
function BasicExample() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip content="Save document">
        <IconButton>
          <SaveIcon />
        </IconButton>
      </Tooltip>

      <Tooltip content="Delete item">
        <IconButton color="danger">
          <TrashIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}
```

### Tooltip with Text Content

```jsx
function TextTooltipExample() {
  return (
    <div className="space-y-4">
      <Tooltip content="This action cannot be undone">
        <Button color="danger">Delete Account</Button>
      </Tooltip>

      <Tooltip content="Premium feature - upgrade to unlock">
        <Button disabled>Advanced Analytics</Button>
      </Tooltip>
    </div>
  );
}
```

### Overflow Tooltip

```jsx
function OverflowExample() {
  const longText = 'This is a very long text that might overflow its container';

  return (
    <div className="space-y-3">
      {/* Regular text - no tooltip shown */}
      <Tooltip content={longText} type="overflow">
        <Text className="max-w-[300px]">Short text</Text>
      </Tooltip>

      {/* Overflowing text - tooltip shown on hover */}
      <Tooltip content={longText} type="overflow">
        <Text className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{longText}</Text>
      </Tooltip>
    </div>
  );
}
```

### Positioned Tooltips

```jsx
function PositionedExample() {
  return (
    <div className="flex items-center justify-center gap-8 p-8">
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  );
}
```

### Controlled Tooltip

```jsx
function ControlledExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Tooltip content="Controlled tooltip" open={open} onOpenChange={setOpen}>
        <Button>Hover me</Button>
      </Tooltip>

      <Button variant="outline" onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Tooltip
      </Button>
    </div>
  );
}
```

### Rich Content Tooltip

```jsx
function RichContentExample() {
  const tooltipContent = (
    <div className="space-y-1">
      <div className="font-medium">John Doe</div>
      <div className="text-2 text-gray-11">Software Engineer</div>
      <div className="text-1 text-gray-10">Last seen 2 hours ago</div>
    </div>
  );

  return (
    <Tooltip content={tooltipContent}>
      <Avatar fallback="JD" />
    </Tooltip>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="flex items-center gap-3">
      {/* Using Frosted UI spacing tokens */}
      <Tooltip content="Profile settings" sideOffset={8}>
        <Avatar size="2" fallback="JS" />
      </Tooltip>

      {/* Layout with Typography components */}
      <div className="space-y-1">
        <Heading size="3" weight="medium">
          John Smith
        </Heading>
        <Text size="2" color="gray">
          Senior Developer
        </Text>
      </div>
    </div>
  );
}
```

### Color Support

This component integrates with the Frosted UI design system by using semantic background and text colors. The tooltip automatically uses the correct colors based on the current theme. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Tooltip component includes comprehensive accessibility features:

- **Keyboard Navigation**: Tooltips appear on focus and are dismissed with Escape
- **Screen Reader Support**: Content is announced when tooltip appears
- **ARIA Attributes**: Proper labeling and description relationships
- **Focus Management**: Non-intrusive focus handling
- **Reduced Motion**: Respects `prefers-reduced-motion` settings

### Accessibility Guidelines

```jsx
// Good: Descriptive tooltip content
<Tooltip content="Save changes to document">
  <IconButton aria-label="Save">
    <SaveIcon />
  </IconButton>
</Tooltip>

// Good: Essential information only
<Tooltip content="Premium feature">
  <Badge variant="outline">Pro</Badge>
</Tooltip>

// Avoid: Redundant information
<Tooltip content="Click me">
  <Button>Click me</Button>
</Tooltip>
```

## Advanced Usage

### Custom Delay

```jsx
function CustomDelayExample() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip content="Quick tooltip" delayDuration={0}>
        <Button>Instant</Button>
      </Tooltip>

      <Tooltip content="Slow tooltip" delayDuration={1000}>
        <Button>Delayed</Button>
      </Tooltip>
    </div>
  );
}
```

### Tooltip Groups

```jsx
function TooltipGroupExample() {
  return (
    <div className="flex items-center gap-2">
      {actions.map((action) => (
        <Tooltip key={action.id} content={action.description}>
          <IconButton size="1" variant="ghost" onClick={action.handler}>
            <action.icon />
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
}
```

### Form Field Tooltips

```jsx
function FormTooltipExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Text size="2" weight="medium">
            API Key
          </Text>
          <Tooltip content="Your API key is used to authenticate requests. Keep it secure and don't share it publicly.">
            <InfoIcon className="w-4 h-4 text-gray-9" />
          </Tooltip>
        </div>
        <TextField placeholder="Enter your API key" />
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

- Use tooltips for supplementary information that enhances understanding
- Keep tooltip content concise and scannable
- Use overflow tooltips for truncated content
- Provide keyboard access patterns
- Use consistent delay durations across your application

### Don'ts

- Don't put critical information only in tooltips
- Avoid tooltips on mobile devices where hover isn't available
- Don't use tooltips for complex interactive content
- Avoid nesting tooltips or other overlays
- Don't use tooltips that duplicate visible text

### Content Guidelines

```jsx
// Good: Helpful context
<Tooltip content="Last updated 2 hours ago">
  <Badge>Synced</Badge>
</Tooltip>

// Good: Action clarification
<Tooltip content="Download as PDF">
  <IconButton>
    <DownloadIcon />
  </IconButton>
</Tooltip>

// Bad: Redundant text
<Tooltip content="Settings">
  <Button>Settings</Button>
</Tooltip>
```

## Related Components

- **[Button](../button/button.ai.md)** - For interactive actions that often need tooltip descriptions
- **[IconButton](../icon-button/icon-button.ai.md)** - Commonly paired with tooltips for action clarification
- **[Avatar](../avatar/avatar.ai.md)** - Often used with tooltips to show user information
- **[Badge](../badge/badge.ai.md)** - Can be enhanced with tooltips for additional context
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For consistent text styling in tooltip content
