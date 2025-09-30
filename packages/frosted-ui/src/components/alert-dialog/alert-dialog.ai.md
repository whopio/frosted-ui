# Frosted UI AlertDialog Component

A modal dialog that interrupts the user with important content and expects a response. Built on Radix UI's AlertDialog primitive with Frosted UI design system integration.

## Overview

The AlertDialog component displays an overlay dialog that blocks interaction with the rest of the application until dismissed. It's designed for critical interactions that require user confirmation, such as destructive actions or important warnings. Unlike regular dialogs, alert dialogs cannot be dismissed by clicking outside or pressing escape.

The component uses a compound pattern with multiple sub-components for structured content layout and automatic size-coordinated typography.

## Basic Usage

```jsx
import { AlertDialog, Button } from 'frosted-ui';

function DeleteConfirmation() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Delete Account
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Account</AlertDialog.Title>
        <AlertDialog.Description>Are you sure? This action is permanent and cannot be undone.</AlertDialog.Description>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-4)',
            justifyContent: 'flex-end',
          }}
        >
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

## Props

### AlertDialog.Root Props

| Prop           | Type       | Default     | Description                                                |
| -------------- | ---------- | ----------- | ---------------------------------------------------------- |
| `defaultOpen`  | `boolean`  | `false`     | The open state of the dialog when it is initially rendered |
| `open`         | `boolean`  | `undefined` | The controlled open state of the dialog                    |
| `onOpenChange` | `function` | `undefined` | Event handler called when the open state changes           |

### AlertDialog.Trigger Props

The trigger inherits all standard button props and renders as a child element.

| Prop       | Type      | Default | Description                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `asChild`  | `boolean` | `true`  | Always true - renders the child element directly |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting    |

### AlertDialog.Content Props

| Prop         | Type                       | Default     | Description                            |
| ------------ | -------------------------- | ----------- | -------------------------------------- |
| `size`       | `'1' \| '2' \| '3' \| '4'` | `'3'`       | Dialog size affecting typography scale |
| `container`  | `HTMLElement`              | `undefined` | Portal container element               |
| `forceMount` | `boolean`                  | `false`     | Force mount for animation libraries    |

**Size behavior:**

- Size affects the Title and Description typography automatically
- Size 1: Title size 2, Description size 1
- Size 2: Title size 5, Description size 2
- Size 3: Title size 5, Description size 2
- Size 4: Title size 6, Description size 3

### AlertDialog.Title Props

Inherits all `Heading` component props with automatic size coordination based on dialog size.

| Prop     | Type                                                                 | Default         | Description    |
| -------- | -------------------------------------------------------------------- | --------------- | -------------- |
| `size`   | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | Auto-calculated | Font size step |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`          | `'bold'`        | Font weight    |
| `color`  | Frosted UI color                                                     | `undefined`     | Text color     |

### AlertDialog.Description Props

Inherits all `Text` component props with automatic size coordination based on dialog size.

| Prop    | Type                                                                 | Default         | Description                 |
| ------- | -------------------------------------------------------------------- | --------------- | --------------------------- |
| `size`  | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | Auto-calculated | Font size step              |
| `color` | Frosted UI color                                                     | `undefined`     | Text color                  |
| `as`    | `'p'`                                                                | `'p'`           | Always renders as paragraph |

### AlertDialog.Action Props

The action button inherits all standard button props and renders as a child element.

| Prop      | Type      | Default | Description                                      |
| --------- | --------- | ------- | ------------------------------------------------ |
| `asChild` | `boolean` | `true`  | Always true - renders the child element directly |

### AlertDialog.Cancel Props

The cancel button inherits all standard button props and renders as a child element.

| Prop      | Type      | Default | Description                                      |
| --------- | --------- | ------- | ------------------------------------------------ |
| `asChild` | `boolean` | `true`  | Always true - renders the child element directly |

## Examples

### Basic Confirmation Dialog

