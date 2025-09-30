# Frosted UI RadioGroup Component

A collection of radio buttons that allows users to select a single option from a group of mutually exclusive choices. Perfect for forms, settings, and any interface where users need to make a single selection.

## Overview

The RadioGroup component provides a complete radio button solution with proper keyboard navigation, accessibility, and visual feedback. It manages the state of multiple radio options automatically, ensuring only one option can be selected at a time.

Built with sub-components for maximum flexibility, it supports different sizes, variants, and colors while maintaining consistent behavior across all options.

## Basic Usage

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function BasicRadioGroup() {
  const [value, setValue] = React.useState('option1');

  return (
    <RadioGroup.Root value={value} onValueChange={setValue}>
      <RadioGroup.Item value="option1">
        <Text>Option 1</Text>
      </RadioGroup.Item>
      <RadioGroup.Item value="option2">
        <Text>Option 2</Text>
      </RadioGroup.Item>
      <RadioGroup.Item value="option3">
        <Text>Option 3</Text>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
```

## Props

### RadioGroup.Root Props

| Prop            | Type                               | Default      | Description                                       |
| --------------- | ---------------------------------- | ------------ | ------------------------------------------------- |
| `size`          | `'1' \| '2' \| '3'`                | `'2'`        | The size of all radio buttons in the group        |
| `variant`       | `'classic' \| 'surface' \| 'soft'` | `'surface'`  | The visual style variant                          |
| `color`         | `string`                           | `undefined`  | The accent color - supports all Frosted UI colors |
| `highContrast`  | `boolean`                          | `false`      | Whether to use high contrast styling              |
| `value`         | `string`                           | `undefined`  | The controlled value of the selected radio button |
| `defaultValue`  | `string`                           | `undefined`  | The value when initially rendered (uncontrolled)  |
| `onValueChange` | `(value: string) => void`          | `undefined`  | Event handler called when the value changes       |
| `orientation`   | `'horizontal' \| 'vertical'`       | `'vertical'` | The orientation of the radio group                |
| `disabled`      | `boolean`                          | `false`      | Whether the entire group is disabled              |
| `required`      | `boolean`                          | `false`      | Whether the group is required                     |
| `name`          | `string`                           | `undefined`  | The name attribute for the radio group            |

### RadioGroup.Item Props

| Prop       | Type      | Default     | Description                            |
| ---------- | --------- | ----------- | -------------------------------------- |
| `value`    | `string`  | —           | The value of the radio button          |
| `disabled` | `boolean` | `false`     | Whether this specific item is disabled |
| `id`       | `string`  | `undefined` | Unique identifier for the radio button |

## Examples

### Settings Form

```jsx
import { RadioGroup, Text, Heading } from '@frosted-ui/core';

function SettingsForm() {
  const [theme, setTheme] = React.useState('light');
  const [notifications, setNotifications] = React.useState('all');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Theme Preference</Heading>
        <RadioGroup.Root value={theme} onValueChange={setTheme}>
          <RadioGroup.Item value="light">
            <Text>Light mode</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="dark">
            <Text>Dark mode</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="system">
            <Text>System preference</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">Notification Settings</Heading>
        <RadioGroup.Root value={notifications} onValueChange={setNotifications}>
          <RadioGroup.Item value="all">
            <div className="space-y-1">
              <Text weight="medium">All notifications</Text>
              <Text size="1" color="gray">
                Receive all notifications including promotional emails
              </Text>
            </div>
          </RadioGroup.Item>
          <RadioGroup.Item value="important">
            <div className="space-y-1">
              <Text weight="medium">Important only</Text>
              <Text size="1" color="gray">
                Only receive notifications about account security and updates
              </Text>
            </div>
          </RadioGroup.Item>
          <RadioGroup.Item value="none">
            <div className="space-y-1">
              <Text weight="medium">No notifications</Text>
              <Text size="1" color="gray">
                Disable all email notifications
              </Text>
            </div>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### Size Variants

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function SizeVariants() {
  const [size1Value, setSize1Value] = React.useState('small');
  const [size2Value, setSize2Value] = React.useState('medium');
  const [size3Value, setSize3Value] = React.useState('large');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="1" weight="medium" color="gray">
          Size 1 (Small)
        </Text>
        <RadioGroup.Root size="1" value={size1Value} onValueChange={setSize1Value}>
          <RadioGroup.Item value="small">
            <Text size="1">Small option</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="compact">
            <Text size="1">Compact option</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Size 2 (Default)
        </Text>
        <RadioGroup.Root size="2" value={size2Value} onValueChange={setSize2Value}>
          <RadioGroup.Item value="medium">
            <Text size="2">Medium option</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="standard">
            <Text size="2">Standard option</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="3" weight="medium" color="gray">
          Size 3 (Large)
        </Text>
        <RadioGroup.Root size="3" value={size3Value} onValueChange={setSize3Value}>
          <RadioGroup.Item value="large">
            <Text size="3">Large option</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="spacious">
            <Text size="3">Spacious option</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### Variant Examples

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function VariantExamples() {
  const [classicValue, setClassicValue] = React.useState('classic1');
  const [surfaceValue, setSurfaceValue] = React.useState('surface1');
  const [softValue, setSoftValue] = React.useState('soft1');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Classic Variant
        </Text>
        <RadioGroup.Root variant="classic" value={classicValue} onValueChange={setClassicValue} color="blue">
          <RadioGroup.Item value="classic1">
            <Text>Classic option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="classic2">
            <Text>Classic option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Surface Variant (Default)
        </Text>
        <RadioGroup.Root variant="surface" value={surfaceValue} onValueChange={setSurfaceValue} color="green">
          <RadioGroup.Item value="surface1">
            <Text>Surface option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="surface2">
            <Text>Surface option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Soft Variant
        </Text>
        <RadioGroup.Root variant="soft" value={softValue} onValueChange={setSoftValue} color="purple">
          <RadioGroup.Item value="soft1">
            <Text>Soft option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="soft2">
            <Text>Soft option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### Color Examples

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function ColorExamples() {
  const [blueValue, setBlueValue] = React.useState('blue1');
  const [greenValue, setGreenValue] = React.useState('green1');
  const [redValue, setRedValue] = React.useState('red1');
  const [orangeValue, setOrangeValue] = React.useState('orange1');

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="blue">
          Blue
        </Text>
        <RadioGroup.Root color="blue" value={blueValue} onValueChange={setBlueValue}>
          <RadioGroup.Item value="blue1">
            <Text>Blue option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="blue2">
            <Text>Blue option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="green">
          Green
        </Text>
        <RadioGroup.Root color="green" value={greenValue} onValueChange={setGreenValue}>
          <RadioGroup.Item value="green1">
            <Text>Green option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="green2">
            <Text>Green option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="red">
          Red
        </Text>
        <RadioGroup.Root color="red" value={redValue} onValueChange={setRedValue}>
          <RadioGroup.Item value="red1">
            <Text>Red option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="red2">
            <Text>Red option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="orange">
          Orange
        </Text>
        <RadioGroup.Root color="orange" value={orangeValue} onValueChange={setOrangeValue}>
          <RadioGroup.Item value="orange1">
            <Text>Orange option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="orange2">
            <Text>Orange option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### High Contrast Examples

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function HighContrastExamples() {
  const [normalValue, setNormalValue] = React.useState('normal1');
  const [highContrastValue, setHighContrastValue] = React.useState('high1');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Normal Contrast
        </Text>
        <RadioGroup.Root color="blue" value={normalValue} onValueChange={setNormalValue}>
          <RadioGroup.Item value="normal1">
            <Text>Normal contrast option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="normal2">
            <Text>Normal contrast option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          High Contrast
        </Text>
        <RadioGroup.Root color="blue" highContrast value={highContrastValue} onValueChange={setHighContrastValue}>
          <RadioGroup.Item value="high1">
            <Text>High contrast option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="high2">
            <Text>High contrast option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### Horizontal Orientation

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function HorizontalOrientation() {
  const [value, setValue] = React.useState('left');

  return (
    <div className="space-y-3">
      <Text size="2" weight="medium">
        Text Alignment
      </Text>
      <RadioGroup.Root orientation="horizontal" value={value} onValueChange={setValue}>
        <RadioGroup.Item value="left">
          <Text>Left</Text>
        </RadioGroup.Item>
        <RadioGroup.Item value="center">
          <Text>Center</Text>
        </RadioGroup.Item>
        <RadioGroup.Item value="right">
          <Text>Right</Text>
        </RadioGroup.Item>
      </RadioGroup.Root>
    </div>
  );
}
```

### Disabled States

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function DisabledStates() {
  const [value, setValue] = React.useState('enabled');

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Partially Disabled
        </Text>
        <RadioGroup.Root value={value} onValueChange={setValue}>
          <RadioGroup.Item value="enabled">
            <Text>Enabled option</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="disabled" disabled>
            <Text color="gray">Disabled option</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="another">
            <Text>Another enabled option</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Fully Disabled Group
        </Text>
        <RadioGroup.Root disabled defaultValue="option1">
          <RadioGroup.Item value="option1">
            <Text color="gray">Disabled option 1</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="option2">
            <Text color="gray">Disabled option 2</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>
    </div>
  );
}
```

### Form Integration

```jsx
import { RadioGroup, Text, Heading, Button } from '@frosted-ui/core';

function FormIntegration() {
  const [formData, setFormData] = React.useState({
    plan: 'basic',
    billing: 'monthly',
    support: 'email',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-[400px]">
      <div className="space-y-3">
        <Heading size="3">Choose Your Plan</Heading>
        <RadioGroup.Root
          name="plan"
          value={formData.plan}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, plan: value }))}
        >
          <RadioGroup.Item value="basic">
            <div className="space-y-1">
              <Text weight="medium">Basic Plan</Text>
              <Text size="1" color="gray">
                $9/month - Essential features
              </Text>
            </div>
          </RadioGroup.Item>
          <RadioGroup.Item value="pro">
            <div className="space-y-1">
              <Text weight="medium">Pro Plan</Text>
              <Text size="1" color="gray">
                $19/month - Advanced features
              </Text>
            </div>
          </RadioGroup.Item>
          <RadioGroup.Item value="enterprise">
            <div className="space-y-1">
              <Text weight="medium">Enterprise Plan</Text>
              <Text size="1" color="gray">
                $49/month - All features
              </Text>
            </div>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">Billing Cycle</Heading>
        <RadioGroup.Root
          name="billing"
          orientation="horizontal"
          value={formData.billing}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, billing: value }))}
        >
          <RadioGroup.Item value="monthly">
            <Text>Monthly</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="yearly">
            <Text>Yearly (20% off)</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">Support Level</Heading>
        <RadioGroup.Root
          name="support"
          value={formData.support}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, support: value }))}
          color="blue"
        >
          <RadioGroup.Item value="email">
            <Text>Email support</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="chat">
            <Text>Live chat support</Text>
          </RadioGroup.Item>
          <RadioGroup.Item value="phone">
            <Text>Phone support</Text>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <Button type="submit" className="w-full">
        Continue with Selected Plan
      </Button>
    </form>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<RadioGroup.Root>
  <div className="space-y-3"> {/* Uses --space-3 */}
    <RadioGroup.Item value="option1">
      <div className="space-y-1"> {/* Uses --space-1 */}
        <Text weight="medium">Option Title</Text>
        <Text size="1" color="gray">Option description</Text>
      </div>
    </RadioGroup.Item>
  </div>
</RadioGroup.Root>

// Use Typography components for labels
<RadioGroup.Item value="option">
  <Text>Label text</Text>
</RadioGroup.Item>
```

### Color System Integration

```jsx
// Use semantic colors for different contexts
<RadioGroup.Root color="success">Success context</RadioGroup.Root>
<RadioGroup.Root color="danger">Error context</RadioGroup.Root>
<RadioGroup.Root color="blue">Primary actions</RadioGroup.Root>
```

## Accessibility

The RadioGroup component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Focus Management**: Proper focus indicators and management
- **ARIA Attributes**: Complete ARIA labeling and relationships
- **Screen Reader**: Optimized for screen reader technologies
- **Form Integration**: Proper form submission and validation support

### Keyboard Shortcuts

- `Tab`: Navigate to the radio group
- `↓` / `↑`: Navigate through radio options (vertical orientation)
- `←` / `→`: Navigate through radio options (horizontal orientation)
- `Space`: Select the focused radio option

## Best Practices

### Content Guidelines

- **Clear labels**: Use descriptive, concise labels for each option
- **Logical order**: Arrange options in a logical sequence
- **Consistent formatting**: Maintain consistent label formatting throughout
- **Helpful descriptions**: Include descriptions for complex options

### Design Guidelines

- **Appropriate sizing**: Match radio group size with surrounding form elements
- **Consistent colors**: Use consistent colors throughout your application
- **Proper spacing**: Ensure adequate spacing between options
- **Visual hierarchy**: Use proper typography hierarchy for labels and descriptions

### Form Integration

- **Required indicators**: Mark required radio groups clearly
- **Validation**: Provide clear validation feedback
- **Default values**: Set sensible default values when appropriate
- **Grouping**: Group related radio buttons logically

## Advanced Usage

### Dynamic Options

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function DynamicOptions({ options, value, onChange }) {
  return (
    <RadioGroup.Root value={value} onValueChange={onChange}>
      {options.map((option) => (
        <RadioGroup.Item key={option.value} value={option.value} disabled={option.disabled}>
          <div className="space-y-1">
            <Text weight="medium">{option.label}</Text>
            {option.description && (
              <Text size="1" color="gray">
                {option.description}
              </Text>
            )}
            {option.badge && (
              <Badge size="1" variant="soft">
                {option.badge}
              </Badge>
            )}
          </div>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
```

### Conditional Options

```jsx
import { RadioGroup, Text } from '@frosted-ui/core';

function ConditionalOptions() {
  const [paymentMethod, setPaymentMethod] = React.useState('card');
  const [cardType, setCardType] = React.useState('visa');

  return (
    <div className="space-y-6">
      <RadioGroup.Root value={paymentMethod} onValueChange={setPaymentMethod}>
        <RadioGroup.Item value="card">
          <Text>Credit/Debit Card</Text>
        </RadioGroup.Item>
        <RadioGroup.Item value="paypal">
          <Text>PayPal</Text>
        </RadioGroup.Item>
        <RadioGroup.Item value="bank">
          <Text>Bank Transfer</Text>
        </RadioGroup.Item>
      </RadioGroup.Root>

      {paymentMethod === 'card' && (
        <div className="ml-6 space-y-3">
          <Text size="2" weight="medium">
            Card Type
          </Text>
          <RadioGroup.Root value={cardType} onValueChange={setCardType} size="1">
            <RadioGroup.Item value="visa">
              <Text size="1">Visa</Text>
            </RadioGroup.Item>
            <RadioGroup.Item value="mastercard">
              <Text size="1">Mastercard</Text>
            </RadioGroup.Item>
            <RadioGroup.Item value="amex">
              <Text size="1">American Express</Text>
            </RadioGroup.Item>
          </RadioGroup.Root>
        </div>
      )}
    </div>
  );
}
```

## Related Components

- **[Checkbox](../checkbox/checkbox.ai.md)** - For multiple selection scenarios
- **[Switch](../switch/switch.ai.md)** - For binary on/off selections
- **[Select](../select/select.ai.md)** - For single selection from many options
- **[Button](../button/button.ai.md)** - For action-based selections
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For labels and descriptions
- **[Badge](../badge/badge.ai.md)** - For option indicators and status
