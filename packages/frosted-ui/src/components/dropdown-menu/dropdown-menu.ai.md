# Frosted UI DropdownMenu Component

A versatile menu component that displays a list of options, actions, or navigation items in a floating overlay. Perfect for context menus, action menus, and navigation dropdowns.

## Overview

The DropdownMenu component provides a complete menu system with support for nested submenus, checkbox items, radio groups, separators, and keyboard shortcuts. It's designed to handle complex menu hierarchies while maintaining excellent accessibility and user experience.

Built as a collection of sub-components, it offers maximum flexibility for creating everything from simple action menus to complex navigation systems.

## Basic Usage

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function BasicDropdownMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

## Props

### DropdownMenu.Root Props

| Prop           | Type                      | Default     | Description                                                 |
| -------------- | ------------------------- | ----------- | ----------------------------------------------------------- |
| `open`         | `boolean`                 | `undefined` | The controlled open state of the dropdown menu              |
| `defaultOpen`  | `boolean`                 | `false`     | The open state of the dropdown menu when initially rendered |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Event handler called when the open state changes            |
| `modal`        | `boolean`                 | `true`      | Whether the dropdown menu should render in a modal state    |
| `dir`          | `'ltr' \| 'rtl'`          | `'ltr'`     | The reading direction of the dropdown menu                  |

### DropdownMenu.Trigger Props

The trigger accepts any valid React element as a child and passes through all standard HTML attributes.

### DropdownMenu.Content Props

| Prop               | Type                                     | Default     | Description                                            |
| ------------------ | ---------------------------------------- | ----------- | ------------------------------------------------------ |
| `size`             | `'1' \| '2' \| '3'`                      | `'2'`       | The size of the dropdown menu                          |
| `color`            | `string`                                 | `undefined` | The accent color - supports all Frosted UI colors      |
| `highContrast`     | `boolean`                                | `false`     | Whether to use high contrast styling                   |
| `side`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'`  | The preferred side of the trigger to render against    |
| `align`            | `'start' \| 'center' \| 'end'`           | `'start'`   | The preferred alignment against the trigger            |
| `sideOffset`       | `number`                                 | `4`         | The distance in pixels from the trigger                |
| `alignOffset`      | `number`                                 | `0`         | An offset in pixels from the alignment axis            |
| `collisionPadding` | `number`                                 | `10`        | The padding between the menu and the viewport edges    |
| `container`        | `HTMLElement`                            | `undefined` | Specify a container element to portal the content into |

### DropdownMenu.Item Props

| Prop       | Type      | Default     | Description                                    |
| ---------- | --------- | ----------- | ---------------------------------------------- |
| `color`    | `string`  | `undefined` | The accent color for the item                  |
| `shortcut` | `string`  | `undefined` | Keyboard shortcut to display on the right side |
| `disabled` | `boolean` | `false`     | Whether the item is disabled                   |

### DropdownMenu.CheckboxItem Props

| Prop              | Type                         | Default     | Description                                         |
| ----------------- | ---------------------------- | ----------- | --------------------------------------------------- |
| `checked`         | `boolean \| 'indeterminate'` | `false`     | The controlled checked state                        |
| `defaultChecked`  | `boolean`                    | `false`     | The checked state when initially rendered           |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Event handler called when the checked state changes |
| `shortcut`        | `string`                     | `undefined` | Keyboard shortcut to display on the right side      |
| `disabled`        | `boolean`                    | `false`     | Whether the item is disabled                        |

### DropdownMenu.RadioGroup Props

| Prop            | Type                      | Default     | Description                                     |
| --------------- | ------------------------- | ----------- | ----------------------------------------------- |
| `value`         | `string`                  | `undefined` | The controlled value of the selected radio item |
| `defaultValue`  | `string`                  | `undefined` | The value when initially rendered               |
| `onValueChange` | `(value: string) => void` | `undefined` | Event handler called when the value changes     |

### DropdownMenu.RadioItem Props

| Prop       | Type      | Default | Description                  |
| ---------- | --------- | ------- | ---------------------------- |
| `value`    | `string`  | —       | The value of the radio item  |
| `disabled` | `boolean` | `false` | Whether the item is disabled |

## Examples

