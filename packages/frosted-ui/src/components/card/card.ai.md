# Frosted UI Card Component

A versatile container component for grouping related content with elegant styling and interactive capabilities. The Card component provides a clean, modern foundation for layouts with consistent spacing, borders, and interactive states.

## Overview

The Card component is a fundamental layout primitive that creates visually distinct content containers. It supports multiple sizes, variants, and can be rendered as different HTML elements for interactive use cases like links and buttons.

Key features:

- **5 Size Options**: From compact (size 1) to spacious (size 5) layouts
- **3 Visual Variants**: Surface, classic, and ghost styling
- **Interactive States**: Built-in hover, focus, and active states for clickable cards
- **Flexible Rendering**: Can render as div, button, or link with `asChild` prop
- **Inset Integration**: Works seamlessly with Inset component for flush content
- **Consistent Spacing**: Automatic padding and border radius scaling

## Basic Usage

```jsx
import { Card } from '@frosted-ui/core';

function BasicExample() {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <Avatar size="3" fallback="JD" color="blue" />
        <div>
          <Text size="2" weight="medium">
            John Doe
          </Text>
          <Text size="2" color="gray">
            Software Engineer
          </Text>
        </div>
      </div>
    </Card>
  );
}
```

## Props

### Required Props

None - all props are optional.

### Optional Props

| Prop      | Type                                | Default     | Description                                 |
| --------- | ----------------------------------- | ----------- | ------------------------------------------- |
| `size`    | `'1' \| '2' \| '3' \| '4' \| '5'`   | `'1'`       | Controls padding and border radius          |
| `variant` | `'surface' \| 'classic' \| 'ghost'` | `'surface'` | Visual style variant                        |
| `asChild` | `boolean`                           | `false`     | Render as child element (for links/buttons) |

Plus all standard HTML div props (`className`, `style`, `onClick`, etc.).

## Examples

### Size Variations

