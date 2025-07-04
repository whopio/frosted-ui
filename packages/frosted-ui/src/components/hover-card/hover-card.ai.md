# Frosted UI HoverCard Component

A rich preview component that displays detailed information when hovering over a trigger element. Perfect for user profiles, link previews, and contextual information without navigating away from the current page.

## Overview

The HoverCard component provides an elegant way to show additional context or preview information on hover. Unlike tooltips, hover cards can contain rich content including images, formatted text, and interactive elements. They appear after a brief delay and disappear when the user moves away from both the trigger and the card content.

## Basic Usage

```jsx
import { HoverCard, Avatar, Text, Heading } from '@frosted-ui/core';

function BasicHoverCard() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Avatar fallback="JD" className="cursor-pointer" />
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="space-y-2">
          <Heading size="3">John Doe</Heading>
          <Text color="gray">Software Engineer at Acme Corp</Text>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

## Props

### HoverCard.Root Props

| Prop           | Type                      | Default     | Description                                              |
| -------------- | ------------------------- | ----------- | -------------------------------------------------------- |
| `open`         | `boolean`                 | `undefined` | The controlled open state of the hover card              |
| `defaultOpen`  | `boolean`                 | `false`     | The open state of the hover card when initially rendered |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Event handler called when the open state changes         |
| `openDelay`    | `number`                  | `200`       | The duration from when hover begins until the card opens |
| `closeDelay`   | `number`                  | `150`       | The duration from when hover ends until the card closes  |

### HoverCard.Trigger Props

The trigger accepts any valid React element as a child and passes through all standard HTML attributes.

### HoverCard.Content Props

| Prop               | Type                                     | Default     | Description                                            |
| ------------------ | ---------------------------------------- | ----------- | ------------------------------------------------------ |
| `size`             | `'1' \| '2' \| '3'`                      | `'2'`       | The size of the hover card content area                |
| `side`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'`  | The preferred side of the trigger to render against    |
| `align`            | `'start' \| 'center' \| 'end'`           | `'start'`   | The preferred alignment against the trigger            |
| `sideOffset`       | `number`                                 | `8`         | The distance in pixels from the trigger                |
| `alignOffset`      | `number`                                 | `0`         | An offset in pixels from the alignment axis            |
| `collisionPadding` | `number`                                 | `10`        | The padding between the card and the viewport edges    |
| `container`        | `HTMLElement`                            | `undefined` | Specify a container element to portal the content into |
| `forceMount`       | `boolean`                                | `false`     | Used to force mounting when more control is needed     |

## Examples

### User Profile Hover Card

```jsx
import { HoverCard, Avatar, Text, Heading, Badge, Button } from '@frosted-ui/core';

function UserProfileHoverCard() {
  const user = {
    name: 'Sarah Wilson',
    username: '@sarah_wilson',
    role: 'Senior Product Designer',
    company: 'Design Studio',
    avatar: 'SW',
    followers: 1234,
    following: 456,
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Text className="cursor-pointer hover:underline">{user.username}</Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[320px]">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Avatar size="3" fallback={user.avatar} />
            <div className="flex-1 space-y-1">
              <Heading size="3">{user.name}</Heading>
              <Text size="2" color="gray">
                {user.username}
              </Text>
              <div className="flex items-center gap-2">
                <Badge variant="soft" size="1">
                  {user.role}
                </Badge>
                <Text size="1" color="gray">
                  at {user.company}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <Text size="2" weight="bold">
                {user.followers}
              </Text>
              <Text size="1" color="gray">
                Followers
              </Text>
            </div>
            <div className="text-center">
              <Text size="2" weight="bold">
                {user.following}
              </Text>
              <Text size="1" color="gray">
                Following
              </Text>
            </div>
          </div>

          <Button className="w-full" size="1">
            Follow
          </Button>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Link Preview Hover Card

```jsx
import { HoverCard, Text, Heading, Card } from '@frosted-ui/core';

