# Frosted UI Accordion Component

A collapsible content component built on Radix UI that allows users to show and hide sections of content with smooth animations and proper accessibility support.

## Overview

The Accordion component provides an accessible and animated way to organize content in collapsible sections. Built on Radix UI's accordion primitive, it supports both single and multiple selection modes, with smooth slide animations and keyboard navigation. The component follows WAI-ARIA design patterns and integrates seamlessly with Frosted UI's design system.

## Basic Usage

```jsx
import { Accordion } from 'frosted-ui';

function FAQSection() {
  return (
    <Accordion.Root type="single" collapsible>
      <div className="flex flex-col gap-4">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger>Is it customizable?</Accordion.Trigger>
          <Accordion.Content>Yes. It integrates with Frosted UI's design system.</Accordion.Content>
        </Accordion.Item>
      </div>
    </Accordion.Root>
  );
}
```

## Component Structure

The Accordion follows a compound component pattern with four parts:

- **`Accordion.Root`** - Main container that manages state and behavior
- **`Accordion.Item`** - Individual collapsible section wrapper
- **`Accordion.Trigger`** - Clickable header that toggles content visibility
- **`Accordion.Content`** - Collapsible content area

## Props

### Accordion.Root Props

| Prop           | Type                         | Default      | Description                                       |
| -------------- | ---------------------------- | ------------ | ------------------------------------------------- |
| `type`         | `'single' \| 'multiple'`     | `undefined`  | Whether one or multiple items can be open         |
| `value`        | `string \| string[]`         | `undefined`  | Controlled value(s) of open item(s)               |
| `defaultValue` | `string \| string[]`         | `undefined`  | Default value(s) for uncontrolled usage           |
| `collapsible`  | `boolean`                    | `false`      | Whether items can be collapsed when type="single" |
| `disabled`     | `boolean`                    | `false`      | Whether the accordion is disabled                 |
| `dir`          | `'ltr' \| 'rtl'`             | `'ltr'`      | Reading direction                                 |
| `orientation`  | `'horizontal' \| 'vertical'` | `'vertical'` | Orientation of the accordion                      |

### Accordion.Item Props

| Prop       | Type      | Default     | Description                    |
| ---------- | --------- | ----------- | ------------------------------ |
| `value`    | `string`  | `undefined` | Unique identifier for the item |
| `disabled` | `boolean` | `false`     | Whether this item is disabled  |

### Accordion.Trigger Props

Standard button props with built-in icon and accessibility features.

### Accordion.Content Props

Standard div props for the content container.

## Examples

### Single Selection Mode

```jsx
<Accordion.Root type="single" collapsible defaultValue="item-1">
  <div className="flex flex-col gap-4">
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Getting Started</Accordion.Trigger>
      <Accordion.Content>
        <Text size="2">Welcome to our platform! Here's everything you need to know to get started.</Text>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Trigger>Account Settings</Accordion.Trigger>
      <Accordion.Content>
        <Text size="2">Manage your account preferences and security settings here.</Text>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Accordion.Trigger>Billing Information</Accordion.Trigger>
      <Accordion.Content>
        <Text size="2">View and update your billing information and subscription details.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </div>
</Accordion.Root>
```

### Multiple Selection Mode

```jsx
<Accordion.Root type="multiple" defaultValue={['features', 'pricing']}>
  <div className="flex flex-col gap-4">
    <Accordion.Item value="features">
      <Accordion.Trigger>Product Features</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-3">
          <Text size="2">Our platform includes:</Text>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <Text size="2">Advanced analytics dashboard</Text>
            </li>
            <li>
              <Text size="2">Real-time collaboration tools</Text>
            </li>
            <li>
              <Text size="2">Automated workflow management</Text>
            </li>
          </ul>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="pricing">
      <Accordion.Trigger>Pricing Plans</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-2">
          <Text size="2" weight="medium">
            Choose the plan that works for you:
          </Text>
          <Text size="2">Starter: $9/month • Pro: $29/month • Enterprise: Custom</Text>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="support">
      <Accordion.Trigger>Customer Support</Accordion.Trigger>
      <Accordion.Content>
        <Text size="2">24/7 support available via chat, email, and phone for all plans.</Text>
      </Accordion.Content>
    </Accordion.Item>
  </div>
</Accordion.Root>
```