```jsx
function SizeExample() {
  return (
    <div className="flex flex-col gap-4">
      <Card size="1" className="w-[350px]">
        <div className="flex items-center gap-3">
          <Avatar size="3" fallback="T" color="indigo" />
          <div>
            <Text size="2" weight="medium">
              Teodros Girmay
            </Text>
            <Text size="2" color="gray">
              Engineering
            </Text>
          </div>
        </div>
      </Card>

      <Card size="2" className="w-[425px]">
        <div className="flex items-center gap-4">
          <Avatar size="4" fallback="T" color="indigo" />
          <div>
            <Text weight="medium">Teodros Girmay</Text>
            <Text color="gray">Engineering</Text>
          </div>
        </div>
      </Card>

      <Card size="3" className="w-[500px]">
        <div className="flex items-center gap-4">
          <Avatar size="5" fallback="T" color="indigo" />
          <div>
            <Text size="4" weight="medium">
              Teodros Girmay
            </Text>
            <Text size="4" color="gray">
              Engineering
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

### Variant Styles

```jsx
function VariantExample() {
  const cardContent = (
    <div className="flex items-center gap-3">
      <Avatar size="3" fallback="IM" color="indigo" />
      <div>
        <Text size="2" weight="medium">
          Ilya Miskov
        </Text>
        <Text size="2" color="gray">
          I love how we have the freedom to explore skeuomorphism
        </Text>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <Card variant="surface">{cardContent}</Card>

      <Card variant="classic">{cardContent}</Card>

      <Card variant="ghost">{cardContent}</Card>
    </div>
  );
}
```

### Interactive Cards

```jsx
function InteractiveExample() {
  return (
    <div className="flex flex-col gap-4 max-w-[350px]">
      {/* As a link */}
      <Card asChild>
        <a href="/profile/john-doe">
          <div className="flex items-center gap-3">
            <Avatar size="3" fallback="JD" color="blue" />
            <div>
              <Text size="2" weight="medium">
                John Doe
              </Text>
              <Text size="2" color="gray">
                View profile
              </Text>
            </div>
          </div>
        </a>
      </Card>

      {/* As a button */}
      <Card asChild>
        <button onClick={() => console.log('Card clicked')}>
          <div className="flex items-center gap-3">
            <Avatar size="3" fallback="SK" color="green" />
            <div>
              <Text size="2" weight="medium">
                Sarah Kim
              </Text>
              <Text size="2" color="gray">
                Send message
              </Text>
            </div>
          </div>
        </button>
      </Card>
    </div>
  );
}
```

### Card with Inset Content

```jsx
function InsetExample() {
  return (
    <Card size="2" className="max-w-[240px]">
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?w=600&q=80"
          alt="Bold typography"
          className="block object-cover w-full h-[140px] bg-gray-5"
        />
      </Inset>
      <Text size="3">
        Use <Code>Inset</Code> component to align content flush with the sides of the card.
      </Text>
    </Card>
  );
}
```

### User Profile Cards

```jsx
function UserProfileExample() {
  const users = [
    { name: 'Alex Chen', role: 'Product Designer', avatar: 'AC', color: 'blue' },
    { name: 'Maria Rodriguez', role: 'Frontend Developer', avatar: 'MR', color: 'green' },
    { name: 'David Wilson', role: 'Backend Engineer', avatar: 'DW', color: 'orange' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <Card key={user.name} size="2">
          <div className="flex flex-col items-center text-center gap-3">
            <Avatar size="5" fallback={user.avatar} color={user.color} />
            <div>
              <Text size="3" weight="medium">
                {user.name}
              </Text>
              <Text size="2" color="gray">
                {user.role}
              </Text>
            </div>
            <Button variant="soft" size="1">
              Contact
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### Product Cards

```jsx
function ProductCardExample() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
      rating: 4.8,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <Card key={product.id} size="2" className="max-w-[300px]">
          <div className="space-y-3">
            <img src={product.image} alt={product.name} className="w-full h-[200px] object-cover rounded-3 bg-gray-5" />
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <Heading size="3">{product.name}</Heading>
                <Text size="3" weight="bold" color="blue">
                  {product.price}
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-9' : 'text-gray-6'}`}
                    />
                  ))}
                </div>
                <Text size="2" color="gray">
                  ({product.rating})
                </Text>
              </div>
              <Button variant="solid" className="w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### Dashboard Cards

