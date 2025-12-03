# Frosted UI Breadcrumbs Component

A navigation component that shows the current page location within a hierarchy, helping users understand where they are and navigate back to parent levels. Perfect for complex applications with nested navigation structures.

## Overview

The Breadcrumbs component provides semantic navigation breadcrumbs with support for links, buttons, and dropdown menus for collapsed items. It automatically handles separators and proper accessibility attributes for screen readers.

Built with sub-components for maximum flexibility, it supports various interaction patterns including clickable links, button handlers, and dropdown menus for truncated breadcrumb trails.

## Basic Usage

```jsx
import { Breadcrumbs } from '@frosted-ui/core';

function BasicBreadcrumbs() {
  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.Item asChild>
        <a href="/">Home</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item asChild>
        <a href="/products">Products</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs.Root>
  );
}
```

## Props

### Breadcrumbs.Root Props

| Prop           | Type      | Default  | Description                            |
| -------------- | --------- | -------- | -------------------------------------- |
| `color`        | `string`  | `'gray'` | The accent color for the breadcrumbs   |
| `highContrast` | `boolean` | `false`  | Whether to use high contrast styling   |
| `asChild`      | `boolean` | `false`  | Render as child element instead of nav |

### Breadcrumbs.Item Props

| Prop      | Type       | Default     | Description                                 |
| --------- | ---------- | ----------- | ------------------------------------------- |
| `asChild` | `boolean`  | `false`     | Render as child element (for links/buttons) |
| `onClick` | `function` | `undefined` | Click handler for button-style breadcrumbs  |

### Breadcrumbs.Dropdown Props

Extends DropdownMenu.Content props with automatic breadcrumb styling.

### Breadcrumbs.DropdownItem Props

Extends DropdownMenu.Item props for use within breadcrumb dropdowns.

## Examples

### File System Navigation

```jsx
import { Breadcrumbs, Text } from '@frosted-ui/core';

function FileSystemBreadcrumbs() {
  const [currentPath, setCurrentPath] = React.useState('/Users/john/Documents/Projects');

  const pathSegments = currentPath.split('/').filter(Boolean);

  const navigateToPath = (index) => {
    const newPath = '/' + pathSegments.slice(0, index + 1).join('/');
    setCurrentPath(newPath);
  };

  return (
    <div className="space-y-4">
      <Text weight="medium">Current Location:</Text>
      <Breadcrumbs.Root>
        <Breadcrumbs.Item onClick={() => setCurrentPath('/')}>Root</Breadcrumbs.Item>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;

          if (isLast) {
            return <Breadcrumbs.Item key={index}>{segment}</Breadcrumbs.Item>;
          }

          return (
            <Breadcrumbs.Item key={index} onClick={() => navigateToPath(index)}>
              {segment}
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs.Root>
    </div>
  );
}
```

### E-commerce Category Navigation

```jsx
import { Breadcrumbs, Badge } from '@frosted-ui/core';

function CategoryBreadcrumbs() {
  const [currentCategory, setCurrentCategory] = React.useState('electronics/computers/laptops/gaming');

  const categories = [
    { id: 'home', label: 'Home', path: '' },
    { id: 'electronics', label: 'Electronics', path: 'electronics' },
    { id: 'computers', label: 'Computers', path: 'electronics/computers' },
    { id: 'laptops', label: 'Laptops', path: 'electronics/computers/laptops' },
    { id: 'gaming', label: 'Gaming Laptops', path: 'electronics/computers/laptops/gaming' },
  ];

  const handleNavigate = (path) => {
    setCurrentCategory(path);
    // Handle routing logic here
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Text weight="medium">Category:</Text>
        <Badge variant="soft" color="blue">
          {categories.length - 1} levels deep
        </Badge>
      </div>

      <Breadcrumbs.Root color="blue">
        {categories.map((category, index) => {
          const isLast = index === categories.length - 1;

          if (isLast) {
            return <Breadcrumbs.Item key={category.id}>{category.label}</Breadcrumbs.Item>;
          }

          return (
            <Breadcrumbs.Item key={category.id} onClick={() => handleNavigate(category.path)}>
              {category.label}
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs.Root>
    </div>
  );
}
```

