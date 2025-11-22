# Frosted UI SegmentedControl Component

A tab-like control that allows users to switch between multiple options or views. Perfect for filtering content, switching contexts, or providing navigation within a contained area.

## Overview

The SegmentedControl component provides a visually distinct way to present multiple options where only one can be selected at a time. Unlike radio buttons, segmented controls are visually connected and work well for related options that serve as different views or filters of the same content.

Built using sub-components for maximum flexibility, it supports both interactive switching and content display areas.

## Basic Usage

```jsx
import { SegmentedControl } from '@frosted-ui/core';

function BasicSegmentedControl() {
  const [value, setValue] = React.useState('view1');

  return (
    <SegmentedControl.Root value={value} onValueChange={setValue}>
      <SegmentedControl.List>
        <SegmentedControl.Trigger value="view1">List View</SegmentedControl.Trigger>
        <SegmentedControl.Trigger value="view2">Grid View</SegmentedControl.Trigger>
        <SegmentedControl.Trigger value="view3">Card View</SegmentedControl.Trigger>
      </SegmentedControl.List>
    </SegmentedControl.Root>
  );
}
```

## Props

### SegmentedControl.Root Props

| Prop             | Type                         | Default        | Description                                      |
| ---------------- | ---------------------------- | -------------- | ------------------------------------------------ |
| `value`          | `string`                     | `undefined`    | The controlled value of the selected segment     |
| `defaultValue`   | `string`                     | `undefined`    | The value when initially rendered (uncontrolled) |
| `onValueChange`  | `(value: string) => void`    | `undefined`    | Event handler called when the value changes      |
| `orientation`    | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the segmented control         |
| `dir`            | `'ltr' \| 'rtl'`             | `'ltr'`        | The reading direction                            |
| `activationMode` | `'automatic' \| 'manual'`    | `'automatic'`  | Whether segments activate automatically on focus |

### SegmentedControl.List Props

The list component accepts all standard HTML div props and passes them through.

### SegmentedControl.Trigger Props

| Prop       | Type      | Default | Description                      |
| ---------- | --------- | ------- | -------------------------------- |
| `value`    | `string`  | —       | The value of the segment trigger |
| `disabled` | `boolean` | `false` | Whether this trigger is disabled |

### SegmentedControl.Content Props

| Prop         | Type      | Default | Description                                        |
| ------------ | --------- | ------- | -------------------------------------------------- |
| `value`      | `string`  | —       | The value that associates content with a trigger   |
| `forceMount` | `boolean` | `false` | Used to force mounting when more control is needed |

## Examples

### View Switcher

```jsx
import { SegmentedControl, Card, Text, Heading } from '@frosted-ui/core';

function ViewSwitcher() {
  const [view, setView] = React.useState('overview');

  return (
    <div className="space-y-4">
      <SegmentedControl.Root value={view} onValueChange={setView}>
        <SegmentedControl.List>
          <SegmentedControl.Trigger value="overview">Overview</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="analytics">Analytics</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="settings">Settings</SegmentedControl.Trigger>
        </SegmentedControl.List>

        <SegmentedControl.Content value="overview">
          <Card className="p-6">
            <Heading size="4">Overview</Heading>
            <Text color="gray">General information and key metrics for your dashboard.</Text>
          </Card>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="analytics">
          <Card className="p-6">
            <Heading size="4">Analytics</Heading>
            <Text color="gray">Detailed analytics and performance metrics.</Text>
          </Card>
        </SegmentedControl.Content>

        <SegmentedControl.Content value="settings">
          <Card className="p-6">
            <Heading size="4">Settings</Heading>
            <Text color="gray">Configure your preferences and account settings.</Text>
          </Card>
        </SegmentedControl.Content>
      </SegmentedControl.Root>
    </div>
  );
}
```

### Filter Options

```jsx
import { SegmentedControl, Text } from '@frosted-ui/core';

function FilterOptions() {
  const [filter, setFilter] = React.useState('all');
  const [timeRange, setTimeRange] = React.useState('week');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium">
          Status Filter
        </Text>
        <SegmentedControl.Root value={filter} onValueChange={setFilter}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="all">All Items</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="active">Active</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="inactive">Inactive</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="pending">Pending</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium">
          Time Range
        </Text>
        <SegmentedControl.Root value={timeRange} onValueChange={setTimeRange}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="day">Today</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="week">This Week</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="month">This Month</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="year">This Year</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>
    </div>
  );
}
```

### Theme Switcher

