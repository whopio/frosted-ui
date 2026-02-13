# Frosted UI TabsNav Component

A navigation component styled like tabs for creating tab-like navigation interfaces. Built on Radix UI NavigationMenu for semantic navigation with tab-style visual appearance.

## Overview

The TabsNav component provides tab-style navigation that's semantically correct for navigation scenarios (using NavigationMenu) rather than content switching. It's perfect for:

- **Website navigation** with tab-like appearance
- **Section navigation** within applications
- **Category browsing** interfaces
- **Multi-step form navigation** indicators

Unlike the regular Tabs component which manages content switching, TabsNav is purely for navigation between different pages or sections.

## Basic Usage

```jsx
import { TabsNav } from '@frosted-ui/core';

function NavigationExample() {
  return (
    <TabsNav.Root>
      <TabsNav.Link href="/">Home</TabsNav.Link>
      <TabsNav.Link href="/products">Products</TabsNav.Link>
      <TabsNav.Link href="/about">About</TabsNav.Link>
      <TabsNav.Link href="/contact" aria-current="page">
        Contact
      </TabsNav.Link>
    </TabsNav.Root>
  );
}
```

## Components

### TabsNav.Root

The container for tab navigation links.

#### Props

| Prop   | Type         | Default | Description                |
| ------ | ------------ | ------- | -------------------------- |
| `size` | `'1' \| '2'` | `'2'`   | The size of the navigation |

### TabsNav.Link

Individual navigation link styled as a tab.

#### Props

| Prop      | Type      | Default | Description                                |
| --------- | --------- | ------- | ------------------------------------------ |
| `asChild` | `boolean` | `false` | Render as child element (for custom links) |
| `href`    | `string`  | -       | The URL to navigate to                     |

## Examples

### Website Navigation

```jsx
import { TabsNav } from '@frosted-ui/core';

function WebsiteNav() {
  const currentPath = '/products'; // From your router

  return (
    <header className="border-b border-gray-6 bg-panel-solid">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Heading size="3" weight="bold">
              Brand
            </Heading>

            <TabsNav.Root size="2">
              <TabsNav.Link href="/" aria-current={currentPath === '/' ? 'page' : undefined}>
                Home
              </TabsNav.Link>
              <TabsNav.Link href="/products" aria-current={currentPath === '/products' ? 'page' : undefined}>
                Products
              </TabsNav.Link>
              <TabsNav.Link href="/solutions" aria-current={currentPath === '/solutions' ? 'page' : undefined}>
                Solutions
              </TabsNav.Link>
              <TabsNav.Link href="/pricing" aria-current={currentPath === '/pricing' ? 'page' : undefined}>
                Pricing
              </TabsNav.Link>
              <TabsNav.Link href="/about" aria-current={currentPath === '/about' ? 'page' : undefined}>
                About
              </TabsNav.Link>
            </TabsNav.Root>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="soft">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
```

### Dashboard Section Navigation

```jsx
import { TabsNav } from '@frosted-ui/core';

function DashboardNav() {
  const currentSection = 'analytics'; // From your router/state

  const sections = [
    { id: 'overview', label: 'Overview', href: '/dashboard' },
    { id: 'analytics', label: 'Analytics', href: '/dashboard/analytics' },
    { id: 'reports', label: 'Reports', href: '/dashboard/reports' },
    { id: 'settings', label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Heading size="5">Dashboard</Heading>
          <Text color="gray" size="2">
            Manage your account and view insights
          </Text>
        </div>
        <Button size="2">Export Data</Button>
      </div>

      <TabsNav.Root>
        {sections.map((section) => (
          <TabsNav.Link
            key={section.id}
            href={section.href}
            aria-current={currentSection === section.id ? 'page' : undefined}
          >
            {section.label}
          </TabsNav.Link>
        ))}
      </TabsNav.Root>

      <Separator />

      {/* Your dashboard content here */}
    </div>
  );
}
```

### Product Category Navigation

