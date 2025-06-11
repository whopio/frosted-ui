# Frosted UI Select Component

A powerful, accessible dropdown selection component with rich customization options. The Select component provides a complete dropdown experience with keyboard navigation, grouping, and sophisticated styling options.

## Overview

The Select component is built on Radix UI primitives and provides a robust foundation for dropdown selection interfaces. It consists of multiple sub-components that work together to create sophisticated selection experiences with proper keyboard navigation, accessibility, and visual polish.

Key features:

- **Multi-Component System**: Root, Trigger, Content, Item, Group, Label, Separator
- **3 Size Options**: Compact to large with consistent styling
- **Multiple Variants**: Surface, classic, soft, ghost (trigger) and solid, soft (content)
- **Complete Color System**: All Frosted UI colors with accent support
- **High Contrast Mode**: Enhanced visibility for accessibility
- **Grouping & Labels**: Organize options with visual separators
- **Keyboard Navigation**: Full ARIA support with arrow keys, typing, etc.
- **Portal Rendering**: Content renders in portal for proper z-index layering

## Components

### Select.Root

Container component that manages state and provides context.

**Props:**

- `size`: `'1' | '2' | '3'` (default: `'2'`)
- All Radix Select.Root props (`value`, `defaultValue`, `onValueChange`, etc.)

### Select.Trigger

The button that opens the dropdown.

**Props:**

- `variant`: `'classic' | 'surface' | 'soft' | 'ghost'` (default: `'surface'`)
- `color`: Color from Frosted UI palette
- `placeholder`: React.ReactNode for empty state

### Select.Content

The dropdown content container with scrolling support.

**Props:**

- `variant`: `'solid' | 'soft'` (default: `'solid'`)
- `color`: Color from Frosted UI palette
- `highContrast`: boolean (default: `false`)
- `container`: Portal container element

### Select.Item

Individual selectable option.

**Props:**

- `value`: string (required)
- `disabled`: boolean
- All standard HTML div props

### Select.Group

Groups related items together.

### Select.Label

Labels for item groups.

### Select.Separator

Visual separator between groups.

## Basic Usage

```jsx
import { Select } from '@frosted-ui/core';

function BasicExample() {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder="Choose a fruit" />
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
      </Select.Content>
    </Select.Root>
  );
}
```

## Examples

### With Groups and Labels

```jsx
function GroupedExample() {
  return (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape" disabled>
            Grape
          </Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
```

### Size Variations

```jsx
function SizeExample() {
  return (
    <div className="flex items-center gap-3">
      <Select.Root size="1" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size="2" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root size="3" defaultValue="apple">
        <Select.Trigger />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
```

### Trigger Variants

```jsx
function TriggerVariantExample() {
  return (
    <div className="flex items-center gap-3">
      <Select.Root defaultValue="apple">
        <Select.Trigger variant="surface" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="classic" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="soft" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="ghost" />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
```

### Colors and High Contrast

```jsx
function ColorExample() {
  return (
    <div className="flex gap-3">
      <Select.Root defaultValue="apple">
        <Select.Trigger color="indigo" variant="soft" />
        <Select.Content color="indigo">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger color="cyan" variant="soft" />
        <Select.Content color="cyan">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger color="orange" variant="soft" />
        <Select.Content color="orange" highContrast>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
```

### Placeholder Usage