```jsx
function DashboardExample() {
  const stats = [
    { label: 'Total Users', value: '2,847', change: '+12%', trend: 'up' },
    { label: 'Revenue', value: '$45,210', change: '+8.2%', trend: 'up' },
    { label: 'Bounce Rate', value: '34.2%', change: '-2.1%', trend: 'down' },
    { label: 'Page Views', value: '89,432', change: '+15.3%', trend: 'up' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} size="3">
          <div className="space-y-2">
            <Text size="2" color="gray">
              {stat.label}
            </Text>
            <Text size="6" weight="bold">
              {stat.value}
            </Text>
            <div className="flex items-center gap-1">
              <Text size="2" color={stat.trend === 'up' ? 'green' : 'red'} weight="medium">
                {stat.change}
              </Text>
              <Text size="2" color="gray">
                vs last month
              </Text>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

### Article Cards

```jsx
function ArticleCardExample() {
  const articles = [
    {
      title: 'Getting Started with Frosted UI',
      excerpt: 'Learn how to build beautiful interfaces with our design system.',
      author: 'Jane Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Tutorial',
    },
    {
      title: 'Advanced Component Patterns',
      excerpt: 'Explore advanced techniques for building reusable components.',
      author: 'Mike Johnson',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Advanced',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Card key={article.title} size="3" asChild>
          <a href={`/articles/${article.title}`} className="block">
            <div className="space-y-3">
              <div className="space-y-2">
                <Badge variant="soft" color="blue">
                  {article.category}
                </Badge>
                <Heading size="4">{article.title}</Heading>
                <Text color="gray">{article.excerpt}</Text>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-6">
                <div className="flex items-center gap-2">
                  <Avatar size="1" fallback={article.author[0]} />
                  <Text size="2">{article.author}</Text>
                </div>
                <div className="flex text-2 color-gray gap-2">
                  <Text size="2" color="gray">
                    {article.date}
                  </Text>
                  <Text size="2" color="gray">
                    •
                  </Text>
                  <Text size="2" color="gray">
                    {article.readTime}
                  </Text>
                </div>
              </div>
            </div>
          </a>
        </Card>
      ))}
    </div>
  );
}
```

### Notification Cards

```jsx
function NotificationExample() {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'warning',
      title: 'Payment Due',
      message: 'Your subscription payment is due in 3 days.',
      time: '1 hour ago',
    },
    {
      id: 3,
      type: 'info',
      title: 'New Feature',
      message: 'Check out our new dashboard analytics feature.',
      time: '1 day ago',
    },
  ];

  return (
    <div className="space-y-3 max-w-[400px]">
      {notifications.map((notification) => (
        <Card key={notification.id} size="2">
          <div className="flex items-start gap-3">
            <div
              className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                notification.type === 'success'
                  ? 'bg-green-9'
                  : notification.type === 'warning'
                    ? 'bg-orange-9'
                    : 'bg-blue-9'
              }`}
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <Text size="2" weight="medium">
                  {notification.title}
                </Text>
                <Text size="1" color="gray">
                  {notification.time}
                </Text>
              </div>
              <Text size="2" color="gray">
                {notification.message}
              </Text>
            </div>
          </div>
        </Card>
      ))}
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
      {/* Card with custom spacing */}
      <Card size="2" className="ring-2 ring-blue-6">
        <div className="space-y-3">
          <Heading size="3">Featured Content</Heading>
          <Text color="gray">This card demonstrates integration with Frosted UI spacing and color tokens.</Text>
        </div>
      </Card>

      {/* Nested cards with different backgrounds */}
      <Card size="3" className="bg-gray-1">
        <div className="space-y-4">
          <Heading size="4">Parent Card</Heading>

          <div className="grid grid-cols-2 gap-3">
            <Card size="1" className="bg-blue-2">
              <Text size="2" color="blue">
                Nested Card 1
              </Text>
            </Card>
            <Card size="1" className="bg-green-2">
              <Text size="2" color="green">
                Nested Card 2
              </Text>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  return (
    <div className="space-y-4 max-w-[500px]">
      <Card size="4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Heading size="5" weight="bold">
              Card with Typography
            </Heading>
            <Text size="3" color="gray">
              This demonstrates how Card integrates with Typography components.
            </Text>
          </div>

          <div className="space-y-3">
            <div>
              <Heading size="3" weight="medium">
                Section Header
              </Heading>
              <Text>Regular body text that flows naturally within the card layout.</Text>
            </div>

            <div>
              <Text size="2" weight="medium" color="blue">
                Highlighted information
              </Text>
              <Text size="2" color="gray">
                Additional context or details
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

### Color Support

This component doesn't have built-in color props but integrates perfectly with Frosted UI's color system through background colors, borders, and child components. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Card component includes comprehensive accessibility features:

- **Semantic HTML**: Renders as appropriate semantic elements (div, button, a)
- **Keyboard Navigation**: Full keyboard support when used as interactive element
- **Focus Management**: Clear focus indicators for interactive cards
- **Screen Reader Support**: Proper role and state communication
- **Touch Targets**: Adequate touch target size for interactive cards

```jsx
function AccessibilityExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      {/* Interactive card with proper labeling */}
      <Card asChild>
        <button onClick={() => console.log('Profile clicked')} aria-label="View John Doe's profile">
          <div className="flex items-center gap-3">
            <Avatar size="3" fallback="JD" color="blue" />
            <div className="text-left">
              <Text size="2" weight="medium">
                John Doe
              </Text>
              <Text size="2" color="gray">
                Software Engineer
              </Text>
            </div>
          </div>
        </button>
      </Card>

      {/* Card with additional context */}
      <Card size="2">
        <div className="space-y-2">
          <Heading size="3" id="stats-heading">
            Monthly Statistics
          </Heading>
          <div aria-labelledby="stats-heading">
            <Text size="4" weight="bold">
              2,847 users
            </Text>
            <Text size="2" color="gray">
              12% increase from last month
            </Text>
          </div>
        </div>
      </Card>
    </div>
  );
}
```

## Advanced Usage

### Conditional Rendering

```jsx
function ConditionalExample() {
  const [showDetails, setShowDetails] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const cards = ['Card 1', 'Card 2', 'Card 3'];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {cards.map((card, index) => (
          <Card key={card} size="2" variant={selectedCard === index ? 'classic' : 'surface'} asChild>
            <button
              onClick={() => setSelectedCard(index)}
              className={`${selectedCard === index ? 'ring-2 ring-blue-8' : ''}`}
            >
              <Text weight="medium">{card}</Text>
            </button>
          </Card>
        ))}
      </div>

      {selectedCard !== null && (
        <Card size="3" className="bg-blue-1">
          <div className="space-y-2">
            <Text size="3" weight="medium" color="blue">
              Details for {cards[selectedCard]}
            </Text>
            <Text color="gray">This card shows additional information based on your selection.</Text>
          </div>
        </Card>
      )}
    </div>
  );
}
```

### Responsive Card Grid

```jsx
function ResponsiveGridExample() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`,
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} size="2">
          <div className="space-y-2">
            <Heading size="3">{item.title}</Heading>
            <Text color="gray">{item.description}</Text>
            <Button variant="soft" size="1" className="w-full">
              Learn More
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
```

