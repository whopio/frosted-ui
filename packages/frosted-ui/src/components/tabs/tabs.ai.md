# Frosted UI Tabs Component

A collection of layered sections of content that are displayed one at a time, with clickable labels to switch between panels.

## Overview

The Tabs component provides a way to organize content into multiple sections that users can navigate between. It consists of multiple sub-components that work together: Root (container), List (tab navigation), Trigger (individual tab), and Content (panel content). Built on Radix UI primitives with Frosted UI styling and design tokens.

## Basic Usage

```jsx
import { Tabs, Text } from '@frosted-ui/core';

function App() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Overview</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Details</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Settings</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1">
        <Text>Overview content goes here</Text>
      </Tabs.Content>

      <Tabs.Content value="tab2">
        <Text>Details content goes here</Text>
      </Tabs.Content>

      <Tabs.Content value="tab3">
        <Text>Settings content goes here</Text>
      </Tabs.Content>
    </Tabs.Root>
  );
}
```

## Props

### Tabs.Root Props

| Prop             | Type                         | Default        | Description                                                        |
| ---------------- | ---------------------------- | -------------- | ------------------------------------------------------------------ |
| `value`          | `string`                     | `undefined`    | The controlled value of the tab to activate                        |
| `defaultValue`   | `string`                     | `undefined`    | The value of the tab that should be active when initially rendered |
| `onValueChange`  | `(value: string) => void`    | `undefined`    | Event handler called when the value changes                        |
| `orientation`    | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the component                                   |
| `dir`            | `'ltr' \| 'rtl'`             | `'ltr'`        | The reading direction                                              |
| `activationMode` | `'automatic' \| 'manual'`    | `'automatic'`  | Whether tabs are activated automatically on focus or manually      |

### Tabs.List Props

| Prop   | Type         | Default | Description                              |
| ------ | ------------ | ------- | ---------------------------------------- |
| `size` | `'1' \| '2'` | `'2'`   | The size of the tabs                     |
| `loop` | `boolean`    | `true`  | Whether keyboard navigation wraps around |

### Tabs.Trigger Props

| Prop       | Type      | Default | Description                                                |
| ---------- | --------- | ------- | ---------------------------------------------------------- |
| `value`    | `string`  | —       | A unique value that associates the trigger with a content  |
| `disabled` | `boolean` | `false` | When true, prevents the user from interacting with the tab |

### Tabs.Content Props

| Prop         | Type      | Default | Description                                               |
| ------------ | --------- | ------- | --------------------------------------------------------- |
| `value`      | `string`  | —       | A unique value that associates the content with a trigger |
| `forceMount` | `boolean` | `false` | Used to force mounting when more control is needed        |

## Examples

### Basic Tabs

```jsx
function BasicExample() {
  return (
    <Tabs.Root defaultValue="overview" className="w-full">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
        <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4">
        <Tabs.Content value="overview" className="space-y-4">
          <Heading size="4">Project Overview</Heading>
          <Text color="gray">Monitor your project's key metrics and recent activity.</Text>
        </Tabs.Content>

        <Tabs.Content value="analytics" className="space-y-4">
          <Heading size="4">Analytics Dashboard</Heading>
          <Text color="gray">View detailed analytics and performance metrics.</Text>
        </Tabs.Content>

        <Tabs.Content value="reports" className="space-y-4">
          <Heading size="4">Generated Reports</Heading>
          <Text color="gray">Access and download your custom reports.</Text>
        </Tabs.Content>

        <Tabs.Content value="notifications" className="space-y-4">
          <Heading size="4">Notification Settings</Heading>
          <Text color="gray">Configure how and when you receive notifications.</Text>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

### Controlled Tabs

```jsx
function ControlledExample() {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Text size="2" weight="medium">
          Current tab:
        </Text>
        <Badge variant="soft">{activeTab}</Badge>
      </div>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="preferences">Preferences</Tabs.Trigger>
        </Tabs.List>

        <div className="pt-4">
          <Tabs.Content value="profile">
            <Text>Manage your profile information</Text>
          </Tabs.Content>

          <Tabs.Content value="account">
            <Text>Update your account settings</Text>
          </Tabs.Content>

          <Tabs.Content value="preferences">
            <Text>Configure your preferences</Text>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}
