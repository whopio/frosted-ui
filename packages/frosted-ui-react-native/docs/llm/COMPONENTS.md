# Frosted UI Components Reference

> **Critical**: Always import components from `@frosted-ui/react-native`, never from React Native directly for UI elements.

```tsx
import { Button, Text, Card, Dialog } from '@frosted-ui/react-native';
```

---

## Component Types

Frosted UI has two component patterns:

1. **Simple Components** — Single import, use directly with props
2. **Compound Components** — Dot notation (e.g., `Dialog.Root`, `Dialog.Content`)

---

## Text Handling in Components

Some components automatically wrap text, others require explicit `<Text>` components:

### Components that auto-wrap text (pass plain strings):

These components internally render `<Text>`, so **do NOT wrap children in `<Text>`**:

| Component                   | Children           |
| --------------------------- | ------------------ |
| `Select.Item`               | Plain string       |
| `Select.Label`              | Plain string       |
| `DropdownMenu.Item`         | Plain string       |
| `DropdownMenu.CheckboxItem` | Plain string       |
| `DropdownMenu.RadioItem`    | Plain string       |
| `DropdownMenu.SubTrigger`   | Plain string       |
| `DropdownMenu.Label`        | Plain string       |
| `ContextMenu.Item`          | Plain string       |
| `ContextMenu.CheckboxItem`  | Plain string       |
| `ContextMenu.RadioItem`     | Plain string       |
| `ContextMenu.SubTrigger`    | Plain string       |
| `ContextMenu.Label`         | Plain string       |
| `Tabs.Trigger`              | String or `<Text>` |
| `SegmentedControl.Trigger`  | String or `<Text>` |
| `Accordion.Trigger`         | Plain string       |

```tsx
// ✅ Correct
<Select.Item value="1" label="Option 1">Option 1</Select.Item>
<DropdownMenu.Item>Edit</DropdownMenu.Item>

// ❌ Wrong - double-wrapped text
<Select.Item value="1" label="Option 1"><Text>Option 1</Text></Select.Item>
<DropdownMenu.Item><Text>Edit</Text></DropdownMenu.Item>
```

### Components that style children via context:

These use `TextStyleContext` to auto-style nested `<Text>` and `<Icon>`. **You must explicitly use `<Text>` for text content:**

| Component      | Children                    |
| -------------- | --------------------------- |
| `Button`       | `<Text>`, `<Icon>`, or both |
| `IconButton`   | `<Icon>` only (no text)     |
| `Badge`        | `<Text>`, `<Icon>`, or both |
| `Callout.Root` | `<Text>`, `<Icon>`, etc.    |

```tsx
// ✅ Correct - Text/Icon auto-styled by parent
<Button variant="solid">
  <Text>Submit</Text>
</Button>

<IconButton variant="soft">
  <Icon as={Settings} />
</IconButton>

<Badge color="success">
  <Text>Active</Text>
</Badge>
```

---

## Simple Components

### Button

Interactive button with variants and sizes.

```tsx
<Button variant="solid" size="2" color="accent" onPress={handlePress}>
  <Text>Click me</Text>
</Button>
```

| Prop       | Type                                        | Default     | Description    |
| ---------- | ------------------------------------------- | ----------- | -------------- |
| `variant`  | `'solid' \| 'soft' \| 'surface' \| 'ghost'` | `'surface'` | Visual style   |
| `size`     | `'1' \| '2' \| '3' \| '4'`                  | `'3'`       | Button size    |
| `color`    | `Color`                                     | `'accent'`  | Color theme    |
| `disabled` | `boolean`                                   | `false`     | Disabled state |

**Note**: Child `<Text>` components automatically receive correct styling.

#### Button Variants Guide

**Recommended pattern for most UIs:**

- **Primary action**: `variant="solid"`
- **Secondary action**: `variant="soft" color="gray"`

