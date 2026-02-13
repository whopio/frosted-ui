# Frosted UI TextArea Component

A multi-line text input component for longer text content. Perfect for comments, descriptions, messages, and any scenario requiring more than a single line of text input.

## Overview

The TextArea component provides a resizable, multi-line text input with consistent styling across the Frosted UI design system. It supports multiple sizes, variants, and states while maintaining excellent accessibility and user experience.

Built with proper focus management, validation states, and keyboard navigation for optimal usability in forms and content creation workflows.

## Basic Usage

```jsx
import { TextArea } from '@frosted-ui/core';

function BasicTextArea() {
  const [value, setValue] = React.useState('');

  return (
    <TextArea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your message..."
      aria-label="Message input"
    />
  );
}
```

## Props

### TextArea Props

| Prop          | Type                                             | Default      | Description                                       |
| ------------- | ------------------------------------------------ | ------------ | ------------------------------------------------- |
| `size`        | `'1' \| '2' \| '3'`                              | `'2'`        | The size of the text area                         |
| `variant`     | `'surface' \| 'classic' \| 'soft'`               | `'surface'`  | The visual style variant                          |
| `color`       | `string`                                         | `undefined`  | The accent color - supports all Frosted UI colors |
| `placeholder` | `string`                                         | `undefined`  | Placeholder text shown when empty                 |
| `disabled`    | `boolean`                                        | `false`      | Whether the text area is disabled                 |
| `readOnly`    | `boolean`                                        | `false`      | Whether the text area is read-only                |
| `required`    | `boolean`                                        | `false`      | Whether the text area is required                 |
| `rows`        | `number`                                         | `undefined`  | Number of visible text lines                      |
| `cols`        | `number`                                         | `undefined`  | Number of visible character columns               |
| `resize`      | `'none' \| 'both' \| 'horizontal' \| 'vertical'` | `'vertical'` | Resize behavior                                   |

## Examples

### Comment Form

```jsx
import { TextArea, Heading, Text, Button, Avatar } from '@frosted-ui/core';

function CommentForm() {
  const [comment, setComment] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Comment submitted:', comment);
    setComment('');
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-4">
      <Heading size="3">Leave a Comment</Heading>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <Avatar size="2" fallback="You" />
          <div className="flex-1 space-y-3">
            <TextArea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What are your thoughts?"
              rows={4}
              size="2"
              required
              aria-label="Comment text"
            />

            <div className="flex justify-between items-center">
              <Text size="1" color="gray">
                {comment.length}/500 characters
              </Text>
              <Button type="submit" disabled={!comment.trim() || isSubmitting} size="2">
                {isSubmitting ? 'Posting...' : 'Post Comment'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
```

### Support Ticket Form

```jsx
import { TextArea, Heading, Text, TextField, Select, Button } from '@frosted-ui/core';

function SupportTicketForm() {
  const [formData, setFormData] = React.useState({
    subject: '',
    category: '',
    priority: 'medium',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support ticket:', formData);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-[600px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Submit Support Ticket
        </Heading>
        <Text color="gray" size="2">
          Describe your issue and we'll help you resolve it
        </Text>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Text weight="medium" className="mb-2">
            Subject *
          </Text>
          <TextField
            value={formData.subject}
            onChange={(e) => updateField('subject', e.target.value)}
            placeholder="Brief description of the issue"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text weight="medium" className="mb-2">
              Category *
            </Text>
            <Select.Root value={formData.category} onValueChange={(value) => updateField('category', value)}>
              <Select.Trigger>
                <Select.Value placeholder="Select category" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="technical">Technical Issue</Select.Item>
                <Select.Item value="billing">Billing Question</Select.Item>
                <Select.Item value="feature">Feature Request</Select.Item>
                <Select.Item value="other">Other</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Priority
            </Text>
            <Select.Root value={formData.priority} onValueChange={(value) => updateField('priority', value)}>
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="low">Low</Select.Item>
                <Select.Item value="medium">Medium</Select.Item>
                <Select.Item value="high">High</Select.Item>
                <Select.Item value="urgent">Urgent</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Description *
          </Text>
          <TextArea
            value={formData.description}
            onChange={(e) => updateField('description', e.target.value)}
            placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
            rows={6}
            size="2"
            required
            aria-label="Issue description"
          />
        </div>

        <Button type="submit" disabled={!formData.subject || !formData.category || !formData.description} size="2">
          Submit Ticket
        </Button>
      </form>
    </div>
  );
}
```

### Product Review

