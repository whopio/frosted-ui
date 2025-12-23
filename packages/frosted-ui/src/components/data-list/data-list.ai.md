# Frosted UI DataList Component

A structured component for displaying key-value pairs and metadata in a clean, organized format. Perfect for user profiles, product details, configuration settings, and any scenario where you need to present labeled information.

## Overview

The DataList component provides a semantic and accessible way to display structured data using HTML definition lists. It offers flexible layouts with horizontal and vertical orientations, multiple sizes, and proper alignment options for creating professional data displays.

Built with sub-components for maximum flexibility, it supports rich content in both labels and values while maintaining consistent spacing and typography.

## Basic Usage

```jsx
import { DataList } from '@frosted-ui/core';

function BasicDataList() {
  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label>Name</DataList.Label>
        <DataList.Value>John Doe</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>john@example.com</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>Active</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

## Props

### DataList.Root Props

| Prop          | Type                                     | Default        | Description                             |
| ------------- | ---------------------------------------- | -------------- | --------------------------------------- |
| `size`        | `'1' \| '2' \| '3'`                      | `'2'`          | The size of the data list               |
| `orientation` | `'horizontal' \| 'vertical'`             | `'horizontal'` | The layout orientation of the data list |
| `trim`        | `'normal' \| 'start' \| 'end' \| 'both'` | `'normal'`     | How to trim whitespace from the list    |

### DataList.Item Props

| Prop    | Type                                                      | Default     | Description                            |
| ------- | --------------------------------------------------------- | ----------- | -------------------------------------- |
| `align` | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `undefined` | Vertical alignment of the item content |

### DataList.Label Props

| Prop           | Type      | Default     | Description                          |
| -------------- | --------- | ----------- | ------------------------------------ |
| `color`        | `string`  | `undefined` | The accent color for the label       |
| `highContrast` | `boolean` | `false`     | Whether to use high contrast styling |

### DataList.Value Props

The value component accepts all standard HTML `dd` element props and passes them through.

## Examples

### User Profile Data

```jsx
import { DataList, Badge, Link, Avatar } from '@frosted-ui/core';

function UserProfile() {
  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label>Avatar</DataList.Label>
        <DataList.Value>
          <Avatar size="3" fallback="JD" />
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Full Name</DataList.Label>
        <DataList.Value>John Doe</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>
          <Link href="mailto:john@example.com">john@example.com</Link>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>
          <Badge color="green" variant="soft">
            Active
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Member Since</DataList.Label>
        <DataList.Value>January 15, 2023</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Last Login</DataList.Label>
        <DataList.Value>2 hours ago</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

### Product Details

```jsx
import { DataList, Badge, Code, Button } from '@frosted-ui/core';

function ProductDetails() {
  return (
    <DataList.Root size="3">
      <DataList.Item>
        <DataList.Label>Product Name</DataList.Label>
        <DataList.Value>Wireless Headphones Pro</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>SKU</DataList.Label>
        <DataList.Value>
          <Code variant="ghost">WH-PRO-001</Code>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Price</DataList.Label>
        <DataList.Value>$199.99</DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Availability</DataList.Label>
        <DataList.Value>
          <Badge color="green" variant="soft">
            In Stock
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Category</DataList.Label>
        <DataList.Value>Electronics > Audio > Headphones</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Weight</DataList.Label>
        <DataList.Value>285g</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Dimensions</DataList.Label>
        <DataList.Value>18 × 16 × 8 cm</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

### Size Variants

```jsx
import { DataList, Heading } from '@frosted-ui/core';

function SizeVariants() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading size="3">Size 1 (Small)</Heading>
        <DataList.Root size="1">
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Compact layout</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Description</DataList.Label>
            <DataList.Value>Perfect for tight spaces</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>

      <div className="space-y-4">
        <Heading size="3">Size 2 (Default)</Heading>
        <DataList.Root size="2">
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Standard layout</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Description</DataList.Label>
            <DataList.Value>Balanced spacing and readability</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>

      <div className="space-y-4">
        <Heading size="3">Size 3 (Large)</Heading>
        <DataList.Root size="3">
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Spacious layout</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Description</DataList.Label>
            <DataList.Value>Maximum breathing room and emphasis</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  );
}
```

### Orientation Examples

```jsx
import { DataList, Badge } from '@frosted-ui/core';