```jsx
import { SegmentedControl, Card, Text } from '@frosted-ui/core';

function ThemeSwitcher() {
  const [theme, setTheme] = React.useState('light');

  return (
    <Card className="p-6 max-w-[400px]">
      <div className="space-y-4">
        <div className="space-y-2">
          <Text size="3" weight="medium">
            Appearance
          </Text>
          <Text size="2" color="gray">
            Choose how the interface looks and feels
          </Text>
        </div>

        <SegmentedControl.Root value={theme} onValueChange={setTheme}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="light">
              <div className="flex items-center gap-2">
                <SunIcon className="w-4 h-4" />
                Light
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="dark">
              <div className="flex items-center gap-2">
                <MoonIcon className="w-4 h-4" />
                Dark
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="system">
              <div className="flex items-center gap-2">
                <ComputerIcon className="w-4 h-4" />
                System
              </div>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>

        <Text size="1" color="gray">
          {theme === 'light' && 'Light mode is perfect for daytime use'}
          {theme === 'dark' && 'Dark mode reduces eye strain in low light'}
          {theme === 'system' && 'Automatically matches your system preference'}
        </Text>
      </div>
    </Card>
  );
}
```

### Chart Type Selector

```jsx
import { SegmentedControl, Card, Text, Heading } from '@frosted-ui/core';

function ChartTypeSelector() {
  const [chartType, setChartType] = React.useState('line');

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Heading size="4">Analytics Overview</Heading>
        <SegmentedControl.Root value={chartType} onValueChange={setChartType}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="line">
              <div className="flex items-center gap-2">
                <LineChartIcon className="w-4 h-4" />
                Line
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="bar">
              <div className="flex items-center gap-2">
                <BarChartIcon className="w-4 h-4" />
                Bar
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="area">
              <div className="flex items-center gap-2">
                <AreaChartIcon className="w-4 h-4" />
                Area
              </div>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <Card className="p-6 h-[300px] flex items-center justify-center">
        <Text color="gray">{chartType.charAt(0).toUpperCase() + chartType.slice(1)} chart visualization</Text>
      </Card>
    </div>
  );
}
```

### Vertical Orientation

```jsx
import { SegmentedControl, Card, Text } from '@frosted-ui/core';

function VerticalSegmentedControl() {
  const [navigation, setNavigation] = React.useState('dashboard');

  return (
    <div className="flex gap-6">
      <div className="w-[200px]">
        <SegmentedControl.Root value={navigation} onValueChange={setNavigation} orientation="vertical">
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="dashboard">
              <div className="flex items-center gap-3 w-full">
                <DashboardIcon className="w-4 h-4" />
                Dashboard
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="projects">
              <div className="flex items-center gap-3 w-full">
                <ProjectIcon className="w-4 h-4" />
                Projects
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="team">
              <div className="flex items-center gap-3 w-full">
                <TeamIcon className="w-4 h-4" />
                Team
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="settings">
              <div className="flex items-center gap-3 w-full">
                <SettingsIcon className="w-4 h-4" />
                Settings
              </div>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <div className="flex-1">
        <Card className="p-6">
          <Text>Content for {navigation} section</Text>
        </Card>
      </div>
    </div>
  );
}
```

### Size Variations

```jsx
import { SegmentedControl, Text } from '@frosted-ui/core';

function SizeVariations() {
  const [size1Value, setSize1Value] = React.useState('option1');
  const [size2Value, setSize2Value] = React.useState('option1');
  const [size3Value, setSize3Value] = React.useState('option1');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="1" weight="medium" color="gray">
          Size 1 (Small)
        </Text>
        <SegmentedControl.Root value={size1Value} onValueChange={setSize1Value}>
          <SegmentedControl.List className="h-8">
            <SegmentedControl.Trigger value="option1">
              <Text size="1">Small</Text>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option2">
              <Text size="1">Compact</Text>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option3">
              <Text size="1">Tight</Text>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Size 2 (Default)
        </Text>
        <SegmentedControl.Root value={size2Value} onValueChange={setSize2Value}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="option1">Standard</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option2">Default</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option3">Regular</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <div className="space-y-3">
        <Text size="3" weight="medium" color="gray">
          Size 3 (Large)
        </Text>
        <SegmentedControl.Root value={size3Value} onValueChange={setSize3Value}>
          <SegmentedControl.List className="h-12">
            <SegmentedControl.Trigger value="option1">
              <Text size="3">Large</Text>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option2">
              <Text size="3">Spacious</Text>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="option3">
              <Text size="3">Prominent</Text>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>
    </div>
  );
}
```

