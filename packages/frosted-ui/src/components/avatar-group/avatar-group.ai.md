# Frosted UI AvatarGroup Component

A component that displays multiple user avatars arranged as a mosaic inside a single avatar-sized container, creating an elegant group representation that scales beautifully.

## Overview

The AvatarGroup component displays multiple user avatars arranged as smaller avatars inside a single avatar-sized container. Rather than showing avatars side-by-side, it creates a mosaic/collage effect where multiple avatars are scaled down and positioned within one cohesive container. The component automatically adjusts the size and positioning of each avatar based on the total count, ensuring optimal visual balance.

**Important**: The component displays a maximum of 7 avatars - any additional avatars beyond the 7th will be automatically hidden to maintain optimal visual clarity and performance. The component supports smooth transitions and consistent sizing across your application.

## Basic Usage

```jsx
import { AvatarGroup } from 'frosted-ui';

function TeamMembers() {
  const users = [
    { name: 'Artur Bień', color: 'blue', src: '/avatars/artur.jpg' },
    { name: 'Cameron Zoub', color: 'green' },
    { name: 'Carlos Whitt', color: 'pink' },
    { name: 'Ilya Miskov', color: 'yellow' },
  ];

  return (
    <AvatarGroup.Root size="3">
      {users.map((user) => (
        <AvatarGroup.Avatar key={user.name} fallback={user.name} color={user.color} src={user.src} />
      ))}
    </AvatarGroup.Root>
  );
}
```

## 7-Avatar Display Limit

**Important**: AvatarGroup automatically limits display to a maximum of 7 avatars for optimal visual clarity and performance. When you pass more than 7 avatars as children, only the first 7 will be visible - additional avatars are automatically hidden.

```jsx
// Example with 10 users - only first 7 will be visible
function LargeTeam() {
  const users = [
    { name: 'User 1', color: 'blue' },
    { name: 'User 2', color: 'green' },
    { name: 'User 3', color: 'pink' },
    { name: 'User 4', color: 'yellow' },
    { name: 'User 5', color: 'purple' },
    { name: 'User 6', color: 'orange' },
    { name: 'User 7', color: 'cyan' },
    { name: 'User 8', color: 'red' }, // Hidden
    { name: 'User 9', color: 'amber' }, // Hidden
    { name: 'User 10', color: 'jade' }, // Hidden
  ];

  return (
    <AvatarGroup.Root size="3">
      {users.map((user) => (
        <AvatarGroup.Avatar key={user.name} fallback={user.name} color={user.color} />
      ))}
    </AvatarGroup.Root>
  );
}
```

For large teams, consider limiting the array or showing additional user count:

```jsx
// ✅ Recommended approach for large teams
function LargeTeamWithCount({ users }) {
  const visibleUsers = users.slice(0, 7);
  const remainingCount = users.length - 7;

  return (
    <div className="flex items-center gap-3">
      <AvatarGroup.Root size="3">
        {visibleUsers.map((user) => (
          <AvatarGroup.Avatar key={user.id} fallback={user.name} color={user.color} src={user.avatar} />
        ))}
      </AvatarGroup.Root>
      {remainingCount > 0 && (
        <Text size="2" color="gray">
          +{remainingCount} more
        </Text>
      )}
    </div>
  );
}
```

## Component Structure

The AvatarGroup follows a compound component pattern:

- **`AvatarGroup.Root`** - Container that manages layout and sizing
- **`AvatarGroup.Avatar`** - Individual avatar that inherits group properties

## Props

### AvatarGroup.Root Props

| Prop      | Type                                                          | Default   | Description                        |
| --------- | ------------------------------------------------------------- | --------- | ---------------------------------- |
| `size`    | `'1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'3'`     | Size of the avatar group           |
| `variant` | `'round' \| 'square'`                                         | `'round'` | Shape variant for all avatars      |
| `color`   | All Frosted UI colors + semantic colors                       | `'gray'`  | Default fallback color for avatars |

### AvatarGroup.Avatar Props

Inherits all Avatar component props except `size` and `variant` (controlled by the Root):

| Prop       | Type                                    | Description                                      |
| ---------- | --------------------------------------- | ------------------------------------------------ |
| `fallback` | `React.ReactNode`                       | Content to display when image fails to load      |
| `src`      | `string`                                | Image URL                                        |
| `alt`      | `string`                                | Alt text for the image                           |
| `color`    | All Frosted UI colors + semantic colors | Individual avatar color (overrides Root default) |

