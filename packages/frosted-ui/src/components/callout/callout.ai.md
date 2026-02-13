# Frosted UI Callout Component

A prominent text block for displaying important information, warnings, or supplementary content.

## Overview

The Callout component provides a visually distinct way to highlight important information, warnings, tips, or other supplementary content. It consists of multiple sub-components: Root (container), Icon (optional icon), and Text (content). Built with Frosted UI styling and design tokens to ensure consistency with your design system.

## Basic Usage

```jsx
import { Callout } from '@frosted-ui/core';

function App() {
  return (
    <Callout.Root>
      <Callout.Icon>ℹ️</Callout.Icon>
      <Callout.Text>This is an important piece of information that users should notice.</Callout.Text>
    </Callout.Root>
  );
}
```

## Props

### Callout.Root Props

| Prop           | Type                               | Default     | Description                                       |
| -------------- | ---------------------------------- | ----------- | ------------------------------------------------- |
| `size`         | `'1' \| '2' \| '3'`                | `'2'`       | The size of the callout                           |
| `variant`      | `'soft' \| 'surface' \| 'outline'` | `'soft'`    | The visual style variant                          |
| `color`        | `string`                           | `undefined` | The accent color - supports all Frosted UI colors |
| `highContrast` | `boolean`                          | `false`     | Whether to use high contrast styling              |

### Callout.Icon Props

Inherits all standard div props. The icon automatically inherits color and size from the parent Callout.Root.

### Callout.Text Props

Inherits all Text component props. The text automatically inherits color and size from the parent Callout.Root.

## Examples

### Basic Callouts

```jsx
function BasicExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>This is some helpful information that provides context for the user.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="green">
        <Callout.Icon>✅</Callout.Icon>
        <Callout.Text>Your changes have been saved successfully.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="orange">
        <Callout.Icon>⚠️</Callout.Icon>
        <Callout.Text>Please review your settings before proceeding.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="red">
        <Callout.Icon>❌</Callout.Icon>
        <Callout.Text>An error occurred while processing your request.</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Different Sizes

```jsx
function SizesExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root size="1" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Size 1 (Small) - Compact callout for subtle information</Callout.Text>
      </Callout.Root>

      <Callout.Root size="2" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Size 2 (Default) - Standard callout for general information</Callout.Text>
      </Callout.Root>

      <Callout.Root size="3" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Size 3 (Large) - Prominent callout for important information</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Style Variants

```jsx
function VariantsExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root variant="soft" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Soft variant (Default) - Subtle background styling</Callout.Text>
      </Callout.Root>

      <Callout.Root variant="surface" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Surface variant - More prominent background</Callout.Text>
      </Callout.Root>

      <Callout.Root variant="outline" color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Outline variant - Border-focused styling</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Semantic Colors

```jsx
function SemanticExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root color="info">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>General information that provides helpful context.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="success">
        <Callout.Icon>✅</Callout.Icon>
        <Callout.Text>Operation completed successfully. Your data has been saved.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="warning">
        <Callout.Icon>⚠️</Callout.Icon>
        <Callout.Text>This action cannot be undone. Please proceed with caution.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="danger">
        <Callout.Icon>🚨</Callout.Icon>
        <Callout.Text>Critical error detected. Please contact support immediately.</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Without Icons