### File Actions Menu

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function FileActionsMenu() {
  const [showHidden, setShowHidden] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState('name');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">File Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item shortcut="⌘N">New File</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘O">Open</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘S">Save</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Label>View Options</DropdownMenu.Label>
        <DropdownMenu.CheckboxItem checked={showHidden} onCheckedChange={setShowHidden} shortcut="⌘H">
          Show Hidden Files
        </DropdownMenu.CheckboxItem>

        <DropdownMenu.Separator />

        <DropdownMenu.Label>Sort By</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={sortOrder} onValueChange={setSortOrder}>
          <DropdownMenu.RadioItem value="name">Name</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="date">Date Modified</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="size">Size</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Separator />

        <DropdownMenu.Item shortcut="⌘⌫" color="danger">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

### User Profile Menu

```jsx
import { DropdownMenu, Avatar, Text, Heading } from '@frosted-ui/core';

function UserProfileMenu() {
  const user = {
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    avatar: 'SW',
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar size="2" fallback={user.avatar} className="cursor-pointer" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-[220px]">
        <div className="p-2">
          <Heading size="2">{user.name}</Heading>
          <Text size="1" color="gray">
            {user.email}
          </Text>
        </div>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘,">Preferences</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>Help & Support</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘K">Keyboard Shortcuts</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item color="danger">Sign Out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

### Nested Submenu

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function NestedMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>Project Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Overview</DropdownMenu.Item>
        <DropdownMenu.Item>Analytics</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Move to...</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Production</DropdownMenu.Item>
            <DropdownMenu.Item>Staging</DropdownMenu.Item>
            <DropdownMenu.Item>Development</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Archive</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share with...</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Team Members</DropdownMenu.Item>
            <DropdownMenu.Item>External Users</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
            <DropdownMenu.Item>Export</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />

        <DropdownMenu.Item color="danger">Delete Project</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

### Different Sizes

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function SizeVariants() {
  return (
    <div className="flex items-start gap-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button size="1">Small Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="1">
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Copy</DropdownMenu.Item>
          <DropdownMenu.Item>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button size="2">Default Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="2">
          <DropdownMenu.Item shortcut="⌘E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘C">Copy</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘⌫">Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button size="3">Large Menu</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content size="3">
          <DropdownMenu.Item shortcut="⌘E">Edit Item</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘C">Copy Item</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘⌫">Delete Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
```

### Color Variants

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function ColorVariants() {
  return (
    <div className="flex items-start gap-4">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button color="blue">Blue Theme</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content color="blue">
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Help</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button color="green">Green Theme</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content color="green">
          <DropdownMenu.Item>Create</DropdownMenu.Item>
          <DropdownMenu.Item>Save</DropdownMenu.Item>
          <DropdownMenu.Item>Export</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button color="red">Red Theme</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content color="red">
          <DropdownMenu.Item>Warning</DropdownMenu.Item>
          <DropdownMenu.Item>Critical</DropdownMenu.Item>
          <DropdownMenu.Item>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
```

### Table Row Actions

```jsx
import { DropdownMenu, IconButton, Text } from '@frosted-ui/core';

function TableRowActions({ item }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost" size="1">
          <DotsVerticalIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item>View Details</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘D">Duplicate</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>Export Data</DropdownMenu.Item>
        <DropdownMenu.Item>Copy ID</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item color="danger" shortcut="⌘⌫">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

### Filter Menu

```jsx
import { DropdownMenu, Button, Badge } from '@frosted-ui/core';

function FilterMenu() {
  const [status, setStatus] = React.useState('all');
  const [priority, setPriority] = React.useState('all');
  const [assignee, setAssignee] = React.useState('all');

  const getActiveFiltersCount = () => {
    let count = 0;
    if (status !== 'all') count++;
    if (priority !== 'all') count++;
    if (assignee !== 'all') count++;
    return count;
  };

  const activeFilters = getActiveFiltersCount();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline">
          Filter
          {activeFilters > 0 && (
            <Badge size="1" className="ml-2">
              {activeFilters}
            </Badge>
          )}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-[200px]">
        <DropdownMenu.Label>Status</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenu.RadioItem value="all">All Statuses</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="open">Open</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="in-progress">In Progress</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="closed">Closed</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Separator />

        <DropdownMenu.Label>Priority</DropdownMenu.Label>
        <DropdownMenu.RadioGroup value={priority} onValueChange={setPriority}>
          <DropdownMenu.RadioItem value="all">All Priorities</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="high">High</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="medium">Medium</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="low">Low</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>

        <DropdownMenu.Separator />

        <DropdownMenu.Item
          onClick={() => {
            setStatus('all');
            setPriority('all');
            setAssignee('all');
          }}
        >
          Clear All Filters
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<DropdownMenu.Content className="w-[240px]">
  <div className="p-2 space-y-1"> {/* Uses --space-2 and --space-1 */}
    <Content />
  </div>
</DropdownMenu.Content>

// Use Typography components for text content
<DropdownMenu.Content>
  <div className="p-2">
    <Heading size="2">Section Title</Heading>
    <Text size="1" color="gray">Description</Text>
  </div>
</DropdownMenu.Content>
```

### Color System Integration

```jsx
// Use semantic colors for meaningful actions
<DropdownMenu.Item color="danger">Delete</DropdownMenu.Item>
<DropdownMenu.Item color="success">Approve</DropdownMenu.Item>

// Match menu color with trigger
<DropdownMenu.Content color="blue">
  <DropdownMenu.Item>Blue-themed item</DropdownMenu.Item>
</DropdownMenu.Content>
```

## Accessibility

The DropdownMenu component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Escape
- **Focus Management**: Proper focus trapping and restoration
- **ARIA Attributes**: Complete ARIA labeling and relationships
- **Screen Reader**: Optimized for screen reader technologies
- **Roving Tabindex**: Efficient keyboard navigation through menu items

### Keyboard Shortcuts

- `Space` or `Enter` on trigger: Opens the dropdown menu
- `↓` / `↑`: Navigate through menu items
- `→`: Open submenu (when available)
- `←`: Close submenu and return to parent
- `Enter` or `Space`: Activate menu item
- `Escape`: Close menu and return focus to trigger

## Best Practices

### Content Organization

- **Group related items**: Use separators and labels to organize menu content
- **Logical order**: Place most common actions at the top
- **Destructive actions**: Place dangerous actions at the bottom, often with red color
- **Keyboard shortcuts**: Include shortcuts for frequently used actions

### Design Guidelines

- **Consistent sizing**: Match menu size with the trigger element size
- **Appropriate width**: Set explicit widths for consistent layout
- **Clear labels**: Use descriptive, action-oriented labels
- **Icons sparingly**: Include icons only when they add clear value

### Performance

- **Portal efficiently**: Use default portal behavior unless custom container needed
- **Lazy content**: Keep menu content lightweight for fast rendering

## Advanced Usage

### Dynamic Menu Content

```jsx
import { DropdownMenu, Button, Text } from '@frosted-ui/core';

function DynamicMenu({ permissions, actions }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button>Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {actions.map((action) => (
          <DropdownMenu.Item
            key={action.id}
            disabled={!permissions.includes(action.permission)}
            color={action.destructive ? 'danger' : undefined}
            shortcut={action.shortcut}
            onClick={action.handler}
          >
            {action.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

### Multi-Level Navigation

```jsx
import { DropdownMenu, Button } from '@frosted-ui/core';

function NavigationMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="ghost">Products</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Web Development</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>React Components</DropdownMenu.Item>
            <DropdownMenu.Item>Vue Components</DropdownMenu.Item>
            <DropdownMenu.Item>Angular Components</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Templates</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Mobile Development</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>React Native</DropdownMenu.Item>
            <DropdownMenu.Item>Flutter</DropdownMenu.Item>
            <DropdownMenu.Item>Native iOS</DropdownMenu.Item>
            <DropdownMenu.Item>Native Android</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>Documentation</DropdownMenu.Item>
        <DropdownMenu.Item>Support</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
```

## Related Components

- **[Popover](../popover/popover.ai.md)** - For non-modal content overlays
- **[Tooltip](../tooltip/tooltip.ai.md)** - For simple hover information
- **[Button](../button/button.ai.md)** - Common trigger element for dropdown menus
- **[IconButton](../icon-button/icon-button.ai.md)** - For compact menu triggers
- **[Avatar](../avatar/avatar.ai.md)** - Often used in profile dropdown triggers
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text content within menus

```

```