## Size Scale

The AvatarGroup uses the same sizing scale as Avatar components:

| Size | Dimensions | Use Case                    |
| ---- | ---------- | --------------------------- |
| `1`  | 24px       | Tiny groups, inline usage   |
| `2`  | 32px       | Small groups, compact lists |
| `3`  | 40px       | Default size, most common   |
| `4`  | 48px       | Medium groups               |
| `5`  | 64px       | Large groups                |
| `6`  | 80px       | Profile headers             |
| `7`  | 96px       | Large profile displays      |
| `8`  | 128px      | Hero sections               |
| `9`  | 160px      | Maximum size                |

## Examples

### Basic Team Display

```jsx
<AvatarGroup.Root size="3">
  <AvatarGroup.Avatar
    fallback="Artur Bień"
    color="blue"
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=256&h=256&q=70&crop=face&fit=crop"
  />
  <AvatarGroup.Avatar fallback="Cameron Zoub" color="green" />
  <AvatarGroup.Avatar fallback="Carlos Whitt" color="pink" />
  <AvatarGroup.Avatar fallback="Ilya Miskov" color="yellow" />
</AvatarGroup.Root>
```

### Different Sizes

```jsx
{
  /* Each AvatarGroup maintains the same footprint as a single Avatar */
}
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
  <AvatarGroup.Root size="1">
    <AvatarGroup.Avatar fallback="Small Team" color="blue" />
    <AvatarGroup.Avatar fallback="User 2" color="green" />
    <AvatarGroup.Avatar fallback="User 3" color="pink" />
  </AvatarGroup.Root>

  <AvatarGroup.Root size="3">
    <AvatarGroup.Avatar fallback="Medium Team" color="blue" />
    <AvatarGroup.Avatar fallback="User 2" color="green" />
    <AvatarGroup.Avatar fallback="User 3" color="pink" />
  </AvatarGroup.Root>

  <AvatarGroup.Root size="5">
    <AvatarGroup.Avatar fallback="Large Team" color="blue" />
    <AvatarGroup.Avatar fallback="User 2" color="green" />
    <AvatarGroup.Avatar fallback="User 3" color="pink" />
  </AvatarGroup.Root>
</div>;
```

### Square Variant

```jsx
<AvatarGroup.Root variant="square" size="3">
  <AvatarGroup.Avatar fallback="Square Team" color="blue" />
  <AvatarGroup.Avatar fallback="User 2" color="green" />
  <AvatarGroup.Avatar fallback="User 3" color="pink" />
  <AvatarGroup.Avatar fallback="User 4" color="yellow" />
</AvatarGroup.Root>
```

### Different Group Colors

```jsx
<div style={{ display: 'flex', gap: '16px' }}>
  <AvatarGroup.Root color="indigo" size="3">
    <AvatarGroup.Avatar fallback="Team 1" />
    <AvatarGroup.Avatar fallback="User 2" />
    <AvatarGroup.Avatar fallback="User 3" />
  </AvatarGroup.Root>

  <AvatarGroup.Root color="cyan" size="3">
    <AvatarGroup.Avatar fallback="Team 2" />
    <AvatarGroup.Avatar fallback="User 2" />
    <AvatarGroup.Avatar fallback="User 3" />
  </AvatarGroup.Root>

  <AvatarGroup.Root color="orange" size="3">
    <AvatarGroup.Avatar fallback="Team 3" />
    <AvatarGroup.Avatar fallback="User 2" />
    <AvatarGroup.Avatar fallback="User 3" />
  </AvatarGroup.Root>
</div>
```

### Dynamic User Management