```

### Different Sizes

```jsx
function SizesExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text size="2" weight="medium">
          Size 1 (Small)
        </Text>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List size="1">
            <Tabs.Trigger value="tab1">Small Tab</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Another Tab</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Third Tab</Tabs.Trigger>
          </Tabs.List>

          <div className="pt-3">
            <Tabs.Content value="tab1">
              <Text size="1">Compact content for small tabs</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text size="1">More compact content</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text size="1">Even more content</Text>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>

      <div className="space-y-3">
        <Text size="2" weight="medium">
          Size 2 (Default)
        </Text>
        <Tabs.Root defaultValue="tab1">
          <Tabs.List size="2">
            <Tabs.Trigger value="tab1">Regular Tab</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Another Tab</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Third Tab</Tabs.Trigger>
          </Tabs.List>

          <div className="pt-4">
            <Tabs.Content value="tab1">
              <Text>Standard content for regular tabs</Text>
            </Tabs.Content>
            <Tabs.Content value="tab2">
              <Text>More standard content</Text>
            </Tabs.Content>
            <Tabs.Content value="tab3">
              <Text>Additional content</Text>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
```

### Tabs with Disabled State

```jsx
function DisabledExample() {
  return (
    <Tabs.Root defaultValue="available">
      <Tabs.List>
        <Tabs.Trigger value="available">Available</Tabs.Trigger>
        <Tabs.Trigger value="pending">Pending</Tabs.Trigger>
        <Tabs.Trigger value="premium" disabled>
          Premium
        </Tabs.Trigger>
        <Tabs.Trigger value="archived" disabled>
          Archived
        </Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4">
        <Tabs.Content value="available">
          <Text>Available content and features</Text>
        </Tabs.Content>

        <Tabs.Content value="pending">
          <Text>Content that's pending approval</Text>
        </Tabs.Content>

        <Tabs.Content value="premium">
          <Text>Premium features require upgrade</Text>
        </Tabs.Content>

        <Tabs.Content value="archived">
          <Text>Archived content is read-only</Text>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

### Tabs with Rich Content

```jsx
function RichContentExample() {
  return (
    <Tabs.Root defaultValue="dashboard" className="max-w-[600px]">
      <Tabs.List>
        <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
        <Tabs.Trigger value="team">Team</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
      </Tabs.List>

      <div className="pt-6">
        <Tabs.Content value="dashboard" className="space-y-4">
          <div className="flex items-center justify-between">
            <Heading size="4">Dashboard</Heading>
            <Badge color="green">Active</Badge>
          </div>
          <Text color="gray">
            Welcome to your project dashboard. Here you can monitor key metrics and recent activity.
          </Text>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <div className="space-y-2">
                <Text size="1" weight="medium" color="gray">
                  Total Users
                </Text>
                <Text size="4" weight="bold">
                  2,847
                </Text>
              </div>
            </Card>
            <Card>
              <div className="space-y-2">
                <Text size="1" weight="medium" color="gray">
                  Active Sessions
                </Text>
                <Text size="4" weight="bold">
                  124
                </Text>
              </div>
            </Card>
          </div>
        </Tabs.Content>

        <Tabs.Content value="team" className="space-y-4">
          <Heading size="4">Team Members</Heading>
          <div className="space-y-3">
            {[
              { name: 'Sarah Wilson', role: 'Product Manager', avatar: 'SW' },
              { name: 'Mike Chen', role: 'Developer', avatar: 'MC' },
              { name: 'Lisa Garcia', role: 'Designer', avatar: 'LG' },
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <Avatar size="2" fallback={member.avatar} />
                <div className="space-y-1">
                  <Text size="2" weight="medium">
                    {member.name}
                  </Text>
                  <Text size="1" color="gray">
                    {member.role}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="projects" className="space-y-4">
          <Heading size="4">Recent Projects</Heading>
          <div className="space-y-2">
            {[
              { name: 'Website Redesign', status: 'In Progress' },
              { name: 'Mobile App', status: 'Planning' },
              { name: 'API Documentation', status: 'Complete' },
            ].map((project) => (
              <div key={project.name} className="flex items-center justify-between p-3 border border-gray-6 rounded-3">
                <Text size="2">{project.name}</Text>
                <Badge variant="soft" color={project.status === 'Complete' ? 'green' : 'blue'}>
                  {project.status}
                </Badge>
              </div>
            ))}
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
function IntegrationExample() {
  return (
    <div className="w-full max-w-[800px]">
      <Tabs.Root defaultValue="content" className="space-y-4">
        <Tabs.List className="w-full">
          <Tabs.Trigger value="content">Content</Tabs.Trigger>
          <Tabs.Trigger value="style">Style</Tabs.Trigger>
          <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
        </Tabs.List>

        <div className="min-h-[200px] pt-4">
          <Tabs.Content value="content" className="space-y-3">
            <Heading size="3" weight="medium">
              Content Settings
            </Heading>
            <Text size="2" color="gray">
              Configure how your content is displayed and organized.
            </Text>
          </Tabs.Content>

          <Tabs.Content value="style" className="space-y-3">
            <Heading size="3" weight="medium">
              Style Preferences
            </Heading>
            <Text size="2" color="gray">
              Customize the appearance and visual styling.
            </Text>
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </div>
  );
}
```

### Color Support

This component integrates seamlessly with the Frosted UI design system, automatically adapting to theme colors and respecting color mode preferences. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Tabs component includes comprehensive accessibility features:

- **Keyboard Navigation**: Arrow keys navigate between tabs, Enter/Space activates tabs
- **Focus Management**: Proper focus indicators and logical tab order
- **ARIA Attributes**: Complete ARIA labeling for screen readers
- **Roving Tabindex**: Only active tab is in tab sequence
- **Screen Reader Support**: Proper announcements for tab changes

### Accessibility Guidelines

```jsx
// Good: Clear, descriptive tab labels
<Tabs.List>
  <Tabs.Trigger value="account">Account Settings</Tabs.Trigger>
  <Tabs.Trigger value="privacy">Privacy & Security</Tabs.Trigger>
  <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
</Tabs.List>

// Good: Logical content structure
<Tabs.Content value="account">
  <Heading size="3">Account Settings</Heading>
  <Text>Manage your account information and preferences.</Text>
</Tabs.Content>
```

## Advanced Usage

### Manual Activation

```jsx
function ManualActivationExample() {
  return (
    <Tabs.Root defaultValue="tab1" activationMode="manual">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Manual Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Manual Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Manual Tab 3</Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4">
        <Tabs.Content value="tab1">
          <Text>Navigate with arrow keys, activate with Enter/Space</Text>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <Text>Manual activation prevents accidental tab changes</Text>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <Text>Better for tabs with complex or time-sensitive content</Text>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

### Lazy Loading Content

```jsx
function LazyLoadingExample() {
  const [loadedTabs, setLoadedTabs] = React.useState(new Set(['overview']));

  const handleValueChange = (value: string) => {
    setLoadedTabs(prev => new Set([...prev, value]));
  };

  return (
    <Tabs.Root defaultValue="overview" onValueChange={handleValueChange}>
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="data">Data</Tabs.Trigger>
        <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4">
        <Tabs.Content value="overview">
          <Text>Overview content (always loaded)</Text>
        </Tabs.Content>

        <Tabs.Content value="data">
          {loadedTabs.has('data') ? (
            <Text>Heavy data content loaded on demand</Text>
          ) : (
            <Spinner />
          )}
        </Tabs.Content>

        <Tabs.Content value="reports">
          {loadedTabs.has('reports') ? (
            <Text>Complex reports loaded when accessed</Text>
          ) : (
            <Spinner />
          )}
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

### Tabs with Custom Styling

```jsx
function CustomStyledExample() {
  return (
    <Tabs.Root defaultValue="custom1" className="w-full">
      <Tabs.List className="bg-gray-2 p-1 rounded-4">
        <Tabs.Trigger value="custom1" className="data-[state=active]:bg-white data-[state=active]:shadow-1">
          Custom Style 1
        </Tabs.Trigger>
        <Tabs.Trigger value="custom2" className="data-[state=active]:bg-white data-[state=active]:shadow-1">
          Custom Style 2
        </Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4 bg-gray-1 p-4 rounded-3 mt-2">
        <Tabs.Content value="custom1">
          <Text>Content with custom container styling</Text>
        </Tabs.Content>
        <Tabs.Content value="custom2">
          <Text>More content with consistent styling</Text>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
```

## Best Practices

### Do's

- Use clear, descriptive labels for tab triggers
- Keep the number of tabs manageable (typically 2-7 tabs)
- Ensure content is logically organized across tabs
- Maintain consistent content structure within tabs
- Use appropriate sizes based on context and available space

### Don'ts

- Don't use tabs for sequential workflows (use steps/wizard instead)
- Avoid putting critical actions only in inactive tabs
- Don't nest tabs within tabs
- Avoid making tab content too dependent on other tabs
- Don't use tabs when content would fit comfortably in a single view

### Content Organization

```jsx
// Good: Related content grouped logically
<Tabs.Root defaultValue="profile">
  <Tabs.List>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="security">Security</Tabs.Trigger>
  </Tabs.List>
  {/* Each tab contains related settings */}
</Tabs.Root>

// Avoid: Unrelated or sequential content
<Tabs.Root defaultValue="step1">
  <Tabs.List>
    <Tabs.Trigger value="step1">Step 1</Tabs.Trigger>
    <Tabs.Trigger value="step2">Step 2</Tabs.Trigger>
    <Tabs.Trigger value="step3">Step 3</Tabs.Trigger>
  </Tabs.List>
  {/* Use a stepper component instead */}
</Tabs.Root>
```

## Related Components

- **[Card](../card/card.ai.md)** - Often used within tab content for organized layouts
- **[Heading](../heading/heading.ai.md)** - For structuring content within tabs
- **[Text](../text/text.ai.md)** - For tab content and descriptions
- **[Badge](../badge/badge.ai.md)** - Can be used to show status or counts in tabs
- **[Button](../button/button.ai.md)** - For actions within tab content
