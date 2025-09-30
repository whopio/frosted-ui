# Frosted UI Checkbox Component

A customizable checkbox component for forms and multi-selection interfaces. The Checkbox component supports checked, unchecked, and indeterminate states with smooth animations and built-in label composition.

## Overview

The Checkbox component is built on Radix UI primitives and provides a robust foundation for selection interfaces. It features three distinct states (checked, unchecked, indeterminate), automatic text alignment, and comprehensive accessibility support. The component can be used standalone or composed with labels for complete form controls.

Key features:

- **3 Selection States**: Checked, unchecked, and indeterminate with distinct visual indicators
- **3 Size Options**: Compact (size 1) to large (size 3) with automatic text alignment
- **Complete Color System**: All Frosted UI colors + semantic colors
- **High Contrast Mode**: Enhanced visibility for accessibility
- **Label Composition**: Automatic label creation when children are provided
- **Radix Primitives**: Built on robust, accessible foundation
- **Controlled & Uncontrolled**: Supports both usage patterns

## Basic Usage

```jsx
import { Checkbox } from '@frosted-ui/core';

function BasicExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked}>
      Accept terms and conditions
    </Checkbox>
  );
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop              | Type                                            | Default     | Description                                        |
| ----------------- | ----------------------------------------------- | ----------- | -------------------------------------------------- |
| `size`            | `'1' \| '2' \| '3'`                             | `'2'`       | Controls checkbox size and aligns with text        |
| `color`           | `string`                                        | `undefined` | Color from Frosted UI palette or semantic colors   |
| `highContrast`    | `boolean`                                       | `false`     | Enable high contrast mode for better accessibility |
| `checked`         | `boolean \| 'indeterminate'`                    | -           | Controlled checked state                           |
| `defaultChecked`  | `boolean \| 'indeterminate'`                    | -           | Default checked state for uncontrolled usage       |
| `onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | -           | Callback when checked state changes                |
| `disabled`        | `boolean`                                       | `false`     | Disable the checkbox                               |
| `children`        | `ReactNode`                                     | -           | Label content (creates automatic label wrapper)    |

Plus all standard Radix Checkbox.Root props (`name`, `value`, `required`, etc.).

## Overview

The Checkbox component is built on Radix UI primitives and provides a robust foundation for selection interfaces. It features three distinct states (checked, unchecked, indeterminate), automatic text alignment, and comprehensive accessibility support. The component can be used standalone or composed with labels for complete form controls.

Key features:

- **3 Selection States**: Checked, unchecked, and indeterminate with distinct visual indicators
- **3 Size Options**: Compact (size 1) to large (size 3) with automatic text alignment
- **Complete Color System**: All Frosted UI colors + semantic colors
- **High Contrast Mode**: Enhanced visibility for accessibility
- **Label Composition**: Automatic label creation when children are provided
- **Radix Primitives**: Built on robust, accessible foundation
- **Controlled & Uncontrolled**: Supports both usage patterns

## Basic Usage

```jsx
import { Checkbox } from '@frosted-ui/core';

function BasicExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked}>
      Accept terms and conditions
    </Checkbox>
  );
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop              | Type                                            | Default     | Description                                        |
| ----------------- | ----------------------------------------------- | ----------- | -------------------------------------------------- |
| `size`            | `'1' \| '2' \| '3'`                             | `'2'`       | Controls checkbox size and aligns with text        |
| `color`           | `string`                                        | `undefined` | Color from Frosted UI palette or semantic colors   |
| `highContrast`    | `boolean`                                       | `false`     | Enable high contrast mode for better accessibility |
| `checked`         | `boolean \| 'indeterminate'`                    | -           | Controlled checked state                           |
| `defaultChecked`  | `boolean \| 'indeterminate'`                    | -           | Default checked state for uncontrolled usage       |
| `onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | -           | Callback when checked state changes                |
| `disabled`        | `boolean`                                       | `false`     | Disable the checkbox                               |
| `children`        | `ReactNode`                                     | -           | Label content (creates automatic label wrapper)    |

Plus all standard Radix Checkbox.Root props (`name`, `value`, `required`, etc.).

## Examples

### Basic States

```jsx
function StatesExample() {
  return (
    <div className="flex flex-col gap-2">
      <Checkbox checked>Checked</Checkbox>
      <Checkbox checked={false}>Unchecked</Checkbox>
      <Checkbox checked="indeterminate">Indeterminate</Checkbox>
      <Checkbox checked disabled>
        Checked disabled
      </Checkbox>
      <Checkbox checked={false} disabled>
        Unchecked disabled
      </Checkbox>
      <Checkbox checked="indeterminate" disabled>
        Indeterminate disabled
      </Checkbox>
    </div>
  );
}
```

### Sizes