```jsx
function PlaceholderExample() {
  const [value, setValue] = React.useState('');

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger placeholder="Choose your favorite fruit" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Popular Fruits</Select.Label>
          <Select.Item value="apple">🍎 Apple</Select.Item>
          <Select.Item value="orange">🍊 Orange</Select.Item>
          <Select.Item value="banana">🍌 Banana</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Exotic Fruits</Select.Label>
          <Select.Item value="mango">🥭 Mango</Select.Item>
          <Select.Item value="kiwi">🥝 Kiwi</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  const [formData, setFormData] = React.useState({
    country: '',
    state: '',
    category: '',
    priority: 'medium',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">Country</Text>
        <Select.Root
          value={formData.country}
          onValueChange={(value) => updateField('country', value)}
        >
          <Select.Trigger placeholder="Select your country" />
          <Select.Content>
            <Select.Item value="us">United States</Select.Item>
            <Select.Item value="ca">Canada</Select.Item>
            <Select.Item value="uk">United Kingdom</Select.Item>
            <Select.Item value="de">Germany</Select.Item>
            <Select.Item value="fr">France</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">Category</Text>
        <Select.Root
          value={formData.category}
          onValueChange={(value) => updateField('category', value)}
        >
          <Select.Trigger placeholder="Select category" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Technology</Select.Label>
              <Select.Item value="frontend">Frontend Development</Select.Item>
              <Select.Item value="backend">Backend Development</Select.Item>
              <Select.Item value="mobile">Mobile Development</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Design</Select.Label>
              <Select.Item value="ui">UI Design</Select.Item>
              <Select.Item value="ux">UX Research</Select.Item>
              <Select.Item value="graphic">Graphic Design</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">Priority</Text>
        <Select.Root
          value={formData.priority}
          onValueChange={(value) => updateField('priority', value)}
        >
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="low">🟢 Low Priority</Select.Item>
            <Select.Item value="medium">🟡 Medium Priority</Select.Item>
            <Select.Item value="high">🟠 High Priority</Select.Item>
            <Select.Item value="urgent">🔴 Urgent</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <Button
        type="submit"
        variant="solid"
        className="w-full"
        disabled={!formData.country || !formData.category}
      >
        Submit
      </Button>
    </form>
  );
}
```

### User Preference Settings

```jsx
function SettingsExample() {
  const [settings, setSettings] = React.useState({
    theme: 'auto',
    language: 'en',
    timezone: 'utc',
    notifications: 'all',
  });

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card size="3" className="max-w-[450px]">
      <div className="space-y-4">
        <Heading size="4">Preferences</Heading>

        <div className="space-y-3">
          <div className="grid grid-cols-[1fr,1.5fr] items-center gap-3">
            <Text size="2" weight="medium">Theme</Text>
            <Select.Root
              size="1"
              value={settings.theme}
              onValueChange={(value) => updateSetting('theme', value)}
            >
              <Select.Trigger variant="soft" />
              <Select.Content>
                <Select.Item value="light">☀️ Light</Select.Item>
                <Select.Item value="dark">🌙 Dark</Select.Item>
                <Select.Item value="auto">💻 Auto</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="grid grid-cols-[1fr,1.5fr] items-center gap-3">
            <Text size="2" weight="medium">Language</Text>
            <Select.Root
              size="1"
              value={settings.language}
              onValueChange={(value) => updateSetting('language', value)}
            >
              <Select.Trigger variant="soft" />
              <Select.Content>
                <Select.Item value="en">🇺🇸 English</Select.Item>
                <Select.Item value="es">🇪🇸 Español</Select.Item>
                <Select.Item value="fr">🇫🇷 Français</Select.Item>
                <Select.Item value="de">🇩🇪 Deutsch</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="grid grid-cols-[1fr,1.5fr] items-center gap-3">
            <Text size="2" weight="medium">Timezone</Text>
            <Select.Root
              size="1"
              value={settings.timezone}
              onValueChange={(value) => updateSetting('timezone', value)}
            >
              <Select.Trigger variant="soft" />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Americas</Select.Label>
                  <Select.Item value="est">Eastern Time</Select.Item>
                  <Select.Item value="cst">Central Time</Select.Item>
                  <Select.Item value="pst">Pacific Time</Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Europe</Select.Label>
                  <Select.Item value="utc">UTC</Select.Item>
                  <Select.Item value="cet">Central European</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>

          <div className="grid grid-cols-[1fr,1.5fr] items-center gap-3">
            <Text size="2" weight="medium">Notifications</Text>
            <Select.Root
              size="1"
              value={settings.notifications}
              onValueChange={(value) => updateSetting('notifications', value)}
            >
              <Select.Trigger variant="soft" />
              <Select.Content>
                <Select.Item value="all">All notifications</Select.Item>
                <Select.Item value="important">Important only</Select.Item>
                <Select.Item value="none">None</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
      </div>
    </Card>
  );
}
```

