# Frosted UI Dialog Component

A modal dialog that overlays content to capture user focus and provide interaction. Built on Radix UI's Dialog primitive with Frosted UI design system integration.

## Overview

The Dialog component displays a modal window that interrupts the user flow to capture attention and provide interaction. Unlike AlertDialog, regular dialogs can be dismissed by clicking outside the content area, pressing escape, or using the close button. They're ideal for forms, detailed content presentation, settings panels, and non-critical user interactions.

The component uses a compound pattern with multiple sub-components for structured content layout and automatic size-coordinated typography.

## Basic Usage

```jsx
import { Dialog, Button, TextField, Text } from 'frosted-ui';

function EditProfileDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit Profile</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[450px]">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>Make changes to your profile.</Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

## Props

### Dialog.Root Props

| Prop           | Type       | Default     | Description                                                |
| -------------- | ---------- | ----------- | ---------------------------------------------------------- |
| `defaultOpen`  | `boolean`  | `false`     | The open state of the dialog when it is initially rendered |
| `open`         | `boolean`  | `undefined` | The controlled open state of the dialog                    |
| `onOpenChange` | `function` | `undefined` | Event handler called when the open state changes           |

**Note:** Dialog.Root always uses `modal={true}` for proper modal behavior.

### Dialog.Trigger Props

The trigger inherits all standard button props and renders as a child element.

| Prop       | Type      | Default | Description                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `asChild`  | `boolean` | `true`  | Always true - renders the child element directly |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting    |

### Dialog.Content Props

| Prop         | Type                       | Default     | Description                                        |
| ------------ | -------------------------- | ----------- | -------------------------------------------------- |
| `size`       | `'1' \| '2' \| '3' \| '4'` | `'3'`       | Dialog size affecting typography scale and spacing |
| `container`  | `HTMLElement`              | `undefined` | Portal container element                           |
| `forceMount` | `boolean`                  | `false`     | Force mount for animation libraries                |

**Size specifications:**

- Size 1: 12px padding, 4px border radius, compact spacing
- Size 2: 16px padding, 4px border radius, small spacing
- Size 3: 24px padding, 5px border radius, medium spacing (default)
- Size 4: 32px padding, 5px border radius, large spacing

**Typography coordination:**

- Size 1: Title size 2, Description size 1
- Size 2: Title size 5, Description size 2
- Size 3: Title size 5, Description size 2
- Size 4: Title size 6, Description size 3

### Dialog.Title Props

Inherits all `Heading` component props with automatic size coordination based on dialog size.

| Prop     | Type                                                                 | Default         | Description    |
| -------- | -------------------------------------------------------------------- | --------------- | -------------- |
| `size`   | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | Auto-calculated | Font size step |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`          | `'bold'`        | Font weight    |
| `color`  | Frosted UI color                                                     | `undefined`     | Text color     |

### Dialog.Description Props

Inherits all `Text` component props with automatic size coordination based on dialog size.

| Prop    | Type                                                                 | Default         | Description                 |
| ------- | -------------------------------------------------------------------- | --------------- | --------------------------- |
| `size`  | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | Auto-calculated | Font size step              |
| `color` | Frosted UI color                                                     | `undefined`     | Text color                  |
| `as`    | `'p'`                                                                | `'p'`           | Always renders as paragraph |

### Dialog.Close Props

The close button inherits all standard button props and renders as a child element.

| Prop      | Type      | Default | Description                                      |
| --------- | --------- | ------- | ------------------------------------------------ |
| `asChild` | `boolean` | `true`  | Always true - renders the child element directly |

## Examples

### Basic Form Dialog

