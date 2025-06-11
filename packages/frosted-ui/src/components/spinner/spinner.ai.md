# Frosted UI Spinner Component

A loading indicator component that displays an animated spinner. The Spinner component can either be used standalone or wrapped around other content to show loading states while preserving layout dimensions.

## Overview

The Spinner component provides a smooth, animated loading indicator that integrates seamlessly with Frosted UI's design system. It features a unique 8-segment rotating animation and can be used in two modes: standalone or as a wrapper component that conditionally shows/hides child content based on the loading state.

Key features:

- **Two Usage Modes**: Standalone spinner or wrapper for conditional loading
- **6 Size Options**: From compact (size 1) to large (size 6)
- **Smooth Animation**: 8-segment fade animation with optimal timing
- **Layout Preservation**: Maintains child dimensions when loading
- **Accessibility**: Proper handling of hidden content with `inert` attribute
- **Color Inheritance**: Uses `currentColor` for easy theming

## Basic Usage

```jsx
import { Spinner } from '@frosted-ui/core';

// Standalone spinner
function BasicExample() {
  return <Spinner />;
}

// Conditional loading wrapper
function LoadingExample() {
  const [loading, setLoading] = React.useState(true);

  return (
    <Spinner loading={loading}>
      <button>Click me</button>
    </Spinner>
  );
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop       | Type                                     | Default | Description                           |
| ---------- | ---------------------------------------- | ------- | ------------------------------------- |
| `size`     | `'1' \| '2' \| '3' \| '4' \| '5' \| '6'` | `'2'`   | Controls spinner size                 |
| `loading`  | `boolean`                                | `true`  | Whether to show spinner or children   |
| `children` | `ReactNode`                              | -       | Content to show when loading is false |

Plus all standard HTML span attributes (`className`, `style`, etc.).

## Examples

### Sizes

```jsx
function SizeExample() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="1" />
      <Spinner size="2" />
      <Spinner size="3" />
      <Spinner size="4" />
      <Spinner size="5" />
      <Spinner size="6" />
    </div>
  );
}
```

### Standalone Spinner

```jsx
function StandaloneExample() {
  return (
    <div className="flex flex-col items-center gap-3 p-8">
      <Spinner size="4" />
      <Text size="2" color="gray">
        Loading...
      </Text>
    </div>
  );
}
```

### Conditional Loading Wrapper

```jsx
import { Switch } from '@frosted-ui/core';

function ConditionalExample() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch checked={loading} onCheckedChange={setLoading} />
        <Text size="2">Toggle loading state</Text>
      </div>

      <div className="flex gap-4">
        <Spinner loading={loading}>
          <Switch defaultChecked />
        </Spinner>

        <Spinner loading={loading}>
          <Button>Click me</Button>
        </Spinner>
      </div>
    </div>
  );
}
```

### Loading States in Forms

```jsx
function FormLoadingExample() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <form className="flex flex-col gap-3 max-w-[300px]">
      <input
        type="email"
        placeholder="Enter email"
        disabled={isSubmitting}
        className="p-2 border border-gray-7 rounded"
      />

      <Spinner loading={isSubmitting}>
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Spinner>
    </form>
  );
}
```

### Loading Cards

```jsx
function LoadingCardExample() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 bg-panel-solid border border-gray-6 rounded-4 max-w-[300px]">
      <Spinner loading={loading}>
        <div className="space-y-3">
          <Heading size="3">Article Title</Heading>
          <Text size="2" color="gray">
            This is the article content that will appear after loading completes.
          </Text>
          <div className="flex gap-2">
            <Button variant="soft" size="1">
              Read
            </Button>
            <Button variant="ghost" size="1">
              Share
            </Button>
          </div>
        </div>
      </Spinner>
    </div>
  );
}
```

### Icon Loading States

```jsx
import { Download16, Save16 } from '@frosted-ui/icons';