```jsx
import { TextArea, Heading, Text, Button, Badge } from '@frosted-ui/core';

function ProductReview() {
  const [rating, setRating] = React.useState(5);
  const [review, setReview] = React.useState('');
  const [pros, setPros] = React.useState('');
  const [cons, setCons] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', { rating, review, pros, cons });
  };

  return (
    <div className="max-w-[700px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Write a Review
        </Heading>
        <Text color="gray" size="2">
          Share your experience with this product
        </Text>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Text weight="medium" className="mb-3">
            Overall Rating
          </Text>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${star <= rating ? 'text-yellow-9' : 'text-gray-6'}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Your Review *
          </Text>
          <TextArea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Tell others about your experience with this product. What did you like? How did it work for you?"
            rows={5}
            size="2"
            required
            aria-label="Product review"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Text weight="medium" className="mb-2">
              Pros
            </Text>
            <TextArea
              value={pros}
              onChange={(e) => setPros(e.target.value)}
              placeholder="What did you like about this product?"
              rows={4}
              size="2"
              color="green"
              aria-label="Product pros"
            />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Cons
            </Text>
            <TextArea
              value={cons}
              onChange={(e) => setCons(e.target.value)}
              placeholder="What could be improved?"
              rows={4}
              size="2"
              color="red"
              aria-label="Product cons"
            />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge color="blue" variant="soft">
              {rating} star{rating !== 1 ? 's' : ''}
            </Badge>
            <Text size="2" color="gray">
              {review.length} characters
            </Text>
          </div>
          <Button type="submit" disabled={!review.trim()} size="2">
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
}
```

### Code Editor Interface

```jsx
import { TextArea, Heading, Text, Button, Badge, Select } from '@frosted-ui/core';

function CodeEditor() {
  const [code, setCode] = React.useState(`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`);
  const [language, setLanguage] = React.useState('javascript');

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
  ];

  const lineCount = code.split('\n').length;

  return (
    <div className="max-w-[800px] space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Heading size="4">Code Editor</Heading>
          <Text color="gray" size="2">
            Write and test your code
          </Text>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="soft" color="gray">
            {lineCount} lines
          </Badge>
          <Select.Root value={language} onValueChange={setLanguage}>
            <Select.Trigger className="w-[120px]">
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {languages.map((lang) => (
                <Select.Item key={lang.value} value={lang.value}>
                  {lang.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </div>
      </div>

      <TextArea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={12}
        size="2"
        variant="classic"
        className="font-mono text-sm"
        aria-label="Code editor"
      />

      <div className="flex gap-2">
        <Button size="2" color="green">
          Run Code
        </Button>
        <Button size="2" variant="soft">
          Format
        </Button>
        <Button size="2" variant="soft">
          Clear
        </Button>
      </div>
    </div>
  );
}
```

### Message Composer

```jsx
import { TextArea, Heading, Text, Button, IconButton, Avatar } from '@frosted-ui/core';

function MessageComposer() {
  const [message, setMessage] = React.useState('');
  const [recipient, setRecipient] = React.useState('Sarah Wilson');

  const handleSend = () => {
    if (!message.trim()) return;
    console.log('Message sent:', { recipient, message });
    setMessage('');
  };

  const insertTemplate = (template) => {
    setMessage((prev) => prev + template);
  };

  const templates = [
    'Thanks for reaching out! ',
    "I'll get back to you soon. ",
    'Let me know if you have any questions. ',
  ];

  return (
    <div className="max-w-[600px] space-y-4">
      <div className="flex items-center gap-3">
        <Avatar size="2" fallback="SW" />
        <div>
          <Text weight="medium">Send message to {recipient}</Text>
          <Text size="1" color="gray">
            Online now
          </Text>
        </div>
      </div>

      <div className="space-y-3">
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows={4}
          size="2"
          aria-label="Message content"
        />

        <div className="flex flex-wrap gap-2">
          <Text size="1" color="gray">
            Quick templates:
          </Text>
          {templates.map((template, index) => (
            <button
              key={index}
              onClick={() => insertTemplate(template)}
              className="text-sm px-2 py-1 border border-gray-6 rounded-2 hover:bg-gray-2"
            >
              {template.trim()}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Text size="1" color="gray">
            {message.length} characters
          </Text>
          <div className="flex gap-2">
            <Button variant="soft" size="2">
              Save Draft
            </Button>
            <Button onClick={handleSend} disabled={!message.trim()} size="2">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Size and Variant Examples

```jsx
import { TextArea, Heading, Text } from '@frosted-ui/core';