| Variant   | Visual Style                                   | When to Use                                                          |
| --------- | ---------------------------------------------- | -------------------------------------------------------------------- |
| `solid`   | Vivid colored background, contrast text        | **Primary CTA**: "Submit", "Save", "Continue". One per view.         |
| `soft`    | Tinted translucent background                  | **Secondary** (with `color="gray"`): "Cancel", "Back", "Dismiss"     |
| `surface` | Neutral background, gray border, subtle shadow | Toolbar buttons, settings ("Edit", "Manage"), pairs with form inputs |
| `ghost`   | Transparent, no border                         | Tertiary/inline actions, text-links, minimal UI                      |

> **Note**: `soft` with a non-gray color (e.g., `color="accent"`) is used for colored but less prominent actions like filter chips or toggle buttons.

> **IconButton**: Supports all the same variants as Button. Choose variant based on the same hierarchy rules above.

**Choosing the right variant:**

```tsx
{
  /* Primary action — use solid */
}
<Button variant="solid" color="accent">
  <Text>Save Changes</Text>
</Button>;

{
  /* Secondary action — use soft (often gray) */
}
<Button variant="soft" color="gray">
  <Text>Cancel</Text>
</Button>;

{
  /* Neutral/toolbar — use surface (default) */
}
<Button variant="surface">
  <Text>Edit Profile</Text>
</Button>;

{
  /* Tertiary/inline — use ghost */
}
<Button variant="ghost">
  <Text>Learn more</Text>
</Button>;
```

**Common pairings:**

- **Dialog actions**: `solid` (confirm) + `soft color="gray"` (cancel)
- **Toolbars**: `surface` buttons alongside `TextField.Input` and `Select`
- **Inline text actions**: `ghost` for link-style buttons
- **Destructive actions**: Any variant with `color="danger"`

---

### IconButton

Square button for icons only. Same API as Button.

```tsx
import { X } from 'lucide-react-native';

<IconButton variant="ghost" onPress={handleClose}>
  <Icon as={X} />
</IconButton>;
```

---

### Icon

Wrapper for Lucide icons with automatic color inheritance.

```tsx
import { ArrowRight } from 'lucide-react-native';

<Icon as={ArrowRight} size={16} />;
```

| Prop    | Type         | Default   | Description               |
| ------- | ------------ | --------- | ------------------------- |
| `as`    | `LucideIcon` | required  | The Lucide icon component |
| `size`  | `number`     | `14`      | Icon size in pixels       |
| `color` | `string`     | inherited | Override color            |

**Note**: Inside Button, Badge, or Callout, Icon inherits the parent's text color automatically.

---

### Badge

Small label for status or categories.

```tsx
<Badge variant="soft" size="1" color="success">
  <Text>Active</Text>
</Badge>
```

| Prop      | Type                                          | Default    | Description  |
| --------- | --------------------------------------------- | ---------- | ------------ |
| `variant` | `'solid' \| 'soft' \| 'surface' \| 'outline'` | `'soft'`   | Visual style |
| `size`    | `'1' \| '2'`                                  | `'1'`      | Badge size   |
| `color`   | `Color`                                       | `'accent'` | Color theme  |

---

### Avatar

User avatar with image or fallback initials.

```tsx
<Avatar src="https://example.com/photo.jpg" fallback="John Doe" size="3" shape="circle" />
```

| Prop       | Type                   | Default    | Description                  |
| ---------- | ---------------------- | ---------- | ---------------------------- |
| `src`      | `string`               | —          | Image URL                    |
| `fallback` | `string \| ReactNode`  | required   | Initials or fallback content |
| `size`     | `'0'-'9'`              | `'3'`      | Avatar size (16px to 160px)  |
| `shape`    | `'circle' \| 'square'` | `'circle'` | Avatar shape                 |
| `color`    | `Color`                | `'gray'`   | Fallback background color    |

---

### Card

Container with optional border and shadow.

```tsx
<Card variant="surface">
  <Text>Card content</Text>
</Card>
```

