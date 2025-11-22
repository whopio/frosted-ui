# Frosted UI SegmentedControlRadioGroup Component

A radio group styled to look like a segmented control, providing mutually exclusive selection within a visually unified button group. Perfect for options where only one choice can be selected at a time.

## Overview

The SegmentedControlRadioGroup component combines the functionality of radio buttons with the visual design of segmented controls. It maintains the same visual appearance as SegmentedControl but uses radio group semantics, making it ideal for forms and situations where you need traditional radio button behavior with modern styling.

This component is particularly useful when you need form validation, integration with form libraries, or accessibility patterns specific to radio groups while maintaining the sleek segmented control appearance.

## Basic Usage

```jsx
import { SegmentedControlRadioGroup } from '@frosted-ui/core';

function BasicRadioGroup() {
  const [value, setValue] = React.useState('option1');

  return (
    <SegmentedControlRadioGroup.Root value={value} onValueChange={setValue}>
      <SegmentedControlRadioGroup.Item value="option1">Option 1</SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="option2">Option 2</SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="option3">Option 3</SegmentedControlRadioGroup.Item>
    </SegmentedControlRadioGroup.Root>
  );
}
```

## Props

### SegmentedControlRadioGroup.Root Props

| Prop            | Type                      | Default     | Description                                             |
| --------------- | ------------------------- | ----------- | ------------------------------------------------------- |
| `value`         | `string`                  | `undefined` | The controlled value of the selected item               |
| `defaultValue`  | `string`                  | `undefined` | The value when initially rendered (uncontrolled)        |
| `onValueChange` | `(value: string) => void` | `undefined` | Event handler called when the value changes             |
| `name`          | `string`                  | `undefined` | The name of the radio group for form submission         |
| `disabled`      | `boolean`                 | `false`     | Whether the entire radio group is disabled              |
| `required`      | `boolean`                 | `false`     | Whether the radio group is required for form validation |

### SegmentedControlRadioGroup.Item Props

| Prop       | Type      | Default | Description                            |
| ---------- | --------- | ------- | -------------------------------------- |
| `value`    | `string`  | —       | The value of this radio item           |
| `disabled` | `boolean` | `false` | Whether this specific item is disabled |

## Examples

### Form Integration

```jsx
import { SegmentedControlRadioGroup, Heading, Text } from '@frosted-ui/core';

function FormRadioGroup() {
  const [subscription, setSubscription] = React.useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected subscription:', subscription);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Heading size="3" className="mb-3">
          Choose Your Plan
        </Heading>
        <SegmentedControlRadioGroup.Root
          value={subscription}
          onValueChange={setSubscription}
          name="subscription"
          required
        >
          <SegmentedControlRadioGroup.Item value="monthly">Monthly</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="yearly">Yearly</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="lifetime">Lifetime</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      <div className="flex justify-between items-center pt-4">
        <Text color="gray" size="2">
          Selected: {subscription.charAt(0).toUpperCase() + subscription.slice(1)}
        </Text>
        <button type="submit" className="px-4 py-2 bg-blue-9 text-blue-9-contrast rounded-3">
          Continue
        </button>
      </div>
    </form>
  );
}
```

### Priority Selection

```jsx
import { SegmentedControlRadioGroup, Text, Card } from '@frosted-ui/core';

function PrioritySelector() {
  const [priority, setPriority] = React.useState('medium');

  const getPriorityColor = (p) => {
    switch (p) {
      case 'low':
        return 'green';
      case 'medium':
        return 'orange';
      case 'high':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <Text weight="medium" className="mb-2">
            Task Priority
          </Text>
          <SegmentedControlRadioGroup.Root value={priority} onValueChange={setPriority} name="priority">
            <SegmentedControlRadioGroup.Item value="low">Low</SegmentedControlRadioGroup.Item>
            <SegmentedControlRadioGroup.Item value="medium">Medium</SegmentedControlRadioGroup.Item>
            <SegmentedControlRadioGroup.Item value="high">High</SegmentedControlRadioGroup.Item>
          </SegmentedControlRadioGroup.Root>
        </div>

        <div className="p-3 bg-gray-2 rounded-3">
          <Text size="2" color={getPriorityColor(priority)}>
            Priority set to: {priority.toUpperCase()}
          </Text>
        </div>
      </div>
    </Card>
  );
}
```

### User Role Selection

```jsx
import { SegmentedControlRadioGroup, Text, Badge } from '@frosted-ui/core';

function UserRoleSelector() {
  const [role, setRole] = React.useState('user');

  const roles = [
    { value: 'viewer', label: 'Viewer', description: 'Can view content only' },
    { value: 'user', label: 'User', description: 'Can view and edit own content' },
    { value: 'admin', label: 'Admin', description: 'Full access to all content' },
  ];

  const selectedRole = roles.find((r) => r.value === role);

  return (
    <div className="space-y-4">
      <div>
        <Text weight="medium" className="mb-2">
          Select User Role
        </Text>
        <SegmentedControlRadioGroup.Root value={role} onValueChange={setRole} name="userRole">
          {roles.map((r) => (
            <SegmentedControlRadioGroup.Item key={r.value} value={r.value}>
              {r.label}
            </SegmentedControlRadioGroup.Item>
          ))}
        </SegmentedControlRadioGroup.Root>
      </div>

      <div className="flex items-center gap-3 p-4 bg-gray-1 rounded-3">
        <Badge color="blue" variant="soft">
          {selectedRole.label}
        </Badge>
        <Text size="2" color="gray">
          {selectedRole.description}
        </Text>
      </div>
    </div>
  );
}
```