### Controlled Accordion

```jsx
function ControlledAccordion() {
  const [openItems, setOpenItems] = React.useState(['item-1']);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => setOpenItems(['item-1', 'item-2', 'item-3'])}
          className="px-3 py-1 bg-blue-9 text-blue-9-contrast rounded text-2"
        >
          Expand All
        </button>
        <button onClick={() => setOpenItems([])} className="px-3 py-1 bg-gray-6 text-gray-12 rounded text-2">
          Collapse All
        </button>
      </div>

      <Accordion.Root type="multiple" value={openItems} onValueChange={setOpenItems}>
        <div className="flex flex-col gap-4">
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Section 1</Accordion.Trigger>
            <Accordion.Content>
              <Text size="2">Content for section 1</Text>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.Trigger>Section 2</Accordion.Trigger>
            <Accordion.Content>
              <Text size="2">Content for section 2</Text>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.Trigger>Section 3</Accordion.Trigger>
            <Accordion.Content>
              <Text size="2">Content for section 3</Text>
            </Accordion.Content>
          </Accordion.Item>
        </div>
      </Accordion.Root>
    </div>
  );
}
```

### With Rich Content

```jsx
<Accordion.Root type="single" collapsible>
  <div className="flex flex-col gap-4">
    <Accordion.Item value="overview">
      <Accordion.Trigger>Project Overview</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="solid" color="success">
              Active
            </Badge>
            <Heading size="3" weight="medium">
              Q4 Product Launch
            </Heading>
          </div>
          <Text size="2" color="gray">
            This project focuses on delivering our next major product release with enhanced user experience and new
            features.
          </Text>
          <div className="flex items-center gap-3">
            <AvatarGroup.Root size="2">
              <AvatarGroup.Avatar fallback="JD" color="blue" />
              <AvatarGroup.Avatar fallback="SM" color="green" />
              <AvatarGroup.Avatar fallback="RK" color="purple" />
            </AvatarGroup.Root>
            <Text size="2" color="gray">
              3 team members
            </Text>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="timeline">
      <Accordion.Trigger>Project Timeline</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium">
              Phase 1: Research
            </Text>
            <Badge variant="soft" color="blue">
              Completed
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium">
              Phase 2: Development
            </Text>
            <Badge variant="solid" color="warning">
              In Progress
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <Text size="2" weight="medium">
              Phase 3: Testing
            </Text>
            <Badge variant="outline" color="gray">
              Upcoming
            </Badge>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="resources">
      <Accordion.Trigger>Resources & Documents</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 hover:bg-gray-2 rounded">
            <Text size="2">Project Requirements.pdf</Text>
            <Text size="1" color="blue">
              Download
            </Text>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-gray-2 rounded">
            <Text size="2">Design Mockups.figma</Text>
            <Text size="1" color="blue">
              View
            </Text>
          </div>
          <div className="flex items-center justify-between p-2 hover:bg-gray-2 rounded">
            <Text size="2">Technical Specifications.md</Text>
            <Text size="1" color="blue">
              Open
            </Text>
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </div>
</Accordion.Root>
```

## Integration with Frosted UI Tailwind Tokens

The Accordion component integrates seamlessly with Frosted UI's design system:

### Spacing and Layout

```jsx
{
  /* Use consistent spacing between items */
}
<Accordion.Root type="single" collapsible>
  <div className="flex flex-col gap-4">
    {' '}
    {/* gap-4 = 16px spacing */}
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Section Title</Accordion.Trigger>
      <Accordion.Content>
        <div className="space-y-3">
          {' '}
          {/* Consistent content spacing */}
          <Text size="2">Content here</Text>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </div>
</Accordion.Root>;
```

### Color Integration