| Prop      | Type                             | Default     | Description  |
| --------- | -------------------------------- | ----------- | ------------ |
| `variant` | `'soft' \| 'surface' \| 'ghost'` | `'surface'` | Visual style |

#### Card Variants

| Variant   | Visual Style                        | Use Case                                           |
| --------- | ----------------------------------- | -------------------------------------------------- |
| `surface` | Solid bg, border, shadow            | **Default** — Messages, profiles, elevated content |
| `soft`    | Translucent tinted background       | Tips, promotions, feature highlights               |
| `ghost`   | No background/border (padding only) | Section grouping, layout containers                |

---

### Separator

Visual divider between content.

```tsx
<Separator size="4" orientation="horizontal" />
```

| Prop          | Type                         | Default        | Description                     |
| ------------- | ---------------------------- | -------------- | ------------------------------- |
| `size`        | `'1' \| '2' \| '3' \| '4'`   | `'1'`          | Length (16px, 32px, 64px, 100%) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction                       |
| `color`       | `Color`                      | `'gray'`       | Separator color                 |

---

### Checkbox

Controlled checkbox input.

```tsx
<Checkbox checked={isChecked} onCheckedChange={setIsChecked} size="2" color="accent" />
```

| Prop              | Type                         | Default    | Description              |
| ----------------- | ---------------------------- | ---------- | ------------------------ |
| `checked`         | `boolean`                    | —          | Controlled checked state |
| `onCheckedChange` | `(checked: boolean) => void` | —          | Change handler           |
| `size`            | `'1' \| '2' \| '3'`          | `'2'`      | Checkbox size            |
| `color`           | `Color`                      | `'accent'` | Checked color            |
| `disabled`        | `boolean`                    | `false`    | Disabled state           |

---

### Switch

Toggle switch input.

```tsx
<Switch checked={isEnabled} onCheckedChange={setIsEnabled} size="2" color="accent" />
```

| Prop              | Type                         | Default    | Description              |
| ----------------- | ---------------------------- | ---------- | ------------------------ |
| `checked`         | `boolean`                    | —          | Controlled checked state |
| `onCheckedChange` | `(checked: boolean) => void` | —          | Change handler           |
| `size`            | `'1' \| '2' \| '3'`          | `'2'`      | Switch size              |
| `color`           | `Color`                      | `'accent'` | Active color             |
| `disabled`        | `boolean`                    | `false`    | Disabled state           |

---

### Progress

Progress bar indicator.

```tsx
<Progress value={75} max={100} size="2" color="accent" />
```

| Prop    | Type      | Default    | Description              |
| ------- | --------- | ---------- | ------------------------ |
| `value` | `number`  | `0`        | Current progress         |
| `max`   | `number`  | `100`      | Maximum value            |
| `size`  | `'1'-'6'` | `'6'`      | Bar height (2px to 16px) |
| `color` | `Color`   | `'accent'` | Fill color               |

---

### Spinner

Loading indicator.

```tsx
<Spinner size="2" />;

{
  /* Or wrap content to show spinner while loading */
}
<Spinner loading={isLoading}>
  <Text>Content</Text>
</Spinner>;
```

| Prop       | Type        | Default | Description                   |
| ---------- | ----------- | ------- | ----------------------------- |
| `size`     | `'1'-'6'`   | `'2'`   | Spinner size                  |
| `loading`  | `boolean`   | `true`  | Show spinner                  |
| `children` | `ReactNode` | —       | Content to hide while loading |

---

### Tooltip

Hover/press tooltip.

```tsx
<Tooltip content="Helpful information">
  <Button>
    <Text>Hover me</Text>
  </Button>
</Tooltip>
```

| Prop            | Type                                     | Default  | Description               |
| --------------- | ---------------------------------------- | -------- | ------------------------- |
| `content`       | `ReactNode`                              | required | Tooltip content           |
| `delayDuration` | `number`                                 | `400`    | Delay before showing (ms) |
| `side`          | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  | Position                  |
| `sideOffset`    | `number`                                 | `4`      | Offset from trigger       |