```jsx
import { TabsNav } from '@frosted-ui/core';

function CategoryNav() {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { id: 'all', label: 'All Products', count: 156 },
    { id: 'electronics', label: 'Electronics', count: 45 },
    { id: 'clothing', label: 'Clothing', count: 67 },
    { id: 'home', label: 'Home & Garden', count: 32 },
    { id: 'sports', label: 'Sports', count: 12 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Shop by Category
        </Heading>
        <Text color="gray" size="2">
          Browse our product categories
        </Text>
      </div>

      <TabsNav.Root>
        {categories.map((category) => (
          <TabsNav.Link
            key={category.id}
            href={`/products?category=${category.id}`}
            aria-current={activeCategory === category.id ? 'page' : undefined}
          >
            <span className="flex items-center gap-2">
              {category.label}
              <Badge variant="soft" size="1">
                {category.count}
              </Badge>
            </span>
          </TabsNav.Link>
        ))}
      </TabsNav.Root>
    </div>
  );
}
```

### Multi-Step Form Navigation

```jsx
import { TabsNav } from '@frosted-ui/core';

function FormStepNav() {
  const [currentStep, setCurrentStep] = React.useState(2);
  const [completedSteps, setCompletedSteps] = React.useState([1]);

  const steps = [
    { id: 1, label: 'Account', href: '/signup/account' },
    { id: 2, label: 'Profile', href: '/signup/profile' },
    { id: 3, label: 'Preferences', href: '/signup/preferences' },
    { id: 4, label: 'Confirmation', href: '/signup/confirm' },
  ];

  return (
    <Card className="p-6 max-w-[800px] space-y-6">
      <div>
        <Heading size="4" className="mb-2">
          Create Your Account
        </Heading>
        <Text color="gray" size="2">
          Step {currentStep} of {steps.length}
        </Text>
      </div>

      <TabsNav.Root>
        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = currentStep === step.id;
          const isAccessible = step.id <= currentStep || isCompleted;

          return (
            <TabsNav.Link
              key={step.id}
              href={isAccessible ? step.href : undefined}
              aria-current={isCurrent ? 'step' : undefined}
              className={classNames({
                'opacity-50 pointer-events-none': !isAccessible,
              })}
            >
              <span className="flex items-center gap-2">
                {isCompleted && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                )}
                {step.label}
              </span>
            </TabsNav.Link>
          );
        })}
      </TabsNav.Root>

      <Separator />

      {/* Step content would go here */}
      <div className="py-8">
        <Text>Content for step {currentStep}</Text>
      </div>

      <div className="flex justify-between">
        <Button
          variant="soft"
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
        >
          Previous
        </Button>
        <Button
          onClick={() => {
            if (currentStep < steps.length) {
              setCompletedSteps((prev) => [...prev, currentStep]);
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          {currentStep === steps.length ? 'Complete' : 'Next'}
        </Button>
      </div>
    </Card>
  );
}
```

### With Custom Link Components

```jsx
import { TabsNav } from '@frosted-ui/core';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function CustomLinkNav() {
  const location = useLocation();

  return (
    <TabsNav.Root>
      <TabsNav.Link asChild>
        <RouterLink to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>
          Home
        </RouterLink>
      </TabsNav.Link>

      <TabsNav.Link asChild>
        <RouterLink to="/dashboard" aria-current={location.pathname.startsWith('/dashboard') ? 'page' : undefined}>
          Dashboard
        </RouterLink>
      </TabsNav.Link>

      <TabsNav.Link asChild>
        <RouterLink to="/settings" aria-current={location.pathname === '/settings' ? 'page' : undefined}>
          Settings
        </RouterLink>
      </TabsNav.Link>
    </TabsNav.Root>
  );
}
```

### Different Sizes

