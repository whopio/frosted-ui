# Frosted UI SegmentedControlNav Component

A navigation component styled as a segmented control, perfect for creating tab-like navigation with proper link semantics. Combines the visual appeal of segmented controls with the accessibility and functionality of navigation links.

## Overview

The SegmentedControlNav component provides navigation functionality with segmented control styling. It's built on top of Radix UI's NavigationMenu primitive, offering proper navigation semantics while maintaining the clean, modern appearance of segmented controls.

This component is ideal for section navigation, tab-like interfaces, and any scenario where you need navigation links that look and feel like a unified control group.

## Basic Usage

```jsx
import { SegmentedControlNav } from '@frosted-ui/core';

function BasicNavigation() {
  return (
    <SegmentedControlNav.Root>
      <SegmentedControlNav.Link href="/dashboard">Dashboard</SegmentedControlNav.Link>
      <SegmentedControlNav.Link href="/analytics">Analytics</SegmentedControlNav.Link>
      <SegmentedControlNav.Link href="/settings">Settings</SegmentedControlNav.Link>
    </SegmentedControlNav.Root>
  );
}
```

## Props

### SegmentedControlNav.Root Props

| Prop  | Type             | Default | Description                             |
| ----- | ---------------- | ------- | --------------------------------------- |
| `dir` | `'ltr' \| 'rtl'` | `'ltr'` | The reading direction of the navigation |

### SegmentedControlNav.Link Props

| Prop       | Type      | Default | Description                                          |
| ---------- | --------- | ------- | ---------------------------------------------------- |
| `href`     | `string`  | —       | The URL to navigate to                               |
| `asChild`  | `boolean` | `false` | Render as child element (for custom link components) |
| `active`   | `boolean` | `false` | Whether this link represents the current page        |
| `disabled` | `boolean` | `false` | Whether this link is disabled                        |

## Examples

### Page Navigation

```jsx
import { SegmentedControlNav, Heading, Text } from '@frosted-ui/core';

function PageNavigation() {
  const [currentPage, setCurrentPage] = React.useState('/dashboard');

  return (
    <div className="space-y-6">
      <div>
        <Heading size="4" className="mb-3">
          Project Overview
        </Heading>
        <SegmentedControlNav.Root>
          <SegmentedControlNav.Link
            href="/dashboard"
            active={currentPage === '/dashboard'}
            onClick={() => setCurrentPage('/dashboard')}
          >
            Dashboard
          </SegmentedControlNav.Link>
          <SegmentedControlNav.Link
            href="/analytics"
            active={currentPage === '/analytics'}
            onClick={() => setCurrentPage('/analytics')}
          >
            Analytics
          </SegmentedControlNav.Link>
          <SegmentedControlNav.Link
            href="/reports"
            active={currentPage === '/reports'}
            onClick={() => setCurrentPage('/reports')}
          >
            Reports
          </SegmentedControlNav.Link>
          <SegmentedControlNav.Link
            href="/settings"
            active={currentPage === '/settings'}
            onClick={() => setCurrentPage('/settings')}
          >
            Settings
          </SegmentedControlNav.Link>
        </SegmentedControlNav.Root>
      </div>

      <div className="p-6 border border-gray-6 rounded-4 bg-gray-1">
        <Text>Current page: {currentPage}</Text>
      </div>
    </div>
  );
}
```

### Profile Sections

```jsx
import { SegmentedControlNav, Card, Heading, Text } from '@frosted-ui/core';

function ProfileNavigation() {
  const [activeSection, setActiveSection] = React.useState('profile');

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div>
            <Heading size="3" className="mb-3">
              Profile Information
            </Heading>
            <Text color="gray">Edit your personal information and preferences.</Text>
          </div>
        );
      case 'security':
        return (
          <div>
            <Heading size="3" className="mb-3">
              Security Settings
            </Heading>
            <Text color="gray">Manage your password and two-factor authentication.</Text>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <Heading size="3" className="mb-3">
              Notification Preferences
            </Heading>
            <Text color="gray">Control what notifications you receive and how.</Text>
          </div>
        );
      case 'billing':
        return (
          <div>
            <Heading size="3" className="mb-3">
              Billing & Subscription
            </Heading>
            <Text color="gray">View your billing history and manage subscriptions.</Text>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <SegmentedControlNav.Root>
        <SegmentedControlNav.Link
          href="/profile"
          active={activeSection === 'profile'}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('profile');
          }}
        >
          Profile
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link
          href="/security"
          active={activeSection === 'security'}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('security');
          }}
        >
          Security
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link
          href="/notifications"
          active={activeSection === 'notifications'}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('notifications');
          }}
        >
          Notifications
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link
          href="/billing"
          active={activeSection === 'billing'}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('billing');
          }}
        >
          Billing
        </SegmentedControlNav.Link>
      </SegmentedControlNav.Root>

      <Card className="p-6">{renderContent()}</Card>
    </div>
  );
}
```

### Documentation Navigation