```jsx
function NoIconExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root color="blue">
        <Callout.Text>This callout doesn't have an icon but still provides important information.</Callout.Text>
      </Callout.Root>

      <Callout.Root color="green" variant="outline">
        <Callout.Text>Sometimes the content is clear enough without requiring an icon.</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Rich Content Callouts

```jsx
function RichContentExample() {
  return (
    <div className="space-y-4 max-w-[600px]">
      <Callout.Root color="blue" size="3">
        <Callout.Icon>📚</Callout.Icon>
        <Callout.Text>
          <strong>Documentation Update:</strong> We've added new examples and improved the API documentation. Check out
          the <Link href="#">getting started guide</Link> for the latest information.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="orange" variant="outline">
        <Callout.Icon>🔧</Callout.Icon>
        <Callout.Text>
          <strong>Maintenance Notice:</strong> The system will be under maintenance on
          <Code>Sunday, March 15th</Code> from 2:00 AM to 4:00 AM EST. Please save your work before this time.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="green">
        <Callout.Icon>🎉</Callout.Icon>
        <Callout.Text>
          <strong>New Feature Released:</strong> Dark mode is now available! You can enable it in your{' '}
          <Link href="#">profile settings</Link>.
        </Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### High Contrast

```jsx
function HighContrastExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root color="blue">
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>Normal contrast styling for better readability</Callout.Text>
      </Callout.Root>

      <Callout.Root color="blue" highContrast>
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>High contrast styling for improved accessibility</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Form Validation Callouts

```jsx
function ValidationExample() {
  const [email, setEmail] = React.useState('');
  const [errors, setErrors] = React.useState<string[]>([]);

  const validateEmail = (value: string) => {
    const newErrors: string[] = [];
    if (!value) newErrors.push('Email is required');
    if (value && !value.includes('@')) newErrors.push('Please enter a valid email address');
    setErrors(newErrors);
  };

  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">Email Address</Text>
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
      </div>

      {errors.length > 0 && (
        <Callout.Root color="danger" size="1">
          <Callout.Icon>❌</Callout.Icon>
          <Callout.Text>
            {errors.join('. ')}
          </Callout.Text>
        </Callout.Root>
      )}

      {email && errors.length === 0 && (
        <Callout.Root color="success" size="1">
          <Callout.Icon>✅</Callout.Icon>
          <Callout.Text>
            Email format is valid
          </Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
}
```

### Documentation Callouts

```jsx
function DocumentationExample() {
  return (
    <div className="space-y-6 max-w-[700px]">
      <div className="space-y-4">
        <Heading size="4">API Authentication</Heading>
        <Text>To use our API, you'll need to authenticate your requests using an API key.</Text>

        <Callout.Root color="info" variant="surface">
          <Callout.Icon>💡</Callout.Icon>
          <Callout.Text>
            <strong>Tip:</strong> Store your API key securely and never expose it in client-side code. Use environment
            variables for server-side applications.
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="warning">
          <Callout.Icon>⚠️</Callout.Icon>
          <Callout.Text>
            <strong>Rate Limiting:</strong> API requests are limited to 1000 calls per hour. Exceeding this limit will
            result in a <Code>429 Too Many Requests</Code> response.
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="danger" variant="outline">
          <Callout.Icon>🔒</Callout.Icon>
          <Callout.Text>
            <strong>Security Notice:</strong> Always use HTTPS endpoints in production. HTTP requests are not supported
            for security reasons.
          </Callout.Text>
        </Callout.Root>
      </div>
    </div>
  );
}
```

### Status Updates

```jsx
function StatusExample() {
  const [status, setStatus] = React.useState('idle');

  const handleProcess = async () => {
    setStatus('processing');
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus('complete');
    // Reset after a delay
    setTimeout(() => setStatus('idle'), 3000);
  };

  const getStatusCallout = () => {
    switch (status) {
      case 'processing':
        return (
          <Callout.Root color="blue">
            <Callout.Icon>⏳</Callout.Icon>
            <Callout.Text>Processing your request... Please wait.</Callout.Text>
          </Callout.Root>
        );
      case 'complete':
        return (
          <Callout.Root color="green">
            <Callout.Icon>✅</Callout.Icon>
            <Callout.Text>Process completed successfully!</Callout.Text>
          </Callout.Root>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 max-w-[400px]">
      <Button onClick={handleProcess} disabled={status === 'processing'}>
        {status === 'processing' ? 'Processing...' : 'Start Process'}
      </Button>

      {getStatusCallout()}
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="w-full max-w-[600px] space-y-6">
      {/* Using Frosted UI spacing tokens */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Heading size="3" weight="medium">
            System Status
          </Heading>
          <Badge variant="soft" color="green">
            Online
          </Badge>
        </div>

        <div className="space-y-3">
          <Callout.Root color="success" size="1">
            <Callout.Icon>✅</Callout.Icon>
            <Callout.Text>All systems are operational</Callout.Text>
          </Callout.Root>

          <Callout.Root color="info" size="1" variant="outline">
            <Callout.Icon>ℹ️</Callout.Icon>
            <Callout.Text>Next maintenance window: Sunday 2:00 AM - 4:00 AM EST</Callout.Text>
          </Callout.Root>
        </div>
      </Card>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors including `danger`, `warning`, `success`, and `info`. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Callout component includes accessibility considerations:

- **Semantic Structure**: Uses proper semantic elements for screen readers
- **Color Independence**: Information is conveyed through text, not color alone
- **High Contrast**: Optional high contrast mode for better visibility
- **Icon Alternative**: Icons are complementary, with text providing full context
- **Focus Management**: Focusable elements within callouts work correctly

### Accessibility Guidelines

```jsx
// Good: Clear, descriptive content
<Callout.Root color="warning">
  <Callout.Icon>⚠️</Callout.Icon>
  <Callout.Text>
    Warning: This action will permanently delete your data.
  </Callout.Text>
</Callout.Root>

// Good: High contrast for better visibility
<Callout.Root color="danger" highContrast>
  <Callout.Icon>❌</Callout.Icon>
  <Callout.Text>
    Error: Unable to save changes. Please try again.
  </Callout.Text>
</Callout.Root>

// Good: Actionable information
<Callout.Root color="info">
  <Callout.Icon>ℹ️</Callout.Icon>
  <Callout.Text>
    To enable this feature, please <Link href="#">update your subscription</Link>.
  </Callout.Text>
</Callout.Root>
```

## Advanced Usage

### Custom Icons

```jsx
function CustomIconExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Callout.Root color="blue">
        <Callout.Icon>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </Callout.Icon>
        <Callout.Text>Custom SVG icon with proper coloring</Callout.Text>
      </Callout.Root>

      <Callout.Root color="orange">
        <Callout.Icon>
          <Badge size="1" color="orange">
            !
          </Badge>
        </Callout.Icon>
        <Callout.Text>Using a Badge component as an icon</Callout.Text>
      </Callout.Root>
    </div>
  );
}
```

### Dismissible Callouts

```jsx
function DismissibleExample() {
  const [callouts, setCallouts] = React.useState([
    { id: 1, type: 'info', message: 'New features are available in your dashboard' },
    { id: 2, type: 'warning', message: 'Your trial expires in 3 days' }
  ]);

  const dismissCallout = (id: number) => {
    setCallouts(prev => prev.filter(callout => callout.id !== id));
  };

  return (
    <div className="space-y-3 max-w-[500px]">
      {callouts.map((callout) => (
        <Callout.Root key={callout.id} color={callout.type as any}>
          <Callout.Icon>
            {callout.type === 'info' ? 'ℹ️' : '⚠️'}
          </Callout.Icon>
          <Callout.Text className="flex-1">
            {callout.message}
          </Callout.Text>
          <IconButton
            size="1"
            variant="ghost"
            onClick={() => dismissCallout(callout.id)}
            className="ml-2"
          >
            ×
          </IconButton>
        </Callout.Root>
      ))}
    </div>
  );
}
```

### Dynamic Callouts

```jsx
function DynamicExample() {
  const [notifications, setNotifications] = React.useState<Array<{
    id: number;
    type: 'success' | 'warning' | 'danger';
    message: string;
  }>>([]);

  const addNotification = (type: 'success' | 'warning' | 'danger', message: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, message }]);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 5000);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'danger': return '❌';
      default: return 'ℹ️';
    }
  };

  return (
    <div className="space-y-4 max-w-[500px]">
      <div className="flex gap-2">
        <Button
          size="1"
          color="green"
          onClick={() => addNotification('success', 'Operation completed successfully')}
        >
          Success
        </Button>
        <Button
          size="1"
          color="orange"
          onClick={() => addNotification('warning', 'Please review your settings')}
        >
          Warning
        </Button>
        <Button
          size="1"
          color="red"
          onClick={() => addNotification('danger', 'An error occurred')}
        >
          Error
        </Button>
      </div>

      <div className="space-y-2">
        {notifications.map((notification) => (
          <Callout.Root key={notification.id} color={notification.type} size="1">
            <Callout.Icon>{getIcon(notification.type)}</Callout.Icon>
            <Callout.Text>{notification.message}</Callout.Text>
          </Callout.Root>
        ))}
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

- Use clear, actionable text that provides specific information
- Choose appropriate semantic colors that match the message type
- Include relevant icons that reinforce the message
- Keep callout content concise and scannable
- Use callouts sparingly to maintain their impact

### Don'ts

- Don't overuse callouts - they lose impact when used everywhere
- Avoid using callouts for general content that belongs in regular text
- Don't rely solely on color to convey meaning
- Avoid nesting callouts or placing them in constrained spaces
- Don't use callouts for time-sensitive information that might be missed

### Content Guidelines

```jsx
// Good: Clear, specific messaging
<Callout.Root color="warning">
  <Callout.Icon>⚠️</Callout.Icon>
  <Callout.Text>
    Your subscription expires in 3 days. Renew now to avoid service interruption.
  </Callout.Text>
</Callout.Root>

// Good: Actionable information
<Callout.Root color="info">
  <Callout.Icon>ℹ️</Callout.Icon>
  <Callout.Text>
    Enable two-factor authentication to secure your account. <Link href="#">Set up now</Link>.
  </Callout.Text>
</Callout.Root>

// Avoid: Vague or non-actionable content
<Callout.Root color="blue">
  <Callout.Icon>ℹ️</Callout.Icon>
  <Callout.Text>
    Something happened.
  </Callout.Text>
</Callout.Root>
```

## Related Components

- **[Text](../text/text.ai.md)** - For the callout content and general text styling
- **[Badge](../badge/badge.ai.md)** - For status indicators that complement callouts
- **[Card](../card/card.ai.md)** - For containing callouts within larger content areas
- **[Button](../button/button.ai.md)** - For actions within or related to callouts
- **[Link](../link/link.ai.md)** - For actionable links within callout content