function SizeAndVariantExamples() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading size="3">Sizes</Heading>

        <div className="space-y-3">
          <div>
            <Text weight="medium" className="mb-2">
              Size 1 (Small)
            </Text>
            <TextArea size="1" placeholder="Small text area" rows={3} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Size 2 (Default)
            </Text>
            <TextArea size="2" placeholder="Default text area" rows={3} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Size 3 (Large)
            </Text>
            <TextArea size="3" placeholder="Large text area" rows={3} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Heading size="3">Variants</Heading>

        <div className="space-y-3">
          <div>
            <Text weight="medium" className="mb-2">
              Surface (Default)
            </Text>
            <TextArea variant="surface" placeholder="Surface variant" rows={3} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Classic
            </Text>
            <TextArea variant="classic" placeholder="Classic variant" rows={3} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Soft
            </Text>
            <TextArea variant="soft" placeholder="Soft variant" rows={3} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Heading size="3">Colors</Heading>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Text weight="medium" className="mb-2">
              Blue
            </Text>
            <TextArea color="blue" placeholder="Blue accent" rows={2} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Green
            </Text>
            <TextArea color="green" placeholder="Green accent" rows={2} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Red
            </Text>
            <TextArea color="red" placeholder="Red accent" rows={2} />
          </div>

          <div>
            <Text weight="medium" className="mb-2">
              Purple
            </Text>
            <TextArea color="purple" placeholder="Purple accent" rows={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### States Demo

```jsx
import { TextArea, Heading, Text } from '@frosted-ui/core';

function StatesDemo() {
  return (
    <div className="space-y-6">
      <Heading size="3">TextArea States</Heading>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Text weight="medium" className="mb-2">
            Normal
          </Text>
          <TextArea placeholder="Normal state" rows={3} />
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Disabled
          </Text>
          <TextArea placeholder="Disabled state" disabled rows={3} />
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Read Only
          </Text>
          <TextArea value="This content is read-only" readOnly rows={3} />
        </div>

        <div>
          <Text weight="medium" className="mb-2">
            Required
          </Text>
          <TextArea placeholder="Required field" required rows={3} />
        </div>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <Text weight="medium">Description</Text>
  <TextArea placeholder="Enter description..." />
</div>

// Grid layouts with proper spacing
<div className="grid grid-cols-2 gap-4">
  <TextArea placeholder="Column 1" />
  <TextArea placeholder="Column 2" />
</div>
```

### Typography Integration

```jsx
// Use with Typography components for labels
<div className="space-y-2">
  <Heading size="3">Feedback</Heading>
  <Text color="gray" size="2">
    Tell us about your experience
  </Text>
  <TextArea placeholder="Your feedback..." />
</div>
```

## Accessibility

The TextArea component includes comprehensive accessibility features:

- **Keyboard Navigation**: Standard text editing keyboard shortcuts
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators and logical tab order
- **Validation States**: Proper error state announcements
- **Resize Handle**: Accessible resize functionality

### Keyboard Shortcuts

- `Tab`: Move focus to/from text area
- `Ctrl/Cmd + A`: Select all text
- `Ctrl/Cmd + C/V/X`: Copy/paste/cut operations
- `Ctrl/Cmd + Z`: Undo
- `Enter`: New line

## Best Practices

### Content Guidelines

- **Clear placeholders**: Use descriptive placeholder text
- **Appropriate sizing**: Set reasonable default rows/cols
- **Character limits**: Consider showing character counts for limited fields
- **Resize behavior**: Choose appropriate resize settings

### Form Integration

- **Proper labeling**: Always provide clear labels or aria-label
- **Validation feedback**: Show validation states clearly
- **Required indicators**: Mark required fields appropriately
- **Error handling**: Provide helpful error messages

### User Experience

- **Auto-sizing**: Consider auto-expanding text areas for better UX
- **Save drafts**: Implement auto-save for longer content
- **Templates**: Provide quick-insert templates for common content
- **Focus management**: Handle focus appropriately in multi-step forms

## Advanced Usage

### Auto-Expanding TextArea

```jsx
function AutoExpandingTextArea() {
  const [value, setValue] = React.useState('');
  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <TextArea
      ref={textareaRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="This text area expands as you type..."
      rows={3}
      style={{ resize: 'none', overflow: 'hidden' }}
    />
  );
}
```

### Character Counter with Limit

```jsx
function TextAreaWithLimit() {
  const [value, setValue] = React.useState('');
  const maxLength = 280;
  const remaining = maxLength - value.length;

  return (
    <div className="space-y-2">
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, maxLength))}
        placeholder="What's happening?"
        rows={4}
      />
      <div className="flex justify-end">
        <Text size="1" color={remaining < 20 ? 'red' : remaining < 50 ? 'orange' : 'gray'}>
          {remaining} characters remaining
        </Text>
      </div>
    </div>
  );
}
```

## Related Components

- **[TextField](../text-field/text-field.ai.md)** - For single-line text input
- **[Code](../code/code.ai.md)** - For displaying code snippets
- **[Button](../button/button.ai.md)** - For form submission actions
- **[Card](../card/card.ai.md)** - For containing text area forms
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For labels and help text