---

### AspectRatio

Maintains aspect ratio for child content.

```tsx
<AspectRatio ratio={16 / 9}>
  <Image source={{ uri: '...' }} style={{ width: '100%', height: '100%' }} />
</AspectRatio>
```

---

## Compound Components

### TextField

Text input with optional slots for icons/buttons.

```tsx
{
  /* Simple usage */
}
<TextField.Input placeholder="Enter text..." />;

{
  /* With slots */
}
<TextField.Root variant="surface">
  <TextField.Slot>
    <Icon as={Search} size={16} />
  </TextField.Slot>
  <TextField.Input placeholder="Search..." />
  <TextField.Slot>
    <IconButton variant="ghost" size="1">
      <Icon as={X} size={14} />
    </IconButton>
  </TextField.Slot>
</TextField.Root>;
```

**TextField.Root Props:**
| Prop | Type | Default |
|------|------|---------|
| `size` | `'1' \| '2' \| '3' \| '4'` | `'3'` |
| `variant` | `'surface' \| 'soft'` | `'surface'` |
| `color` | `Color` | — |
| `disabled` | `boolean` | `false` |

**TextField.Input**: Accepts all React Native `TextInput` props.

---

### TextArea

Multi-line text input.

```tsx
<TextArea placeholder="Write a message..." />
```

| Prop      | Type                       | Default     |
| --------- | -------------------------- | ----------- |
| `size`    | `'1' \| '2' \| '3' \| '4'` | `'3'`       |
| `variant` | `'surface' \| 'soft'`      | `'surface'` |
| `color`   | `Color`                    | —           |

---

### Select

Dropdown selection.