```jsx
{
  /* Accordion automatically uses Frosted UI color tokens */
}
<div className="p-6 bg-panel-solid rounded-lg border border-gray-6">
  <Accordion.Root type="single" collapsible>
    {/* Triggers use gray-a3 background and gray-a11 text automatically */}
    {/* Focus styles use color-focus-root automatically */}
  </Accordion.Root>
</div>;
```

### Typography Integration

```jsx
{
  /* Use Frosted UI Typography components in content */
}
<Accordion.Content>
  <div className="space-y-3">
    <Heading size="3" weight="medium">
      Content Title
    </Heading>
    <Text size="2" color="gray">
      Detailed content description using proper typography components.
    </Text>
  </div>
</Accordion.Content>;
```

## Accessibility

### Built-in Accessibility Features

- **WAI-ARIA compliant**: Follows accordion design pattern
- **Keyboard navigation**: Arrow keys, Enter, Space, Home, End
- **Screen reader support**: Proper labeling and state announcements
- **Focus management**: Logical tab order and visible focus indicators

### Keyboard Shortcuts

| Key           | Action                                       |
| ------------- | -------------------------------------------- |
| `Enter/Space` | Toggle the focused accordion item            |
| `ArrowDown`   | Move focus to the next accordion trigger     |
| `ArrowUp`     | Move focus to the previous accordion trigger |
| `Home`        | Move focus to the first accordion trigger    |
| `End`         | Move focus to the last accordion trigger     |

### Accessibility Best Practices

```jsx
// ✅ Good - Descriptive trigger text
<Accordion.Trigger>
  Shipping and Returns Policy
</Accordion.Trigger>

// ✅ Good - Structured content with headings
<Accordion.Content>
  <div className="space-y-3">
    <Heading size="3" weight="medium">Return Timeline</Heading>
    <Text size="2">Items can be returned within 30 days...</Text>
  </div>
</Accordion.Content>

// ❌ Avoid - Vague trigger text
<Accordion.Trigger>
  Click here for more info
</Accordion.Trigger>
```

## Advanced Usage

### FAQ Section

```jsx
function FAQSection({ faqs }) {
  return (
    <div className="max-w-3xl">
      <Heading size="6" weight="bold" className="mb-6">
        Frequently Asked Questions
      </Heading>

      <Accordion.Root type="single" collapsible>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={`faq-${index}`}>
              <Accordion.Trigger>{faq.question}</Accordion.Trigger>
              <Accordion.Content>
                <Text size="2">{faq.answer}</Text>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </div>
      </Accordion.Root>
    </div>
  );
}
```

### Settings Panel

```jsx
function SettingsPanel() {
  return (
    <div className="max-w-2xl">
      <Heading size="5" weight="bold" className="mb-4">
        Account Settings
      </Heading>

      <Accordion.Root type="multiple" defaultValue={['profile']}>
        <div className="flex flex-col gap-4">
          <Accordion.Item value="profile">
            <Accordion.Trigger>Profile Information</Accordion.Trigger>
            <Accordion.Content>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text size="2" weight="medium" className="mb-1">
                      First Name
                    </Text>
                    <input className="w-full p-2 border border-gray-6 rounded text-2" />
                  </div>
                  <div>
                    <Text size="2" weight="medium" className="mb-1">
                      Last Name
                    </Text>
                    <input className="w-full p-2 border border-gray-6 rounded text-2" />
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="security">
            <Accordion.Trigger>Security Settings</Accordion.Trigger>
            <Accordion.Content>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text size="2">Two-factor authentication</Text>
                  <Badge variant="soft" color="success">
                    Enabled
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Text size="2">Email notifications</Text>
                  <Badge variant="outline" color="gray">
                    Disabled
                  </Badge>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item value="billing">
            <Accordion.Trigger>Billing & Subscription</Accordion.Trigger>
            <Accordion.Content>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text size="2">Current Plan</Text>
                  <Badge variant="solid" color="blue">
                    Pro Plan
                  </Badge>
                </div>
                <Text size="2" color="gray">
                  Next billing date: March 15, 2024
                </Text>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </div>
      </Accordion.Root>
    </div>
  );
}
```

### Documentation Sections