```jsx
function SizeExample() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox size="1" defaultChecked />
      <Checkbox size="2" defaultChecked />
      <Checkbox size="3" defaultChecked />
    </div>
  );
}
```

### Colors

```jsx
function ColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox color="indigo" defaultChecked />
      <Checkbox color="cyan" defaultChecked />
      <Checkbox color="orange" defaultChecked />
      <Checkbox color="crimson" defaultChecked />
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox color="success" defaultChecked />
      <Checkbox color="warning" defaultChecked />
      <Checkbox color="danger" defaultChecked />
      <Checkbox color="info" defaultChecked />
    </div>
  );
}
```

### High Contrast Mode

```jsx
function HighContrastExample() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Checkbox color="indigo" defaultChecked />
      <Checkbox color="indigo" defaultChecked highContrast />
      <Checkbox color="cyan" defaultChecked />
      <Checkbox color="cyan" defaultChecked highContrast />
      <Checkbox color="orange" defaultChecked />
      <Checkbox color="orange" defaultChecked highContrast />
      <Checkbox color="crimson" defaultChecked />
      <Checkbox color="crimson" defaultChecked highContrast />
    </div>
  );
}
```

### Text Alignment

```jsx
function TextAlignmentExample() {
  return (
    <div className="flex flex-col gap-3">
      <Text as="label" size="3">
        <div className="flex gap-2">
          <Checkbox size="1" defaultChecked />
          Agree to Terms and Conditions
        </div>
      </Text>

      <Text as="label" size="4">
        <div className="flex gap-2">
          <Checkbox size="2" defaultChecked />
          Agree to Terms and Conditions
        </div>
      </Text>

      <Text as="label" size="5">
        <div className="flex gap-3">
          <Checkbox size="3" defaultChecked />
          Agree to Terms and Conditions
        </div>
      </Text>

      <div className="max-w-[300px]">
        <Text as="label" size="4">
          <div className="flex gap-2">
            <Checkbox defaultChecked />
            It is automatically well-aligned with multi-line text too.
          </div>
        </Text>
      </div>
    </div>
  );
}
```

### Controlled vs Uncontrolled

```jsx
function ControlledExample() {
  // Controlled
  const [newsletter, setNewsletter] = React.useState(true);
  const [marketing, setMarketing] = React.useState(false);

  return (
    <div className="space-y-3">
      <Checkbox checked={newsletter} onCheckedChange={setNewsletter}>
        Subscribe to newsletter
      </Checkbox>

      <Checkbox checked={marketing} onCheckedChange={setMarketing}>
        Receive marketing emails
      </Checkbox>

      {/* Uncontrolled */}
      <Checkbox defaultChecked>Remember my preferences</Checkbox>
    </div>
  );
}
```

### Indeterminate State

```jsx
function IndeterminateExample() {
  const [items, setItems] = React.useState([
    { id: 1, name: 'Item 1', checked: true },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: true },
  ]);

  const checkedCount = items.filter(item => item.checked).length;
  const isIndeterminate = checkedCount > 0 && checkedCount < items.length;
  const isAllChecked = checkedCount === items.length;

  const toggleAll = () => {
    const newChecked = !isAllChecked;
    setItems(items.map(item => ({ ...item, checked: newChecked })));
  };

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="space-y-3">
      <Checkbox
        checked={isAllChecked ? true : isIndeterminate ? 'indeterminate' : false}
        onCheckedChange={toggleAll}
      >
        Select all items
      </Checkbox>

      <div className="space-y-2 ml-6">
        {items.map(item => (
          <Checkbox
            key={item.id}
            checked={item.checked}
            onCheckedChange={() => toggleItem(item.id)}
          >
            {item.name}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  const [formData, setFormData] = React.useState({
    terms: false,
    newsletter: true,
    marketing: false,
    privacy: false,
  });

  const updateField = (field: string, value: boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValid = formData.terms && formData.privacy;

  return (
    <form className="space-y-4 max-w-[400px]">
      <Heading size="3">Sign Up</Heading>

      <div className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border border-gray-7 rounded"
        />

        <div className="space-y-2">
          <Checkbox
            name="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => updateField('terms', checked)}
            color={formData.terms ? 'success' : 'gray'}
          >
            I agree to the Terms of Service *
          </Checkbox>

          <Checkbox
            name="privacy"
            checked={formData.privacy}
            onCheckedChange={(checked) => updateField('privacy', checked)}
            color={formData.privacy ? 'success' : 'gray'}
          >
            I agree to the Privacy Policy *
          </Checkbox>

          <Checkbox
            name="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => updateField('newsletter', checked)}
            color="blue"
          >
            Subscribe to our newsletter
          </Checkbox>

          <Checkbox
            name="marketing"
            checked={formData.marketing}
            onCheckedChange={(checked) => updateField('marketing', checked)}
            color="orange"
          >
            Receive marketing communications
          </Checkbox>
        </div>
      </div>

      <Button
        type="submit"
        variant="solid"
        disabled={!isValid}
      >
        Create Account
      </Button>
    </form>
  );
}
```