### Filter and Search Interface

```jsx
function FilterExample() {
  const [filters, setFilters] = React.useState({
    category: '',
    status: '',
    priority: '',
    assignee: '',
  });

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: '', status: '', priority: '', assignee: '' });
  };

  return (
    <div className="space-y-4 max-w-[600px]">
      <div className="flex items-center justify-between">
        <Heading size="3">Task Filters</Heading>
        <Button variant="soft" size="1" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="space-y-1">
          <Text size="1" color="gray">Category</Text>
          <Select.Root
            size="1"
            value={filters.category}
            onValueChange={(value) => updateFilter('category', value)}
          >
            <Select.Trigger placeholder="Any" variant="soft" />
            <Select.Content>
              <Select.Item value="bug">🐛 Bug</Select.Item>
              <Select.Item value="feature">✨ Feature</Select.Item>
              <Select.Item value="improvement">🔧 Improvement</Select.Item>
              <Select.Item value="documentation">📚 Documentation</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="space-y-1">
          <Text size="1" color="gray">Status</Text>
          <Select.Root
            size="1"
            value={filters.status}
            onValueChange={(value) => updateFilter('status', value)}
          >
            <Select.Trigger placeholder="Any" variant="soft" />
            <Select.Content>
              <Select.Item value="todo">📋 To Do</Select.Item>
              <Select.Item value="progress">⚠️ In Progress</Select.Item>
              <Select.Item value="review">👀 In Review</Select.Item>
              <Select.Item value="done">✅ Done</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="space-y-1">
          <Text size="1" color="gray">Priority</Text>
          <Select.Root
            size="1"
            value={filters.priority}
            onValueChange={(value) => updateFilter('priority', value)}
          >
            <Select.Trigger placeholder="Any" variant="soft" />
            <Select.Content>
              <Select.Item value="low">Low</Select.Item>
              <Select.Item value="medium">Medium</Select.Item>
              <Select.Item value="high">High</Select.Item>
              <Select.Item value="urgent">Urgent</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <div className="space-y-1">
          <Text size="1" color="gray">Assignee</Text>
          <Select.Root
            size="1"
            value={filters.assignee}
            onValueChange={(value) => updateFilter('assignee', value)}
          >
            <Select.Trigger placeholder="Anyone" variant="soft" />
            <Select.Content>
              <Select.Item value="john">John Doe</Select.Item>
              <Select.Item value="jane">Jane Smith</Select.Item>
              <Select.Item value="mike">Mike Johnson</Select.Item>
              <Select.Item value="unassigned">Unassigned</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <div className="pt-2">
        <Text size="2" color="gray">
          Showing results for: {
            Object.values(filters).filter(Boolean).length > 0
              ? Object.entries(filters)
                  .filter(([_, value]) => value)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(', ')
              : 'All tasks'
          }
        </Text>
      </div>
    </div>
  );
}
```

### Data Table Column Selector