### Disabled States

```jsx
import { SegmentedControl, Text } from '@frosted-ui/core';

function DisabledStates() {
  const [value, setValue] = React.useState('enabled');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Partially Disabled
        </Text>
        <SegmentedControl.Root value={value} onValueChange={setValue}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="enabled">Enabled</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="disabled" disabled>
              Disabled
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="another">Another</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Fully Disabled
        </Text>
        <div className="opacity-50 pointer-events-none">
          <SegmentedControl.Root defaultValue="option1">
            <SegmentedControl.List>
              <SegmentedControl.Trigger value="option1">Option 1</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="option2">Option 2</SegmentedControl.Trigger>
              <SegmentedControl.Trigger value="option3">Option 3</SegmentedControl.Trigger>
            </SegmentedControl.List>
          </SegmentedControl.Root>
        </div>
      </div>
    </div>
  );
}
```

### Manual Activation Mode

```jsx
import { SegmentedControl, Text } from '@frosted-ui/core';

function ManualActivation() {
  const [value, setValue] = React.useState('tab1');

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Text size="3" weight="medium">
          Manual Activation Mode
        </Text>
        <Text size="2" color="gray">
          Use arrow keys to navigate, then press Enter or Space to activate
        </Text>
      </div>

      <SegmentedControl.Root value={value} onValueChange={setValue} activationMode="manual">
        <SegmentedControl.List>
          <SegmentedControl.Trigger value="tab1">Tab 1</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="tab2">Tab 2</SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="tab3">Tab 3</SegmentedControl.Trigger>
        </SegmentedControl.List>

        <div className="mt-4">
          <SegmentedControl.Content value="tab1">
            <Text>Content for Tab 1 - activated manually</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="tab2">
            <Text>Content for Tab 2 - activated manually</Text>
          </SegmentedControl.Content>
          <SegmentedControl.Content value="tab3">
            <Text>Content for Tab 3 - activated manually</Text>
          </SegmentedControl.Content>
        </div>
      </SegmentedControl.Root>
    </div>
  );
}
```

### Complex Content with Badges

```jsx
import { SegmentedControl, Badge, Text } from '@frosted-ui/core';

function ComplexContent() {
  const [section, setSection] = React.useState('inbox');

  const notifications = {
    inbox: 12,
    important: 3,
    sent: 0,
    drafts: 5,
  };

  return (
    <SegmentedControl.Root value={section} onValueChange={setSection}>
      <SegmentedControl.List>
        <SegmentedControl.Trigger value="inbox">
          <div className="flex items-center gap-2">
            <InboxIcon className="w-4 h-4" />
            Inbox
            {notifications.inbox > 0 && (
              <Badge size="1" variant="solid">
                {notifications.inbox}
              </Badge>
            )}
          </div>
        </SegmentedControl.Trigger>

        <SegmentedControl.Trigger value="important">
          <div className="flex items-center gap-2">
            <StarIcon className="w-4 h-4" />
            Important
            {notifications.important > 0 && (
              <Badge size="1" variant="solid" color="orange">
                {notifications.important}
              </Badge>
            )}
          </div>
        </SegmentedControl.Trigger>

        <SegmentedControl.Trigger value="sent">
          <div className="flex items-center gap-2">
            <SendIcon className="w-4 h-4" />
            Sent
          </div>
        </SegmentedControl.Trigger>

        <SegmentedControl.Trigger value="drafts">
          <div className="flex items-center gap-2">
            <EditIcon className="w-4 h-4" />
            Drafts
            {notifications.drafts > 0 && (
              <Badge size="1" variant="soft">
                {notifications.drafts}
              </Badge>
            )}
          </div>
        </SegmentedControl.Trigger>
      </SegmentedControl.List>

      <div className="mt-4">
        <SegmentedControl.Content value="inbox">
          <Text>Inbox content with {notifications.inbox} unread messages</Text>
        </SegmentedControl.Content>
        <SegmentedControl.Content value="important">
          <Text>Important messages ({notifications.important} items)</Text>
        </SegmentedControl.Content>
        <SegmentedControl.Content value="sent">
          <Text>Sent messages</Text>
        </SegmentedControl.Content>
        <SegmentedControl.Content value="drafts">
          <Text>Draft messages ({notifications.drafts} drafts)</Text>
        </SegmentedControl.Content>
      </div>
    </SegmentedControl.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <SegmentedControl.Root>
    <SegmentedControl.List>
      <SegmentedControl.Trigger value="option">
        <div className="flex items-center gap-2"> {/* Uses --space-2 */}
          <Icon />
          <Text>Label</Text>
        </div>
      </SegmentedControl.Trigger>
    </SegmentedControl.List>
  </SegmentedControl.Root>
</div>

// Use max-width constraints for responsive design
<SegmentedControl.Root>
  <SegmentedControl.List className="max-w-[400px]">
    <SegmentedControl.Trigger>Content</SegmentedControl.Trigger>
  </SegmentedControl.List>
</SegmentedControl.Root>
```