```jsx
import { TabsNav } from '@frosted-ui/core';

function SizeExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Size 1 (Small)</Heading>
        <TabsNav.Root size="1">
          <TabsNav.Link href="/home">Home</TabsNav.Link>
          <TabsNav.Link href="/products">Products</TabsNav.Link>
          <TabsNav.Link href="/about" aria-current="page">
            About
          </TabsNav.Link>
        </TabsNav.Root>
      </div>

      <div className="space-y-3">
        <Heading size="3">Size 2 (Default)</Heading>
        <TabsNav.Root size="2">
          <TabsNav.Link href="/home">Home</TabsNav.Link>
          <TabsNav.Link href="/products">Products</TabsNav.Link>
          <TabsNav.Link href="/about" aria-current="page">
            About
          </TabsNav.Link>
        </TabsNav.Root>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
<div className="space-y-4">
  <div className="flex items-center justify-between">
    <TabsNav.Root>
      <TabsNav.Link href="/dashboard">Dashboard</TabsNav.Link>
      <TabsNav.Link href="/analytics">Analytics</TabsNav.Link>
    </TabsNav.Root>
    <Button size="2">Export</Button>
  </div>
</div>
```

### Typography Integration

```jsx
<div className="space-y-3">
  <Heading size="4">Navigation</Heading>
  <TabsNav.Root>
    <TabsNav.Link href="/section1">Section 1</TabsNav.Link>
    <TabsNav.Link href="/section2">Section 2</TabsNav.Link>
  </TabsNav.Root>
</div>
```

### Color Support

This component uses the default tab styling and automatically adapts to the theme. It inherits focus and active states from the design system.

## Accessibility

The TabsNav component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Navigate between tab links
- **Enter/Space** - Activate focused link
- **Arrow Keys** - Navigate between tabs (when focus is within the navigation)

### Screen Reader Support

- Uses proper navigation markup (`NavigationMenu`)
- `aria-current="page"` indicates the current page/section
- Each link is properly labeled and focusable
- Semantic navigation structure for screen readers

### Focus Management

- Clear focus indicators on all links
- Logical tab order through navigation items
- Proper focus styles that match the design system

## Advanced Usage

### Integration with Routing Libraries

```jsx
// Next.js example
import { TabsNav } from '@frosted-ui/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NextTabsNav() {
  const router = useRouter();

  return (
    <TabsNav.Root>
      <TabsNav.Link asChild>
        <Link href="/" aria-current={router.pathname === '/' ? 'page' : undefined}>
          Home
        </Link>
      </TabsNav.Link>
      <TabsNav.Link asChild>
        <Link href="/about" aria-current={router.pathname === '/about' ? 'page' : undefined}>
          About
        </Link>
      </TabsNav.Link>
    </TabsNav.Root>
  );
}
```

### Dynamic Navigation

```jsx
import { TabsNav } from '@frosted-ui/core';

function DynamicNav({ sections, currentSection }) {
  return (
    <TabsNav.Root>
      {sections.map((section) => (
        <TabsNav.Link
          key={section.id}
          href={section.href}
          aria-current={currentSection === section.id ? 'page' : undefined}
        >
          {section.label}
          {section.badge && (
            <Badge size="1" variant="soft">
              {section.badge}
            </Badge>
          )}
        </TabsNav.Link>
      ))}
    </TabsNav.Root>
  );
}
```

## Best Practices

### Navigation Structure

- **Use semantic navigation** with proper ARIA attributes
- **Indicate current page** with `aria-current="page"`
- **Provide consistent navigation** across your application
- **Group related navigation** items logically

### User Experience

- **Keep navigation simple** and predictable
- **Use clear, descriptive labels** for navigation items
- **Highlight the current location** clearly
- **Consider responsive behavior** for smaller screens

### Integration Guidelines

- **Use with routing libraries** for single-page applications
- **Combine with proper URL management** and history
- **Ensure navigation persistence** across page loads
- **Test keyboard navigation** thoroughly

## Related Components

- **[Tabs](../tabs/tabs.ai.md)** - For content switching within the same page
- **[Button](../button/button.ai.md)** - For action buttons in navigation
- **[Badge](../badge/badge.ai.md)** - For counts or indicators in navigation
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For navigation labels