function LinkPreviewHoverCard() {
  const linkData = {
    title: 'Building Modern Web Applications',
    description:
      'A comprehensive guide to creating scalable and maintainable web applications using modern frameworks and best practices.',
    url: 'https://example.com/article',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200',
    author: 'Tech Blog',
    readTime: '8 min read',
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Text className="cursor-pointer text-blue-11 hover:underline">Read the full article</Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[360px]">
        <div className="space-y-3">
          <img src={linkData.image} alt="" className="w-full h-[160px] object-cover rounded-2" />
          <div className="space-y-2">
            <Heading size="3" className="line-clamp-2">
              {linkData.title}
            </Heading>
            <Text size="2" color="gray" className="line-clamp-3">
              {linkData.description}
            </Text>
            <div className="flex items-center justify-between">
              <Text size="1" color="gray">
                {linkData.author}
              </Text>
              <Text size="1" color="gray">
                {linkData.readTime}
              </Text>
            </div>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Repository Hover Card

```jsx
import { HoverCard, Text, Heading, Badge } from '@frosted-ui/core';

function RepositoryHoverCard() {
  const repo = {
    name: 'frosted-ui',
    description: 'A modern React component library with beautiful design and excellent developer experience.',
    language: 'TypeScript',
    stars: 2400,
    forks: 180,
    issues: 12,
    owner: 'frosted-ui',
    isPrivate: false,
    updatedAt: '2 days ago',
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Text className="cursor-pointer text-blue-11 hover:underline font-mono">
          {repo.owner}/{repo.name}
        </Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[350px]">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heading size="3">{repo.name}</Heading>
              <Badge variant="outline" size="1">
                {repo.isPrivate ? 'Private' : 'Public'}
              </Badge>
            </div>
            <Text size="2" color="gray">
              {repo.description}
            </Text>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-9 rounded-full"></div>
              <Text size="1">{repo.language}</Text>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="w-3 h-3" />
              <Text size="1">{repo.stars}</Text>
            </div>
            <div className="flex items-center gap-1">
              <ForkIcon className="w-3 h-3" />
              <Text size="1">{repo.forks}</Text>
            </div>
            <div className="flex items-center gap-1">
              <IssueIcon className="w-3 h-3" />
              <Text size="1">{repo.issues}</Text>
            </div>
          </div>

          <Text size="1" color="gray">
            Updated {repo.updatedAt}
          </Text>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Size Variants

```jsx
import { HoverCard, Avatar, Text, Heading } from '@frosted-ui/core';

function SizeVariants() {
  return (
    <div className="flex items-center gap-6">
      <HoverCard.Root>
        <HoverCard.Trigger>
          <Avatar size="1" fallback="S" className="cursor-pointer" />
        </HoverCard.Trigger>
        <HoverCard.Content size="1" className="w-[200px]">
          <div className="space-y-1">
            <Heading size="2">Small Card</Heading>
            <Text size="1" color="gray">
              Compact hover card with minimal padding
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Avatar size="2" fallback="M" className="cursor-pointer" />
        </HoverCard.Trigger>
        <HoverCard.Content size="2" className="w-[280px]">
          <div className="space-y-2">
            <Heading size="3">Default Card</Heading>
            <Text size="2" color="gray">
              Standard hover card with comfortable padding
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger>
          <Avatar size="3" fallback="L" className="cursor-pointer" />
        </HoverCard.Trigger>
        <HoverCard.Content size="3" className="w-[320px]">
          <div className="space-y-3">
            <Heading size="4">Large Card</Heading>
            <Text size="2" color="gray">
              Spacious hover card with generous padding for rich content
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}
```

### Product Preview Hover Card

```jsx
import { HoverCard, Text, Heading, Badge, Button } from '@frosted-ui/core';

function ProductPreviewHoverCard() {
  const product = {
    name: 'Wireless Headphones',
    price: '$199.99',
    originalPrice: '$249.99',
    rating: 4.8,
    reviews: 324,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200',
    inStock: true,
  };

  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Text className="cursor-pointer text-blue-11 hover:underline">{product.name}</Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[300px]">
        <div className="space-y-4">
          <div className="flex gap-3">
            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-2" />
            <div className="space-y-1">
              <Heading size="3">{product.name}</Heading>
              <div className="flex items-center gap-2">
                <Text size="2" weight="bold">
                  {product.price}
                </Text>
                <Text size="2" color="gray" className="line-through">
                  {product.originalPrice}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-9' : 'text-gray-6'}`}
                  />
                ))}
              </div>
              <Text size="1" color="gray">
                {product.rating} ({product.reviews})
              </Text>
            </div>
            <Badge variant="soft" color={product.inStock ? 'green' : 'red'}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </Badge>
          </div>

          <Button className="w-full" size="1" disabled={!product.inStock}>
            Add to Cart
          </Button>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Tooltip Alternative

```jsx
import { HoverCard, IconButton, Text, Heading } from '@frosted-ui/core';

function RichTooltipExample() {
  return (
    <HoverCard.Root openDelay={100} closeDelay={50}>
      <HoverCard.Trigger>
        <IconButton variant="ghost" size="1">
          <InfoIcon />
        </IconButton>
      </HoverCard.Trigger>
      <HoverCard.Content size="1" className="w-[240px]">
        <div className="space-y-2">
          <Heading size="2">Premium Feature</Heading>
          <Text size="1" color="gray">
            This feature is available for Pro users. Upgrade your plan to unlock advanced analytics and reporting.
          </Text>
          <div className="pt-2">
            <Text size="1" className="text-blue-11 hover:underline cursor-pointer">
              Learn more about Pro features →
            </Text>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Controlled Hover Card

```jsx
import { HoverCard, Button, Text } from '@frosted-ui/core';

function ControlledHoverCard() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Text size="2">Hover card is {open ? 'open' : 'closed'}</Text>
        <Button variant="outline" size="1" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'} Programmatically
        </Button>
      </div>

      <HoverCard.Root open={open} onOpenChange={setOpen}>
        <HoverCard.Trigger>
          <Button>Controlled Hover Card</Button>
        </HoverCard.Trigger>
        <HoverCard.Content className="w-[280px]">
          <div className="space-y-2">
            <Text weight="medium">Controlled State</Text>
            <Text size="2" color="gray">
              This hover card's open state is controlled by external state.
            </Text>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<HoverCard.Content className="w-[320px]">
  <div className="space-y-4"> {/* Uses --space-4 */}
    <div className="flex items-center gap-3"> {/* Uses --space-3 */}
      <Content />
    </div>
  </div>
</HoverCard.Content>

// Use Typography components for text content
<HoverCard.Content>
  <Heading size="3">Title</Heading>
  <Text color="gray">Description text</Text>
</HoverCard.Content>
```

### Responsive Sizing

```jsx
// Use arbitrary values for custom widths
<HoverCard.Content className="w-[280px] sm:w-[360px]">
  <ResponsiveContent />
</HoverCard.Content>

// Use max-width constraints
<HoverCard.Content className="max-w-[400px]">
  <FlexibleContent />
</HoverCard.Content>
```

## Accessibility

The HoverCard component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with focus management
- **Focus Management**: Proper focus handling when card appears and disappears
- **ARIA Attributes**: Correct ARIA labeling and relationships
- **Screen Reader**: Compatible with screen reader technologies
- **Portal Rendering**: Content rendered in a portal to avoid z-index issues

### Keyboard Shortcuts

- `Tab`: Navigate to and focus the trigger element
- `Enter` or `Space`: Open the hover card when trigger is focused
- `Escape`: Close the hover card
- `Tab`: Navigate through interactive elements within the card

## Best Practices

### Content Guidelines

- **Rich context**: Use hover cards for detailed information that would be too much for a tooltip
- **Maintain hover**: Ensure users can move from trigger to card content without it disappearing
- **Reasonable delays**: Use appropriate open/close delays for smooth user experience
- **Mobile consideration**: Consider alternative patterns for touch devices

### Design Guidelines

- **Appropriate sizing**: Match card size to content density and importance
- **Clear hierarchy**: Use proper heading and text hierarchy within cards
- **Consistent styling**: Maintain consistent visual style with your application
- **Interactive elements**: Include relevant actions when appropriate

### Performance

- **Lazy loading**: Load heavy content (images, data) only when card opens
- **Portal wisely**: Use default portal behavior unless custom container needed
- **Reasonable delays**: Balance responsiveness with preventing accidental openings

## Advanced Usage

### Dynamic Content Loading

```jsx
import { HoverCard, Text, Heading, Spinner } from '@frosted-ui/core';

function DynamicContentHoverCard({ userId }) {
  const [userInfo, setUserInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const handleOpenChange = async (open) => {
    if (open && !userInfo && !loading) {
      setLoading(true);
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUserInfo(data);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <HoverCard.Root onOpenChange={handleOpenChange}>
      <HoverCard.Trigger>
        <Text className="cursor-pointer text-blue-11 hover:underline">@user{userId}</Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[300px]">
        {loading ? (
          <div className="flex items-center justify-center p-4">
            <Spinner size="2" />
          </div>
        ) : userInfo ? (
          <div className="space-y-2">
            <Heading size="3">{userInfo.name}</Heading>
            <Text color="gray">{userInfo.bio}</Text>
          </div>
        ) : (
          <Text color="gray">User information unavailable</Text>
        )}
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

### Interactive Hover Card

```jsx
import { HoverCard, Button, Text, Heading } from '@frosted-ui/core';

function InteractiveHoverCard() {
  const [isFollowing, setIsFollowing] = React.useState(false);

  return (
    <HoverCard.Root closeDelay={300}>
      {' '}
      {/* Longer delay for interaction */}
      <HoverCard.Trigger>
        <Text className="cursor-pointer text-blue-11 hover:underline">@designer_sarah</Text>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-[280px]">
        <div className="space-y-3">
          <div className="space-y-1">
            <Heading size="3">Sarah Wilson</Heading>
            <Text size="2" color="gray">
              Product Designer
            </Text>
          </div>

          <Text size="2" color="gray">
            Creating beautiful and functional user experiences. Currently working on design systems.
          </Text>

          <Button
            className="w-full"
            size="1"
            variant={isFollowing ? 'outline' : 'solid'}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
```

## Related Components

- **[Tooltip](../tooltip/tooltip.ai.md)** - For simple, non-interactive hover information
- **[Popover](../popover/popover.ai.md)** - For click-triggered content overlays
- **[Dialog](../dialog/dialog.ai.md)** - For modal overlays that require user attention
- **[Avatar](../avatar/avatar.ai.md)** - Often used as hover card triggers
- **[Card](../card/card.ai.md)** - For similar content presentation patterns
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text content within hover cards

```

```