## Best Practices

### Do's ✅

- **Use consistent sizes** across related card groups
- **Choose appropriate variants** based on visual hierarchy
- **Group related content** logically within cards
- **Use interactive cards** for clickable content with proper accessibility
- **Provide adequate spacing** between cards in grids and lists
- **Consider responsive behavior** for card layouts

```jsx
// ✅ Good - Consistent sizing and proper grouping
function GoodExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card size="2">
        <div className="space-y-2">
          <Heading size="3">User Statistics</Heading>
          <Text size="4" weight="bold">
            2,847
          </Text>
          <Text size="2" color="gray">
            Active users
          </Text>
        </div>
      </Card>

      <Card size="2">
        <div className="space-y-2">
          <Heading size="3">Revenue</Heading>
          <Text size="4" weight="bold">
            $45,210
          </Text>
          <Text size="2" color="gray">
            This month
          </Text>
        </div>
      </Card>
    </div>
  );
}
```

### Don'ts ❌

- **Don't mix sizes randomly** without visual hierarchy purpose
- **Don't overuse interactive cards** for non-interactive content
- **Don't forget proper spacing** between card elements
- **Don't use cards for single text elements** - use appropriate typography
- **Don't nest cards unnecessarily** - consider simpler layouts

```jsx
// ❌ Bad - Inconsistent sizing, unnecessary nesting
function BadExample() {
  return (
    <div className="space-y-2">
      <Card size="1">
        <Card size="3">
          {' '}
          {/* Unnecessary nesting */}
          <Text>Just some text</Text> {/* Card not needed */}
        </Card>
      </Card>
      <Card size="5">
        {' '}
        {/* Inconsistent with above */}
        <Text>Another text</Text>
      </Card>
    </div>
  );
}
```

## Related Components

- **[Inset](../inset/inset.ai.md)** - For flush content alignment within cards
- **[Avatar](../avatar/avatar.ai.md)** - For user representation in profile cards
- **[Button](../button/button.ai.md)** - For actions within cards
- **[Badge](../badge/badge.ai.md)** - For status indicators and categories
- **[Text](../text/text.ai.md)** - For card text content
- **[Heading](../heading/heading.ai.md)** - For card titles and headers
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