function IconLoadingExample() {
  const [downloading, setDownloading] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  return (
    <div className="flex gap-2">
      <Button variant="solid" color="blue" disabled={downloading} onClick={() => setDownloading(true)}>
        <Spinner loading={downloading} size="1">
          <Download16 />
        </Spinner>
        Download
      </Button>

      <Button variant="surface" disabled={saving} onClick={() => setSaving(true)}>
        <Spinner loading={saving} size="1">
          <Save16 />
        </Spinner>
        Save
      </Button>
    </div>
  );
}
```

### Data Loading

```jsx
function DataLoadingExample() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'John Doe', role: 'Developer' },
        { id: 2, name: 'Jane Smith', role: 'Designer' },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="space-y-3">
      <Heading size="4">Team Members</Heading>

      <Spinner loading={loading}>
        <div className="space-y-2">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-3 p-3 bg-gray-1 rounded-3">
              <div className="w-8 h-8 bg-blue-9 rounded-full flex items-center justify-center">
                <Text size="1" color="white" weight="medium">
                  {user.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </Text>
              </div>
              <div>
                <Text size="2" weight="medium">
                  {user.name}
                </Text>
                <Text size="1" color="gray">
                  {user.role}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Spinner>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Color Theming

```jsx
function ColorThemingExample() {
  return (
    <div className="flex items-center gap-4">
      {/* Default color (inherits from parent) */}
      <div className="text-gray-11">
        <Spinner size="3" />
      </div>

      {/* Themed colors */}
      <div className="text-blue-9">
        <Spinner size="3" />
      </div>

      <div className="text-green-9">
        <Spinner size="3" />
      </div>

      <div className="text-orange-9">
        <Spinner size="3" />
      </div>
    </div>
  );
}
```

### Layout Integration

```jsx
function LayoutIntegrationExample() {
  return (
    <div className="flex flex-col gap-4">
      {/* Centered loading */}
      <div className="flex justify-center items-center min-h-[200px] bg-gray-1 rounded-4">
        <div className="flex flex-col items-center gap-3">
          <Spinner size="4" className="text-blue-9" />
          <Text size="2" color="gray">
            Loading content...
          </Text>
        </div>
      </div>

      {/* Inline loading */}
      <div className="flex items-center gap-2">
        <Text size="2">Processing</Text>
        <Spinner size="1" className="text-blue-9" />
      </div>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="flex items-center gap-2">
        <Heading size="4">Dashboard</Heading>
        {loading && <Spinner size="2" className="text-blue-9" />}
      </div>

      <Spinner loading={loading}>
        <div className="space-y-3">
          <Text size="3">Welcome back!</Text>
          <Text size="2" color="gray">
            Here's what's happening with your account today.
          </Text>
        </div>
      </Spinner>
    </div>
  );
}
```

## Accessibility

The Spinner component includes comprehensive accessibility features:

- **Hidden Content Management**: Uses `inert` attribute to disable hidden content
- **Screen Reader Support**: Hidden content is properly excluded from accessibility tree
- **Visual Indicators**: Clear visual loading state for all users
- **Layout Preservation**: Maintains consistent layout during loading transitions
- **Focus Management**: Disabled elements cannot receive focus during loading

```jsx
function AccessibilityExample() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="space-y-3">
      <Spinner loading={loading}>
        <div>
          <label htmlFor="email" className="block text-2 font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-7 rounded"
            aria-describedby="email-help"
          />
          <Text id="email-help" size="1" color="gray">
            We'll never share your email address.
          </Text>
        </div>
      </Spinner>

      <Button onClick={() => setLoading(!loading)}>{loading ? 'Stop Loading' : 'Start Loading'}</Button>
    </div>
  );
}
```

## Advanced Usage

### Custom Loading Indicator

```jsx
function CustomLoadingExample() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Spinner loading={loading} size="2" className="text-blue-9" />
        <Text size="2" color={loading ? 'gray' : 'inherit'}>
          {loading ? 'Updating...' : 'Content loaded'}
        </Text>
      </div>

      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
    </div>
  );
}
```

### Multi-State Loading

```jsx
function MultiStateExample() {
  const [state, setState] = React.useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleAction = async () => {
    setState('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setState('success');
      setTimeout(() => setState('idle'), 1000);
    } catch (error) {
      setState('error');
    }
  };

  return (
    <div className="space-y-3">
      <Spinner loading={state === 'loading'}>
        <Button
          onClick={handleAction}
          disabled={state === 'loading'}
          variant={state === 'success' ? 'solid' : 'surface'}
          color={state === 'success' ? 'success' : state === 'error' ? 'danger' : undefined}
        >
          {state === 'success' ? 'Success!' : state === 'error' ? 'Error' : 'Start Process'}
        </Button>
      </Spinner>

      {state === 'loading' && (
        <Text size="2" color="gray">
          Processing your request...
        </Text>
      )}
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use loading prop** to conditionally show/hide content
- **Provide loading feedback** with text when appropriate
- **Match spinner size** to the context (small for buttons, larger for page sections)
- **Use color theming** with text color classes for brand consistency
- **Preserve layout** by wrapping content rather than removing it
- **Disable interactions** during loading states

```jsx
// ✅ Good - Clear loading states with proper feedback
function GoodExample() {
  const [saving, setSaving] = React.useState(false);

  return (
    <div className="flex items-center gap-2">
      <Spinner loading={saving} size="1">
        <CheckCircle16 />
      </Spinner>
      <Text size="2" color={saving ? 'gray' : 'success'}>
        {saving ? 'Saving...' : 'Saved successfully'}
      </Text>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use without user feedback** for long operations
- **Don't forget to disable interactions** during loading
- **Don't use oversized spinners** for small UI elements
- **Don't remove content entirely** (use loading prop instead)
- **Don't use multiple spinners** for the same loading state

```jsx
// ❌ Bad - No feedback, wrong size, removes content
function BadExample() {
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      {loading ? (
        <Spinner size="6" /> // Too large for this context
      ) : (
        <Button>Click me</Button> // Content disappears completely
      )}
    </div>
  );
}
```

## Related Components

- **[Button](../button/button.ai.md)** - For loading states in buttons
- **[IconButton](../icon-button/icon-button.ai.md)** - For loading states in icon buttons
- **[Skeleton](../skeleton/skeleton.ai.md)** - For placeholder loading states with content structure
- **[Text](../text/text.ai.md)** - For loading status messages
- **[Switch](../switch/switch.ai.md)** - Example component that works well with Spinner
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