```tsx
<Select.Root value={value} onValueChange={setValue}>
  <Select.Trigger>
    <Select.Value placeholder="Choose option..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="option1" label="Option 1">
      Option 1
    </Select.Item>
    <Select.Item value="option2" label="Option 2">
      Option 2
    </Select.Item>
    <Select.Separator />
    <Select.Group>
      <Select.Label>More Options</Select.Label>
      <Select.Item value="option3" label="Option 3">
        Option 3
      </Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

> **Note**: `Select.Item` children should be plain text, not wrapped in `<Text>`. The component handles text styling internally.

**Select.Root Props:**
| Prop | Type | Default |
|------|------|---------|
| `size` | `'1' \| '2' \| '3' \| '4'` | `'3'` |
| `value` | `{ value: string; label: string }` | — |
| `onValueChange` | `(value) => void` | — |

**Select.Trigger Props:**
| Prop | Type | Default |
|------|------|---------|
| `variant` | `'surface' \| 'soft' \| 'ghost'` | `'surface'` |
| `color` | `Color` | — |

**Select.Content Props:**
| Prop | Type | Default |
|------|------|---------|
| `align` | `'start' \| 'center' \| 'end'` | `'start'` |

**Select.Item Props:**
| Prop | Type | Required |
|------|------|----------|
| `value` | `string` | Yes |
| `label` | `string` | Yes |
| `children` | `string` (plain text) | Yes |

> **Tip**: Use `align="end"` when the trigger is on the right side of the screen, `align="start"` when on the left.

---

### RadioGroup

Radio button group.

```tsx
<RadioGroup.Root value={selected} onValueChange={setSelected}>
  <View style={{ gap: 8 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <RadioGroup.Item value="option1" />
      <Text>Option 1</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <RadioGroup.Item value="option2" />
      <Text>Option 2</Text>
    </View>
  </View>
</RadioGroup.Root>
```

**RadioGroup.Root Props:**
| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `onValueChange` | `(value: string) => void` | — |
| `size` | `'1' \| '2' \| '3'` | `'2'` |
| `color` | `Color` | `'accent'` |

---

### Dialog

Modal dialog.

```tsx
<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>
    <Button>
      <Text>Open Dialog</Text>
    </Button>
  </Dialog.Trigger>
  <Dialog.Content size="3">
    <Dialog.Title>Dialog Title</Dialog.Title>
    <Dialog.Description>This is a description of the dialog.</Dialog.Description>

    {/* Your content here */}

    <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
      <Dialog.Close>
        <Button variant="soft" color="gray">
          <Text>Cancel</Text>
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button variant="solid">
          <Text>Confirm</Text>
        </Button>
      </Dialog.Close>
    </View>
  </Dialog.Content>
</Dialog.Root>
```

**Dialog.Content Props:**
| Prop | Type | Default |
|------|------|---------|
| `size` | `'1' \| '2' \| '3' \| '4'` | `'3'` |

---

### AlertDialog

Confirmation dialog with action/cancel pattern.

```tsx
<AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="danger">
      <Text>Delete</Text>
    </Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Delete Item</AlertDialog.Title>
      <AlertDialog.Description>This action cannot be undone.</AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          <Text>Cancel</Text>
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="danger">
          <Text>Delete</Text>
        </Button>
      </AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog.Root>
```

---

### Popover

Floating content panel.

```tsx
<Popover.Root>
  <Popover.Trigger>
    <Button>
      <Text>Open Popover</Text>
    </Button>
  </Popover.Trigger>
  <Popover.Content align="start">
    <View style={{ padding: 16 }}>
      <Text>Popover content</Text>
    </View>
  </Popover.Content>
</Popover.Root>
```

**Popover.Content Props:**
| Prop | Type | Default |
|------|------|---------|
| `align` | `'start' \| 'center' \| 'end'` | `'center'` |

> **Tip**: Use `align="end"` when trigger is on the right, `align="start"` when on the left.

---

### DropdownMenu

Menu triggered by button press.

```tsx
<DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <Button>
      <Text>Actions</Text>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item onSelect={() => handleEdit()}>Edit</DropdownMenu.Item>
    <DropdownMenu.Item onSelect={() => handleDuplicate()}>Duplicate</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item onSelect={() => handleDelete()} color="danger">
      Delete
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

> **Note**: `DropdownMenu.Item` children should be plain text, not wrapped in `<Text>`. The component handles text styling internally.

**DropdownMenu.Content Props:**
| Prop | Type | Default |
|------|------|---------|
| `align` | `'start' \| 'center' \| 'end'` | `'start'` |

> **Tip**: Use `align="end"` when trigger is on the right, `align="start"` when on the left.

---

### ContextMenu

Long-press menu (mobile) or right-click menu (web).

```tsx
<ContextMenu.Root>
  <ContextMenu.Trigger>
    <Card>
      <Text>Long press me</Text>
    </Card>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item onSelect={() => handleAction()}>Action</ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>
```

> **Note**: `ContextMenu.Item` children should be plain text, not wrapped in `<Text>`. The component handles text styling internally.

---

### Tabs

Tabbed content panels.

```tsx
<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">
    <Text>Content for tab 1</Text>
  </Tabs.Content>
  <Tabs.Content value="tab2">
    <Text>Content for tab 2</Text>
  </Tabs.Content>
</Tabs.Root>
```

> **Note**: `Tabs.Trigger` auto-wraps string children in `<Text>`. You can pass plain strings or `<Text>` components.

**Tabs.Root Props:**
| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `onValueChange` | `(value: string) => void` | — |
| `size` | `'1' \| '2'` | `'2'` |
| `color` | `Color` | `'accent'` |

---

### SegmentedControl

Segmented selection control.

```tsx
<SegmentedControl.Root value={view} onValueChange={setView}>
  <SegmentedControl.List>
    <SegmentedControl.Trigger value="list">List</SegmentedControl.Trigger>
    <SegmentedControl.Trigger value="grid">Grid</SegmentedControl.Trigger>
  </SegmentedControl.List>
</SegmentedControl.Root>
```

> **Note**: `SegmentedControl.Trigger` auto-wraps string children in `<Text>`. You can pass plain strings or `<Text>` components.

---

### Accordion

Collapsible content sections.

```tsx
<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>
      <Text>Content for section 1</Text>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>
      <Text>Content for section 2</Text>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

> **Note**: `Accordion.Trigger` internally wraps children in `<Text>`. Pass plain strings, not `<Text>` components.

---

### Callout

Highlighted message box.

```tsx
import { Info } from 'lucide-react-native';

<Callout.Root variant="soft" color="info">
  <Callout.Icon>
    <Icon as={Info} size={16} />
  </Callout.Icon>
  <Callout.Text>
    <Text>This is an informational message.</Text>
  </Callout.Text>
</Callout.Root>;
```

**Callout.Root Props:**
| Prop | Type | Default |
|------|------|---------|
| `variant` | `'soft' \| 'surface' \| 'outline'` | `'soft'` |
| `size` | `'1' \| '2' \| '3'` | `'2'` |
| `color` | `Color` | `'accent'` |

---

### Skeleton

Loading placeholder that matches actual component dimensions.

**Skeleton.Avatar** — Uses the same `size` and `shape` props as `<Avatar>`. The skeleton will have identical dimensions to a real avatar.

```tsx
{/* These have identical dimensions */}
<Avatar fallback="JD" size="3" shape="circle" />
<Skeleton.Avatar size="3" shape="circle" />
```

**Skeleton.Text** — Uses the same `size` scale as `<Text>` and `<Heading>`. The skeleton height matches the text's `lineHeight`, and the inner bar matches the `fontSize`.

```tsx
{/* These align perfectly when swapped */}
<Text size="2">Loading complete</Text>
<Skeleton.Text size="2" />

{/* Match a Heading */}
<Heading size="6">Page Title</Heading>
<Skeleton.Text size="6" />
```

**Skeleton.Rect** — For custom shapes. Define dimensions via `style`.

```tsx
<Skeleton.Rect style={{ width: 200, height: 100, borderRadius: 8 }} />
```

| Component         | Props                       | Matches                            |
| ----------------- | --------------------------- | ---------------------------------- |
| `Skeleton.Avatar` | `size` (`'0'-'9'`), `shape` | `<Avatar>` dimensions exactly      |
| `Skeleton.Text`   | `size` (`'0'-'9'`)          | `<Text>` / `<Heading>` line height |
| `Skeleton.Rect`   | `style`                     | Custom dimensions                  |

---

### HoverCard

Card shown on hover (web) or press (mobile).

```tsx
<HoverCard.Root>
  <HoverCard.Trigger>
    <Text>@username</Text>
  </HoverCard.Trigger>
  <HoverCard.Content>
    <View style={{ padding: 16 }}>
      <Avatar fallback="U" />
      <Text>User profile info</Text>
    </View>
  </HoverCard.Content>
</HoverCard.Root>
```

---

## Quick Reference: Sizes

| Component                    | Sizes Available            |
| ---------------------------- | -------------------------- |
| Button, IconButton           | `'1'`, `'2'`, `'3'`, `'4'` |
| Badge                        | `'1'`, `'2'`               |
| Avatar                       | `'0'` - `'9'`              |
| Checkbox, Switch, RadioGroup | `'1'`, `'2'`, `'3'`        |
| TextField, TextArea, Select  | `'1'`, `'2'`, `'3'`, `'4'` |
| Progress, Spinner            | `'1'` - `'6'`              |
| Tabs                         | `'1'`, `'2'`               |
| Callout                      | `'1'`, `'2'`, `'3'`        |
| Dialog                       | `'1'`, `'2'`, `'3'`, `'4'` |

---

## Size Dimensions (pixels)

Use this table to choose the right size for your layout.

### Button / IconButton / Select / TextField

All share the same height scale. IconButton is square (width = height).

| Size  | Height | Use Case                                           |
| ----- | ------ | -------------------------------------------------- |
| `'1'` | 24px   | Compact UI, inline actions, table rows             |
| `'2'` | 32px   | Smaller forms, secondary areas                     |
| `'3'` | 40px   | **Default** — mobile-first, touch-friendly         |
| `'4'` | 48px   | Hero CTAs, buy buttons, prominent conversion flows |

### Badge

| Size  | Height | Use Case                               |
| ----- | ------ | -------------------------------------- |
| `'1'` | 20px   | **Default** — inline status indicators |
| `'2'` | 28px   | Emphasized badges, standalone labels   |

### Avatar

| Size  | Dimensions | Use Case                               |
| ----- | ---------- | -------------------------------------- |
| `'0'` | 16×16px    | Tiny indicators                        |
| `'1'` | 24×24px    | Inline mentions, compact lists         |
| `'2'` | 32×32px    | List items, comments                   |
| `'3'` | 40×40px    | **Default** — standard profile display |
| `'4'` | 48×48px    | Card headers, user info                |
| `'5'` | 64×64px    | Profile sections                       |
| `'6'` | 80×80px    | Profile pages                          |
| `'7'` | 96×96px    | Large profile display                  |
| `'8'` | 128×128px  | Hero profile                           |
| `'9'` | 160×160px  | Full profile page                      |

### Checkbox / RadioGroup

| Size  | Dimensions | Use Case                      |
| ----- | ---------- | ----------------------------- |
| `'1'` | 16×16px    | Compact forms, dense lists    |
| `'2'` | 20×20px    | **Default** — standard forms  |
| `'3'` | 24×24px    | Touch-friendly, accessibility |

### Switch

| Size  | Dimensions (W×H) | Use Case                          |
| ----- | ---------------- | --------------------------------- |
| `'1'` | 28×16px          | Compact settings                  |
| `'2'` | 42×24px          | **Default** — standard toggles    |
| `'3'` | 56×32px          | Touch-friendly, prominent toggles |

### Spinner

| Size  | Dimensions | Use Case                      |
| ----- | ---------- | ----------------------------- |
| `'1'` | 12×12px    | Inline loading indicators     |
| `'2'` | 16×16px    | **Default** — button spinners |
| `'3'` | 20×20px    | Small loading states          |
| `'4'` | 24×24px    | Card loading                  |
| `'5'` | 32×32px    | Section loading               |
| `'6'` | 40×40px    | Page loading                  |

---

## Common Patterns

### Form with Label

```tsx
<View style={{ gap: 8 }}>
  <Label nativeID="email">Email</Label>
  <TextField.Input
    placeholder="you@example.com"
    aria-labelledby="email"
    keyboardType="email-address"
  />
</View>
```

### Button with Icon

```tsx
<Button>
  <Icon as={Plus} size={16} />
  <Text>Add Item</Text>
</Button>
```

### Loading State

```tsx
<Button disabled={isLoading}>
  <Spinner loading={isLoading} size="1">
    <Text>Submit</Text>
  </Spinner>
</Button>
```

### List Item with Avatar

```tsx
<View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
  <Avatar fallback="JD" size="2" />
  <View style={{ flex: 1 }}>
    <Text weight="medium">John Doe</Text>
    <Text size="1" color="gray">
      john@example.com
    </Text>
  </View>
  <Badge color="success">
    <Text>Active</Text>
  </Badge>
</View>
```

---

## Do's and Don'ts

### ✅ Do

```tsx
// Use Text inside Button (auto-styled)
<Button>
  <Text>Click me</Text>
</Button>

// Use compound component pattern correctly
<TextField.Root>
  <TextField.Input placeholder="..." />
</TextField.Root>

// Use semantic colors
<Button color="danger">
  <Text>Delete</Text>
</Button>
```

### ❌ Don't

```tsx
// Don't use raw strings in Button
<Button>Click me</Button>;

// Don't import TextInput from react-native
import { TextInput } from 'react-native';

// Don't manually style Text inside components
<Button>
  <Text style={{ color: 'white' }}>Click</Text>
</Button>;
```