### Documentation Navigation with Links

```jsx
import { Breadcrumbs, Text } from '@frosted-ui/core';
import Link from 'next/link';

function DocsBreadcrumbs() {
  return (
    <div className="space-y-3">
      <Text size="1" weight="medium" color="gray">
        Documentation
      </Text>

      <Breadcrumbs.Root>
        <Breadcrumbs.Item asChild>
          <Link href="/docs">Docs</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item asChild>
          <Link href="/docs/components">Components</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item asChild>
          <Link href="/docs/components/navigation">Navigation</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Breadcrumbs</Breadcrumbs.Item>
      </Breadcrumbs.Root>
    </div>
  );
}
```

### Truncated Breadcrumbs with Dropdown

```jsx
import { Breadcrumbs, Text } from '@frosted-ui/core';

function TruncatedBreadcrumbs() {
  const fullPath = [
    { label: 'Company', href: '/company' },
    { label: 'Departments', href: '/company/departments' },
    { label: 'Engineering', href: '/company/departments/engineering' },
    { label: 'Frontend', href: '/company/departments/engineering/frontend' },
    { label: 'React Team', href: '/company/departments/engineering/frontend/react' },
    { label: 'Projects', href: '/company/departments/engineering/frontend/react/projects' },
    { label: 'Current Project', href: null },
  ];

  // Show first item, dropdown for middle items, last 2 items
  const firstItem = fullPath[0];
  const middleItems = fullPath.slice(1, -2);
  const lastItems = fullPath.slice(-2);

  return (
    <div className="space-y-3">
      <Text size="2" weight="medium">
        Long Navigation Path (Truncated)
      </Text>

      <Breadcrumbs.Root>
        <Breadcrumbs.Item asChild>
          <a href={firstItem.href}>{firstItem.label}</a>
        </Breadcrumbs.Item>

        {middleItems.length > 0 && (
          <Breadcrumbs.Dropdown>
            {middleItems.map((item, index) => (
              <Breadcrumbs.DropdownItem key={index} asChild>
                <a href={item.href}>{item.label}</a>
              </Breadcrumbs.DropdownItem>
            ))}
          </Breadcrumbs.Dropdown>
        )}

        {lastItems.map((item, index) => {
          const isLast = index === lastItems.length - 1;

          if (isLast || !item.href) {
            return <Breadcrumbs.Item key={index}>{item.label}</Breadcrumbs.Item>;
          }

          return (
            <Breadcrumbs.Item key={index} asChild>
              <a href={item.href}>{item.label}</a>
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs.Root>
    </div>
  );
}
```

### Admin Panel Navigation

```jsx
import { Breadcrumbs, Badge, Text } from '@frosted-ui/core';

function AdminBreadcrumbs() {
  const [currentPage, setCurrentPage] = React.useState('users/edit/123');

  const breadcrumbMap = {
    dashboard: { label: 'Dashboard', parent: null },
    users: { label: 'Users', parent: 'dashboard' },
    'users/edit': { label: 'Edit User', parent: 'users' },
    'users/edit/123': { label: 'John Doe (#123)', parent: 'users/edit' },
  };

  const buildBreadcrumbs = (currentPath) => {
    const breadcrumbs = [];
    let path = currentPath;

    while (path && breadcrumbMap[path]) {
      breadcrumbs.unshift({ path, ...breadcrumbMap[path] });
      path = breadcrumbMap[path].parent;
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs(currentPage);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Text weight="medium">Admin Panel</Text>
        <Badge size="1" variant="soft" color="red">
          Restricted Access
        </Badge>
      </div>

      <Breadcrumbs.Root color="red">
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          if (isLast) {
            return <Breadcrumbs.Item key={breadcrumb.path}>{breadcrumb.label}</Breadcrumbs.Item>;
          }

          return (
            <Breadcrumbs.Item key={breadcrumb.path} onClick={() => setCurrentPage(breadcrumb.path)}>
              {breadcrumb.label}
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs.Root>
    </div>
  );
}
```

