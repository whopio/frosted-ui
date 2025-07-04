# Frosted UI ScrollArea Component

A custom scrollable area component with styled scrollbars that provides consistent cross-browser scrolling behavior. Built on Radix UI ScrollArea for robust functionality and accessibility.

## Overview

The ScrollArea component replaces native browser scrollbars with styled, customizable scrollbars that maintain consistent appearance across different operating systems and browsers. It's perfect for:

- **Content areas** that need controlled scrolling
- **Sidebar navigation** with custom styling
- **Modal content** that exceeds viewport height
- **Data tables** with horizontal scrolling
- **Chat interfaces** and message lists

## Basic Usage

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ScrollExample() {
  return (
    <ScrollArea className="h-[300px] w-[400px] border border-gray-6 rounded-3 p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="p-3 bg-gray-2 rounded-2">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
```

## Props

| Prop              | Type                                        | Default  | Description                         |
| ----------------- | ------------------------------------------- | -------- | ----------------------------------- |
| `size`            | `'1' \| '2' \| '3'`                         | `'1'`    | The size of the scrollbars          |
| `scrollbars`      | `'vertical' \| 'horizontal' \| 'both'`      | `'both'` | Which scrollbars to show            |
| `type`            | `'auto' \| 'always' \| 'scroll' \| 'hover'` | `'auto'` | When to show scrollbars             |
| `scrollHideDelay` | `number`                                    | `0`      | Delay before hiding scrollbars (ms) |

## Examples

### Basic Content Scrolling

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ContentScroll() {
  const posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: new Date(2024, 0, i + 1).toLocaleDateString(),
  }));

  return (
    <Card className="max-w-[600px]">
      <div className="p-6 border-b border-gray-6">
        <Heading size="4" className="mb-2">
          Latest Posts
        </Heading>
        <Text color="gray" size="2">
          Scroll to see more articles
        </Text>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="p-6 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="space-y-2">
              <Heading size="3">{post.title}</Heading>
              <Text size="2" color="gray">
                {post.excerpt}
              </Text>
              <Text size="1" color="gray">
                {post.date}
              </Text>
              {post.id < posts.length && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
```

### Sidebar Navigation

```jsx
import { ScrollArea } from '@frosted-ui/core';

function NavigationSidebar() {
  const sections = [
    {
      title: 'Getting Started',
      items: ['Installation', 'Quick Start', 'Configuration', 'First Steps'],
    },
    {
      title: 'Components',
      items: ['Button', 'Input', 'Card', 'Modal', 'Table', 'Form', 'Navigation', 'Layout'],
    },
    {
      title: 'Advanced',
      items: ['Theming', 'Customization', 'Performance', 'Accessibility', 'Testing'],
    },
    {
      title: 'Examples',
      items: ['Dashboard', 'E-commerce', 'Blog', 'Portfolio', 'Landing Page'],
    },
  ];

  return (
    <div className="w-[280px] h-[600px] border border-gray-6 rounded-3 bg-panel-solid">
      <div className="p-4 border-b border-gray-6">
        <Heading size="3">Documentation</Heading>
      </div>

      <ScrollArea className="h-[calc(100%-73px)]" scrollbars="vertical">
        <div className="p-4 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <Text weight="medium" size="2" color="gray">
                {section.title}
              </Text>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item}
                    href={`/docs/${item.toLowerCase().replace(' ', '-')}`}
                    size="2"
                    className="block py-1 px-2 rounded-2 hover:bg-gray-3"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
```

### Data Table with Horizontal Scroll

```jsx
import { ScrollArea } from '@frosted-ui/core';

function DataTable() {
  const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'Editor', 'Viewer'][i % 3],
    status: ['Active', 'Inactive'][i % 2],
    lastLogin: new Date(2024, 0, (i % 30) + 1).toLocaleDateString(),
    actions: 'Edit',
  }));

  return (
    <Card className="max-w-[800px]">
      <div className="p-6 border-b border-gray-6">
        <Heading size="4" className="mb-2">
          User Management
        </Heading>
        <Text color="gray" size="2">
          {users.length} total users
        </Text>
      </div>

      <ScrollArea className="h-[500px]" scrollbars="both">
        <Table.Root className="min-w-[1000px]">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Last Login</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>
                  <Text weight="medium">{user.name}</Text>
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  <Badge
                    variant="soft"
                    color={user.role === 'Admin' ? 'red' : user.role === 'Editor' ? 'blue' : 'gray'}
                  >
                    {user.role}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Badge variant="soft" color={user.status === 'Active' ? 'green' : 'gray'}>
                    {user.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell>{user.lastLogin}</Table.Cell>
                <Table.Cell>
                  <Button size="1" variant="soft">
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ScrollArea>
    </Card>
  );
}
```

### Chat Interface

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ChatInterface() {
  const [messages, setMessages] = React.useState([
    { id: 1, user: 'Alice', text: 'Hey there! How are you doing?', time: '10:30 AM', isOwn: false },
    { id: 2, user: 'You', text: "I'm doing great! Just working on some projects.", time: '10:32 AM', isOwn: true },
    { id: 3, user: 'Alice', text: 'That sounds exciting! What kind of projects?', time: '10:33 AM', isOwn: false },
    {
      id: 4,
      user: 'You',
      text: 'Building a new component library with some really cool features.',
      time: '10:35 AM',
      isOwn: true,
    },
  ]);

  const [newMessage, setNewMessage] = React.useState('');
  const scrollRef = React.useRef(null);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages((prev) => [...prev, message]);
      setNewMessage('');
    }
  };

  React.useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="max-w-[500px] h-[600px] flex flex-col">
      <div className="p-4 border-b border-gray-6">
        <div className="flex items-center gap-3">
          <Avatar fallback="A" size="2" color="blue" />
          <div>
            <Text weight="medium">Alice Johnson</Text>
            <Text size="1" color="green">
              Online
            </Text>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1" scrollbars="vertical" ref={scrollRef}>
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[70%] p-3 rounded-3 ${
                  message.isOwn ? 'bg-blue-9 text-blue-9-contrast' : 'bg-gray-3 text-gray-12'
                }`}
              >
                <Text size="2">{message.text}</Text>
                <Text size="1" className={`mt-1 block ${message.isOwn ? 'text-blue-11' : 'text-gray-11'}`}>
                  {message.time}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-gray-6">
        <div className="flex gap-2">
          <TextField
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1"
          />
          <Button onClick={sendMessage} disabled={!newMessage.trim()}>
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
}
```

### Modal with Scrollable Content

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ModalWithScroll() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Terms</Button>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Content className="max-w-[600px] max-h-[80vh] flex flex-col">
          <Dialog.Title>Terms of Service</Dialog.Title>
          <Dialog.Description>Please read and accept our terms of service</Dialog.Description>

          <ScrollArea className="flex-1 mt-4" scrollbars="vertical">
            <div className="space-y-4 pr-4">
              <div>
                <Heading size="3" className="mb-2">
                  1. Introduction
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </Text>
              </div>

              <div>
                <Heading size="3" className="mb-2">
                  2. User Accounts
                </Heading>
                <Text>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Text>
              </div>

              {/* Repeat sections to demonstrate scrolling */}
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i}>
                  <Heading size="3" className="mb-2">
                    {i + 3}. Section {i + 3}
                  </Heading>
                  <Text>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </Text>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex justify-end gap-3 mt-6">
            <Dialog.Close asChild>
              <Button variant="soft">Decline</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button>Accept Terms</Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
