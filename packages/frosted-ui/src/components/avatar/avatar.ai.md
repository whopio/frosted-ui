# Frosted UI Avatar Component

A versatile avatar component for displaying user profile images with automatic fallback handling and consistent sizing across your application.

## Overview

The Avatar component displays user profile images with intelligent fallback behavior. When an image fails to load or is not provided, it shows initials or custom fallback content. The component integrates seamlessly with Frosted UI's color system and provides flexible sizing options.

## Basic Usage

```jsx
import { Avatar } from 'frosted-ui';

function UserProfile() {
  return (
    <Avatar
      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=face&fit=crop"
      fallback="John Doe"
      color="blue"
    />
  );
}
```

## Props

### Required Props

| Prop       | Type              | Description                                 |
| ---------- | ----------------- | ------------------------------------------- |
| `fallback` | `React.ReactNode` | Content to display when image fails to load |

### Optional Props

| Prop                    | Type                                                                                                                                                                                                                                                                                                                                                          | Default   | Description                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------- |
| `src`                   | `string`                                                                                                                                                                                                                                                                                                                                                      | -         | Image URL                                   |
| `alt`                   | `string`                                                                                                                                                                                                                                                                                                                                                      | -         | Alt text for the image                      |
| `size`                  | `'1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`                                                                                                                                                                                                                                                                                                 | `'3'`     | Avatar size                                 |
| `variant`               | `'round' \| 'square'`                                                                                                                                                                                                                                                                                                                                         | `'round'` | Avatar shape                                |
| `color`                 | `'gray' \| 'gold' \| 'bronze' \| 'brown' \| 'yellow' \| 'amber' \| 'tomato' \| 'red' \| 'ruby' \| 'crimson' \| 'pink' \| 'plum' \| 'purple' \| 'violet' \| 'iris' \| 'cyan' \| 'teal' \| 'jade' \| 'green' \| 'grass' \| 'mint' \| 'sky' \| 'blue' \| 'orange' \| 'indigo' \| 'magenta' \| 'lemon' \| 'lime' \| 'danger' \| 'warning' \| 'success' \| 'info'` | -         | Fallback background color                   |
| `highContrast`          | `boolean`                                                                                                                                                                                                                                                                                                                                                     | `false`   | High contrast mode for better accessibility |
| `onLoadingStatusChange` | `(status: 'idle' \| 'loading' \| 'loaded' \| 'error') => void`                                                                                                                                                                                                                                                                                                | -         | Callback for image loading status           |

### Additional HTML Image Props

The Avatar component accepts all standard HTML `img` element props like `loading`, `crossOrigin`, etc.

## Size Scale

The Avatar component uses Frosted UI's consistent sizing scale:

| Size | Dimensions | Use Case                     |
| ---- | ---------- | ---------------------------- |
| `1`  | 24px       | Tiny avatars, inline usage   |
| `2`  | 32px       | Small avatars, compact lists |
| `3`  | 40px       | Default size, most common    |
| `4`  | 48px       | Medium avatars               |
| `5`  | 64px       | Large avatars                |
| `6`  | 80px       | Profile headers              |
| `7`  | 96px       | Large profile displays       |
| `8`  | 128px      | Hero sections                |
| `9`  | 160px      | Maximum size                 |

## Examples

### Basic Avatar with Image

```jsx
<Avatar
  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=face&fit=crop"
  fallback="Cameron Zoub"
  color="blue"
/>
```

### Avatar with Fallback Only

```jsx
<Avatar fallback="John Doe" color="green" />
```

### Different Sizes

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <Avatar fallback="S" size="1" color="blue" />
  <Avatar fallback="M" size="3" color="blue" />
  <Avatar fallback="L" size="5" color="blue" />
  <Avatar fallback="XL" size="7" color="blue" />
</div>
```

### Square Variant

```jsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Avatar
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=face&fit=crop"
    fallback="Cameron Zoub"
    variant="square"
    color="blue"
  />
  <Avatar fallback="John Doe" variant="square" color="green" />
</div>
```

### Different Colors

```jsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Avatar fallback="IN" color="indigo" />
  <Avatar fallback="CY" color="cyan" />
  <Avatar fallback="OR" color="orange" />
  <Avatar fallback="CR" color="crimson" />
</div>
```

### High Contrast Mode

```jsx
<div style={{ display: 'flex', gap: '16px' }}>
  <Avatar fallback="Normal" color="indigo" />
  <Avatar fallback="High Contrast" color="indigo" highContrast />
</div>
```

### Custom Fallback Content

```jsx
<Avatar
  fallback={
    <svg viewBox="0 0 64 64" fill="currentColor" width="20" height="20">
      <path d="M41.5 14c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S33 27.962 33 23 36.813 14 41.5 14zM56.289 43.609C57.254 46.21 55.3 49 52.506 49c-2.759 0-11.035 0-11.035 0 .689-5.371-4.525-10.747-8.541-13.03 2.388-1.171 5.149-1.834 8.07-1.834C48.044 34.136 54.187 37.944 56.289 43.609zM37.289 46.609C38.254 49.21 36.3 52 33.506 52c-5.753 0-17.259 0-23.012 0-2.782 0-4.753-2.779-3.783-5.392 2.102-5.665 8.245-9.472 15.289-9.472S35.187 40.944 37.289 46.609zM21.5 17c4.687 0 8.5 4.038 8.5 9s-3.813 9-8.5 9S13 30.962 13 26 16.813 17 21.5 17z" />
    </svg>
  }
  color="gray"