```jsx
function DynamicTeam() {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'Artur Bień', color: 'blue', src: '/avatars/artur.jpg' },
    { id: 2, name: 'Cameron Zoub', color: 'green' },
    { id: 3, name: 'Carlos Whitt', color: 'pink' },
  ]);

  const toggleUser = (userId) => {
    setUsers((prev) =>
      prev.find((u) => u.id === userId)
        ? prev.filter((u) => u.id !== userId)
        : [...prev, availableUsers.find((u) => u.id === userId)],
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <AvatarGroup.Root size="3">
        {users.map((user) => (
          <AvatarGroup.Avatar key={user.id} fallback={user.name} color={user.color} src={user.src} />
        ))}
      </AvatarGroup.Root>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {availableUsers.map((user) => (
          <button key={user.id} onClick={() => toggleUser(user.id)}>
            Toggle {user.name}
          </button>
        ))}
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

The AvatarGroup component works seamlessly with Frosted UI's custom Tailwind tokens:

### Color Tokens

```jsx
{
  /* Use Frosted UI color scale */
}
<AvatarGroup.Root className="ring-2 ring-blue-6 ring-offset-2">
  <AvatarGroup.Avatar fallback="User" color="blue" />
</AvatarGroup.Root>;

{
  /* Semi-transparent colors */
}
<AvatarGroup.Root className="ring-1 ring-blue-a6">
  <AvatarGroup.Avatar fallback="User" color="blue" />
</AvatarGroup.Root>;
```

### Typography Integration

```jsx
{
  /* Use with Frosted UI Typography components */
}
<div className="text-center">
  <AvatarGroup.Root size="6">
    <AvatarGroup.Avatar fallback="Team Lead" color="blue" />
    <AvatarGroup.Avatar fallback="Developer" color="green" />
    <AvatarGroup.Avatar fallback="Designer" color="pink" />
  </AvatarGroup.Root>
  <Heading size="4" weight="medium" className="mt-3">
    Product Team
  </Heading>
  <Text size="2" color="gray">
    5 members
  </Text>
</div>;
```

### Layout and Spacing

```jsx
{
  /* Use consistent spacing */
}
<div className="flex items-center gap-3">
  <AvatarGroup.Root size="2">
    <AvatarGroup.Avatar fallback="Team" color="blue" />
    <AvatarGroup.Avatar fallback="User 2" color="green" />
  </AvatarGroup.Root>
  <div className="space-y-1">
    <Heading size="3" weight="medium">
      Engineering Team
    </Heading>
    <Text size="2" color="gray">
      Active now
    </Text>
  </div>
</div>;
```

## Automatic Avatar Arrangement

The AvatarGroup intelligently arranges avatars as a mosaic within the single container based on count:

| Avatar Count | Layout Behavior                                |
| ------------ | ---------------------------------------------- |
| 1            | Single avatar, fills the container             |
| 2            | Two avatars, scaled and positioned as a pair   |
| 3            | Three avatars arranged in triangular formation |
| 4            | Four avatars in balanced quad layout           |
| 5            | Five avatars in optimized mosaic pattern       |
| 6            | Six avatars in compact hexagonal arrangement   |
| 7+           | Seven avatars in complex mosaic, others hidden |

Each arrangement is carefully designed to maximize visual clarity while maintaining the single avatar-sized footprint.

## Accessibility

### Screen Reader Support

- Each avatar maintains proper accessibility features
- Group role is announced appropriately
- Individual avatar information remains accessible

### Keyboard Navigation

- Maintains tab order for interactive elements
- Proper focus management for nested avatars

## Advanced Usage

### Project Team Display

```jsx
function ProjectTeam({ project }) {
  return (
    <div className="flex items-center justify-between p-4 bg-panel-solid rounded-lg">
      <div className="flex items-center gap-3">
        <AvatarGroup.Root size="3">
          {project.members.map((member) => (
            <AvatarGroup.Avatar
              key={member.id}
              fallback={member.name}
              color={member.role === 'lead' ? 'blue' : 'gray'}
              src={member.avatar}
            />
          ))}
        </AvatarGroup.Root>
        <div>
          <Heading size="3" weight="medium">
            {project.name}
          </Heading>
          <Text size="2" color="gray">
            {project.members.length} members
          </Text>
        </div>
      </div>
      <Text size="2" color="success">
        {project.status}
      </Text>
    </div>
  );
}
```

### Team Directory

```jsx
function TeamDirectory({ teams }) {
  return (
    <div className="space-y-4">
      {teams.map((team) => (
        <div key={team.id} className="flex items-center gap-4 p-3 hover:bg-gray-2 rounded-lg">
          <AvatarGroup.Root size="3" color={team.color}>
            {team.members.slice(0, 5).map((member) => (
              <AvatarGroup.Avatar key={member.id} fallback={member.name} src={member.avatar} />
            ))}
          </AvatarGroup.Root>
          <div className="flex-1">
            <Heading size="3" weight="medium">
              {team.name}
            </Heading>
            <Text size="2" color="gray">
              {team.members.length} members • {team.department}
            </Text>
          </div>
          <Text size="2" color="blue">
            View Team
          </Text>
        </div>
      ))}
    </div>
  );
}
```

### Collaborative Document Header

```jsx
function DocumentHeader({ document }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-6 pb-4">
      <div>
        <Heading size="5" weight="bold">
          {document.title}
        </Heading>
        <Text size="2" color="gray">
          Last edited by {document.lastEditor}
        </Text>
      </div>
      <div className="flex items-center gap-3">
        <Text size="2" color="gray">
          Collaborators:
        </Text>
        <AvatarGroup.Root size="3">
          {document.collaborators.map((user) => (
            <AvatarGroup.Avatar
              key={user.id}
              fallback={user.name}
              color={user.isOnline ? 'green' : 'gray'}
              src={user.avatar}
            />
          ))}
        </AvatarGroup.Root>
      </div>
    </div>
  );
}
```

## Best Practices

### 1. Limit Avatar Count

```jsx
// ✅ Good - Optimal count for readability
<AvatarGroup.Root>
  {users.slice(0, 5).map(user => (
    <AvatarGroup.Avatar key={user.id} fallback={user.name} />
  ))}