```

### Different Scrollbar Sizes

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ScrollbarSizes() {
  const content = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Thin)</Heading>
        <ScrollArea size="1" className="h-[200px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="space-y-2">
            {content.map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Medium)</Heading>
        <ScrollArea size="2" className="h-[200px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="space-y-2">
            {content.map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 3 (Thick)</Heading>
        <ScrollArea size="3" className="h-[200px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="space-y-2">
            {content.map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
```

### Scrollbar Direction Control

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ScrollDirection() {
  const verticalContent = Array.from({ length: 50 }, (_, i) => `Vertical Item ${i + 1}`);
  const horizontalContent = Array.from({ length: 20 }, (_, i) => `Horizontal Item ${i + 1}`);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Vertical Only</Heading>
        <ScrollArea scrollbars="vertical" className="h-[200px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="space-y-2">
            {verticalContent.map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-3">
        <Heading size="3">Horizontal Only</Heading>
        <ScrollArea scrollbars="horizontal" className="h-[100px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="flex gap-2 w-[800px]">
            {horizontalContent.map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2 whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="space-y-3">
        <Heading size="3">Both Directions</Heading>
        <ScrollArea scrollbars="both" className="h-[200px] w-[300px] border border-gray-6 rounded-3 p-4">
          <div className="w-[600px] space-y-2">
            {verticalContent.slice(0, 20).map((item) => (
              <div key={item} className="p-2 bg-gray-2 rounded-2 whitespace-nowrap">
                {item} - This content is wider than the container to demonstrate horizontal scrolling
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="space-y-4">
  <ScrollArea className="h-[400px] border border-gray-6 rounded-3">
    <div className="p-6 space-y-4">{/* Content */}</div>
  </ScrollArea>
</div>
```

### Typography Integration

```jsx
<ScrollArea className="h-[300px]">
  <div className="space-y-3">
    <Heading size="4">Scrollable Content</Heading>
    <Text>Content that scrolls vertically...</Text>
  </div>
</ScrollArea>
```

### Color Support

The ScrollArea component uses the default theme colors for scrollbars and automatically adapts to the current color scheme.

## Accessibility

The ScrollArea component includes comprehensive accessibility features:

### Keyboard Navigation

- **Arrow Keys** - Scroll in small increments
- **Page Up/Page Down** - Scroll in large increments
- **Home/End** - Scroll to beginning/end
- **Space** - Scroll down one page

### Screen Reader Support

- Proper scrollable region markup
- Scroll position announcements
- Content overflow indicators
- Focus management within scrollable areas

### Focus Management

- Content within ScrollArea remains focusable
- Tab order is preserved
- Focus indicators work normally within scrolled content

## Advanced Usage

### Programmatic Scrolling

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ProgrammaticScroll() {
  const scrollRef = React.useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={scrollToTop} size="2">
          Scroll to Top
        </Button>
        <Button onClick={scrollToBottom} size="2">
          Scroll to Bottom
        </Button>
      </div>

      <ScrollArea ref={scrollRef} className="h-[300px] border border-gray-6 rounded-3 p-4">
        {/* Scrollable content */}
      </ScrollArea>
    </div>
  );
}
```

### Scroll Event Handling

```jsx
import { ScrollArea } from '@frosted-ui/core';

function ScrollEvents() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPosition(Math.round(scrollPercentage));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Text size="2">Scroll Position:</Text>
        <Badge variant="soft">{scrollPosition}%</Badge>
      </div>

      <ScrollArea className="h-[300px] border border-gray-6 rounded-3 p-4" onScroll={handleScroll}>
        {/* Content */}
      </ScrollArea>
    </div>
  );
}
```

## Best Practices

### Performance Considerations

- **Use appropriate heights** to avoid unnecessary scrollbars
- **Optimize content rendering** within scrollable areas
- **Consider virtualization** for large lists (use with react-window or similar)
- **Avoid nested scroll areas** when possible

### User Experience

- **Provide scroll indicators** when content is scrollable
- **Use consistent scrollbar styling** throughout your application
- **Consider scroll position persistence** for better UX
- **Test on different devices** and input methods

### Layout Guidelines

- **Set explicit heights** on ScrollArea containers
- **Use proper overflow handling** for different content types
- **Consider responsive scrolling** behavior
- **Maintain accessible contrast** for scrollbar elements

## Related Components

- **[Table](../table/table.ai.md)** - For data tables that may need scrolling
- **[Card](../card/card.ai.md)** - Container component often used with ScrollArea
- **[Dialog](../dialog/dialog.ai.md)** - Modals that may need scrollable content
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For content within scrollable areas