### Shipping Options

```jsx
import { SegmentedControlRadioGroup, Text, Heading } from '@frosted-ui/core';

function ShippingSelector() {
  const [shipping, setShipping] = React.useState('standard');

  const shippingOptions = [
    { value: 'standard', label: 'Standard', time: '5-7 days', price: 'Free' },
    { value: 'express', label: 'Express', time: '2-3 days', price: '$9.99' },
    { value: 'overnight', label: 'Overnight', time: '1 day', price: '$24.99' },
  ];

  const selectedOption = shippingOptions.find((opt) => opt.value === shipping);

  return (
    <div className="space-y-4">
      <Heading size="3">Shipping Method</Heading>

      <SegmentedControlRadioGroup.Root value={shipping} onValueChange={setShipping} name="shipping">
        {shippingOptions.map((option) => (
          <SegmentedControlRadioGroup.Item key={option.value} value={option.value}>
            {option.label}
          </SegmentedControlRadioGroup.Item>
        ))}
      </SegmentedControlRadioGroup.Root>

      <div className="p-4 border border-gray-6 rounded-3 bg-gray-1">
        <div className="flex justify-between items-center">
          <div>
            <Text weight="medium">{selectedOption.label} Shipping</Text>
            <Text size="2" color="gray">
              Delivery: {selectedOption.time}
            </Text>
          </div>
          <Text weight="medium" color={selectedOption.price === 'Free' ? 'green' : 'gray'}>
            {selectedOption.price}
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### Notification Preferences

```jsx
import { SegmentedControlRadioGroup, Text, Card } from '@frosted-ui/core';

function NotificationSettings() {
  const [frequency, setFrequency] = React.useState('daily');
  const [method, setMethod] = React.useState('email');

  return (
    <Card className="p-6 space-y-6">
      <div>
        <Text weight="medium" className="mb-3">
          Notification Frequency
        </Text>
        <SegmentedControlRadioGroup.Root value={frequency} onValueChange={setFrequency} name="frequency">
          <SegmentedControlRadioGroup.Item value="realtime">Real-time</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="daily">Daily</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="weekly">Weekly</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="never">Never</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      <div>
        <Text weight="medium" className="mb-3">
          Delivery Method
        </Text>
        <SegmentedControlRadioGroup.Root value={method} onValueChange={setMethod} name="method">
          <SegmentedControlRadioGroup.Item value="email">Email</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="sms">SMS</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="push">Push</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      <div className="p-3 bg-blue-2 rounded-3">
        <Text size="2">
          You'll receive {frequency} notifications via {method}
          {frequency === 'never' && ' (notifications disabled)'}
        </Text>
      </div>
    </Card>
  );
}
```

### Disabled States

```jsx
import { SegmentedControlRadioGroup, Text } from '@frosted-ui/core';

function DisabledStates() {
  const [value1, setValue1] = React.useState('option1');
  const [value2, setValue2] = React.useState('basic');

  return (
    <div className="space-y-6">
      <div>
        <Text weight="medium" className="mb-2">
          Partially Disabled
        </Text>
        <SegmentedControlRadioGroup.Root value={value1} onValueChange={setValue1}>
          <SegmentedControlRadioGroup.Item value="option1">Available</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="option2" disabled>
            Unavailable
          </SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="option3">Available</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      <div>
        <Text weight="medium" className="mb-2">
          Fully Disabled
        </Text>
        <SegmentedControlRadioGroup.Root value={value2} onValueChange={setValue2} disabled>
          <SegmentedControlRadioGroup.Item value="basic">Basic</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="premium">Premium</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="enterprise">Enterprise</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
        <Text size="1" color="gray" className="mt-2">
          Plan selection is locked during your trial period
        </Text>
      </div>
    </div>
  );
}
```

### Survey Question

```jsx
import { SegmentedControlRadioGroup, Text, Heading, Card } from '@frosted-ui/core';

