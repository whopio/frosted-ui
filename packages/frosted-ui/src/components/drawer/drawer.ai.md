# Frosted UI Drawer Component

A slide-out panel that overlays content from the right side of the screen. Built on Radix UI's Dialog primitive with Frosted UI design system integration and custom animations.

## Overview

The Drawer component displays a sliding panel that enters from the right side of the screen to provide auxiliary content, forms, or detailed information without navigating away from the current page. Unlike Dialog, the Drawer is positioned at the screen edge and typically has a more structured layout with Header, Body, and optional StickyFooter sections.

The component uses a compound pattern with multiple sub-components for organized content layout and automatic scroll behavior detection.

## Basic Usage

```jsx
import { Drawer, Button, TextField, Text } from 'frosted-ui';

function EditProfileDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Edit Profile</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[400px]">
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" className="mb-4">
            Make changes to your profile information below.
          </Text>

          <div className="flex flex-col gap-3">
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Name
              </Text>
              <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Email
              </Text>
              <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div className="flex gap-3 mt-4 justify-end">
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button>Save</Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

## Props

### Drawer.Root Props

| Prop           | Type       | Default     | Description                                                |
| -------------- | ---------- | ----------- | ---------------------------------------------------------- |
| `defaultOpen`  | `boolean`  | `false`     | The open state of the drawer when it is initially rendered |
| `open`         | `boolean`  | `undefined` | The controlled open state of the drawer                    |
| `onOpenChange` | `function` | `undefined` | Event handler called when the open state changes           |

**Note:** Drawer.Root always uses `modal={true}` for proper modal behavior.

### Drawer.Trigger Props

The trigger inherits all standard button props and renders as a child element.

| Prop       | Type      | Default | Description                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `asChild`  | `boolean` | `true`  | Always true - renders the child element directly |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting    |

### Drawer.Content Props

| Prop         | Type                | Default     | Description                         |
| ------------ | ------------------- | ----------- | ----------------------------------- |
| `size`       | `'1' \| '2' \| '3'` | `'3'`       | Drawer size affecting padding scale |
| `container`  | `HTMLElement`       | `undefined` | Portal container element            |
| `forceMount` | `boolean`           | `false`     | Force mount for animation libraries |

**Size specifications:**

- Size 1: 12px padding (--space-3), compact spacing
- Size 2: 16px padding (--space-4), medium spacing
- Size 3: 24px padding (--space-5), large spacing (default)

### Drawer.Title Props

Inherits all `Heading` component props with fixed size 5 and both-side trim.

| Prop     | Type                                                                 | Default     | Description    |
| -------- | -------------------------------------------------------------------- | ----------- | -------------- |
| `size`   | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'5'`       | Font size step |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`          | `'bold'`    | Font weight    |
| `color`  | Frosted UI color                                                     | `undefined` | Text color     |
| `trim`   | `'normal' \| 'start' \| 'end' \| 'both'`                             | `'both'`    | Line trimming  |

### Drawer.Header Props

Standard div props for the header container.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Header content         |

### Drawer.Body Props

Standard div props for the scrollable body container with automatic scroll detection.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Body content           |

**Scroll behavior:**

- Automatically detects if content is scrollable
- Adds top border when scrollable content is detected
- Adds bottom border when scrollable with StickyFooter

### Drawer.StickyFooter Props

Standard div props for the sticky footer container.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Footer content         |

### Drawer.Close Props

The close trigger inherits all standard button props and renders as a child element.

| Prop      | Type      | Default | Description                                      |
| --------- | --------- | ------- | ------------------------------------------------ |
| `asChild` | `boolean` | `true`  | Always true - renders the child element directly |

## Examples

### Basic Form Drawer

```jsx
function BasicFormDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Edit Profile</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[400px]">
        <Drawer.Header>
          <Drawer.Title>Edit profile</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" className="mb-4">
            Make changes to your profile information below.
          </Text>

          <div className="flex flex-col gap-3">
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Name
              </Text>
              <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Email
              </Text>
              <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div className="flex gap-3 mt-4 justify-end">
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button>Save</Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

### Different Sizes

```jsx
function DrawerSizes() {
  return (
    <div className="flex gap-4">
      {/* Compact Drawer - Size 1 */}
      <Drawer.Root>
        <Drawer.Trigger>
          <Button variant="soft" size="1">
            Compact
          </Button>
        </Drawer.Trigger>
        <Drawer.Content size="1" className="max-w-[300px]">
          <Drawer.Header>
            <Drawer.Title>Compact Drawer</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Text size="2">Minimal padding for compact content.</Text>
            <div className="flex gap-2 mt-3 justify-end">
              <Drawer.Close>
                <Button size="1" variant="soft" color="gray">
                  Close
                </Button>
              </Drawer.Close>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* Large Drawer - Size 3 */}
      <Drawer.Root>
        <Drawer.Trigger>
          <Button variant="soft">Spacious</Button>
        </Drawer.Trigger>
        <Drawer.Content size="3" className="max-w-[450px]">
          <Drawer.Header>
            <Drawer.Title>Spacious Drawer</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Text size="2">Generous padding for detailed content and forms.</Text>
            <div className="flex gap-3 mt-4 justify-end">
              <Drawer.Close>
                <Button variant="soft" color="gray">
                  Close
                </Button>
              </Drawer.Close>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
```