```jsx
function ColumnSelectorExample() {
  const [visibleColumns, setVisibleColumns] = React.useState(['name', 'email', 'role', 'status']);

  const allColumns = [
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { id: 'role', label: 'Role' },
    { id: 'status', label: 'Status' },
    { id: 'department', label: 'Department' },
    { id: 'created', label: 'Created Date' },
    { id: 'updated', label: 'Last Updated' },
  ];

  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="flex items-center justify-between">
        <Heading size="3">Table Columns</Heading>
        <Text size="2" color="gray">
          {visibleColumns.length} visible
        </Text>
      </div>

      <Select.Root>
        <Select.Trigger placeholder="Customize columns" variant="soft" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Available Columns</Select.Label>
            {allColumns.map((column) => (
              <Select.Item key={column.id} value={column.id} disabled={visibleColumns.includes(column.id)}>
                {column.label} {visibleColumns.includes(column.id) && '✓'}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <div className="space-y-2">
        <Text size="2" weight="medium">
          Visible Columns:
        </Text>
        <div className="flex flex-wrap gap-2">
          {visibleColumns.map((columnId) => {
            const column = allColumns.find((c) => c.id === columnId);
            return (
              <Badge key={columnId} variant="soft" color="blue">
                {column?.label}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="space-y-4">
      <Card size="3" className="ring-2 ring-blue-6">
        <div className="space-y-3">
          <Heading size="3">User Selection</Heading>

          <Select.Root>
            <Select.Trigger color="blue" variant="soft" />
            <Select.Content color="blue">
              <Select.Item value="admin">Administrator</Select.Item>
              <Select.Item value="user">User</Select.Item>
              <Select.Item value="guest">Guest</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </Card>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Heading size="4" weight="bold">
          Account Settings
        </Heading>
        <Text size="2" color="gray">
          Customize your account preferences below.
        </Text>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <Text size="2" weight="medium">
            User Role
          </Text>
          <Select.Root defaultValue="member">
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="admin">Administrator</Select.Item>
              <Select.Item value="member">Member</Select.Item>
              <Select.Item value="viewer">Viewer</Select.Item>
            </Select.Content>
          </Select.Root>
          <Text size="1" color="gray">
            Determines what actions you can perform
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors for both trigger and content. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The Select component uses specific color steps for different states:

- **Trigger**: Uses accent colors for theming, various steps for different variants
- **Content**: Uses accent colors for selection highlights and focus states
- **Items**: Uses step 9 for selected state, step 11 for text
- **High contrast**: Enhanced visibility with step 12 colors

## Accessibility

The Select component includes comprehensive accessibility features:

- **Keyboard Navigation**: Arrow keys, typing to search, Enter/Space to select
- **Screen Reader Support**: Proper ARIA roles, states, and properties
- **Focus Management**: Clear focus indicators and logical tab order
- **Value Announcement**: Selected values properly announced
- **Group Labels**: Proper association between groups and labels
- **Disabled States**: Clear indication of disabled items

```jsx
function AccessibilityExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <label id="fruit-label">
          <Text size="2" weight="medium">
            Choose your favorite fruit
          </Text>
        </label>
        <Select.Root>
          <Select.Trigger aria-labelledby="fruit-label" placeholder="Select a fruit" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Sweet Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="orange">Orange</Select.Item>
              <Select.Item value="grape" disabled>
                Grape (out of season)
              </Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>

      <fieldset className="space-y-2">
        <legend>
          <Text size="2" weight="medium">
            Notification Preferences
          </Text>
        </legend>
        <Select.Root defaultValue="email">
          <Select.Trigger />
          <Select.Content>
            <Select.Item value="email">Email notifications</Select.Item>
            <Select.Item value="sms">SMS notifications</Select.Item>
            <Select.Item value="none">No notifications</Select.Item>
          </Select.Content>
        </Select.Root>
      </fieldset>
    </div>
  );
}
```

## Advanced Usage

### Dynamic Options

```jsx
function DynamicOptionsExample() {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState('');

  const categories = {
    electronics: ['Phone', 'Laptop', 'Tablet'],
    clothing: ['Shirt', 'Pants', 'Shoes'],
    books: ['Fiction', 'Non-fiction', 'Technical'],
  };

  const availableItems = selectedCategory ? categories[selectedCategory] || [] : [];

  React.useEffect(() => {
    setSelectedItem(''); // Reset item when category changes
  }, [selectedCategory]);

  return (
    <div className="space-y-4 max-w-[300px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">
          Category
        </Text>
        <Select.Root value={selectedCategory} onValueChange={setSelectedCategory}>
          <Select.Trigger placeholder="Choose category" />
          <Select.Content>
            <Select.Item value="electronics">Electronics</Select.Item>
            <Select.Item value="clothing">Clothing</Select.Item>
            <Select.Item value="books">Books</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">
          Item
        </Text>
        <Select.Root value={selectedItem} onValueChange={setSelectedItem} disabled={!selectedCategory}>
          <Select.Trigger placeholder={selectedCategory ? 'Choose item' : 'Select category first'} />
          <Select.Content>
            {availableItems.map((item) => (
              <Select.Item key={item} value={item.toLowerCase()}>
                {item}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
}
```

### Custom Portal Container

```jsx
function CustomPortalExample() {
  const [portalContainer, setPortalContainer] = React.useState(null);

  return (
    <div className="space-y-4">
      <div ref={setPortalContainer} className="relative border border-gray-6 rounded-3 p-4">
        <Text size="2" weight="medium" className="mb-3">
          Custom Portal Container
        </Text>

        <Select.Root>
          <Select.Trigger placeholder="Select option" />
          <Select.Content container={portalContainer}>
            <Select.Item value="option1">Option 1</Select.Item>
            <Select.Item value="option2">Option 2</Select.Item>
            <Select.Item value="option3">Option 3</Select.Item>
          </Select.Content>
        </Select.Root>

        <Text size="1" color="gray" className="mt-2">
          Dropdown will render within this container
        </Text>
      </div>
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use clear, descriptive labels** for groups and individual items
- **Provide helpful placeholders** that guide user selection
- **Group related options** logically with separators
- **Use appropriate sizes** that match surrounding form elements
- **Provide feedback** for loading or disabled states
- **Match trigger and content colors** for visual consistency

```jsx
// ✅ Good - Clear grouping and helpful placeholders
function GoodExample() {
  return (
    <div className="space-y-2">
      <Text size="2" weight="medium">
        Preferred Contact Method
      </Text>
      <Select.Root>
        <Select.Trigger placeholder="How should we contact you?" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Primary Methods</Select.Label>
            <Select.Item value="email">📧 Email</Select.Item>
            <Select.Item value="phone">📞 Phone</Select.Item>
          </Select.Group>
          <Select.Separator />
          <Select.Group>
            <Select.Label>Alternative Methods</Select.Label>
            <Select.Item value="sms">💬 SMS</Select.Item>
            <Select.Item value="mail">📮 Mail</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use generic placeholders** like "Select option"
- **Don't mix different sizes** within related form elements
- **Don't forget to handle empty states** appropriately
- **Don't use too many groups** without clear organization
- **Don't forget disabled item explanations** when relevant

```jsx
// ❌ Bad - Generic placeholder, no organization, unclear disabled state
function BadExample() {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Select option" /> {/* Generic placeholder */}
      <Select.Content>
        <Select.Item value="email">Email</Select.Item>
        <Select.Item value="premium" disabled>
          Premium
        </Select.Item>{' '}
        {/* No explanation */}
        <Select.Item value="phone">Phone</Select.Item>
        <Select.Item value="enterprise" disabled>
          Enterprise
        </Select.Item>{' '}
        {/* No grouping */}
      </Select.Content>
    </Select.Root>
  );
}
```

## Related Components

- **[TextField](../text-field/text-field.ai.md)** - For text input alternatives
- **[Button](../button/button.ai.md)** - For trigger-like interactions
- **[Text](../text/text.ai.md)** - For labels and descriptions
- **[Heading](../heading/heading.ai.md)** - For form section headers
- **[Checkbox](../checkbox/checkbox.ai.md)** - For multiple selection scenarios
- **[Badge](../badge/badge.ai.md)** - For selected value indicators
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
