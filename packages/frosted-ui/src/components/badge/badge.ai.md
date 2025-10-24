# Frosted UI Badge Component

A versatile component for displaying status indicators, labels, and categorical information with multiple visual variants and semantic color support.

## Overview

The Badge component provides a clean, consistent way to display short pieces of information like status indicators, labels, counts, or categories. It offers four distinct visual variants (solid, soft, surface, outline) and supports both regular and high-contrast modes for optimal accessibility. The component automatically handles typography scaling and integrates seamlessly with Frosted UI's color system.

## Basic Usage

```jsx
import { Badge } from 'frosted-ui';

function StatusIndicator() {
  return <Badge>New</Badge>;
}
```

## Props

| Prop           | Type                                          | Default     | Description                              |
| -------------- | --------------------------------------------- | ----------- | ---------------------------------------- |
| `size`         | `'1' \| '2'`                                  | `'1'`       | Size of the badge                        |
| `variant`      | `'solid' \| 'soft' \| 'surface' \| 'outline'` | `'soft'`    | Visual style variant                     |
| `color`        | All Frosted UI colors + semantic colors       | `undefined` | Color theme for the badge                |
| `highContrast` | `boolean`                                     | `false`     | High contrast mode for better visibility |

## Size Scale

The Badge component offers two carefully designed sizes:

| Size | Font Size | Padding  | Use Case                        |
| ---- | --------- | -------- | ------------------------------- |
| `1`  | 12px      | 2px 8px  | Default size, inline usage      |
| `2`  | 14px      | 6px 16px | Larger badges, standalone usage |

## Variants

### Solid

High-impact badges with solid background color. Perfect for primary status indicators.

```jsx
<Badge variant="solid" color="blue">
  Published
</Badge>
```

### Soft (Default)

Subtle badges with light background and colored text. Great for secondary information.

```jsx
<Badge variant="soft" color="green">
  Available
</Badge>
```

### Surface

Glass-morphism style with surface background and subtle border. Ideal for modern interfaces.

```jsx
<Badge variant="surface" color="purple">
  Premium
</Badge>
```

### Outline

Minimal badges with border only. Perfect for subtle categorization.

```jsx
<Badge variant="outline" color="gray">
  Draft
</Badge>
```

## Examples

### Basic Status Badges

```jsx
<div className="flex gap-2">
  <Badge variant="solid" color="success">
    Active
  </Badge>
  <Badge variant="soft" color="warning">
    Pending
  </Badge>
  <Badge variant="outline" color="danger">
    Inactive
  </Badge>
</div>
```

### Semantic Colors

```jsx
<div className="flex gap-2">
  <Badge color="info">Info</Badge>
  <Badge color="success">Success</Badge>
  <Badge color="warning">Warning</Badge>
  <Badge color="danger">Danger</Badge>
</div>
```

### Different Sizes

```jsx
<div className="flex items-center gap-2">
  <Badge size="1">Small badge</Badge>
  <Badge size="2">Large badge</Badge>
</div>
```

### High Contrast Mode

```jsx
<div className="flex gap-2">
  <Badge variant="solid" highContrast>
    High Contrast
  </Badge>
  <Badge variant="soft" color="blue" highContrast>
    Better Visibility
  </Badge>
</div>
```

### Color Variations

```jsx
<div className="flex gap-2">
  <Badge color="indigo">Indigo</Badge>
  <Badge color="cyan">Cyan</Badge>
  <Badge color="orange">Orange</Badge>
  <Badge color="crimson">Crimson</Badge>
</div>
```

## Integration with Frosted UI Tailwind Tokens

The Badge component works seamlessly with Frosted UI's design system:

### Using Badges in Layouts

```jsx
{
  /* Use with consistent spacing */
}
<div className="flex items-center gap-3">
  <Badge variant="solid" color="blue" size="1">
    New
  </Badge>
  <Heading size="3" weight="medium">
    Product Updates
  </Heading>
</div>;
```

### Badge Collections

```jsx
{
  /* Collections with proper spacing */
}
<div className="flex flex-wrap gap-2">
  <Badge variant="soft" color="blue">
    React
  </Badge>
  <Badge variant="soft" color="green">
    Node.js
  </Badge>
  <Badge variant="soft" color="purple">
    TypeScript
  </Badge>
  <Badge variant="soft" color="orange">
    JavaScript
  </Badge>
</div>;
```

### Color Token Usage

```jsx
{
  /* Badges automatically use Frosted UI color tokens */
}
<div className="p-4 bg-gray-2 rounded-lg">
  <Badge variant="surface" color="blue">
    Uses blue-surface, blue-a7, and blue-a11 tokens
  </Badge>
</div>;
```

## Accessibility

### High Contrast Support

- `highContrast` prop ensures better visibility
- Automatically uses appropriate contrast ratios
- Works with both light and dark themes

### Screen Reader Support

- Badges are announced appropriately to screen readers
- Semantic colors provide meaning that can be conveyed through context

### Keyboard Navigation

- Badges are not focusable by default (display-only content)
- When used in interactive contexts, ensure proper tab order

## Advanced Usage

### Product Status Display