```jsx
import { SegmentedControlNav, Text } from '@frosted-ui/core';

function DocsNavigation() {
  const sections = [
    { id: 'getting-started', label: 'Getting Started', href: '/docs/getting-started' },
    { id: 'components', label: 'Components', href: '/docs/components' },
    { id: 'theming', label: 'Theming', href: '/docs/theming' },
    { id: 'examples', label: 'Examples', href: '/docs/examples' },
    { id: 'api', label: 'API Reference', href: '/docs/api' },
  ];

  return (
    <div className="space-y-4">
      <Text weight="medium">Documentation</Text>
      <SegmentedControlNav.Root>
        {sections.map((section) => (
          <SegmentedControlNav.Link key={section.id} href={section.href}>
            {section.label}
          </SegmentedControlNav.Link>
        ))}
      </SegmentedControlNav.Root>
    </div>
  );
}
```

### Next.js Router Integration

```jsx
import { SegmentedControlNav } from '@frosted-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NextNavigation() {
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <SegmentedControlNav.Root>
      <SegmentedControlNav.Link asChild active={isActive('/dashboard')}>
        <Link href="/dashboard">Dashboard</Link>
      </SegmentedControlNav.Link>
      <SegmentedControlNav.Link asChild active={isActive('/projects')}>
        <Link href="/projects">Projects</Link>
      </SegmentedControlNav.Link>
      <SegmentedControlNav.Link asChild active={isActive('/team')}>
        <Link href="/team">Team</Link>
      </SegmentedControlNav.Link>
      <SegmentedControlNav.Link asChild active={isActive('/settings')}>
        <Link href="/settings">Settings</Link>
      </SegmentedControlNav.Link>
    </SegmentedControlNav.Root>
  );
}
```

### E-commerce Categories

```jsx
import { SegmentedControlNav, Text, Badge } from '@frosted-ui/core';

function CategoryNavigation() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { id: 'all', label: 'All Products', count: 248 },
    { id: 'electronics', label: 'Electronics', count: 89 },
    { id: 'clothing', label: 'Clothing', count: 156 },
    { id: 'home', label: 'Home & Garden', count: 67 },
    { id: 'books', label: 'Books', count: 34 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Text weight="medium">Shop by Category</Text>
        <Badge variant="soft" color="gray">
          {categories.find((c) => c.id === activeCategory)?.count} items
        </Badge>
      </div>

      <SegmentedControlNav.Root>
        {categories.map((category) => (
          <SegmentedControlNav.Link
            key={category.id}
            href={`/shop/${category.id}`}
            active={activeCategory === category.id}
            onClick={(e) => {
              e.preventDefault();
              setActiveCategory(category.id);
            }}
          >
            {category.label}
          </SegmentedControlNav.Link>
        ))}
      </SegmentedControlNav.Root>
    </div>
  );
}
```

### Admin Panel Navigation

```jsx
import { SegmentedControlNav, Text, Badge } from '@frosted-ui/core';

function AdminNavigation() {
  const [currentSection, setCurrentSection] = React.useState('users');

  const sections = [
    { id: 'users', label: 'Users', href: '/admin/users', badge: '1,247' },
    { id: 'content', label: 'Content', href: '/admin/content', badge: '89' },
    { id: 'analytics', label: 'Analytics', href: '/admin/analytics', badge: null },
    { id: 'system', label: 'System', href: '/admin/system', badge: '3', badgeColor: 'red' },
  ];

  return (
    <div className="space-y-4">
      <Text weight="medium">Administration</Text>

      <SegmentedControlNav.Root>
        {sections.map((section) => (
          <SegmentedControlNav.Link
            key={section.id}
            href={section.href}
            active={currentSection === section.id}
            onClick={(e) => {
              e.preventDefault();
              setCurrentSection(section.id);
            }}
          >
            <div className="flex items-center gap-2">
              <span>{section.label}</span>
              {section.badge && (
                <Badge size="1" variant="soft" color={section.badgeColor || 'gray'}>
                  {section.badge}
                </Badge>
              )}
            </div>
          </SegmentedControlNav.Link>
        ))}
      </SegmentedControlNav.Root>
    </div>
  );
}
```

### Mobile-Responsive Navigation

```jsx
import { SegmentedControlNav, Text } from '@frosted-ui/core';

function ResponsiveNavigation() {
  return (
    <div className="space-y-4">
      <Text weight="medium">Mobile Navigation</Text>

      {/* Desktop/Tablet: Full labels */}
      <div className="hidden sm:block">
        <SegmentedControlNav.Root>
          <SegmentedControlNav.Link href="/home">Home</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/products">Products</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/about">About Us</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/contact">Contact</SegmentedControlNav.Link>
        </SegmentedControlNav.Root>
      </div>

      {/* Mobile: Short labels or icons */}
      <div className="block sm:hidden">
        <SegmentedControlNav.Root>
          <SegmentedControlNav.Link href="/home">🏠</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/products">📦</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/about">ℹ️</SegmentedControlNav.Link>
          <SegmentedControlNav.Link href="/contact">📧</SegmentedControlNav.Link>
        </SegmentedControlNav.Root>
      </div>
    </div>
  );
}
```