/>
```

### Loading Status Handling

```jsx
function AvatarWithLoadingStatus() {
  const [status, setStatus] = React.useState('idle');

  return (
    <div>
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=face&fit=crop"
        fallback="Cameron Zoub"
        color="blue"
        onLoadingStatusChange={setStatus}
      />
      <Text size="2" color="gray">
        Status: {status}
      </Text>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

The Avatar component works seamlessly with Frosted UI's custom Tailwind tokens:

### Color Tokens

```jsx
{
  /* Use Frosted UI color scale */
}
<Avatar fallback="JD" color="blue" className="ring-2 ring-blue-6 ring-offset-2" />;

{
  /* Semi-transparent colors */
}
<Avatar fallback="JD" color="blue" className="ring-1 ring-blue-a6" />;

{
  /* Surface colors */
}
<Avatar fallback="JD" color="blue" className="bg-blue-surface" />;
```

### Typography Tokens

```jsx
{
  /* Use Frosted UI typography scale */
}
<div className="text-center">
  <Avatar fallback="User" size="6" />
  <Heading size="4" weight="medium" className="mt-2">
    User Name
  </Heading>
  <Text size="2" color="gray">
    @username
  </Text>
</div>;
```

### Spacing and Layout

```jsx
{
  /* Use consistent spacing */
}
<div className="flex items-center gap-3">
  <Avatar fallback="JD" size="2" />
  <div className="space-y-1">
    <Heading size="3" weight="medium">
      John Doe
    </Heading>
    <Text size="2" color="gray">
      Designer
    </Text>
  </div>
</div>;
```

## Accessibility

### Screen Reader Support

- Images include proper `alt` attributes when provided
- Fallback text is accessible to screen readers
- Loading states are communicated appropriately

### High Contrast Mode

Enable high contrast mode for better accessibility:

```jsx
<Avatar fallback="High Contrast" color="blue" highContrast />
```

## Advanced Usage

### User Lists

```jsx
function UserList({ users }) {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center space-x-3">
          <Avatar src={user.avatar} fallback={user.name} color="blue" size="2" />
          <div>
            <Heading size="3" weight="medium">
              {user.name}
            </Heading>
            <Text size="2" color="gray">
              {user.email}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Profile Headers

```jsx
function ProfileHeader({ user }) {
  return (
    <div className="text-center">
      <Avatar src={user.avatar} fallback={user.name} color="blue" size="8" className="mx-auto mb-4" />
      <Heading size="6" weight="bold">
        {user.name}
      </Heading>
      <Text size="3" color="gray">
        {user.title}
      </Text>
    </div>
  );
}
```

### With Frosted UI Styling

```jsx
<Avatar src="/avatar.jpg" fallback="Styled" color="blue" size="3" className="ring-2 ring-blue-a6 shadow-lg bg-blue-2" />
```

## Best Practices

### 1. Always Provide Fallback Content

```jsx
// ✅ Good - Always provide fallback
<Avatar src="/avatar.jpg" fallback="John Doe" />

// ❌ Bad - Missing fallback
<Avatar src="/avatar.jpg" />
```

### 2. Use Appropriate Sizes

```jsx
// ✅ Good - Size matches context
<Avatar size="2" fallback="JD" /> {/* In compact lists */}
<Avatar size="6" fallback="JD" /> {/* In profile headers */}

// ❌ Bad - Size too large for context
<Avatar size="8" fallback="JD" /> {/* In a small list item */}
```

### 3. Choose Colors Consistently

```jsx
// ✅ Good - Consistent color scheme
<Avatar fallback="User 1" color="blue" />
<Avatar fallback="User 2" color="blue" />

// ✅ Good - Meaningful color variation
<Avatar fallback="Admin" color="red" />
<Avatar fallback="User" color="blue" />
```

### 4. Handle Loading States

```jsx
// ✅ Good - Handle loading states
<Avatar
  src="/avatar.jpg"
  fallback="Loading..."
  onLoadingStatusChange={(status) => {
    if (status === 'error') {
      console.warn('Avatar failed to load');
    }
  }}
/>
```

## Automatic Initials Generation

The Avatar component automatically generates initials from the fallback text:

| Input            | Generated Initials |
| ---------------- | ------------------ |
| `"John Doe"`     | `"JD"`             |
| `"Cameron Zoub"` | `"CZ"`             |
| `"Grace Hopper"` | `"GH"`             |
| `"artur_bien"`   | `"AB"`             |
| `"Single"`       | `"S"`              |

## CSS Custom Properties

The Avatar component exposes CSS custom properties for advanced customization:

```css
.custom-avatar {
  --avatar-size: 48px; /* Custom size */
}
```

## Related Components

- **[AvatarGroup](../avatar-group/avatar-group.ai.md)** - For displaying multiple avatars in a group
- **[IconButton](../icon-button/icon-button.ai.md)** - For clickable avatar actions
- **[Badge](../badge/badge.ai.md)** - For avatar status indicators

## Color Support

The Avatar component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

All colors automatically support both light and dark themes with proper contrast ratios.