```jsx
function DocumentationAccordion({ sections }) {
  const [openSections, setOpenSections] = React.useState(['getting-started']);

  return (
    <div className="flex gap-6">
      <div className="w-64">
        <Heading size="4" weight="medium" className="mb-4">
          Documentation
        </Heading>

        <Accordion.Root type="multiple" value={openSections} onValueChange={setOpenSections}>
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <Accordion.Item key={section.id} value={section.id}>
                <Accordion.Trigger>{section.title}</Accordion.Trigger>
                <Accordion.Content>
                  <div className="space-y-1">
                    {section.subsections.map((sub) => (
                      <div key={sub.id} className="py-1">
                        <Text size="2" className="hover:text-blue-11 cursor-pointer">
                          {sub.title}
                        </Text>
                      </div>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </div>
        </Accordion.Root>
      </div>

      <div className="flex-1">{/* Main content area */}</div>
    </div>
  );
}
```

## Best Practices

### 1. Use Appropriate Selection Mode

```jsx
// ✅ Good - Single mode for mutually exclusive content
<Accordion.Root type="single" collapsible>
  {/* FAQ items where only one answer should be visible */}
</Accordion.Root>

// ✅ Good - Multiple mode for independent sections
<Accordion.Root type="multiple">
  {/* Settings sections that can be open simultaneously */}
</Accordion.Root>
```

### 2. Provide Clear Trigger Text

```jsx
// ✅ Good - Descriptive and specific
<Accordion.Trigger>Shipping and Return Policy</Accordion.Trigger>
<Accordion.Trigger>Account Settings and Preferences</Accordion.Trigger>

// ❌ Avoid - Vague or generic
<Accordion.Trigger>More Info</Accordion.Trigger>
<Accordion.Trigger>Click Here</Accordion.Trigger>
```

### 3. Structure Content Properly

```jsx
// ✅ Good - Well-organized content with Typography components
<Accordion.Content>
  <div className="space-y-3">
    <Heading size="3" weight="medium">Section Title</Heading>
    <Text size="2">
      Clear, concise content that's easy to scan and read.
    </Text>
  </div>
</Accordion.Content>

// ❌ Avoid - Unstructured content
<Accordion.Content>
  <div>
    Lots of text without proper structure or typography components...
  </div>
</Accordion.Content>
```

### 4. Handle Loading States

```jsx
function AccordionWithLoading({ isLoading, data }) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-10 bg-gray-3 rounded animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Accordion.Root type="single" collapsible>
      <div className="flex flex-col gap-4">
        {data.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Trigger>{item.title}</Accordion.Trigger>
            <Accordion.Content>
              <Text size="2">{item.content}</Text>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </div>
    </Accordion.Root>
  );
}
```

## Performance Considerations

### Animation Performance

- Uses CSS animations for smooth expand/collapse
- Leverages `transform` properties for optimal performance
- 300ms duration provides good balance of speed and smoothness

### Memory Efficiency

- Built on Radix UI primitives for optimal bundle size
- Lazy content rendering - content only rendered when expanded
- Efficient state management for multiple items

## Technical Details

### Animation Implementation

The accordion uses CSS keyframe animations for smooth content reveal:

```css
/* Automatic slide animations */
@keyframes fui-accordion-slide-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes fui-accordion-slide-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

### Styling Details

- Triggers use: 12px font size, bold weight, uppercase text, 0.06em letter spacing
- Content padding: 16px top/bottom, 24px left/right
- Focus styles: 2px inset shadow with focus color token
- Background: gray-a3 with gray-a5 border

## Related Components

- **[Badge](../badge/badge.ai.md)** - For status indicators in accordion content
- **[Avatar](../avatar/avatar.ai.md)** - For user representation in content
- **[Text](../text/text.ai.md)** - For accordion content typography
- **[Heading](../heading/heading.ai.md)** - For content section titles

## Color Support

The Accordion component supports Frosted UI's design system through automatic color token usage. See the [Color System](/COLOR_SYSTEM_README.md) for complete documentation.

The component automatically uses appropriate gray color tokens for backgrounds, borders, and text, with proper contrast ratios in both light and dark themes.
