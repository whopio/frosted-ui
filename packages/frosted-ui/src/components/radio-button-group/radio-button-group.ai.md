# Frosted UI RadioButtonGroup Component

A styled radio button group component that presents radio options as buttons rather than traditional radio inputs. Built on Radix UI RadioGroup for robust functionality and accessibility.

## Overview

The RadioButtonGroup component provides an alternative visual style for radio button selections, presenting options as pressable buttons instead of circular radio inputs. It's perfect for:

- **Settings panels** with clear visual options
- **Filter selections** in dashboards
- **View mode toggles** (list, grid, card views)
- **Priority levels** or status selections
- **Category choices** with prominent styling

## Basic Usage

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function ViewToggle() {
  const [view, setView] = React.useState('list');

  return (
    <RadioButtonGroup.Root value={view} onValueChange={setView}>
      <RadioButtonGroup.Item value="list">
        <Button variant="soft" size="2">
          List View
          <RadioButtonGroup.Icon />
        </Button>
      </RadioButtonGroup.Item>

      <RadioButtonGroup.Item value="grid">
        <Button variant="soft" size="2">
          Grid View
          <RadioButtonGroup.Icon />
        </Button>
      </RadioButtonGroup.Item>

      <RadioButtonGroup.Item value="card">
        <Button variant="soft" size="2">
          Card View
          <RadioButtonGroup.Icon />
        </Button>
      </RadioButtonGroup.Item>
    </RadioButtonGroup.Root>
  );
}
```

## Components

### RadioButtonGroup.Root

The container for radio button group items.

#### Props

| Prop            | Type                      | Default     | Description                                       |
| --------------- | ------------------------- | ----------- | ------------------------------------------------- |
| `value`         | `string`                  | `undefined` | The currently selected value                      |
| `defaultValue`  | `string`                  | `undefined` | The default selected value when uncontrolled      |
| `onValueChange` | `(value: string) => void` | `undefined` | Handler called when selection changes             |
| `color`         | `string`                  | `undefined` | The accent color - supports all Frosted UI colors |
| `highContrast`  | `boolean`                 | `false`     | Whether to use high contrast styling              |
| `disabled`      | `boolean`                 | `false`     | Whether the entire group is disabled              |
| `required`      | `boolean`                 | `false`     | Whether a selection is required                   |

### RadioButtonGroup.Item

Individual radio button item that wraps a button or other interactive element.

#### Props

| Prop       | Type      | Default | Description                     |
| ---------- | --------- | ------- | ------------------------------- |
| `value`    | `string`  | -       | The value for this radio option |
| `disabled` | `boolean` | `false` | Whether this item is disabled   |

### RadioButtonGroup.Icon

Visual indicator that shows when an item is selected.

## Examples

### Settings Panel

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function SettingsPanel() {
  const [theme, setTheme] = React.useState('system');
  const [density, setDensity] = React.useState('comfortable');
  const [notifications, setNotifications] = React.useState('all');

  return (
    <Card className="p-6 max-w-[500px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Settings
        </Heading>
        <Text color="gray" size="2">
          Customize your experience
        </Text>
      </div>

      <div className="space-y-4">
        <div>
          <Text weight="medium" className="mb-3">
            Theme
          </Text>
          <RadioButtonGroup.Root value={theme} onValueChange={setTheme} color="blue">
            <div className="flex gap-2">
              <RadioButtonGroup.Item value="light">
                <Button variant="soft" size="2">
                  Light
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="dark">
                <Button variant="soft" size="2">
                  Dark
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="system">
                <Button variant="soft" size="2">
                  System
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Interface Density
          </Text>
          <RadioButtonGroup.Root value={density} onValueChange={setDensity} color="green">
            <div className="flex gap-2">
              <RadioButtonGroup.Item value="compact">
                <Button variant="soft" size="2">
                  Compact
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="comfortable">
                <Button variant="soft" size="2">
                  Comfortable
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="spacious">
                <Button variant="soft" size="2">
                  Spacious
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Notifications
          </Text>
          <RadioButtonGroup.Root value={notifications} onValueChange={setNotifications} color="purple">
            <div className="grid grid-cols-2 gap-2">
              <RadioButtonGroup.Item value="all">
                <Button variant="soft" size="2" className="w-full justify-between">
                  All Notifications
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="important">
                <Button variant="soft" size="2" className="w-full justify-between">
                  Important Only
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="mentions">
                <Button variant="soft" size="2" className="w-full justify-between">
                  Mentions Only
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="none">
                <Button variant="soft" size="2" className="w-full justify-between">
                  None
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="soft">Reset</Button>
        <Button>Save Changes</Button>
      </div>
    </Card>
  );
}
```

