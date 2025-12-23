# Frosted UI ContextMenu Component

A right-click menu component that displays contextual actions and options when users right-click on an element. Perfect for providing quick access to relevant actions without cluttering the interface.

## Overview

The ContextMenu component provides a native-feeling right-click experience with support for nested submenus, checkbox items, radio groups, separators, and keyboard shortcuts. It's designed to handle complex menu hierarchies while maintaining excellent accessibility and user experience.

Built as a collection of sub-components, it offers maximum flexibility for creating context-sensitive action menus throughout your application.

## Basic Usage

```jsx
import { ContextMenu } from '@frosted-ui/core';

function BasicContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="w-[200px] h-[150px] bg-gray-2 rounded-3 flex items-center justify-center">Right-click me</div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Edit</ContextMenu.Item>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Item>Paste</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

## Props

### ContextMenu.Root Props

| Prop           | Type                      | Default     | Description                                             |
| -------------- | ------------------------- | ----------- | ------------------------------------------------------- |
| `open`         | `boolean`                 | `undefined` | The controlled open state of the context menu           |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Event handler called when the open state changes        |
| `modal`        | `boolean`                 | `true`      | Whether the context menu should render in a modal state |

### ContextMenu.Trigger Props

The trigger accepts any valid React element as a child and passes through all standard HTML attributes.

### ContextMenu.Content Props

| Prop               | Type                                     | Default     | Description                                            |
| ------------------ | ---------------------------------------- | ----------- | ------------------------------------------------------ |
| `size`             | `'1' \| '2' \| '3'`                      | `'2'`       | The size of the context menu                           |
| `color`            | `string`                                 | `undefined` | The accent color - supports all Frosted UI colors      |
| `highContrast`     | `boolean`                                | `false`     | Whether to use high contrast styling                   |
| `side`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'`   | The preferred side to render against                   |
| `align`            | `'start' \| 'center' \| 'end'`           | `'start'`   | The preferred alignment                                |
| `collisionPadding` | `number`                                 | `10`        | The padding between the menu and the viewport edges    |
| `container`        | `HTMLElement`                            | `undefined` | Specify a container element to portal the content into |

### ContextMenu.Item Props

| Prop       | Type      | Default     | Description                                    |
| ---------- | --------- | ----------- | ---------------------------------------------- |
| `color`    | `string`  | `undefined` | The accent color for the item                  |
| `shortcut` | `string`  | `undefined` | Keyboard shortcut to display on the right side |
| `disabled` | `boolean` | `false`     | Whether the item is disabled                   |

### ContextMenu.CheckboxItem Props

| Prop              | Type                         | Default     | Description                                         |
| ----------------- | ---------------------------- | ----------- | --------------------------------------------------- |
| `checked`         | `boolean \| 'indeterminate'` | `false`     | The controlled checked state                        |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Event handler called when the checked state changes |
| `shortcut`        | `string`                     | `undefined` | Keyboard shortcut to display on the right side      |
| `disabled`        | `boolean`                    | `false`     | Whether the item is disabled                        |

### ContextMenu.RadioGroup Props

| Prop            | Type                      | Default     | Description                                     |
| --------------- | ------------------------- | ----------- | ----------------------------------------------- |
| `value`         | `string`                  | `undefined` | The controlled value of the selected radio item |
| `onValueChange` | `(value: string) => void` | `undefined` | Event handler called when the value changes     |

### ContextMenu.RadioItem Props

| Prop       | Type      | Default | Description                  |
| ---------- | --------- | ------- | ---------------------------- |
| `value`    | `string`  | —       | The value of the radio item  |
| `disabled` | `boolean` | `false` | Whether the item is disabled |

## Examples

### File/Folder Context Menu