### Typography Integration

```jsx
// Use Typography components for consistent text styling
<SegmentedControl.Trigger>
  <Text size="2">Trigger Label</Text>
</SegmentedControl.Trigger>
```

## Accessibility

The SegmentedControl component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with arrow keys and tab navigation
- **Focus Management**: Proper focus indicators and focus management
- **ARIA Attributes**: Complete ARIA labeling with tab/tabpanel relationships
- **Screen Reader**: Optimized for screen reader technologies
- **Activation Modes**: Support for both automatic and manual activation

### Keyboard Shortcuts

- `Tab`: Navigate to the segmented control group
- `←` / `→`: Navigate between segments (horizontal orientation)
- `↑` / `↓`: Navigate between segments (vertical orientation)
- `Enter` or `Space`: Activate focused segment (manual mode)
- `Home`: Move to first segment
- `End`: Move to last segment

## Best Practices

### Content Guidelines

- **Related options**: Use for related options that represent different views or filters
- **Clear labels**: Use descriptive, concise labels for each segment
- **Logical order**: Arrange segments in a logical sequence
- **Consistent content**: Ensure all segments contain related content

### Design Guidelines

- **Appropriate sizing**: Choose size based on context and available space
- **Visual balance**: Ensure segments are visually balanced
- **Icon usage**: Use icons consistently across all segments or none at all
- **Badge placement**: Place badges consistently when showing counts or status

### Interaction Guidelines

- **Default selection**: Always have a default selected segment
- **State feedback**: Provide clear visual feedback for active states
- **Responsive behavior**: Consider how segments adapt on different screen sizes

## Advanced Usage

### Dynamic Segments

```jsx
import { SegmentedControl, Badge } from '@frosted-ui/core';

function DynamicSegments({ categories, value, onChange }) {
  return (
    <SegmentedControl.Root value={value} onValueChange={onChange}>
      <SegmentedControl.List>
        {categories.map((category) => (
          <SegmentedControl.Trigger key={category.id} value={category.id} disabled={category.disabled}>
            <div className="flex items-center gap-2">
              {category.icon && <category.icon className="w-4 h-4" />}
              <Text>{category.label}</Text>
              {category.count > 0 && (
                <Badge size="1" variant="soft">
                  {category.count}
                </Badge>
              )}
            </div>
          </SegmentedControl.Trigger>
        ))}
      </SegmentedControl.List>
    </SegmentedControl.Root>
  );
}
```

### Responsive Segmented Control

```jsx
import { SegmentedControl, Text } from '@frosted-ui/core';

function ResponsiveSegmentedControl() {
  const [view, setView] = React.useState('grid');

  return (
    <div className="space-y-4">
      {/* Mobile: Vertical stack */}
      <div className="md:hidden">
        <SegmentedControl.Root value={view} onValueChange={setView} orientation="vertical">
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="list">List View</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="grid">Grid View</SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="card">Card View</SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>

      {/* Desktop: Horizontal */}
      <div className="hidden md:block">
        <SegmentedControl.Root value={view} onValueChange={setView}>
          <SegmentedControl.List>
            <SegmentedControl.Trigger value="list">
              <div className="flex items-center gap-2">
                <ListIcon className="w-4 h-4" />
                List View
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="grid">
              <div className="flex items-center gap-2">
                <GridIcon className="w-4 h-4" />
                Grid View
              </div>
            </SegmentedControl.Trigger>
            <SegmentedControl.Trigger value="card">
              <div className="flex items-center gap-2">
                <CardIcon className="w-4 h-4" />
                Card View
              </div>
            </SegmentedControl.Trigger>
          </SegmentedControl.List>
        </SegmentedControl.Root>
      </div>
    </div>
  );
}
```

## Related Components

- **[Tabs](../tabs/tabs.ai.md)** - For navigation between different sections
- **[RadioGroup](../radio-group/radio-group.ai.md)** - For single selection in forms
- **[Button](../button/button.ai.md)** - For individual action triggers
- **[Badge](../badge/badge.ai.md)** - For counts and status indicators
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text content within segments