### Dashboard Filters

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function DashboardFilters() {
  const [timeRange, setTimeRange] = React.useState('7d');
  const [metric, setMetric] = React.useState('users');
  const [region, setRegion] = React.useState('all');

  return (
    <div className="space-y-6">
      <div>
        <Heading size="4" className="mb-4">
          Analytics Dashboard
        </Heading>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <Text weight="medium" size="2">
              Time Range:
            </Text>
            <RadioButtonGroup.Root value={timeRange} onValueChange={setTimeRange} color="blue">
              <div className="flex gap-1">
                <RadioButtonGroup.Item value="1d">
                  <Button variant="soft" size="1">
                    1D
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="7d">
                  <Button variant="soft" size="1">
                    7D
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="30d">
                  <Button variant="soft" size="1">
                    30D
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="90d">
                  <Button variant="soft" size="1">
                    90D
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
              </div>
            </RadioButtonGroup.Root>
          </div>

          <div className="flex items-center gap-3">
            <Text weight="medium" size="2">
              Metric:
            </Text>
            <RadioButtonGroup.Root value={metric} onValueChange={setMetric} color="green">
              <div className="flex gap-1">
                <RadioButtonGroup.Item value="users">
                  <Button variant="soft" size="1">
                    Users
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="sessions">
                  <Button variant="soft" size="1">
                    Sessions
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="revenue">
                  <Button variant="soft" size="1">
                    Revenue
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
              </div>
            </RadioButtonGroup.Root>
          </div>

          <div className="flex items-center gap-3">
            <Text weight="medium" size="2">
              Region:
            </Text>
            <RadioButtonGroup.Root value={region} onValueChange={setRegion} color="orange">
              <div className="flex gap-1">
                <RadioButtonGroup.Item value="all">
                  <Button variant="soft" size="1">
                    All
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="us">
                  <Button variant="soft" size="1">
                    US
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="eu">
                  <Button variant="soft" size="1">
                    EU
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
                <RadioButtonGroup.Item value="asia">
                  <Button variant="soft" size="1">
                    Asia
                    <RadioButtonGroup.Icon />
                  </Button>
                </RadioButtonGroup.Item>
              </div>
            </RadioButtonGroup.Root>
          </div>
        </div>
      </div>

      {/* Dashboard content would go here */}
      <Card className="p-6">
        <Text>
          Showing {metric} data for {timeRange} in {region === 'all' ? 'all regions' : region.toUpperCase()}
        </Text>
      </Card>
    </div>
  );
}
```

### Priority Selector

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function TaskForm() {
  const [priority, setPriority] = React.useState('medium');
  const [category, setCategory] = React.useState('feature');
  const [status, setStatus] = React.useState('backlog');

  const getPriorityColor = (level) => {
    switch (level) {
      case 'low':
        return 'green';
      case 'medium':
        return 'blue';
      case 'high':
        return 'orange';
      case 'urgent':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Card className="p-6 max-w-[600px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Create Task
        </Heading>
        <Text color="gray" size="2">
          Add a new task to your project
        </Text>
      </div>

      <form className="space-y-6">
        <div>
          <Text weight="medium" className="mb-2">
            Task Title
          </Text>
          <TextField placeholder="Enter task title..." />
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Priority Level
          </Text>
          <RadioButtonGroup.Root value={priority} onValueChange={setPriority} color={getPriorityColor(priority)}>
            <div className="grid grid-cols-2 gap-2">
              <RadioButtonGroup.Item value="low">
                <Button variant="soft" size="2" color="green" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-9 rounded-full"></div>
                    Low Priority
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="medium">
                <Button variant="soft" size="2" color="blue" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-9 rounded-full"></div>
                    Medium Priority
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="high">
                <Button variant="soft" size="2" color="orange" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-9 rounded-full"></div>
                    High Priority
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="urgent">
                <Button variant="soft" size="2" color="red" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-9 rounded-full"></div>
                    Urgent
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Category
          </Text>
          <RadioButtonGroup.Root value={category} onValueChange={setCategory} color="purple">
            <div className="flex flex-wrap gap-2">
              <RadioButtonGroup.Item value="feature">
                <Button variant="soft" size="2">
                  Feature
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="bug">
                <Button variant="soft" size="2">
                  Bug Fix
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="docs">
                <Button variant="soft" size="2">
                  Documentation
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="refactor">
                <Button variant="soft" size="2">
                  Refactor
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Initial Status
          </Text>
          <RadioButtonGroup.Root value={status} onValueChange={setStatus} color="gray">
            <div className="flex gap-2">
              <RadioButtonGroup.Item value="backlog">
                <Button variant="soft" size="2">
                  Backlog
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="todo">
                <Button variant="soft" size="2">
                  To Do
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
              <RadioButtonGroup.Item value="ready">
                <Button variant="soft" size="2">
                  Ready
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Description
          </Text>
          <TextArea placeholder="Describe the task..." rows={4} />
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="soft">Cancel</Button>
          <Button>Create Task</Button>
        </div>
      </form>
    </Card>
  );
}
```