### Multi-level Project Structure

```jsx
import { Breadcrumbs, Text, Code } from '@frosted-ui/core';

function ProjectBreadcrumbs() {
  const [currentFile, setCurrentFile] = React.useState('src/components/ui/Button/Button.tsx');

  const pathParts = currentFile.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const directories = pathParts.slice(0, -1);

  const navigateToPath = (index) => {
    const newPath = pathParts.slice(0, index + 1).join('/');
    setCurrentFile(newPath);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Text weight="medium">File Explorer</Text>
        <Code variant="ghost" size="1">
          {fileName}
        </Code>
      </div>

      <Breadcrumbs.Root>
        <Breadcrumbs.Item onClick={() => setCurrentFile('')}>Project Root</Breadcrumbs.Item>

        {directories.map((dir, index) => (
          <Breadcrumbs.Item key={index} onClick={() => navigateToPath(index)}>
            {dir}
          </Breadcrumbs.Item>
        ))}

        <Breadcrumbs.Item>{fileName}</Breadcrumbs.Item>
      </Breadcrumbs.Root>
    </div>
  );
}
```

### Settings Navigation

```jsx
import { Breadcrumbs, Text } from '@frosted-ui/core';

function SettingsBreadcrumbs() {
  const [currentSetting, setCurrentSetting] = React.useState('account/privacy/data-sharing');

  const settingsStructure = {
    account: { label: 'Account Settings', icon: '👤' },
    'account/privacy': { label: 'Privacy & Security', icon: '🔒' },
    'account/privacy/data-sharing': { label: 'Data Sharing Preferences', icon: '🔗' },
  };

  const buildSettingsPath = (path) => {
    const parts = path.split('/');
    return parts.map((_, index) => {
      const currentPath = parts.slice(0, index + 1).join('/');
      return {
        path: currentPath,
        ...settingsStructure[currentPath],
      };
    });
  };

  const settingsPath = buildSettingsPath(currentSetting);

  return (
    <div className="space-y-3">
      <Text size="2" weight="medium">
        Settings
      </Text>

      <Breadcrumbs.Root color="purple">
        <Breadcrumbs.Item onClick={() => setCurrentSetting('')}>⚙️ Settings</Breadcrumbs.Item>

        {settingsPath.map((setting, index) => {
          const isLast = index === settingsPath.length - 1;

          if (isLast) {
            return (
              <Breadcrumbs.Item key={setting.path}>
                {setting.icon} {setting.label}
              </Breadcrumbs.Item>
            );
          }

          return (
            <Breadcrumbs.Item key={setting.path} onClick={() => setCurrentSetting(setting.path)}>
              {setting.icon} {setting.label}
            </Breadcrumbs.Item>
          );
        })}
      </Breadcrumbs.Root>
    </div>
  );
}
```

### High Contrast Breadcrumbs

```jsx
import { Breadcrumbs, Text } from '@frosted-ui/core';

function HighContrastBreadcrumbs() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Text weight="medium">Normal Contrast</Text>
        <Breadcrumbs.Root>
          <Breadcrumbs.Item asChild>
            <a href="/">Home</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item asChild>
            <a href="/docs">Documentation</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>Components</Breadcrumbs.Item>
        </Breadcrumbs.Root>
      </div>

      <div className="space-y-3">
        <Text weight="medium">High Contrast</Text>
        <Breadcrumbs.Root highContrast>
          <Breadcrumbs.Item asChild>
            <a href="/">Home</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item asChild>
            <a href="/docs">Documentation</a>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>Components</Breadcrumbs.Item>
        </Breadcrumbs.Root>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Layout and Spacing

```jsx
// Use Frosted UI spacing tokens for consistent layouts
<div className="space-y-3"> {/* Uses --space-3 */}
  <Text weight="medium">Navigation</Text>
  <Breadcrumbs.Root>
    <Breadcrumbs.Item>Breadcrumb</Breadcrumbs.Item>
  </Breadcrumbs.Root>
</div>