</AvatarGroup.Root>

// ❌ Avoid - Too many avatars become unreadable
<AvatarGroup.Root>
  {users.map(user => ( // Could be 20+ users
    <AvatarGroup.Avatar key={user.id} fallback={user.name} />
  ))}
</AvatarGroup.Root>
```

### 2. Use Meaningful Colors

```jsx
// ✅ Good - Colors convey meaning
<AvatarGroup.Root>
  <AvatarGroup.Avatar fallback="Team Lead" color="blue" />
  <AvatarGroup.Avatar fallback="Developer" color="green" />
  <AvatarGroup.Avatar fallback="Designer" color="pink" />
</AvatarGroup.Root>

// ✅ Good - Consistent default color
<AvatarGroup.Root color="gray">
  <AvatarGroup.Avatar fallback="User 1" />
  <AvatarGroup.Avatar fallback="User 2" />
  <AvatarGroup.Avatar fallback="User 3" />
</AvatarGroup.Root>
```

### 3. Provide Context

```jsx
// ✅ Good - Clear context with labels
<div className="flex items-center gap-3">
  <AvatarGroup.Root size="2">
    <AvatarGroup.Avatar fallback="Team" color="blue" />
  </AvatarGroup.Root>
  <Text size="2" color="gray">5 team members</Text>
</div>

// ❌ Avoid - AvatarGroup without context
<AvatarGroup.Root>
  <AvatarGroup.Avatar fallback="?" />
</AvatarGroup.Root>
```

### 4. Handle Loading States

```jsx
// ✅ Good - Show loading state
function TeamAvatars({ teamId }) {
  const { data: members, isLoading } = useTeamMembers(teamId);

  if (isLoading) {
    return <div className="w-10 h-10 bg-gray-3 rounded-full animate-pulse" />;
  }

  return (
    <AvatarGroup.Root size="3">
      {members.map((member) => (
        <AvatarGroup.Avatar key={member.id} fallback={member.name} src={member.avatar} />
      ))}
    </AvatarGroup.Root>
  );
}
```

## Performance Considerations

### Smooth Transitions

The AvatarGroup includes built-in smooth transitions when avatars are added or removed:

```css
/* Automatic transition handling */
.fui-AvatarGroupAvatar {
  transition: transform 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
```

### Optimal Rendering

- Only displays up to 7 avatars for performance and visual clarity
- Uses CSS transforms for efficient mosaic positioning within the container
- Automatic visibility management prevents DOM bloat
- Maintains consistent single-avatar footprint regardless of avatar count

## Related Components

- **[Avatar](../avatar/avatar.ai.md)** - Individual avatar component
- **[Badge](../badge/badge.ai.md)** - For team status indicators
- **[Tooltip](../tooltip/tooltip.ai.md)** - For showing member details on hover

## Color Support

The AvatarGroup component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

All colors automatically support both light and dark themes with proper contrast ratios.