### Disabled Links

```jsx
import { SegmentedControlNav, Text } from '@frosted-ui/core';

function DisabledNavigation() {
  return (
    <div className="space-y-4">
      <Text weight="medium">Feature Navigation</Text>

      <SegmentedControlNav.Root>
        <SegmentedControlNav.Link href="/dashboard">Dashboard</SegmentedControlNav.Link>
        <SegmentedControlNav.Link href="/analytics">Analytics</SegmentedControlNav.Link>
        <SegmentedControlNav.Link href="/reports" disabled>
          Reports
        </SegmentedControlNav.Link>
        <SegmentedControlNav.Link href="/ai-insights" disabled>
          AI Insights
        </SegmentedControlNav.Link>
      </SegmentedControlNav.Root>

      <Text size="2" color="gray">
        Some features are unavailable in your current plan
      </Text>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing for consistent layouts
<div className="space-y-4"> {/* Uses --space-4 */}
  <Text weight="medium">Navigation Title</Text>
  <SegmentedControlNav.Root>
    <SegmentedControlNav.Link href="/page">Page</SegmentedControlNav.Link>
  </SegmentedControlNav.Root>
</div>

// Integrate with Typography components
<div className="space-y-3">
  <Heading size="3">Section</Heading>
  <SegmentedControlNav.Root>
    <SegmentedControlNav.Link href="/subsection">Subsection</SegmentedControlNav.Link>
  </SegmentedControlNav.Root>
</div>
```

### Color System Integration

This component automatically inherits the accent color from the theme context and uses proper contrast tokens for active states.

## Accessibility

The SegmentedControlNav component includes comprehensive accessibility features:

- **Navigation Semantics**: Proper ARIA navigation structure
- **Keyboard Navigation**: Tab navigation between links
- **Screen Reader Support**: Clear link announcements and states
- **Focus Management**: Visible focus indicators
- **Active State**: Clear indication of current page/section

### Keyboard Shortcuts

- `Tab` / `Shift + Tab`: Navigate between links
- `Enter` or `Space`: Activate focused link
- `Arrow keys`: Navigate within the navigation menu (when focused)

## Best Practices

### When to Use

- **Section navigation**: For navigating between related sections
- **Tab-like interfaces**: When you need tab behavior with proper navigation
- **Primary navigation**: For main navigation areas
- **Settings panels**: For navigating between configuration sections

### When Not to Use

- **Form selection**: Use SegmentedControl or SegmentedControlRadioGroup instead
- **Toggle states**: Use Switch for on/off states
- **Many options**: Consider traditional navigation menu for 6+ items
- **External links**: Better suited for related internal navigation

### Design Guidelines

- **Clear labels**: Use descriptive, action-oriented labels
- **Logical order**: Arrange sections in a meaningful sequence
- **Active states**: Always indicate the current section
- **Consistent structure**: Maintain the same navigation across related pages

### URL Integration

- **Update URLs**: Navigation should update the browser URL
- **Deep linking**: Sections should be bookmarkable
- **History management**: Support browser back/forward buttons
- **Active detection**: Detect active state from current URL

## Advanced Usage

### Router Integration

```jsx
// React Router
import { useLocation } from 'react-router-dom';

function RouterNavigation() {
  const location = useLocation();

  return (
    <SegmentedControlNav.Root>
      <SegmentedControlNav.Link href="/dashboard" active={location.pathname === '/dashboard'}>
        Dashboard
      </SegmentedControlNav.Link>
    </SegmentedControlNav.Root>
  );
}

// Next.js
import { useRouter } from 'next/router';

function NextNavigation() {
  const router = useRouter();

  return (
    <SegmentedControlNav.Root>
      <SegmentedControlNav.Link href="/dashboard" active={router.pathname === '/dashboard'}>
        Dashboard
      </SegmentedControlNav.Link>
    </SegmentedControlNav.Root>
  );
}
```

### Custom Link Component

```jsx
import { SegmentedControlNav } from '@frosted-ui/core';

// Custom link component with additional features
function CustomLink({ href, active, children, ...props }) {
  return (
    <SegmentedControlNav.Link asChild active={active} {...props}>
      <a
        href={href}
        onClick={(e) => {
          // Custom navigation logic
          e.preventDefault();
          // Handle navigation
        }}
      >
        {children}
      </a>
    </SegmentedControlNav.Link>
  );
}

function CustomNavigation() {
  return (
    <SegmentedControlNav.Root>
      <CustomLink href="/dashboard" active>
        Dashboard
      </CustomLink>
      <CustomLink href="/settings">Settings</CustomLink>
    </SegmentedControlNav.Root>
  );
}
```

## Related Components

- **[SegmentedControl](../segmented-control/segmented-control.ai.md)** - For view switching and state management
- **[SegmentedControlRadioGroup](../segmented-control-radio-group/segmented-control-radio-group.ai.md)** - For form radio selection
- **[Tabs](../tabs/tabs.ai.md)** - For content switching without navigation
- **[Button](../button/button.ai.md)** - For individual action buttons
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For navigation labels and headers