### List Selection

```jsx
function ListSelectionExample() {
  const [selectedFeatures, setSelectedFeatures] = React.useState([
    'notifications',
    'autoBackup'
  ]);

  const features = [
    { id: 'notifications', name: 'Push notifications', description: 'Get notified of important updates' },
    { id: 'autoBackup', name: 'Auto backup', description: 'Automatically save your work' },
    { id: 'analytics', name: 'Usage analytics', description: 'Help us improve the product' },
    { id: 'beta', name: 'Beta features', description: 'Access experimental features' },
  ];

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <div className="space-y-4 max-w-[400px]">
      <Heading size="3">Select Features</Heading>

      <div className="space-y-3">
        {features.map(feature => (
          <div key={feature.id} className="flex items-start gap-3">
            <Checkbox
              checked={selectedFeatures.includes(feature.id)}
              onCheckedChange={() => toggleFeature(feature.id)}
              color="blue"
            />
            <div className="space-y-1">
              <Text size="2" weight="medium">{feature.name}</Text>
              <Text size="1" color="gray">{feature.description}</Text>
            </div>
          </div>
        ))}
      </div>

      <Text size="1" color="gray">
        {selectedFeatures.length} of {features.length} features selected
      </Text>
    </div>
  );
}
```

### Permission Settings

