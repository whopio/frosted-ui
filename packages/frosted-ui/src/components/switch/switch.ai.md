# Frosted UI Switch Component

A toggle switch component for boolean settings and preferences. The Switch component provides a clear visual indicator for on/off states with smooth animations and excellent accessibility support.

## Overview

The Switch component is built on Radix UI primitives and provides a polished toggle interface for boolean controls. It features smooth thumb animations, multiple size options, full color system support, and automatic alignment with text content. Perfect for settings panels, preferences, and feature toggles.

Key features:

- **3 Size Options**: Compact (size 1) to large (size 3) with automatic text alignment
- **Smooth Animations**: Fluid thumb movement with optimized timing curves
- **Complete Color System**: All Frosted UI colors + semantic colors
- **High Contrast Mode**: Enhanced visibility for accessibility
- **Text Alignment**: Automatically aligns with text line heights
- **Radix Primitives**: Built on robust, accessible foundation
- **Controlled & Uncontrolled**: Supports both usage patterns

## Basic Usage

```jsx
import { Switch } from '@frosted-ui/core';

function BasicExample() {
  const [enabled, setEnabled] = React.useState(false);

  return <Switch checked={enabled} onCheckedChange={setEnabled} />;
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop              | Type                         | Default     | Description                                        |
| ----------------- | ---------------------------- | ----------- | -------------------------------------------------- |
| `size`            | `'1' \| '2' \| '3'`          | `'2'`       | Controls switch size and aligns with text          |
| `color`           | `string`                     | `undefined` | Color from Frosted UI palette or semantic colors   |
| `highContrast`    | `boolean`                    | `false`     | Enable high contrast mode for better accessibility |
| `checked`         | `boolean`                    | -           | Controlled checked state                           |
| `defaultChecked`  | `boolean`                    | -           | Default checked state for uncontrolled usage       |
| `onCheckedChange` | `(checked: boolean) => void` | -           | Callback when checked state changes                |
| `disabled`        | `boolean`                    | `false`     | Disable the switch                                 |

Plus all standard Radix Switch.Root props (`name`, `value`, `required`, etc.).

## Examples

### Sizes

```jsx
function SizeExample() {
  return (
    <div className="flex items-center gap-2">
      <Switch size="1" defaultChecked />
      <Switch size="2" defaultChecked />
      <Switch size="3" defaultChecked />
    </div>
  );
}
```

### Colors

```jsx
function ColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Switch color="indigo" defaultChecked />
      <Switch color="cyan" defaultChecked />
      <Switch color="orange" defaultChecked />
      <Switch color="crimson" defaultChecked />
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticColorExample() {
  return (
    <div className="flex items-center gap-2">
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="danger" defaultChecked />
      <Switch color="info" defaultChecked />
    </div>
  );
}
```

### High Contrast Mode

```jsx
function HighContrastExample() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Switch color="indigo" defaultChecked />
      <Switch color="indigo" defaultChecked highContrast />
      <Switch color="cyan" defaultChecked />
      <Switch color="cyan" defaultChecked highContrast />
      <Switch color="orange" defaultChecked />
      <Switch color="orange" defaultChecked highContrast />
      <Switch color="crimson" defaultChecked />
      <Switch color="crimson" defaultChecked highContrast />
    </div>
  );
}
```

### Text Alignment

```jsx
function TextAlignmentExample() {
  return (
    <div className="flex flex-col gap-3">
      <Text as="label" size="2">
        <div className="flex items-center gap-2">
          <Switch size="1" defaultChecked />
          Enable notifications
        </div>
      </Text>

      <Text as="label" size="3">
        <div className="flex items-center gap-2">
          <Switch size="2" defaultChecked />
          Auto-save documents
        </div>
      </Text>

      <Text as="label" size="4">
        <div className="flex items-center gap-2">
          <Switch size="3" defaultChecked />
          Dark mode
        </div>
      </Text>
    </div>
  );
}
```

### Controlled vs Uncontrolled

```jsx
function ControlledExample() {
  // Controlled
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [pushNotifications, setPushNotifications] = React.useState(false);

  return (
    <div className="space-y-3">
      <Text as="label" size="2">
        <div className="flex items-center gap-2">
          <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
          Email notifications
        </div>
      </Text>

      <Text as="label" size="2">
        <div className="flex items-center gap-2">
          <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
          Push notifications
        </div>
      </Text>

      {/* Uncontrolled */}
      <Text as="label" size="2">
        <div className="flex items-center gap-2">
          <Switch defaultChecked />
          Remember me
        </div>
      </Text>
    </div>
  );
}
```

### Settings Panel

```jsx
function SettingsExample() {
  const [settings, setSettings] = React.useState({
    autoSave: true,
    notifications: false,
    analytics: true,
    darkMode: false,
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 bg-panel-solid border border-gray-6 rounded-4 space-y-4 max-w-[300px]">
      <Heading size="3">Preferences</Heading>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Text size="2">Auto-save</Text>
          <Switch
            checked={settings.autoSave}
            onCheckedChange={(checked) => updateSetting('autoSave', checked)}
            color="success"
          />
        </div>

        <div className="flex items-center justify-between">
          <Text size="2">Notifications</Text>
          <Switch
            checked={settings.notifications}
            onCheckedChange={(checked) => updateSetting('notifications', checked)}
            color="blue"
          />
        </div>

        <div className="flex items-center justify-between">
          <Text size="2">Analytics</Text>
          <Switch
            checked={settings.analytics}
            onCheckedChange={(checked) => updateSetting('analytics', checked)}
            color="orange"
          />
        </div>

        <div className="flex items-center justify-between">
          <Text size="2">Dark mode</Text>
          <Switch
            checked={settings.darkMode}
            onCheckedChange={(checked) => updateSetting('darkMode', checked)}
            color="gray"
          />
        </div>
      </div>
    </div>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  const [formData, setFormData] = React.useState({
    emailMarketing: false,
    productUpdates: true,
    securityAlerts: true,
  });

  return (
    <form className="space-y-4 max-w-[400px]">
      <Heading size="3">Email Preferences</Heading>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Switch
            name="emailMarketing"
            checked={formData.emailMarketing}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, emailMarketing: checked }))}
            color="blue"
          />
          <div className="space-y-1">
            <Text size="2" weight="medium">
              Marketing emails
            </Text>
            <Text size="1" color="gray">
              Receive updates about new features and promotions
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Switch
            name="productUpdates"
            checked={formData.productUpdates}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, productUpdates: checked }))}
            color="green"
          />
          <div className="space-y-1">
            <Text size="2" weight="medium">
              Product updates
            </Text>
            <Text size="1" color="gray">
              Get notified when we release new features
            </Text>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Switch
            name="securityAlerts"
            checked={formData.securityAlerts}
            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, securityAlerts: checked }))}
            color="orange"
            disabled={false}
          />
          <div className="space-y-1">
            <Text size="2" weight="medium">
              Security alerts
            </Text>
            <Text size="1" color="gray">
              Important security updates (recommended)
            </Text>
          </div>
        </div>
      </div>

      <Button type="submit" variant="solid">
        Save Preferences
      </Button>
    </form>
  );
}
```

### Disabled States

```jsx
function DisabledExample() {
  return (
    <div className="space-y-3">
      <Text as="label" size="2" color="gray">
        <div className="flex items-center gap-2">
          <Switch disabled defaultChecked />
          Feature disabled (checked)
        </div>
      </Text>

      <Text as="label" size="2" color="gray">
        <div className="flex items-center gap-2">
          <Switch disabled />
          Feature disabled (unchecked)
        </div>
      </Text>
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
      {/* Card with switches */}
      <div className="p-4 bg-gray-1 border border-gray-6 rounded-4">
        <div className="flex items-center justify-between mb-3">
          <Heading size="3">Privacy</Heading>
          <Switch color="blue" size="1" defaultChecked />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Text size="2">Make profile public</Text>
            <Switch size="1" />
          </div>
          <div className="flex items-center justify-between">
            <Text size="2">Show online status</Text>
            <Switch size="1" defaultChecked />
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
    <div className="space-y-4 max-w-[350px]">
      <div className="space-y-2">
        <Heading size="4" weight="bold">
          Account Settings
        </Heading>
        <Text size="2" color="gray">
          Manage your account preferences and privacy settings.
        </Text>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <Text size="2" weight="medium">
              Two-factor authentication
            </Text>
            <Text size="1" color="gray">
              Add an extra layer of security
            </Text>
          </div>
          <Switch color="success" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Text size="2" weight="medium">
              Login alerts
            </Text>
            <Text size="1" color="gray">
              Get notified of new sign-ins
            </Text>
          </div>
          <Switch color="blue" defaultChecked />
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The Switch component uses specific color steps for different states:

- **Checked state**: Uses step 9 for the track background
- **Thumb**: Always white with appropriate shadows
- **Track unchecked**: Uses gray-a4 for subtle background
- **Focus ring**: Uses the focus color token
- **High contrast**: Adds overlay for enhanced visibility

## Accessibility

The Switch component includes comprehensive accessibility features:

- **Keyboard Navigation**: Space/Enter to toggle, proper focus management
- **Screen Reader Support**: Proper role and state announcements
- **High Contrast Support**: Enhanced visibility with `highContrast` prop
- **Label Association**: Works seamlessly with labels and form controls
- **Focus Indicators**: Clear visual focus ring
- **State Communication**: Clear checked/unchecked state indication

```jsx
function AccessibilityExample() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="space-y-3">
      {/* Proper labeling */}
      <label className="flex items-center gap-2">
        <Switch checked={enabled} onCheckedChange={setEnabled} highContrast aria-describedby="notifications-help" />
        <Text size="2">Enable notifications</Text>
      </label>
      <Text id="notifications-help" size="1" color="gray">
        You'll receive alerts when important events occur
      </Text>

      {/* Form field */}
      <fieldset className="space-y-2">
        <legend>
          <Text size="2" weight="medium">
            Privacy preferences
          </Text>
        </legend>
        <label className="flex items-center gap-2">
          <Switch name="public-profile" />
          <Text size="2">Make profile public</Text>
        </label>
        <label className="flex items-center gap-2">
          <Switch name="analytics" defaultChecked />
          <Text size="2">Allow analytics</Text>
        </label>
      </fieldset>
    </div>
  );
}
```

## Advanced Usage

### Dynamic Settings

```jsx
function DynamicSettingsExample() {
  const [permissions, setPermissions] = React.useState({
    camera: false,
    microphone: false,
    location: true,
    notifications: true,
  });

  const permissionLabels = {
    camera: 'Camera access',
    microphone: 'Microphone access',
    location: 'Location services',
    notifications: 'Push notifications',
  };

  const updatePermission = (key: string, value: boolean) => {
    setPermissions(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-4">
      <Heading size="3">App Permissions</Heading>

      <div className="space-y-3">
        {Object.entries(permissions).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <Text size="2">{permissionLabels[key]}</Text>
            <Switch
              checked={value}
              onCheckedChange={(checked) => updatePermission(key, checked)}
              color={value ? 'success' : 'gray'}
            />
          </div>
        ))}
      </div>

      <Button
        variant="solid"
        disabled={Object.values(permissions).every(v => !v)}
      >
        Save Changes
      </Button>
    </div>
  );
}
```

### Conditional Features

```jsx
function ConditionalFeaturesExample() {
  const [features, setFeatures] = React.useState({
    analytics: false,
    betaFeatures: false,
    autoBackup: true,
  });

  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="flex items-center justify-between">
        <div>
          <Text size="2" weight="medium">
            Analytics
          </Text>
          <Text size="1" color="gray">
            Help improve our product
          </Text>
        </div>
        <Switch
          checked={features.analytics}
          onCheckedChange={(checked) => setFeatures((prev) => ({ ...prev, analytics: checked }))}
          color="blue"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Text size="2" weight="medium">
            Beta features
          </Text>
          <Text size="1" color="gray">
            Access experimental features
          </Text>
        </div>
        <Switch
          checked={features.betaFeatures}
          onCheckedChange={(checked) => setFeatures((prev) => ({ ...prev, betaFeatures: checked }))}
          color="orange"
        />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <Text size="2" weight="medium">
            Auto-backup
          </Text>
          <Text size="1" color="gray">
            Automatically save your work
          </Text>
        </div>
        <Switch
          checked={features.autoBackup}
          onCheckedChange={(checked) => setFeatures((prev) => ({ ...prev, autoBackup: checked }))}
          color="success"
        />
      </div>

      {features.betaFeatures && (
        <div className="p-3 bg-orange-1 border border-orange-6 rounded-3">
          <Text size="1" color="orange">
            Beta features may be unstable and could change without notice.
          </Text>
        </div>
      )}
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use clear labels** that describe what the switch controls
- **Match switch size** with text size for proper alignment
- **Provide helpful descriptions** for complex settings
- **Use semantic colors** to convey meaning (success for enabled features)
- **Group related switches** logically in settings panels
- **Show immediate feedback** when switch state affects other UI

```jsx
// ✅ Good - Clear labeling and semantic colors
function GoodExample() {
  const [emailEnabled, setEmailEnabled] = React.useState(true);

  return (
    <div className="flex items-center justify-between">
      <div>
        <Text size="2" weight="medium">
          Email notifications
        </Text>
        <Text size="1" color="gray">
          Get notified of important updates
        </Text>
      </div>
      <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} color="success" />
    </div>
  );
}
```

### Don'ts ❌

- **Don't use switches for single actions** (use buttons instead)
- **Don't forget labels** - switches need clear context
- **Don't use without feedback** when state affects other UI
- **Don't disable without explanation** - show why it's disabled
- **Don't use for navigation** - switches are for settings, not actions

```jsx
// ❌ Bad - No label, unclear purpose, wrong size
function BadExample() {
  return (
    <div className="flex items-center gap-2">
      <Switch size="3" /> {/* Too large for the context */}
      <Switch /> {/* No label - user doesn't know what this controls */}
    </div>
  );
}
```

## Related Components

- **[Checkbox](../checkbox/checkbox.ai.md)** - For multiple selections and lists
- **[Button](../button/button.ai.md)** - For single actions and commands
- **[Text](../text/text.ai.md)** - For switch labels and descriptions
- **[Heading](../heading/heading.ai.md)** - For settings section headers
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling

```

```
