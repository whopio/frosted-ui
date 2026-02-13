# Frosted UI Sheet Component

A bottom sheet that slides up from the bottom of the screen for mobile-first interactions. Built on Vaul (a drawer library) with Frosted UI design system integration and smooth mobile-optimized animations.

## Overview

The Sheet component displays a sliding panel that enters from the bottom of the screen, primarily designed for mobile interfaces. It provides an intuitive way to present secondary content, forms, or actions without navigating away from the current view. The component features a drag handle, smooth animations, and automatic backdrop handling.

Unlike Drawer (which slides from the right), Sheet is optimized for mobile touch interactions with swipe-to-dismiss gestures and responsive height behavior.

## Basic Usage

```jsx
import { Sheet, Button, TextField, Text } from 'frosted-ui';

function EditProfileSheet() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit Profile</Button>
      </Sheet.Trigger>

      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile information.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <div className="flex flex-col gap-3">
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Name
              </Text>
              <TextField.Input size="3" defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Email
              </Text>
              <TextField.Input size="3" defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div className="flex gap-3 mt-4 justify-end">
            <Sheet.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Sheet.Close>
            <Sheet.Close>
              <Button>Save</Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  );
}
```

## Props

### Sheet.Root Props

| Prop           | Type       | Default     | Description                                                     |
| -------------- | ---------- | ----------- | --------------------------------------------------------------- |
| `defaultOpen`  | `boolean`  | `false`     | The open state of the sheet when it is initially rendered       |
| `open`         | `boolean`  | `undefined` | The controlled open state of the sheet                          |
| `onOpenChange` | `function` | `undefined` | Event handler called when the open state changes                |
| `modal`        | `boolean`  | `true`      | Whether the sheet is modal (blocks interaction with background) |

**Note:** Built on Vaul drawer primitive, optimized for bottom-up mobile interactions.

### Sheet.Trigger Props

The trigger inherits all standard button props and renders as a child element.

| Prop       | Type      | Default | Description                                      |
| ---------- | --------- | ------- | ------------------------------------------------ |
| `asChild`  | `boolean` | `true`  | Always true - renders the child element directly |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting    |

### Sheet.Content Props

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Sheet content          |

**Default styling:**

- Fixed positioning at bottom of screen
- 20px padding throughout sections
- 24px top border radius for modern mobile appearance
- 48px top margin (max-height: calc(100% - 48px))
- Built-in drag handle at top center

### Sheet.Title Props

Inherits all `Heading` component props with default size 5 and bold weight.

| Prop     | Type                                                                 | Default     | Description    |
| -------- | -------------------------------------------------------------------- | ----------- | -------------- |
| `size`   | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'5'`       | Font size step |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`          | `'bold'`    | Font weight    |
| `color`  | Frosted UI color                                                     | `undefined` | Text color     |

### Sheet.Description Props

Inherits all `Text` component props with default size 3 and regular weight, rendered as paragraph.

| Prop     | Type                                                                 | Default     | Description      |
| -------- | -------------------------------------------------------------------- | ----------- | ---------------- |
| `size`   | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'3'`       | Font size step   |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semi-bold' \| 'bold'`          | `'regular'` | Font weight      |
| `color`  | Frosted UI color                                                     | `undefined` | Text color       |
| `as`     | `'p'`                                                                | `'p'`       | Always paragraph |

### Sheet.Header Props

Standard div props for the header container with title and description.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Header content         |

### Sheet.Body Props

Standard div props for the main content container.

| Prop        | Type              | Default | Description            |
| ----------- | ----------------- | ------- | ---------------------- |
| `className` | `string`          | `""`    | Additional CSS classes |
| `children`  | `React.ReactNode` | `""`    | Body content           |

### Sheet.Close Props

The close trigger inherits all standard button props and renders as a child element.

| Prop      | Type      | Default | Description                                      |
| --------- | --------- | ------- | ------------------------------------------------ |
| `asChild` | `boolean` | `true`  | Always true - renders the child element directly |

### Sheet.NestedRoot Props

For creating nested sheets (sheet within sheet).

| Prop           | Type       | Default     | Description                                  |
| -------------- | ---------- | ----------- | -------------------------------------------- |
| `defaultOpen`  | `boolean`  | `false`     | Default open state for nested sheet          |
| `open`         | `boolean`  | `undefined` | Controlled open state for nested sheet       |
| `onOpenChange` | `function` | `undefined` | Event handler for nested sheet state changes |

## Examples

### Basic Form Sheet

```jsx
function BasicFormSheet() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Edit Profile</Button>
      </Sheet.Trigger>

      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile information.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <div className="flex flex-col gap-3">
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Name
              </Text>
              <TextField.Input size="3" defaultValue="Freja Johnsen" placeholder="Enter your full name" />
            </label>
            <label>
              <Text as="div" size="2" className="mb-1" weight="bold">
                Email
              </Text>
              <TextField.Input size="3" defaultValue="freja@example.com" placeholder="Enter your email" />
            </label>
          </div>

          <div className="flex gap-3 mt-4 justify-end">
            <Sheet.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Sheet.Close>
            <Sheet.Close>
              <Button>Save</Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  );
}
```

### Nested Sheets