```jsx
function BasicConfirmation() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Revoke Access
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Revoke Access</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure? This application will no longer be accessible and any existing sessions will be expired.
        </AlertDialog.Description>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-4)',
            justifyContent: 'flex-end',
          }}
        >
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red">
              Revoke Access
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

### Different Sizes

```jsx
function DialogSizes() {
  return (
    <div className="flex gap-4">
      {/* Small Dialog - Size 1 */}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="soft" color="gray">
            Small Dialog
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content size="1" style={{ maxWidth: 350 }}>
          <AlertDialog.Title>Small Alert</AlertDialog.Title>
          <AlertDialog.Description>Compact dialog for simple confirmations.</AlertDialog.Description>
          <div className="flex gap-2 justify-end">
            <AlertDialog.Cancel>
              <Button size="1" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="1" variant="classic" color="blue">
                Confirm
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {/* Large Dialog - Size 4 */}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="soft" color="gray">
            Large Dialog
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content size="4" style={{ maxWidth: 500 }}>
          <AlertDialog.Title>Large Alert</AlertDialog.Title>
          <AlertDialog.Description>
            Spacious dialog for detailed information and complex confirmations.
          </AlertDialog.Description>
          <div className="flex gap-3 justify-end">
            <AlertDialog.Cancel>
              <Button size="3" variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button size="3" variant="classic" color="blue">
                Confirm
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
}
```

### With Complex Content

```jsx
import { AlertDialog, Button, Table, Inset, Text } from 'frosted-ui';

function DeleteUsersDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Delete Users
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 500 }}>
        <AlertDialog.Title>Delete Users</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete these users? This action is permanent and cannot be undone.
        </AlertDialog.Description>

        <Inset side="x" style={{ marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Inset>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'flex-end',
          }}
        >
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red">
              Delete Users
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

### Controlled Dialog

```jsx
import { useState } from 'react';

function ControlledDialog() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setOpen(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={setOpen}>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Delete Item
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          This item will be permanently deleted. This action cannot be undone.
        </AlertDialog.Description>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-3)',
            marginTop: 'var(--space-4)',
            justifyContent: 'flex-end',
          }}
        >
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray" disabled={loading}>
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red" disabled={loading} onClick={handleConfirm}>
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

### Action Confirmation Patterns

```jsx
function ActionConfirmations() {
  return (
    <div className="flex flex-col gap-4">
      {/* Destructive Action */}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="red">
            Delete Account
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 400 }}>
          <AlertDialog.Title>Delete Account</AlertDialog.Title>
          <AlertDialog.Description>
            This will permanently delete your account and all associated data.
          </AlertDialog.Description>
          <div className="flex gap-3 justify-end mt-4">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Keep Account
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="classic" color="red">
                Delete Forever
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {/* Warning Action */}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="amber">
            Reset Settings
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 400 }}>
          <AlertDialog.Title>Reset Settings</AlertDialog.Title>
          <AlertDialog.Description>This will restore all settings to their default values.</AlertDialog.Description>
          <div className="flex gap-3 justify-end mt-4">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Keep Settings
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="classic" color="amber">
                Reset Now
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>

      {/* Confirmation Action */}
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant="classic" color="green">
            Publish Changes
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 400 }}>
          <AlertDialog.Title>Publish Changes</AlertDialog.Title>
          <AlertDialog.Description>
            Your changes will be published and visible to all users immediately.
          </AlertDialog.Description>
          <div className="flex gap-3 justify-end mt-4">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Save as Draft
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="classic" color="green">
                Publish Now
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Dialog Structure with Design Tokens

```jsx
<AlertDialog.Content style={{ maxWidth: 450 }}>
  <AlertDialog.Title>Dialog Title</AlertDialog.Title>
  <AlertDialog.Description>
    Dialog description text automatically uses proper typography scaling.
  </AlertDialog.Description>

  {/* Consistent spacing using space tokens */}
  <div className="flex gap-3 mt-4 justify-end">
    <AlertDialog.Cancel>
      <Button variant="soft" color="gray">
        Cancel
      </Button>
    </AlertDialog.Cancel>
    <AlertDialog.Action>
      <Button variant="classic" color="blue">
        Confirm
      </Button>
    </AlertDialog.Action>
  </div>
</AlertDialog.Content>
```

### Custom Styling Integration