function OrientationExamples() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading size="3">Horizontal (Default)</Heading>
        <DataList.Root orientation="horizontal">
          <DataList.Item>
            <DataList.Label>Status</DataList.Label>
            <DataList.Value>
              <Badge color="green">Active</Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Priority</DataList.Label>
            <DataList.Value>
              <Badge color="red">High</Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Assignee</DataList.Label>
            <DataList.Value>Sarah Wilson</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>

      <div className="space-y-4">
        <Heading size="3">Vertical</Heading>
        <DataList.Root orientation="vertical" className="max-w-[300px]">
          <DataList.Item>
            <DataList.Label>Project Name</DataList.Label>
            <DataList.Value>Website Redesign</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Description</DataList.Label>
            <DataList.Value>
              Complete overhaul of the company website including new branding, improved user experience, and mobile
              optimization.
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Timeline</DataList.Label>
            <DataList.Value>6 weeks</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  );
}
```

### Alignment Examples

```jsx
import { DataList, Badge, Avatar } from '@frosted-ui/core';

function AlignmentExamples() {
  return (
    <DataList.Root>
      <DataList.Item align="start">
        <DataList.Label>Start Aligned</DataList.Label>
        <DataList.Value>
          <div className="space-y-1">
            <div>Multiple lines</div>
            <div>of content</div>
          </div>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Center Aligned</DataList.Label>
        <DataList.Value>
          <Badge color="blue" variant="soft">
            Status Badge
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="end">
        <DataList.Label>End Aligned</DataList.Label>
        <DataList.Value>
          <Avatar size="2" fallback="JD" />
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="baseline">
        <DataList.Label>Baseline Aligned</DataList.Label>
        <DataList.Value>
          <div className="flex items-baseline gap-2">
            <span className="text-4 font-bold">$99</span>
            <span className="text-1 text-gray-11">/month</span>
          </div>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

### Interactive Data List

```jsx
import { DataList, IconButton, Code, Badge, Tooltip } from '@frosted-ui/core';

function InteractiveDataList() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DataList.Root>
      <DataList.Item align="center">
        <DataList.Label>User ID</DataList.Label>
        <DataList.Value>
          <div className="flex items-center gap-2">
            <Code variant="ghost">usr_12345abcdef</Code>
            <Tooltip content={copied ? 'Copied!' : 'Copy User ID'}>
              <IconButton size="1" variant="ghost" onClick={() => copyToClipboard('usr_12345abcdef')}>
                <CopyIcon />
              </IconButton>
            </Tooltip>
          </div>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Environment</DataList.Label>
        <DataList.Value>
          <Badge color="orange" variant="soft">
            Sandbox
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label>Last Used</DataList.Label>
        <DataList.Value>2 hours ago</DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Actions</DataList.Label>
        <DataList.Value>
          <div className="flex gap-1">
            <Tooltip content="Regenerate Key">
              <IconButton size="1" variant="ghost">
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip content="View Usage">
              <IconButton size="1" variant="ghost">
                <EyeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip content="Delete Key">
              <IconButton size="1" variant="ghost" color="red">
                <TrashIcon />
              </IconButton>
            </Tooltip>
          </div>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

### Colored Labels

```jsx
import { DataList, Badge } from '@frosted-ui/core';

function ColoredLabels() {
  return (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label color="blue">System Info</DataList.Label>
        <DataList.Value>Ubuntu 22.04 LTS</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label color="green">Performance</DataList.Label>
        <DataList.Value>
          <Badge color="green" variant="soft">
            Excellent
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label color="orange">Warning Level</DataList.Label>
        <DataList.Value>
          <Badge color="orange" variant="soft">
            Medium
          </Badge>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label color="red">Critical Issues</DataList.Label>
        <DataList.Value>None</DataList.Value>
      </DataList.Item>

      <DataList.Item>
        <DataList.Label color="purple">Custom Field</DataList.Label>
        <DataList.Value>Custom value</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

### High Contrast Labels

```jsx
import { DataList } from '@frosted-ui/core';

function HighContrastLabels() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          Normal Contrast
        </Text>
        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>John Doe</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Role</DataList.Label>
            <DataList.Value>Administrator</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium" color="gray">
          High Contrast
        </Text>
        <DataList.Root>
          <DataList.Item>
            <DataList.Label highContrast>Name</DataList.Label>
            <DataList.Value>John Doe</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label highContrast>Role</DataList.Label>
            <DataList.Value>Administrator</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  );
}
```

### Complex Values

```jsx
import { DataList, Avatar, Badge, Progress, Button } from '@frosted-ui/core';

function ComplexValues() {
  return (
    <DataList.Root size="3">
      <DataList.Item align="center">
        <DataList.Label>Team Lead</DataList.Label>
        <DataList.Value>
          <div className="flex items-center gap-3">
            <Avatar size="2" fallback="SW" />
            <div className="space-y-1">
              <div className="font-medium">Sarah Wilson</div>
              <div className="text-1 text-gray-11">Product Manager</div>
            </div>
          </div>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Project Progress</DataList.Label>
        <DataList.Value>
          <div className="space-y-2 w-full">
            <div className="flex justify-between text-1">
              <span>75% Complete</span>
              <span>3 days remaining</span>
            </div>
            <Progress value={75} size="2" />
          </div>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Status</DataList.Label>
        <DataList.Value>
          <div className="flex items-center gap-2">
            <Badge color="green" variant="soft">
              On Track
            </Badge>
            <Badge color="blue" variant="outline">
              High Priority
            </Badge>
          </div>
        </DataList.Value>
      </DataList.Item>

      <DataList.Item align="center">
        <DataList.Label>Actions</DataList.Label>
        <DataList.Value>
          <div className="flex gap-2">
            <Button size="1" variant="soft">
              View Details
            </Button>
            <Button size="1" variant="outline">
              Edit
            </Button>
          </div>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout Patterns

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<DataList.Root className="space-y-4"> {/* Uses --space-4 */}
  <DataList.Item>
    <DataList.Label>Label</DataList.Label>
    <DataList.Value>
      <div className="space-y-1"> {/* Uses --space-1 */}
        <Text>Primary text</Text>
        <Text size="1" color="gray">Secondary text</Text>
      </div>
    </DataList.Value>
  </DataList.Item>
</DataList.Root>

// Use max-width constraints for better readability
<DataList.Root orientation="vertical" className="max-w-[400px]">
  <DataList.Item>
    <DataList.Label>Description</DataList.Label>
    <DataList.Value>Long text content that benefits from width constraints</DataList.Value>
  </DataList.Item>
</DataList.Root>
```

### Typography Integration

```jsx
// Use Typography components for consistent text styling
<DataList.Value>
  <Heading size="2">Important Value</Heading>
  <Text color="gray">Additional context</Text>
</DataList.Value>
```

## Accessibility

The DataList component includes comprehensive accessibility features:

- **Semantic HTML**: Uses proper HTML definition list structure (`dl`, `dt`, `dd`)
- **Screen Reader**: Optimized for screen reader technologies with proper semantics
- **Focus Management**: Supports keyboard navigation for interactive elements
- **ARIA Labels**: Proper labeling for enhanced accessibility
- **Color Contrast**: Supports high contrast mode for better visibility

### Keyboard Navigation

- `Tab`: Navigate through interactive elements within the data list
- `Enter` or `Space`: Activate interactive elements (buttons, links)

## Best Practices

### Content Guidelines

- **Clear labels**: Use descriptive, concise labels that clearly identify the data
- **Consistent formatting**: Maintain consistent formatting for similar data types
- **Logical order**: Arrange items in a logical sequence (most important first)
- **Appropriate alignment**: Use alignment to create visual relationships

### Design Guidelines

- **Proper sizing**: Choose appropriate size based on content density and hierarchy
- **Consistent spacing**: Use consistent spacing patterns throughout your application
- **Visual hierarchy**: Use color and typography to establish proper hierarchy
- **Interactive elements**: Include interactive elements only when they add value

### Layout Considerations

- **Orientation choice**: Use horizontal for compact displays, vertical for detailed content
- **Width constraints**: Set appropriate width constraints for vertical orientation
- **Responsive design**: Consider how the layout adapts on different screen sizes

## Advanced Usage

### Dynamic Data Lists

```jsx
import { DataList, Badge } from '@frosted-ui/core';

function DynamicDataList({ data, config }) {
  return (
    <DataList.Root size={config.size} orientation={config.orientation}>
      {Object.entries(data).map(([key, value]) => {
        const fieldConfig = config.fields[key];
        if (!fieldConfig || !fieldConfig.visible) return null;

        return (
          <DataList.Item key={key} align={fieldConfig.align}>
            <DataList.Label color={fieldConfig.color}>{fieldConfig.label || key}</DataList.Label>
            <DataList.Value>{fieldConfig.render ? fieldConfig.render(value) : value}</DataList.Value>
          </DataList.Item>
        );
      })}
    </DataList.Root>
  );
}
```

### Grouped Data Lists

```jsx
import { DataList, Separator, Heading } from '@frosted-ui/core';

function GroupedDataList() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Personal Information</Heading>
        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Full Name</DataList.Label>
            <DataList.Value>John Doe</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Email</DataList.Label>
            <DataList.Value>john@example.com</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>

      <Separator size="4" />

      <div className="space-y-3">
        <Heading size="3">Account Settings</Heading>
        <DataList.Root>
          <DataList.Item>
            <DataList.Label>Plan</DataList.Label>
            <DataList.Value>Professional</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Billing Cycle</DataList.Label>
            <DataList.Value>Monthly</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </div>
    </div>
  );
}
```

## Related Components

- **[Table](../table/table.ai.md)** - For tabular data with multiple rows
- **[Card](../card/card.ai.md)** - For containing data list content
- **[Badge](../badge/badge.ai.md)** - For status indicators in values
- **[Code](../code/code.ai.md)** - For displaying code or technical values
- **[Avatar](../avatar/avatar.ai.md)** - For user representations in values
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For consistent text styling