### Layout Options

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function LayoutSelector() {
  const [layout, setLayout] = React.useState('sidebar');
  const [alignment, setAlignment] = React.useState('left');

  return (
    <div className="space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Layout Configuration
        </Heading>
        <Text color="gray" size="2">
          Choose your preferred layout options
        </Text>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <Text weight="medium" className="mb-3">
            Page Layout
          </Text>
          <RadioButtonGroup.Root value={layout} onValueChange={setLayout} color="blue">
            <div className="space-y-2">
              <RadioButtonGroup.Item value="sidebar">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1 flex">
                      <div className="w-2 bg-current"></div>
                      <div className="flex-1"></div>
                    </div>
                    Sidebar Layout
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="topnav">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1 flex flex-col">
                      <div className="h-1 bg-current"></div>
                      <div className="flex-1"></div>
                    </div>
                    Top Navigation
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="full">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1"></div>
                    Full Width
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>

        <div>
          <Text weight="medium" className="mb-3">
            Content Alignment
          </Text>
          <RadioButtonGroup.Root value={alignment} onValueChange={setAlignment} color="green">
            <div className="space-y-2">
              <RadioButtonGroup.Item value="left">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1 flex items-center">
                      <div className="w-4 h-2 bg-current"></div>
                    </div>
                    Left Aligned
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="center">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1 flex items-center justify-center">
                      <div className="w-4 h-2 bg-current"></div>
                    </div>
                    Centered
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>

              <RadioButtonGroup.Item value="right">
                <Button variant="soft" size="2" className="w-full justify-between">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-6 border border-current rounded-1 flex items-center justify-end">
                      <div className="w-4 h-2 bg-current"></div>
                    </div>
                    Right Aligned
                  </span>
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            </div>
          </RadioButtonGroup.Root>
        </div>
      </div>

      <div className="p-4 bg-gray-2 rounded-3">
        <Text size="2">
          <Text weight="medium">Preview:</Text> {layout} layout with {alignment} alignment
        </Text>
      </div>
    </div>
  );
}
```

### Different Colors and States

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function ColorAndStateDemo() {
  const [color, setColor] = React.useState('blue');
  const [contrast, setContrast] = React.useState('normal');
  const [state, setState] = React.useState('enabled');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Color Variations</Heading>
        <RadioButtonGroup.Root value={color} onValueChange={setColor} color={color}>
          <div className="flex flex-wrap gap-2">
            {['blue', 'green', 'red', 'orange', 'purple', 'gray'].map((colorOption) => (
              <RadioButtonGroup.Item key={colorOption} value={colorOption}>
                <Button variant="soft" size="2" color={colorOption}>
                  {colorOption}
                  <RadioButtonGroup.Icon />
                </Button>
              </RadioButtonGroup.Item>
            ))}
          </div>
        </RadioButtonGroup.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">High Contrast</Heading>
        <RadioButtonGroup.Root
          value={contrast}
          onValueChange={setContrast}
          color="blue"
          highContrast={contrast === 'high'}
        >
          <div className="flex gap-2">
            <RadioButtonGroup.Item value="normal">
              <Button variant="soft" size="2">
                Normal Contrast
                <RadioButtonGroup.Icon />
              </Button>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="high">
              <Button variant="soft" size="2">
                High Contrast
                <RadioButtonGroup.Icon />
              </Button>
            </RadioButtonGroup.Item>
          </div>
        </RadioButtonGroup.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">Disabled State</Heading>
        <RadioButtonGroup.Root value={state} onValueChange={setState} color="green" disabled={state === 'disabled'}>
          <div className="flex gap-2">
            <RadioButtonGroup.Item value="enabled">
              <Button variant="soft" size="2">
                Enabled
                <RadioButtonGroup.Icon />
              </Button>
            </RadioButtonGroup.Item>
            <RadioButtonGroup.Item value="disabled">
              <Button variant="soft" size="2">
                Disabled
                <RadioButtonGroup.Icon />
              </Button>
            </RadioButtonGroup.Item>
          </div>
        </RadioButtonGroup.Root>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="space-y-4">
  <RadioButtonGroup.Root value={value} onValueChange={setValue}>
    <div className="flex gap-2">
      <RadioButtonGroup.Item value="option1">
        <Button variant="soft">Option 1</Button>
      </RadioButtonGroup.Item>
    </div>
  </RadioButtonGroup.Root>
</div>
```