### With Table and Inset Content

```jsx
function UsersDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>View Users</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[540px]">
        <Drawer.Header>
          <Drawer.Title>Users</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p">The following users have access to this project.</Text>

          <Inset side="x" className="my-5">
            <Table.Root variant="ghost">
              <ScrollArea scrollbars="horizontal">
                <Table.Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell>
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          Full name
                        </div>
                      </Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          Danilo Sousa
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>danilo@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="green">Developer</Badge>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          Zahra Ambessa
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>zahra@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="amber">Admin</Badge>
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.RowHeaderCell>
                        <div className="flex items-center gap-3">
                          <Checkbox />
                          Jasper Eriksson
                        </div>
                      </Table.RowHeaderCell>
                      <Table.Cell>jasper@example.com</Table.Cell>
                      <Table.Cell>
                        <Badge color="green">Developer</Badge>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table.Table>
              </ScrollArea>
            </Table.Root>
          </Inset>

          <div className="flex gap-3 justify-end">
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

### With Sticky Footer

```jsx
function SubscriptionDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>View Subscription</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[400px]">
        <Drawer.Header>
          <Drawer.Title>Premium Subscription</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" className="mb-4">
            Unlock premium features with our subscription plan.
          </Text>

          <div className="space-y-3">
            <div className="p-3 bg-blue-2 border border-blue-6 rounded">
              <Text size="2" weight="medium">
                ✓ Unlimited projects
              </Text>
            </div>
            <div className="p-3 bg-blue-2 border border-blue-6 rounded">
              <Text size="2" weight="medium">
                ✓ Advanced analytics
              </Text>
            </div>
            <div className="p-3 bg-blue-2 border border-blue-6 rounded">
              <Text size="2" weight="medium">
                ✓ Priority support
              </Text>
            </div>
          </div>
        </Drawer.Body>
        <Drawer.StickyFooter>
          <Drawer.Close>
            <Button variant="classic" color="blue" size="3" className="w-full">
              Subscribe Now
            </Button>
          </Drawer.Close>
        </Drawer.StickyFooter>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

### Controlled Drawer State

```jsx
import { useState } from 'react';

function ControlledDrawer() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setOpen(false);
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <Drawer.Trigger>
        <Button>Open Settings</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[450px]">
        <Drawer.Header>
          <Drawer.Title>Settings</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text as="p" size="2" className="mb-4">
            Configure your application settings.
          </Text>

          <div className="flex flex-col gap-3">
            <label>
              <Text as="div" size="2" weight="bold" className="mb-1">
                App Name
              </Text>
              <TextField.Input defaultValue="My Application" />
            </label>
            <label>
              <Text as="div" size="2" weight="bold" className="mb-1">
                Description
              </Text>
              <TextField.Input defaultValue="A great application" />
            </label>
          </div>

          <div className="flex gap-3 mt-4 justify-end">
            <Drawer.Close>
              <Button variant="soft" color="gray" disabled={loading}>
                Cancel
              </Button>
            </Drawer.Close>
            <Button onClick={handleSave} disabled={loading}>
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Drawer Layout with Design Tokens

```jsx
<Drawer.Content className="max-w-[500px]">
  <Drawer.Header>
    <Drawer.Title color="blue">Styled Drawer Title</Drawer.Title>
  </Drawer.Header>
  <Drawer.Body>
    {/* Content area with consistent spacing */}
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-gray-2 border border-gray-6 rounded-lg">
        <Text size="2">Content area with design tokens</Text>
      </div>
    </div>

    {/* Button area with proper spacing */}
    <div className="flex gap-3 mt-5 justify-end">
      <Drawer.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Drawer.Close>
      <Button variant="solid" color="blue">
        Save
      </Button>
    </div>
  </Drawer.Body>
</Drawer.Content>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

### Keyboard Navigation

| Key         | Action                                       |
| ----------- | -------------------------------------------- |
| `Tab`       | Move focus to the next focusable element     |
| `Shift+Tab` | Move focus to the previous focusable element |
| `Enter`     | Activate the focused button                  |
| `Space`     | Activate the focused button                  |
| `Escape`    | Close the drawer                             |

### Mouse Interaction

- **Click outside**: Closes the drawer
- **Click overlay**: Closes the drawer
- **Close button**: Any button with Drawer.Close wrapper will close

### Screen Reader Support

- Uses `role="dialog"` for proper announcement
- Title is automatically linked with `aria-labelledby`
- Focus is trapped within the drawer when open
- Focus returns to trigger element when closed
- Proper modal behavior with background content inert