```jsx
function ProductCard({ product }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return (
          <Badge variant="solid" color="success" size="1">
            Available
          </Badge>
        );
      case 'pending':
        return (
          <Badge variant="soft" color="warning" size="1">
            Pending
          </Badge>
        );
      case 'sold':
        return (
          <Badge variant="outline" color="gray" size="1">
            Sold Out
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-panel-solid rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <Heading size="3" weight="medium">
          {product.name}
        </Heading>
        {getStatusBadge(product.status)}
      </div>
      <Text size="2" color="gray">
        {product.description}
      </Text>
    </div>
  );
}
```

### User Role Indicators

```jsx
function UserList({ users }) {
  const getRoleBadge = (role) => {
    const roleConfig = {
      admin: { variant: 'solid', color: 'danger' },
      moderator: { variant: 'soft', color: 'warning' },
      user: { variant: 'outline', color: 'gray' },
      premium: { variant: 'surface', color: 'gold' },
    };

    const config = roleConfig[role] || roleConfig.user;

    return (
      <Badge {...config} size="1">
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-3">
          <Avatar src={user.avatar} fallback={user.name} size="2" />
          <div className="flex-1">
            <Text size="2" weight="medium">
              {user.name}
            </Text>
          </div>
          {getRoleBadge(user.role)}
        </div>
      ))}
    </div>
  );
}
```

### Tag System

```jsx
function ArticleTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag.id} variant="soft" color={tag.color || 'gray'} size="1">
          {tag.name}
        </Badge>
      ))}
    </div>
  );
}
```

### Notification Badges

```jsx
function NotificationBadge({ count, max = 99 }) {
  if (count === 0) return null;

  const displayCount = count > max ? `${max}+` : count.toString();

  return (
    <Badge variant="solid" color="danger" size="1">
      {displayCount}
    </Badge>
  );
}

// Usage in navigation
function NavigationItem({ icon, label, notificationCount }) {
  return (
    <div className="relative flex items-center gap-3 p-2">
      {icon}
      <Text size="2">{label}</Text>
      {notificationCount > 0 && (
        <div className="absolute -top-1 -right-1">
          <NotificationBadge count={notificationCount} />
        </div>
      )}
    </div>
  );
}
```

### Interactive Content

```jsx
function FilterableTags({ tags, selectedTags, onTagToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        return (
          <button key={tag} onClick={() => onTagToggle(tag)} className="transition-opacity hover:opacity-80">
            <Badge variant={isSelected ? 'solid' : 'soft'} color={isSelected ? 'blue' : 'gray'} size="1">
              {tag}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
```

## Best Practices

### 1. Choose Appropriate Variants

```jsx
// ✅ Good - Solid for high-priority status
<Badge variant="solid" color="danger">
  Critical
</Badge>

// ✅ Good - Soft for secondary information
<Badge variant="soft" color="blue">
  Category
</Badge>

// ✅ Good - Outline for subtle labels
<Badge variant="outline" color="gray">
  Optional
</Badge>
```

### 2. Use Semantic Colors Appropriately

```jsx
// ✅ Good - Semantic meaning
<Badge color="success">Completed</Badge>
<Badge color="warning">In Progress</Badge>
<Badge color="danger">Failed</Badge>

// ❌ Avoid - Arbitrary color choices
<Badge color="pink">Completed</Badge>
<Badge color="purple">Failed</Badge>
```

### 3. Keep Content Concise

```jsx
// ✅ Good - Short, clear content
<Badge>New</Badge>
<Badge>5</Badge>
<Badge>Active</Badge>

// ❌ Avoid - Long text in badges
<Badge>This is a very long badge text that doesn't fit well</Badge>
```

### 4. Use High Contrast When Needed

```jsx
// ✅ Good - High contrast for important information
<Badge variant="solid" color="danger" highContrast>
  Error
</Badge>

// ✅ Good - Regular contrast for secondary info
<Badge variant="soft" color="blue">
  Info
</Badge>
```

### 5. Consistent Sizing

```jsx
// ✅ Good - Consistent sizing in groups
<div className="flex gap-2">
  <Badge size="1">Tag 1</Badge>
  <Badge size="1">Tag 2</Badge>
  <Badge size="1">Tag 3</Badge>
</div>

// ❌ Avoid - Mixed sizes without purpose
<div className="flex gap-2">
  <Badge size="1">Tag 1</Badge>
  <Badge size="2">Tag 2</Badge>
  <Badge size="1">Tag 3</Badge>
</div>
```

## Performance Considerations

### Lightweight Component

- Minimal CSS footprint with efficient selectors
- No JavaScript interactions by default
- Optimized for rendering performance

### Color System Integration

- Uses CSS custom properties for theming
- Automatic dark mode support
- Efficient color token management

## Related Components

- **[Avatar](../avatar/avatar.ai.md)** - For user representation with status badges
- **[Button](../button/button.ai.md)** - For interactive elements that might need badges
- **[Text](../text/text.ai.md)** - For typography in badge content
- **[Tooltip](../tooltip/tooltip.ai.md)** - For additional badge information

## Color Support and Technical Details

The Badge component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

### Variant Color Mapping

Each variant automatically uses the appropriate color scale steps:

- **Solid**: Uses step 9 (or 12 with highContrast) with proper contrast text
- **Soft**: Uses step a3 background with step a11 text
- **Surface**: Uses surface color with step a7 border and step a11 text
- **Outline**: Uses step a8 border (or a11 with highContrast) with step a11/12 text

All colors automatically support both light and dark themes with proper contrast ratios.