```jsx
import { ContextMenu, Text } from '@frosted-ui/core';

function FileContextMenu() {
  const [showHidden, setShowHidden] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('name');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="p-6 border border-gray-6 rounded-4 bg-gray-1 cursor-pointer">
          <Text>MyDocument.pdf</Text>
          <Text size="1" color="gray">
            Right-click for options
          </Text>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item shortcut="⌘O">Open</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘I">Get Info</ContextMenu.Item>
        <ContextMenu.Separator />

        <ContextMenu.Item shortcut="⌘C">Copy</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘X">Cut</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘D">Duplicate</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Move to</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Desktop</ContextMenu.Item>
            <ContextMenu.Item>Documents</ContextMenu.Item>
            <ContextMenu.Item>Downloads</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Choose Folder...</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Sort by</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.RadioGroup value={sortBy} onValueChange={setSortBy}>
              <ContextMenu.RadioItem value="name">Name</ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="date">Date Modified</ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="size">Size</ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="type">Type</ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem checked={showHidden} onCheckedChange={setShowHidden} shortcut="⌘⇧.">
          Show Hidden Files
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Item shortcut="⌘⌫" color="danger">
          Move to Trash
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

### Image Context Menu

```jsx
import { ContextMenu, Text } from '@frosted-ui/core';

function ImageContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop"
          alt="Landscape"
          className="rounded-3 cursor-pointer"
        />
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item shortcut="⌘C">Copy Image</ContextMenu.Item>
        <ContextMenu.Item>Copy Image Address</ContextMenu.Item>
        <ContextMenu.Separator />

        <ContextMenu.Item>Save Image As...</ContextMenu.Item>
        <ContextMenu.Item>Save Image to Downloads</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Email</ContextMenu.Item>
            <ContextMenu.Item>Messages</ContextMenu.Item>
            <ContextMenu.Item>Social Media</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Copy Share Link</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Edit</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Rotate Left</ContextMenu.Item>
            <ContextMenu.Item>Rotate Right</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Crop</ContextMenu.Item>
            <ContextMenu.Item>Resize</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Open in Editor</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.Item>View Full Size</ContextMenu.Item>
        <ContextMenu.Item>Image Properties</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

### Text Selection Context Menu

```jsx
import { ContextMenu, Text, Heading } from '@frosted-ui/core';

function TextSelectionContextMenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="p-6 border border-gray-6 rounded-4 bg-gray-1 max-w-[400px]">
          <Heading size="3" className="mb-3">
            Article Title
          </Heading>
          <Text>
            Select any text in this paragraph and right-click to see contextual text editing options. This demonstrates
            how context menus can provide relevant actions based on user selection and context.
          </Text>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item shortcut="⌘C">Copy</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘X">Cut</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘V">Paste</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Format</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item shortcut="⌘B">Bold</ContextMenu.Item>
            <ContextMenu.Item shortcut="⌘I">Italic</ContextMenu.Item>
            <ContextMenu.Item shortcut="⌘U">Underline</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Highlight</ContextMenu.Item>
            <ContextMenu.Item>Strikethrough</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Insert</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Link</ContextMenu.Item>
            <ContextMenu.Item>Image</ContextMenu.Item>
            <ContextMenu.Item>Table</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Emoji</ContextMenu.Item>
            <ContextMenu.Item>Special Character</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.Item>Find in Page</ContextMenu.Item>
        <ContextMenu.Item>Select All</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

### Table Row Context Menu

```jsx
import { ContextMenu, Table, Text, Badge } from '@frosted-ui/core';