### Focus Management

- Focus moves to the first focusable element when drawer opens
- Focus is trapped within the drawer content
- Focus returns to the trigger button when drawer closes
- Supports both keyboard and programmatic focus management

### Best Practices

1. **Always provide a Title** for clear context
2. **Use semantic HTML** within drawer content
3. **Provide clear focus indicators** for all interactive elements
4. **Test with screen readers** to ensure proper announcement
5. **Use appropriate heading hierarchy** within drawer content

## Advanced Usage

### Custom Portal Container

```jsx
function CustomPortalDrawer() {
  const portalContainer = document.getElementById('custom-portal');

  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content container={portalContainer}>
        <Drawer.Header>
          <Drawer.Title>Custom Portal</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <Text>This drawer renders in a custom container.</Text>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

### With Complex Form Layout

```jsx
function DetailedFormDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <Button>Create Project</Button>
      </Drawer.Trigger>

      <Drawer.Content className="max-w-[500px]">
        <Drawer.Header>
          <Drawer.Title>Create New Project</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <div className="space-y-5">
            {/* Basic Information */}
            <div>
              <Text size="3" weight="medium" className="mb-3">
                Basic Information
              </Text>
              <div className="flex flex-col gap-3">
                <label>
                  <Text as="div" size="2" weight="bold" className="mb-1">
                    Project Name
                  </Text>
                  <TextField.Input placeholder="Enter project name" />
                </label>
                <label>
                  <Text as="div" size="2" weight="bold" className="mb-1">
                    Description
                  </Text>
                  <TextField.Input placeholder="Project description" />
                </label>
              </div>
            </div>

            {/* Settings */}
            <div>
              <Text size="3" weight="medium" className="mb-3">
                Settings
              </Text>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <Checkbox />
                  <Text size="2">Public project</Text>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox />
                  <Text size="2">Enable notifications</Text>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox defaultChecked />
                  <Text size="2">Auto-save changes</Text>
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-6 justify-end">
            <Drawer.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Drawer.Close>
            <Drawer.Close>
              <Button>Create Project</Button>
            </Drawer.Close>
          </div>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
```

## Animation and Performance

### Built-in Animations

The Drawer component includes sophisticated slide animations:

- **Entry**: 400ms cubic-bezier slide from right with backdrop fade
- **Exit**: 300ms cubic-bezier slide to right with backdrop fade
- **Respects reduced motion**: Animations disabled when `prefers-reduced-motion: reduce`

### Animation Details

```css
/* Entry animation */
@keyframes fui-drawer-content-show {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

/* Exit animation */
@keyframes fui-drawer-content-hide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}
```

### Performance Optimizations

- Uses CSS transforms for smooth 60fps animations
- Portal rendering prevents layout thrashing
- Automatic scroll detection with ResizeObserver
- Efficient focus trap implementation

## Layout Architecture

### Structure Breakdown

```jsx
<Drawer.Content>
  <Drawer.Header>
    {' '}
    {/* Fixed header with title */}
    <Drawer.Title />
  </Drawer.Header>

  <Drawer.Body>
    {' '}
    {/* Scrollable content area */}
    {/* Main content */}
  </Drawer.Body>

  <Drawer.StickyFooter>
    {' '}
    {/* Optional fixed footer */}
    {/* Action buttons */}
  </Drawer.StickyFooter>
</Drawer.Content>
```

### Scroll Behavior

- **Drawer.Body**: Automatically scrollable when content overflows
- **Scroll indicators**: Borders appear when content is scrollable
- **Sticky positioning**: Header and footer remain fixed during scroll

## Best Practices

### When to Use Drawer vs Dialog

**Use Drawer for:**

- ✅ Form input and editing workflows
- ✅ Secondary content that supplements the main view
- ✅ Content that benefits from more space (tables, lists)
- ✅ Multi-step processes with structured layout

**Use Dialog for:**

- ✅ Quick confirmations and alerts
- ✅ Small forms with minimal content
- ✅ Content that should appear centered
- ✅ Critical interruptions that need immediate attention

### Layout Guidelines

1. **Use consistent max-width** (300-600px typical range)
2. **Structure content** with Header, Body, and optional StickyFooter
3. **Provide clear actions** in footer or at end of body content
4. **Use appropriate sizing** based on content density
5. **Consider scroll behavior** for long content

### Content Organization

1. **Header**: Title and optional secondary actions
2. **Body**: Main content with proper spacing
3. **Footer**: Primary actions (save, cancel, etc.)

## Related Components

- **[Dialog](../dialog/dialog.ai.md)** - For modal dialogs and confirmations
- **[Button](../button/button.ai.md)** - For drawer triggers and actions
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For title and text styling
- **[Table](../table/table.ai.md)** - For data display within drawers
- **[TextField](../text-field/text-field.ai.md)** - For form inputs within drawers