```jsx
function NestedSheetExample() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>
        <Button>Message Request</Button>
      </Sheet.Trigger>

      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Message request</Sheet.Title>
          <Sheet.Description>Artur wants to message you</Sheet.Description>
        </Sheet.Header>
        <Sheet.Body>
          <div className="flex gap-3 mt-4 justify-end">
            {/* Nested Sheet for confirmation */}
            <Sheet.NestedRoot>
              <Sheet.Trigger>
                <Button variant="soft" color="danger">
                  Block
                </Button>
              </Sheet.Trigger>
              <Sheet.Content>
                <Sheet.Header>
                  <Sheet.Title>Are you sure you want to block Artur?</Sheet.Title>
                  <Sheet.Description>Artur won't be able to message you unless you unblock him.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body>
                  <div className="flex gap-3 mt-4 justify-end">
                    <Sheet.Close>
                      <Button size="3">Cancel</Button>
                    </Sheet.Close>
                    <Sheet.Close>
                      <Button variant="classic" color="danger" size="3">
                        Block
                      </Button>
                    </Sheet.Close>
                  </div>
                </Sheet.Body>
              </Sheet.Content>
            </Sheet.NestedRoot>

            <Sheet.Close>
              <Button>Accept</Button>
            </Sheet.Close>
          </div>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Sheet Layout with Design Tokens

```jsx
<Sheet.Content>
  <Sheet.Header>
    <Sheet.Title color="blue">Styled Sheet Title</Sheet.Title>
    <Sheet.Description color="gray">Sheet description with Frosted UI color tokens.</Sheet.Description>
  </Sheet.Header>
  <Sheet.Body>
    {/* Content area with consistent spacing */}
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-gray-2 border border-gray-6 rounded-lg">
        <Text size="2">Content area with design tokens</Text>
      </div>
    </div>

    {/* Button area with proper spacing */}
    <div className="flex gap-3 mt-5 justify-end">
      <Sheet.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Sheet.Close>
      <Button variant="solid" color="blue">
        Confirm
      </Button>
    </div>
  </Sheet.Body>
</Sheet.Content>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Mobile Interaction Features

### Touch Gestures

- **Swipe down**: Dismiss the sheet by swiping down on content

- **Backdrop tap**: Tap outside content area to close sheet
- **Touch-friendly**: Optimized touch targets and spacing

### Responsive Behavior

- **Adaptive height**: Automatically adjusts to content size
- **Max height**: Constrained to screen height minus 48px top margin
- **Safe area**: Respects mobile device safe areas
- **Keyboard handling**: Adjusts when virtual keyboard appears

### Animation Details

- **Smooth entry**: Slides up from bottom with spring animation
- **Gesture following**: Sheet follows finger during drag gestures
- **Snap points**: Can be configured for partial opening states
- **Reduced motion**: Respects `prefers-reduced-motion` settings

## Accessibility

### Keyboard Navigation

| Key         | Action                                       |
| ----------- | -------------------------------------------- |
| `Tab`       | Move focus to the next focusable element     |
| `Shift+Tab` | Move focus to the previous focusable element |
| `Enter`     | Activate the focused button                  |
| `Space`     | Activate the focused button                  |
| `Escape`    | Close the sheet                              |

### Touch Interaction

- **Swipe down**: Close sheet with downward swipe gesture

- **Backdrop tap**: Close sheet by tapping outside content
- **Long content**: Scrollable areas support standard touch scrolling

### Screen Reader Support

- Uses `role="dialog"` for proper announcement
- Title is automatically linked with `aria-labelledby`
- Description is automatically linked with `aria-describedby`
- Focus is trapped within the sheet when open
- Focus returns to trigger element when closed
- Proper modal behavior with background content inert

### Focus Management

- Focus moves to the first focusable element when sheet opens
- Focus is trapped within the sheet content
- Focus returns to the trigger button when sheet closes
- Supports both keyboard and programmatic focus management

### Best Practices

1. **Always provide Title and Description** for clear context
2. **Use semantic HTML** within sheet content
3. **Provide clear focus indicators** for all interactive elements
4. **Test with screen readers** to ensure proper announcement
5. **Consider touch target sizes** for mobile usability

## Best Practices

### When to Use Sheet vs Drawer vs Dialog

**Use Sheet for:**

- ✅ Mobile-first interfaces and touch interactions
- ✅ Bottom-up content presentation
- ✅ Forms and input workflows on mobile devices
- ✅ Quick actions and confirmations on mobile
- ✅ Content that benefits from gesture navigation

**Use Drawer for:**

- ✅ Desktop and web applications
- ✅ Side navigation and auxiliary content
- ✅ Content that needs more horizontal space
- ✅ Non-modal side panels

**Use Dialog for:**

- ✅ Critical confirmations and alerts
- ✅ Small forms and quick interactions
- ✅ Content that should appear centered
- ✅ Platform-agnostic modal dialogs

### Mobile UX Guidelines

1. **Use appropriate touch targets** - Minimum 44px for interactive elements
2. **Consider thumb reach** - Place primary actions within easy thumb reach
3. **Test on devices** - Verify gestures work on actual mobile devices
4. **Respect system settings** - Honor reduced motion preferences

### Content Organization

1. **Header**: Title, description, and optional close button
2. **Body**: Main content with proper mobile spacing
3. **Actions**: Primary and secondary actions at bottom

## Related Components

- **[Drawer](../drawer/drawer.ai.md)** - For desktop side panels and drawers
- **[Dialog](../dialog/dialog.ai.md)** - For modal dialogs and confirmations
- **[Button](../button/button.ai.md)** - For sheet triggers and actions
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For title and text styling
- **[TextField](../text-field/text-field.ai.md)** - For form inputs within sheets