function TableRowContextMenu() {
  const users = [
    { id: 1, name: 'John Doe', status: 'Active', role: 'Admin' },
    { id: 2, name: 'Jane Smith', status: 'Inactive', role: 'User' },
    { id: 3, name: 'Bob Johnson', status: 'Pending', role: 'User' },
  ];

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user) => (
          <ContextMenu.Root key={user.id}>
            <ContextMenu.Trigger>
              <Table.Row className="cursor-pointer">
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>
                  <Badge
                    color={user.status === 'Active' ? 'green' : user.status === 'Inactive' ? 'red' : 'orange'}
                    variant="soft"
                  >
                    {user.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
              </Table.Row>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Label>User Actions</ContextMenu.Label>
              <ContextMenu.Item>View Profile</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘E">Edit User</ContextMenu.Item>
              <ContextMenu.Item>Send Message</ContextMenu.Item>

              <ContextMenu.Separator />

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Change Status</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Activate</ContextMenu.Item>
                  <ContextMenu.Item>Deactivate</ContextMenu.Item>
                  <ContextMenu.Item>Set Pending</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Permissions</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Grant Admin</ContextMenu.Item>
                  <ContextMenu.Item>Revoke Admin</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Custom Permissions</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />

              <ContextMenu.Item>Export Data</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘D">Duplicate User</ContextMenu.Item>

              <ContextMenu.Separator />

              <ContextMenu.Item shortcut="⌘⌫" color="danger">
                Delete User
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
```

### Canvas/Artboard Context Menu

```jsx
import { ContextMenu, Text } from '@frosted-ui/core';

function CanvasContextMenu() {
  const [snapToGrid, setSnapToGrid] = React.useState(true);
  const [showRulers, setShowRulers] = React.useState(false);
  const [viewMode, setViewMode] = React.useState('design');

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="w-[500px] h-[300px] bg-gray-1 border border-gray-6 rounded-4 flex items-center justify-center">
          <Text color="gray">Canvas Area - Right-click for tools</Text>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Add Element</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Rectangle</ContextMenu.Item>
            <ContextMenu.Item>Circle</ContextMenu.Item>
            <ContextMenu.Item>Line</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Text Box</ContextMenu.Item>
            <ContextMenu.Item>Image</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Component</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.Item shortcut="⌘V">Paste</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘A">Select All</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>View</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.RadioGroup value={viewMode} onValueChange={setViewMode}>
              <ContextMenu.RadioItem value="design">Design View</ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="prototype">Prototype View</ContextMenu.RadioItem>
              <ContextMenu.RadioItem value="code">Code View</ContextMenu.RadioItem>
            </ContextMenu.RadioGroup>
            <ContextMenu.Separator />
            <ContextMenu.Item shortcut="⌘0">Zoom to Fit</ContextMenu.Item>
            <ContextMenu.Item shortcut="⌘1">Actual Size</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem checked={snapToGrid} onCheckedChange={setSnapToGrid} shortcut="⌘'">
          Snap to Grid
        </ContextMenu.CheckboxItem>

        <ContextMenu.CheckboxItem checked={showRulers} onCheckedChange={setShowRulers} shortcut="⌘R">
          Show Rulers
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Export</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>PNG</ContextMenu.Item>
            <ContextMenu.Item>SVG</ContextMenu.Item>
            <ContextMenu.Item>PDF</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Copy as CSS</ContextMenu.Item>
            <ContextMenu.Item>Copy as Code</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

### Different Sizes

```jsx
import { ContextMenu, Text } from '@frosted-ui/core';

function SizeVariants() {
  return (
    <div className="flex gap-6">
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="p-4 border border-gray-6 rounded-3 bg-gray-1">
            <Text size="1">Small Menu</Text>
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content size="1">
          <ContextMenu.Item>Small item</ContextMenu.Item>
          <ContextMenu.Item>Another item</ContextMenu.Item>
          <ContextMenu.Item>Third item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>

      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="p-4 border border-gray-6 rounded-3 bg-gray-1">
            <Text size="2">Default Menu</Text>
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content size="2">
          <ContextMenu.Item shortcut="⌘1">Default item</ContextMenu.Item>
          <ContextMenu.Item shortcut="⌘2">Another item</ContextMenu.Item>
          <ContextMenu.Item shortcut="⌘3">Third item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>

      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="p-4 border border-gray-6 rounded-3 bg-gray-1">
            <Text size="3">Large Menu</Text>
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content size="3">
          <ContextMenu.Item shortcut="⌘1">Large item</ContextMenu.Item>
          <ContextMenu.Item shortcut="⌘2">Another item</ContextMenu.Item>
          <ContextMenu.Item shortcut="⌘3">Third item</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for trigger areas
<ContextMenu.Trigger>
  <div className="p-4 gap-3 rounded-3"> {/* Uses --space-4, --space-3, --radius-3 */}
    <Content />
  </div>
</ContextMenu.Trigger>

// Use Typography components for menu content
<ContextMenu.Content>
  <ContextMenu.Label>
    <Text size="1" weight="medium">Section Title</Text>
  </ContextMenu.Label>
</ContextMenu.Content>
```

### Color System Integration

```jsx
// Use semantic colors for meaningful actions
<ContextMenu.Item color="danger">Delete</ContextMenu.Item>
<ContextMenu.Item color="success">Approve</ContextMenu.Item>

// Match menu color with context
<ContextMenu.Content color="blue">
  <ContextMenu.Item>Blue-themed action</ContextMenu.Item>
</ContextMenu.Content>
```

## Accessibility

The ContextMenu component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with arrow keys, Enter, Escape
- **Focus Management**: Proper focus trapping and restoration
- **ARIA Attributes**: Complete ARIA labeling and relationships
- **Screen Reader**: Optimized for screen reader technologies
- **Context Detection**: Properly handles right-click and keyboard activation

### Keyboard Shortcuts

- `Right-click` or `Menu key`: Opens the context menu
- `↓` / `↑`: Navigate through menu items
- `→`: Open submenu (when available)
- `←`: Close submenu and return to parent
- `Enter` or `Space`: Activate menu item
- `Escape`: Close menu and return focus to trigger

## Best Practices

### Content Organization

- **Contextually relevant**: Only include actions that make sense for the specific element
- **Logical grouping**: Group related actions together with separators
- **Most common first**: Place frequently used actions at the top
- **Destructive actions last**: Place dangerous actions at the bottom with visual distinction

### Design Guidelines

- **Consistent patterns**: Use consistent menu structures throughout your application
- **Appropriate sizing**: Match menu size with the density of content and context
- **Clear shortcuts**: Include keyboard shortcuts for power users
- **Visual feedback**: Provide clear feedback for disabled or unavailable actions

### Interaction Guidelines

- **Responsive activation**: Support both right-click and keyboard activation
- **Quick access**: Keep menus shallow; avoid deep nesting when possible
- **Clear labels**: Use action-oriented, descriptive labels

## Advanced Usage

### Conditional Menu Items

```jsx
import { ContextMenu, Text } from '@frosted-ui/core';

function ConditionalContextMenu({ file, permissions }) {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="p-4 border border-gray-6 rounded-3">
          <Text>{file.name}</Text>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>View</ContextMenu.Item>

        {permissions.canEdit && <ContextMenu.Item shortcut="⌘E">Edit</ContextMenu.Item>}

        {permissions.canCopy && <ContextMenu.Item shortcut="⌘C">Copy</ContextMenu.Item>}

        {(permissions.canEdit || permissions.canCopy) && <ContextMenu.Separator />}

        {file.type === 'image' && (
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>Image Tools</ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item>Rotate</ContextMenu.Item>
              <ContextMenu.Item>Resize</ContextMenu.Item>
              <ContextMenu.Item>Compress</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
        )}

        {permissions.canDelete && (
          <>
            <ContextMenu.Separator />
            <ContextMenu.Item color="danger" shortcut="⌘⌫">
              Delete
            </ContextMenu.Item>
          </>
        )}
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

### Multi-Selection Context Menu

```jsx
import { ContextMenu, Text, Badge } from '@frosted-ui/core';

function MultiSelectionContextMenu({ selectedItems }) {
  const itemCount = selectedItems.length;

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="p-4 border border-gray-6 rounded-3">
          <div className="flex items-center gap-2">
            <Text>Selected Items</Text>
            <Badge variant="soft">{itemCount}</Badge>
          </div>
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Bulk Actions ({itemCount} items)</ContextMenu.Label>

        <ContextMenu.Item shortcut="⌘C">Copy All</ContextMenu.Item>
        <ContextMenu.Item shortcut="⌘X">Cut All</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Move All To</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Documents</ContextMenu.Item>
            <ContextMenu.Item>Desktop</ContextMenu.Item>
            <ContextMenu.Item>Trash</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Choose Folder...</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Tag All As</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Important</ContextMenu.Item>
            <ContextMenu.Item>Archive</ContextMenu.Item>
            <ContextMenu.Item>Review</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Custom Tag...</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>

        <ContextMenu.Separator />

        <ContextMenu.Item>Compress to Archive</ContextMenu.Item>
        <ContextMenu.Item>Share Selected</ContextMenu.Item>

        <ContextMenu.Separator />

        <ContextMenu.Item color="danger" shortcut="⌘⌫">
          Delete All ({itemCount})
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}
```

## Related Components

- **[DropdownMenu](../dropdown-menu/dropdown-menu.ai.md)** - For click-triggered menus
- **[Popover](../popover/popover.ai.md)** - For non-modal content overlays
- **[Tooltip](../tooltip/tooltip.ai.md)** - For simple hover information
- **[Button](../button/button.ai.md)** - For primary action triggers
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text content within menus