function SurveyQuestion() {
  const [satisfaction, setSatisfaction] = React.useState('');
  const [recommendation, setRecommendation] = React.useState('');

  return (
    <Card className="p-6 space-y-6">
      <div>
        <Heading size="3" className="mb-2">
          Customer Satisfaction Survey
        </Heading>
        <Text color="gray">Please rate your experience with our service</Text>
      </div>

      <div>
        <Text weight="medium" className="mb-3">
          How satisfied are you with our service?
        </Text>
        <SegmentedControlRadioGroup.Root
          value={satisfaction}
          onValueChange={setSatisfaction}
          name="satisfaction"
          required
        >
          <SegmentedControlRadioGroup.Item value="very-unsatisfied">😞</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="unsatisfied">🙁</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="neutral">😐</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="satisfied">🙂</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="very-satisfied">😃</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      <div>
        <Text weight="medium" className="mb-3">
          Would you recommend us to others?
        </Text>
        <SegmentedControlRadioGroup.Root
          value={recommendation}
          onValueChange={setRecommendation}
          name="recommendation"
          required
        >
          <SegmentedControlRadioGroup.Item value="definitely-not">Definitely Not</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="probably-not">Probably Not</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="maybe">Maybe</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="probably">Probably</SegmentedControlRadioGroup.Item>
          <SegmentedControlRadioGroup.Item value="definitely">Definitely</SegmentedControlRadioGroup.Item>
        </SegmentedControlRadioGroup.Root>
      </div>

      {satisfaction && recommendation && (
        <div className="p-3 bg-green-2 rounded-3">
          <Text size="2" color="green">
            Thank you for your feedback!
          </Text>
        </div>
      )}
    </Card>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <SegmentedControlRadioGroup.Root>
    <SegmentedControlRadioGroup.Item>Option</SegmentedControlRadioGroup.Item>
  </SegmentedControlRadioGroup.Root>
</div>

// Integrate with Typography components
<div className="space-y-3">
  <Text weight="medium">Question</Text>
  <SegmentedControlRadioGroup.Root>
    <SegmentedControlRadioGroup.Item>Answer</SegmentedControlRadioGroup.Item>
  </SegmentedControlRadioGroup.Root>
</div>
```

### Color System Integration

This component automatically inherits the accent color from the theme context and uses proper color contrast tokens for selected states.

## Accessibility

The SegmentedControlRadioGroup component includes comprehensive accessibility features:

- **Radio Group Semantics**: Proper ARIA radio group implementation
- **Keyboard Navigation**: Arrow keys for navigation between options
- **Form Integration**: Works seamlessly with form libraries and validation
- **Screen Reader Support**: Clear announcements of selection changes
- **Focus Management**: Proper focus indicators and management

### Keyboard Shortcuts

- `↓` / `↑` or `→` / `←`: Navigate between radio options
- `Space`: Select the focused option

## Best Practices

### When to Use

- **Mutually exclusive choices**: When only one option can be selected
- **Form fields**: When you need traditional radio button behavior
- **Known options**: When all choices are visible and limited in number
- **Quick selection**: For frequently changed settings

### When Not to Use

- **Multiple selections**: Use Checkbox or CheckboxGroup instead
- **Many options**: Consider Select or Combobox for 5+ options
- **Navigation**: Use SegmentedControl for view switching
- **Toggle states**: Use Switch for on/off states

### Design Guidelines

- **Clear labels**: Use descriptive, action-oriented labels
- **Logical order**: Arrange options in a meaningful sequence
- **Reasonable defaults**: Pre-select the most common choice
- **Visual grouping**: Keep related options together

## Advanced Usage

### Controlled vs Uncontrolled

```jsx
// Controlled (recommended for forms)
function ControlledExample() {
  const [value, setValue] = React.useState('option1');

  return (
    <SegmentedControlRadioGroup.Root value={value} onValueChange={setValue}>
      <SegmentedControlRadioGroup.Item value="option1">Option 1</SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="option2">Option 2</SegmentedControlRadioGroup.Item>
    </SegmentedControlRadioGroup.Root>
  );
}

// Uncontrolled (for simple cases)
function UncontrolledExample() {
  return (
    <SegmentedControlRadioGroup.Root defaultValue="option1" name="example">
      <SegmentedControlRadioGroup.Item value="option1">Option 1</SegmentedControlRadioGroup.Item>
      <SegmentedControlRadioGroup.Item value="option2">Option 2</SegmentedControlRadioGroup.Item>
    </SegmentedControlRadioGroup.Root>
  );
}
```

### Form Library Integration

```jsx
import { useForm, Controller } from 'react-hook-form';

function FormIntegration() {
  const { control, handleSubmit } = useForm({
    defaultValues: { plan: 'basic' },
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Controller
        name="plan"
        control={control}
        rules={{ required: 'Please select a plan' }}
        render={({ field }) => (
          <SegmentedControlRadioGroup.Root value={field.value} onValueChange={field.onChange} name={field.name}>
            <SegmentedControlRadioGroup.Item value="basic">Basic</SegmentedControlRadioGroup.Item>
            <SegmentedControlRadioGroup.Item value="pro">Pro</SegmentedControlRadioGroup.Item>
            <SegmentedControlRadioGroup.Item value="enterprise">Enterprise</SegmentedControlRadioGroup.Item>
          </SegmentedControlRadioGroup.Root>
        )}
      />
    </form>
  );
}
```

## Related Components

- **[SegmentedControl](../segmented-control/segmented-control.ai.md)** - For view switching and navigation
- **[SegmentedControlNav](../segmented-control-nav/segmented-control-nav.ai.md)** - For navigation links
- **[RadioGroup](../radio-group/radio-group.ai.md)** - For traditional radio buttons
- **[Select](../select/select.ai.md)** - For dropdown selections
- **[Checkbox](../checkbox/checkbox.ai.md)** - For multiple selections