// Integrate with Typography components
<div className="space-y-2">
  <Heading size="4">Page Title</Heading>
  <Breadcrumbs.Root>
    <Breadcrumbs.Item>Path</Breadcrumbs.Item>
  </Breadcrumbs.Root>
</div>
```

### Color System Integration

```jsx
// Use semantic colors for different contexts
<Breadcrumbs.Root color="blue">Admin Panel</Breadcrumbs.Root>
<Breadcrumbs.Root color="green">Success Flow</Breadcrumbs.Root>
<Breadcrumbs.Root color="red">Error State</Breadcrumbs.Root>
```

## Accessibility

The Breadcrumbs component includes comprehensive accessibility features:

- **Navigation Semantics**: Uses semantic `nav` element with proper ARIA structure
- **Keyboard Navigation**: Tab navigation between interactive breadcrumbs
- **Screen Reader Support**: Clear announcements of navigation hierarchy
- **Link Semantics**: Proper link vs. button semantics based on usage
- **Current Page**: Last item is properly marked as current location

### Keyboard Shortcuts

- `Tab` / `Shift + Tab`: Navigate between interactive breadcrumb items
- `Enter` or `Space`: Activate focused breadcrumb
- `Escape`: Close dropdown (when using Breadcrumbs.Dropdown)

## Best Practices

### When to Use

- **Hierarchical navigation**: When your app has nested page structures
- **Large sites**: Applications with multiple levels of navigation
- **User orientation**: Help users understand their current location
- **Quick navigation**: Allow jumping back to parent levels

### When Not to Use

- **Flat navigation**: Single-level applications don't need breadcrumbs
- **Linear processes**: Use step indicators for sequential workflows
- **Mobile first**: Consider space constraints on mobile devices

### Design Guidelines

- **Show hierarchy**: Reflect actual page structure, not browser history
- **Keep last item**: Always show current page as non-interactive final item
- **Truncate intelligently**: Use dropdown for middle items when space is limited
- **Clear separators**: Automatic chevron separators show relationships

### Content Guidelines

- **Concise labels**: Use short, descriptive labels for each level
- **Consistent naming**: Match navigation and page titles
- **Logical order**: Follow information architecture hierarchy
- **Avoid redundancy**: Don't repeat information from page titles

## Advanced Usage

### Router Integration

```jsx
// Next.js integration
import { useRouter } from 'next/router';
import Link from 'next/link';

function RoutedBreadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);

  return (
    <Breadcrumbs.Root>
      <Breadcrumbs.Item asChild>
        <Link href="/">Home</Link>
      </Breadcrumbs.Item>
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;

        if (isLast) {
          return <Breadcrumbs.Item key={href}>{segment}</Breadcrumbs.Item>;
        }

        return (
          <Breadcrumbs.Item key={href} asChild>
            <Link href={href}>{segment}</Link>
          </Breadcrumbs.Item>
        );
      })}
    </Breadcrumbs.Root>
  );
}
```

### Dynamic Breadcrumb Generation

```jsx
function DynamicBreadcrumbs({ pageData }) {
  const generateBreadcrumbs = (data) => {
    const breadcrumbs = [];
    let current = data;

    while (current) {
      breadcrumbs.unshift({
        label: current.title,
        path: current.path,
        id: current.id,
      });
      current = current.parent;
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pageData);

  return (
    <Breadcrumbs.Root>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        if (isLast) {
          return <Breadcrumbs.Item key={crumb.id}>{crumb.label}</Breadcrumbs.Item>;
        }

        return (
          <Breadcrumbs.Item key={crumb.id} asChild>
            <a href={crumb.path}>{crumb.label}</a>
          </Breadcrumbs.Item>
        );
      })}
    </Breadcrumbs.Root>
  );
}
```

## Related Components

- **[SegmentedControlNav](../segmented-control-nav/segmented-control-nav.ai.md)** - For tab-like navigation
- **[Button](../button/button.ai.md)** - For individual navigation actions
- **[DropdownMenu](../dropdown-menu/dropdown-menu.ai.md)** - Used in truncated breadcrumbs
- **[Link](../link/link.ai.md)** - For breadcrumb link styling
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For breadcrumb text content