```jsx
{
  /* Dialog with custom background */
}
<AlertDialog.Content className="bg-panel-solid border border-gray-6 rounded-lg shadow-xl" style={{ maxWidth: 500 }}>
  <AlertDialog.Title className="text-gray-12">Custom Title</AlertDialog.Title>
  <AlertDialog.Description className="text-gray-11">
    Custom styled description with Frosted UI color tokens.
  </AlertDialog.Description>
</AlertDialog.Content>;
```

### Color Support

AlertDialog supports all Frosted UI colors through Button color props and Typography component color props. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The AlertDialog component is built with accessibility in mind:

### Keyboard Navigation

| Key     | Action                                  |
| ------- | --------------------------------------- |
| `Tab`   | Move focus between interactive elements |
| `Enter` | Activate the focused button             |
| `Space` | Activate the focused button             |

**Note:** Unlike regular dialogs, AlertDialog cannot be dismissed with `Escape` key - this is intentional for critical confirmations.

### Screen Reader Support

- Uses `role="alertdialog"` for proper announcement
- Title is automatically linked with `aria-labelledby`
- Description is automatically linked with `aria-describedby`
- Focus is trapped within the dialog
- Focus returns to trigger element when closed

### Focus Management

- Focus moves to the first focusable element (usually Cancel button)
- Focus is trapped within the dialog
- Focus returns to the trigger button when dialog closes
- Cannot be dismissed by clicking outside or pressing Escape

### Best Practices

1. **Always provide both Title and Description** for clear context
2. **Use semantic colors** for action buttons (red for destructive actions)
3. **Place Cancel button first** (left-aligned) for better UX
4. **Make the primary action visually prominent** with solid variants
5. **Use consistent button sizes** that match the dialog size

## Advanced Usage

### Custom Portal Container

```jsx
function CustomPortalDialog() {
  const portalContainer = document.getElementById('custom-portal');

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>Open Dialog</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content container={portalContainer}>
        <AlertDialog.Title>Custom Portal</AlertDialog.Title>
        <AlertDialog.Description>This dialog renders in a custom container.</AlertDialog.Description>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

### With Form Validation

```jsx
import { useState } from 'react';

function FormValidationDialog() {
  const [confirmText, setConfirmText] = useState('');
  const isValid = confirmText === 'DELETE';

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button variant="classic" color="red">
          Delete Project
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Project</AlertDialog.Title>
        <AlertDialog.Description>This action cannot be undone. Type "DELETE" to confirm.</AlertDialog.Description>

        <div className="mt-4 mb-4">
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="Type DELETE to confirm"
            className="w-full p-2 border border-gray-6 rounded text-2"
          />
        </div>

        <div className="flex gap-3 justify-end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="classic" color="red" disabled={!isValid}>
              Delete Project
            </Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
```

## Best Practices

### Do's

- ✅ Use AlertDialog for critical actions that require confirmation
- ✅ Always provide clear, descriptive titles and descriptions
- ✅ Use semantic colors for action buttons (red for destructive, green for positive)
- ✅ Place Cancel button first (left-aligned) in button groups
- ✅ Match button sizes with dialog size for visual consistency
- ✅ Use Frosted UI Typography components for consistent text styling
- ✅ Implement proper loading states for async actions

### Don'ts

- ❌ Don't use AlertDialog for non-critical notifications (use other notification patterns instead)
- ❌ Don't make AlertDialog dismissible by clicking outside or pressing Escape
- ❌ Don't use more than 2-3 action buttons (keeps decision simple)
- ❌ Don't use AlertDialog for complex forms (use regular Dialog instead)
- ❌ Don't forget to provide both Title and Description for context

### Action Button Guidelines

```jsx
{
  /* ❌ Unclear button labels */
}
<AlertDialog.Action>
  <Button>OK</Button>
</AlertDialog.Action>;

{
  /* ✅ Clear, descriptive labels */
}
<AlertDialog.Action>
  <Button variant="classic" color="red">
    Delete Account
  </Button>
</AlertDialog.Action>;
```

## Related Components

- **[Dialog](../dialog/dialog.ai.md)** - For general modal dialogs that can be dismissed
- **[Button](../button/button.ai.md)** - For action and cancel buttons
- **[Popover](../popover/popover.ai.md)** - For contextual overlays
- **[Callout](../callout/callout.ai.md)** - For non-blocking notifications and alerts
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For Title and Description styling