```jsx
function PermissionExample() {
  const [permissions, setPermissions] = React.useState({
    camera: false,
    microphone: true,
    location: false,
    contacts: true,
    photos: false,
  });

  const permissionLabels = {
    camera: 'Camera access',
    microphone: 'Microphone access',
    location: 'Location services',
    contacts: 'Contacts access',
    photos: 'Photos access',
  };

  const updatePermission = (key: string, value: boolean) => {
    setPermissions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 bg-panel-solid border border-gray-6 rounded-4 space-y-4 max-w-[350px]">
      <Heading size="3">App Permissions</Heading>

      <div className="space-y-3">
        {Object.entries(permissions).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <Text size="2">{permissionLabels[key]}</Text>
            <Checkbox
              checked={value}
              onCheckedChange={(checked) => updatePermission(key, checked)}
              color={value ? 'success' : 'gray'}
            />
          </div>
        ))}
      </div>

      <Button variant="solid" className="w-full">
        Save Permissions
      </Button>
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
      {/* Card with checkboxes */}
      <div className="p-4 bg-gray-1 border border-gray-6 rounded-4">
        <div className="space-y-3">
          <Heading size="3">Account Settings</Heading>

          <div className="space-y-2">
            <Checkbox color="blue" className="ring-2 ring-blue-6">
              Two-factor authentication
            </Checkbox>
            <Checkbox color="green" defaultChecked>
              Email notifications
            </Checkbox>
          </div>
        </div>
      </div>
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
          Subscription Preferences
        </Heading>
        <Text size="2" color="gray">
          Choose what you'd like to receive from us.
        </Text>
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Checkbox color="blue" defaultChecked />
          <div>
            <Text size="2" weight="medium">
              Weekly newsletter
            </Text>
            <Text size="1" color="gray">
              Get our latest updates and insights
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox color="orange" />
          <div>
            <Text size="2" weight="medium">
              Product announcements
            </Text>
            <Text size="1" color="gray">
              Be first to know about new features
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Checkbox color="green" defaultChecked />
          <div>
            <Text size="2" weight="medium">
              Security alerts
            </Text>
            <Text size="1" color="gray">
              Important account security updates
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The Checkbox component uses specific color steps for different states:

- **Checked state**: Uses step 9 for background, 9-contrast for checkmark
- **Unchecked state**: Uses surface color with gray-a3 border
- **Hover states**: Uses steps 10-11 for interactive feedback
- **High contrast**: Uses step 12 for enhanced visibility
- **Focus ring**: Uses the focus color token

## Accessibility

The Checkbox component includes comprehensive accessibility features:

- **Keyboard Navigation**: Space to toggle, proper focus management
- **Screen Reader Support**: Proper role and state announcements
- **High Contrast Support**: Enhanced visibility with `highContrast` prop
- **Label Association**: Automatic label creation or explicit association
- **Focus Indicators**: Clear visual focus ring
- **State Communication**: Clear checked/unchecked/indeterminate state indication
- **Form Integration**: Works seamlessly with form validation

```jsx
function AccessibilityExample() {
  const [accepted, setAccepted] = React.useState(false);

  return (
    <div className="space-y-3">
      {/* Automatic label */}
      <Checkbox checked={accepted} onCheckedChange={setAccepted} highContrast aria-describedby="terms-help">
        I accept the terms and conditions
      </Checkbox>
      <Text id="terms-help" size="1" color="gray">
        Please review our terms before proceeding
      </Text>

      {/* Form fieldset */}
      <fieldset className="space-y-2">
        <legend>
          <Text size="2" weight="medium">
            Newsletter preferences
          </Text>
        </legend>
        <Checkbox name="weekly" defaultChecked>
          Weekly updates
        </Checkbox>
        <Checkbox name="monthly" defaultChecked>
          Monthly digest
        </Checkbox>
      </fieldset>
    </div>
  );
}
```

## Advanced Usage

### Dynamic Checkbox Lists

```jsx
function DynamicListExample() {
  const [availableOptions, setAvailableOptions] = React.useState([
    { id: 1, label: 'Option 1', enabled: true },
    { id: 2, label: 'Option 2', enabled: false },
    { id: 3, label: 'Option 3', enabled: true },
  ]);

  const [selectedOptions, setSelectedOptions] = React.useState([1]);

  const toggleOption = (id: number) => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(optionId => optionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      <Heading size="3">Available Options</Heading>

      <div className="space-y-2">
        {availableOptions.map(option => (
          <Checkbox
            key={option.id}
            checked={selectedOptions.includes(option.id)}
            onCheckedChange={() => toggleOption(option.id)}
            disabled={!option.enabled}
            color={selectedOptions.includes(option.id) ? 'success' : 'gray'}
          >
            {option.label} {!option.enabled && '(unavailable)'}
          </Checkbox>
        ))}
      </div>

      <Button
        variant="solid"
        disabled={selectedOptions.length === 0}
      >
        Save Selection ({selectedOptions.length})
      </Button>
    </div>
  );
}
```

### Conditional Rendering

```jsx
function ConditionalExample() {
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [advancedOptions, setAdvancedOptions] = React.useState({
    debug: false,
    analytics: false,
    beta: false,
  });

  return (
    <div className="space-y-4 max-w-[350px]">
      <Checkbox checked={showAdvanced} onCheckedChange={setShowAdvanced} color="blue">
        Show advanced options
      </Checkbox>

      {showAdvanced && (
        <div className="ml-6 space-y-2 p-3 bg-gray-1 border border-gray-6 rounded-3">
          <Text size="2" weight="medium" color="gray">
            Advanced Settings
          </Text>

          <Checkbox
            checked={advancedOptions.debug}
            onCheckedChange={(checked) => setAdvancedOptions((prev) => ({ ...prev, debug: checked }))}
            size="1"
          >
            Enable debug mode
          </Checkbox>

          <Checkbox
            checked={advancedOptions.analytics}
            onCheckedChange={(checked) => setAdvancedOptions((prev) => ({ ...prev, analytics: checked }))}
            size="1"
          >
            Detailed analytics
          </Checkbox>

          <Checkbox
            checked={advancedOptions.beta}
            onCheckedChange={(checked) => setAdvancedOptions((prev) => ({ ...prev, beta: checked }))}
            size="1"
            color="orange"
          >
            Beta features
          </Checkbox>
        </div>
      )}
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use clear, descriptive labels** that explain what checking the box means
- **Group related checkboxes** logically with proper spacing
- **Use indeterminate state** for parent checkboxes when some children are selected
- **Provide helpful descriptions** for complex or important choices
- **Use semantic colors** to convey meaning (success for enabled, danger for critical)
- **Match checkbox size** with text size for proper alignment

```jsx
// ✅ Good - Clear labeling and semantic colors
function GoodExample() {
  const [agreed, setAgreed] = React.useState(false);

  return (
    <div className="space-y-2">
      <Checkbox checked={agreed} onCheckedChange={setAgreed} color="success">
        I agree to the Terms of Service
      </Checkbox>
      <Text size="1" color="gray">
        Please review our terms before proceeding
      </Text>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use checkboxes for single yes/no questions** (use Switch instead)
- **Don't forget labels** - checkboxes need clear context
- **Don't use for navigation or actions** - checkboxes are for selection
- **Don't use too many in a single group** without organization
- **Don't use without considering indeterminate state** for hierarchical lists

```jsx
// ❌ Bad - No label, unclear purpose, wrong usage
function BadExample() {
  return (
    <div className="space-y-2">
      <Checkbox /> {/* No label - user doesn't know what this does */}
      <Checkbox>Navigate to dashboard</Checkbox> {/* Wrong - this should be a button */}
    </div>
  );
}
```

## Related Components

- **[Switch](../switch/switch.ai.md)** - For boolean settings and preferences
- **[Button](../button/button.ai.md)** - For actions and commands
- **[Text](../text/text.ai.md)** - For checkbox labels and descriptions
- **[Heading](../heading/heading.ai.md)** - For section headers and fieldset legends
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