### Typography Integration

```jsx
<div className="space-y-3">
  <Text weight="medium" size="2">
    Choose an option
  </Text>
  <RadioButtonGroup.Root value={value} onValueChange={setValue}>
    {/* Radio button items */}
  </RadioButtonGroup.Root>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The RadioButtonGroup component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Navigate to the radio group
- **Arrow Keys** - Navigate between radio options
- **Space/Enter** - Select the focused option

### Screen Reader Support

- Proper radio group role and semantics
- Clear labeling of options and group
- Selection state announcements
- Disabled state communication

### Focus Management

- Clear focus indicators on focusable elements
- Logical tab order through options
- Focus remains within group during arrow key navigation

## Advanced Usage

### Controlled vs Uncontrolled

```jsx
// Controlled
function ControlledExample() {
  const [value, setValue] = React.useState('option1');

  return (
    <RadioButtonGroup.Root value={value} onValueChange={setValue}>
      {/* Items */}
    </RadioButtonGroup.Root>
  );
}

// Uncontrolled
function UncontrolledExample() {
  return <RadioButtonGroup.Root defaultValue="option1">{/* Items */}</RadioButtonGroup.Root>;
}
```

### Form Integration

```jsx
import { RadioButtonGroup } from '@frosted-ui/core';

function FormIntegration() {
  const [formData, setFormData] = React.useState({
    theme: 'light',
    density: 'comfortable',
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form>
      <RadioButtonGroup.Root value={formData.theme} onValueChange={(value) => updateField('theme', value)} required>
        {/* Theme options */}
      </RadioButtonGroup.Root>
    </form>
  );
}
```

## Best Practices

### Option Design

- **Use clear, descriptive labels** for each option
- **Maintain consistent button sizing** within a group
- **Group related options** logically
- **Consider visual hierarchy** for important options

### User Experience

- **Provide appropriate default selections** when possible
- **Use colors meaningfully** (red for destructive, green for positive)
- **Keep option counts manageable** (consider other components for many options)
- **Test with keyboard navigation** and screen readers

### Form Integration

- **Combine with proper validation** and error handling
- **Use consistent styling** with other form components
- **Provide clear feedback** for selection changes
- **Consider mobile interaction** patterns

## Related Components

- **[RadioGroup](../radio-group/radio-group.ai.md)** - Traditional radio button styling
- **[SegmentedControl](../segmented-control/segmented-control.ai.md)** - Alternative toggle group styling
- **[Button](../button/button.ai.md)** - Individual button component used within items
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For labels and descriptions