```jsx
function BasicFormDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit Profile</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[450px]">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description>Make changes to your profile.</Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

### Different Sizes

```jsx
function DialogSizes() {
  return (
    <div className="flex gap-4">
      {/* Small Dialog - Size 1 */}
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="soft" color="gray">
            Small Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content size="1" className="max-w-[350px]">
          <Dialog.Title>Compact Dialog</Dialog.Title>
          <Dialog.Description>Small dialog for quick interactions.</Dialog.Description>
          <div className="flex gap-2 justify-end">
            <Dialog.Close>
              <Button size="1" variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="1" variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>

      {/* Large Dialog - Size 4 */}
      <Dialog.Root>
        <Dialog.Trigger>
          <Button variant="soft" color="gray">
            Large Dialog
          </Button>
        </Dialog.Trigger>
        <Dialog.Content size="4" className="max-w-[500px]">
          <Dialog.Title>Spacious Dialog</Dialog.Title>
          <Dialog.Description>Large dialog for complex forms and detailed content.</Dialog.Description>
          <div className="flex gap-3 justify-end">
            <Dialog.Close>
              <Button size="3" variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button size="3" variant="classic">
                Save
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
```

### With Complex Content and Tables

```jsx
import { Dialog, Button, Table, Inset, ScrollArea, Checkbox, Badge, Text } from 'frosted-ui';

function UsersDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>View Users</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <Dialog.Title>Users</Dialog.Title>
        <Dialog.Description>The following users have access to this project.</Dialog.Description>

        <Inset side="x" className="my-5">
          <Table.Root variant="ghost" size="1">
            <ScrollArea scrollbars="horizontal">
              <Table.Table>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>
                      <div className="flex items-center gap-3">
                        <Checkbox />
                        <Text weight="bold">Full name</Text>
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
                        <Text>Danilo Sousa</Text>
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
                        <Text>Zahra Ambessa</Text>
                      </div>
                    </Table.RowHeaderCell>
                    <Table.Cell>zahra@example.com</Table.Cell>
                    <Table.Cell>
                      <Badge color="amber">Admin</Badge>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Table>
            </ScrollArea>
          </Table.Root>
        </Inset>

        <div className="flex justify-end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Close
            </Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

### Controlled Dialog

```jsx
import { useState } from 'react';

function ControlledDialog() {
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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Open Settings</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[450px]">
        <Dialog.Title>Settings</Dialog.Title>
        <Dialog.Description>Configure your application settings.</Dialog.Description>

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
          <Dialog.Close>
            <Button variant="soft" color="gray" disabled={loading}>
              Cancel
            </Button>
          </Dialog.Close>
          <Button onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

### Settings Panel Dialog

```jsx
function SettingsDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="ghost">Settings</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[500px]">
        <Dialog.Title>Application Settings</Dialog.Title>
        <Dialog.Description>Manage your application preferences and configuration.</Dialog.Description>

        <div className="flex flex-col gap-4">
          <div>
            <Text size="3" weight="medium" className="mb-2">
              Appearance
            </Text>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <Checkbox />
                <Text size="2">Dark mode</Text>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox />
                <Text size="2">High contrast</Text>
              </label>
            </div>
          </div>

          <div>
            <Text size="3" weight="medium" className="mb-2">
              Notifications
            </Text>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <Checkbox defaultChecked />
                <Text size="2">Email notifications</Text>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox />
                <Text size="2">Push notifications</Text>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-5 justify-end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save Settings</Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Dialog Structure with Design Tokens

```jsx
<Dialog.Content>
  <Dialog.Title>Dialog Title</Dialog.Title>
  <Dialog.Description>Dialog description text automatically uses proper typography scaling.</Dialog.Description>

  {/* Content area with consistent spacing */}
  <div className="flex flex-col gap-3 mt-4">
    <div className="p-3 bg-gray-2 border border-gray-6 rounded">
      <Text size="2">Content area with design tokens</Text>
    </div>
  </div>

  {/* Button area with proper spacing */}
  <div className="flex gap-3 mt-5 justify-end">
    <Dialog.Close>
      <Button variant="soft" color="gray">
        Cancel
      </Button>
    </Dialog.Close>
    <Dialog.Close>
      <Button variant="solid" color="blue">
        Save
      </Button>
    </Dialog.Close>
  </div>
</Dialog.Content>
```

### Custom Styling Integration

```jsx
{
  /* Dialog with custom styling using Frosted UI tokens */
}
<Dialog.Content className="bg-panel-solid border border-gray-6 shadow-xl max-w-[600px]">
  <Dialog.Title className="text-gray-12">Custom Styled Title</Dialog.Title>
  <Dialog.Description className="text-gray-11">Custom description with Frosted UI color tokens.</Dialog.Description>

  <div className="mt-4 p-4 bg-blue-2 border border-blue-6 rounded-lg">
    <Text size="2" color="blue">
      Highlighted content area with accent colors.
    </Text>
  </div>
</Dialog.Content>;
```

### Color Support

Dialog supports all Frosted UI colors through Button color props and Typography component color props. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Dialog component is built with comprehensive accessibility support:

### Keyboard Navigation

| Key         | Action                                  |
| ----------- | --------------------------------------- |
| `Tab`       | Move focus between interactive elements |
| `Shift+Tab` | Move focus backward                     |
| `Enter`     | Activate the focused button             |
| `Space`     | Activate the focused button             |
| `Escape`    | Close the dialog                        |

### Mouse Interaction

- **Click outside**: Closes the dialog (unlike AlertDialog)
- **Click overlay**: Closes the dialog
- **Close button**: Any button with Dialog.Close wrapper will close

### Screen Reader Support

- Uses `role="dialog"` for proper announcement
- Title is automatically linked with `aria-labelledby`
- Description is automatically linked with `aria-describedby`
- Focus is trapped within the dialog when open
- Focus returns to trigger element when closed
- Proper modal behavior with background content inert

### Focus Management

- Focus moves to the first focusable element when dialog opens
- Focus is trapped within the dialog content
- Focus returns to the trigger button when dialog closes
- Supports both keyboard and programmatic focus management

### Best Practices

1. **Always provide both Title and Description** for clear context
2. **Use semantic HTML** within dialog content
3. **Provide clear focus indicators** for all interactive elements
4. **Test with screen readers** to ensure proper announcement
5. **Use appropriate heading hierarchy** within dialog content

## Advanced Usage

### Custom Portal Container

```jsx
function CustomPortalDialog() {
  const portalContainer = document.getElementById('custom-portal');

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content container={portalContainer}>
        <Dialog.Title>Custom Portal</Dialog.Title>
        <Dialog.Description>This dialog renders in a custom container.</Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

### Multi-Step Dialog

```jsx
import { useState } from 'react';

function MultiStepDialog() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Setup Wizard</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[500px]">
        <Dialog.Title>Setup Wizard - Step {step} of 3</Dialog.Title>
        <Dialog.Description>
          {step === 1 && "Let's start with your basic information."}
          {step === 2 && 'Now, configure your preferences.'}
          {step === 3 && 'Review and confirm your settings.'}
        </Dialog.Description>

        <div className="my-4">
          {step === 1 && (
            <div className="flex flex-col gap-3">
              <TextField.Input placeholder="Full Name" />
              <TextField.Input placeholder="Email Address" />
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2">
                <Checkbox />
                <Text size="2">Enable notifications</Text>
              </label>
              <label className="flex items-center gap-2">
                <Checkbox />
                <Text size="2">Public profile</Text>
              </label>
            </div>
          )}
          {step === 3 && (
            <div className="p-3 bg-gray-2 rounded">
              <Text size="2">Review your information and click finish to complete setup.</Text>
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-between">
          <div>
            {step > 1 && (
              <Button variant="soft" color="gray" onClick={handlePrev}>
                Previous
              </Button>
            )}
          </div>
          <div className="flex gap-3">
            <Dialog.Close>
              <Button variant="ghost" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            {step < 3 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Dialog.Close>
                <Button>Finish</Button>
              </Dialog.Close>
            )}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

### With Form Validation

```jsx
import { useState } from 'react';

function ValidatedFormDialog() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Name is required';
    if (!values.email.trim()) newErrors.email = 'Email is required';
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log('Submitting:', values);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Add User</Button>
      </Dialog.Trigger>

      <Dialog.Content className="max-w-[450px]">
        <Dialog.Title>Add New User</Dialog.Title>
        <Dialog.Description>Enter the user's information below.</Dialog.Description>

        <div className="flex flex-col gap-3">
          <label>
            <Text as="div" size="2" weight="bold" className="mb-1">
              Name
            </Text>
            <TextField.Input
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Enter full name"
            />
            {errors.name && (
              <Text size="1" color="red" className="mt-1">
                {errors.name}
              </Text>
            )}
          </label>

          <label>
            <Text as="div" size="2" weight="bold" className="mb-1">
              Email
            </Text>
            <TextField.Input
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Enter email address"
            />
            {errors.email && (
              <Text size="1" color="red" className="mt-1">
                {errors.email}
              </Text>
            )}
          </label>
        </div>

        <div className="flex gap-3 mt-4 justify-end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button onClick={handleSubmit}>Add User</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
```

## Animation and Performance

### Built-in Animations

The Dialog component includes sophisticated animations:

- **Entry**: 400ms cubic-bezier with fade + scale + translate
- **Exit**: 150ms cubic-bezier with fade + scale + translate
- **Backdrop**: Blur and brightness transitions for depth
- **Respects**: `prefers-reduced-motion` for accessibility

### Animation Details

```css
/* Entry animation */
@keyframes fui-dialog-content-show {
  from {
    opacity: 0;
    transform: translateY(5px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

/* Exit animation */
@keyframes fui-dialog-content-hide {
  from {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(5px) scale(0.99);
  }
}
```

### Performance Optimizations

- Portal rendering to body by default
- Efficient focus trap implementation
- Optimized CSS animations using transform and opacity
- Minimal re-renders with context optimization
- Lazy content mounting until dialog opens

## Best Practices

### Do's

- ✅ Use Dialog for non-critical modal interactions
- ✅ Provide clear, descriptive titles and descriptions
- ✅ Use proper form validation and error handling
- ✅ Implement proper loading states for async operations
- ✅ Match button sizes with dialog size for visual consistency
- ✅ Use Frosted UI Typography components for consistent text styling
- ✅ Test keyboard navigation and screen reader compatibility

### Don'ts

- ❌ Don't use Dialog for critical confirmations (use AlertDialog instead)
- ❌ Don't nest dialogs (use controlled state instead)
- ❌ Don't forget to handle escape key and outside clicks
- ❌ Don't use more than 2-3 primary actions in the footer
- ❌ Don't make dialogs too wide (max-width: 500-600px typically)
- ❌ Don't forget to provide focus management for complex content

### Dialog vs AlertDialog

```jsx
// ✅ Use Dialog for forms and general interactions
<Dialog.Root>
  <Dialog.Trigger>
    <Button>Edit Settings</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    {/* Form content, can be dismissed */}
  </Dialog.Content>
</Dialog.Root>

// ✅ Use AlertDialog for critical confirmations
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete Account</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    {/* Critical confirmation, cannot be dismissed easily */}
  </AlertDialog.Content>
</AlertDialog.Root>
```

## Related Components

- **[AlertDialog](../alert-dialog/alert-dialog.ai.md)** - For critical confirmations that require explicit action
- **[Button](../button/button.ai.md)** - For trigger and action buttons
- **[TextField](../text-field/text-field.ai.md)** - For form inputs within dialogs
- **[Checkbox](../checkbox/checkbox.ai.md)** - For options and selections
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For Title and Description styling
