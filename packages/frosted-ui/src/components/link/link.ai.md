# Frosted UI Link Component

A styled link component that extends the Text component with proper link semantics and underline behaviors. Perfect for navigation, references, and call-to-action links within content.

## Overview

The Link component provides semantic links with Frosted UI typography styling and flexible underlining options. It combines the power of the Text component with proper link accessibility and visual states:

- **Typography integration** - All Text component props available
- **Flexible underlining** - Auto, hover, or always underline modes
- **Accessible by default** - Proper focus states and semantics
- **Composable** - Works with routing libraries and custom components

## Basic Usage

```jsx
import { Link } from '@frosted-ui/core';

function LinkExample() {
  return (
    <div className="space-y-3">
      <Text>
        Visit our <Link href="/products">product catalog</Link> to see what's available.
      </Text>

      <Link href="/contact" size="3" weight="medium" color="blue">
        Contact Us
      </Link>
    </div>
  );
}
```

## Props

The Link component inherits all props from the Text component, plus:

### Link-Specific Props

| Prop        | Type                            | Default  | Description                |
| ----------- | ------------------------------- | -------- | -------------------------- |
| `underline` | `'auto' \| 'hover' \| 'always'` | `'auto'` | When to show the underline |
| `asChild`   | `boolean`                       | `false`  | Render as child element    |

### Inherited from Text Component

| Prop           | Type                                                          | Default     | Description                                     |
| -------------- | ------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| `size`         | `'1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'` | `'3'`       | The size of the link text                       |
| `weight`       | `'light' \| 'normal' \| 'medium' \| 'bold'`                   | `'normal'`  | The font weight of the link                     |
| `color`        | `string`                                                      | `undefined` | The color - supports all Frosted UI colors      |
| `highContrast` | `boolean`                                                     | `false`     | Whether to use high contrast color variant      |
| `trim`         | `'normal' \| 'start' \| 'end' \| 'both'`                      | `'normal'`  | Where to trim the text's leading/trailing space |

## Examples

### Basic Links in Content

```jsx
import { Link, Text } from '@frosted-ui/core';

function ContentLinks() {
  return (
    <div className="space-y-4 max-w-[600px]">
      <Text size="4">
        Welcome to our platform! To get started, please{' '}
        <Link href="/signup" color="blue">
          create an account
        </Link>{' '}
        or{' '}
        <Link href="/login" color="blue">
          sign in
        </Link>{' '}
        to your existing account.
      </Text>

      <Text>
        Need help? Check out our{' '}
        <Link href="/docs" underline="always">
          documentation
        </Link>
        , <Link href="/faq">frequently asked questions</Link>, or{' '}
        <Link href="/support" color="green">
          contact support
        </Link>
        .
      </Text>

      <Text size="2" color="gray">
        By signing up, you agree to our{' '}
        <Link href="/terms" size="2" underline="hover">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" size="2" underline="hover">
          Privacy Policy
        </Link>
        .
      </Text>
    </div>
  );
}
```

### Different Underline Styles

```jsx
import { Link } from '@frosted-ui/core';

function UnderlineExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Heading size="3">Auto Underline (Default)</Heading>
        <Text>
          This{' '}
          <Link href="/auto" underline="auto">
            link has auto underline
          </Link>{' '}
          which shows based on context and user preferences.
        </Text>
      </div>

      <div className="space-y-2">
        <Heading size="3">Hover Underline</Heading>
        <Text>
          This{' '}
          <Link href="/hover" underline="hover">
            link shows underline on hover
          </Link>{' '}
          only, keeping the text clean by default.
        </Text>
      </div>

      <div className="space-y-2">
        <Heading size="3">Always Underline</Heading>
        <Text>
          This{' '}
          <Link href="/always" underline="always">
            link always shows underline
          </Link>
          for maximum clarity and accessibility.
        </Text>
      </div>
    </div>
  );
}
```

### Link Colors and Sizes

```jsx
import { Link } from '@frosted-ui/core';

function LinkVariations() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Heading size="3">Different Colors</Heading>
        <div className="flex flex-wrap gap-4">
          <Link href="/blue" color="blue">
            Blue Link
          </Link>
          <Link href="/green" color="green">
            Green Link
          </Link>
          <Link href="/red" color="red">
            Red Link
          </Link>
          <Link href="/purple" color="purple">
            Purple Link
          </Link>
          <Link href="/orange" color="orange">
            Orange Link
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        <Heading size="3">Different Sizes</Heading>
        <div className="flex flex-col gap-2">
          <Link href="/size1" size="1">
            Size 1 Link
          </Link>
          <Link href="/size2" size="2">
            Size 2 Link
          </Link>
          <Link href="/size3" size="3">
            Size 3 Link (Default)
          </Link>
          <Link href="/size4" size="4">
            Size 4 Link
          </Link>
          <Link href="/size5" size="5">
            Size 5 Link
          </Link>
        </div>
      </div>

      <div className="space-y-3">
        <Heading size="3">Different Weights</Heading>
        <div className="flex flex-col gap-2">
          <Link href="/light" weight="light">
            Light Weight Link
          </Link>
          <Link href="/normal" weight="normal">
            Normal Weight Link
          </Link>
          <Link href="/medium" weight="medium">
            Medium Weight Link
          </Link>
          <Link href="/bold" weight="bold">
            Bold Weight Link
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### Navigation Links

```jsx
import { Link } from '@frosted-ui/core';

function NavigationLinks() {
  return (
    <nav className="space-y-6">
      <div>
        <Heading size="4" className="mb-3">
          Main Navigation
        </Heading>
        <div className="flex gap-6">
          <Link href="/" size="3" weight="medium">
            Home
          </Link>
          <Link href="/products" size="3" weight="medium" color="blue">
            Products
          </Link>
          <Link href="/about" size="3" weight="medium">
            About
          </Link>
          <Link href="/contact" size="3" weight="medium">
            Contact
          </Link>
        </div>
      </div>

      <Separator />

      <div>
        <Heading size="3" className="mb-3">
          Footer Links
        </Heading>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Text weight="medium" size="2" color="gray">
              Company
            </Text>
            <div className="space-y-1">
              <Link href="/about" size="2" underline="hover">
                About Us
              </Link>
              <Link href="/careers" size="2" underline="hover">
                Careers
              </Link>
              <Link href="/press" size="2" underline="hover">
                Press
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <Text weight="medium" size="2" color="gray">
              Support
            </Text>
            <div className="space-y-1">
              <Link href="/help" size="2" underline="hover">
                Help Center
              </Link>
              <Link href="/docs" size="2" underline="hover">
                Documentation
              </Link>
              <Link href="/contact" size="2" underline="hover">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <Text weight="medium" size="2" color="gray">
              Legal
            </Text>
            <div className="space-y-1">
              <Link href="/terms" size="2" underline="hover">
                Terms
              </Link>
              <Link href="/privacy" size="2" underline="hover">
                Privacy
              </Link>
              <Link href="/cookies" size="2" underline="hover">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### Call-to-Action Links

```jsx
import { Link } from '@frosted-ui/core';

function CTALinks() {
  return (
    <div className="space-y-6">
      <Card className="p-6 text-center space-y-4">
        <Heading size="4">Ready to Get Started?</Heading>
        <Text color="gray">Join thousands of users already using our platform.</Text>
        <div className="flex justify-center gap-4">
          <Link href="/signup" size="4" weight="medium" color="blue" underline="always">
            Sign Up Free →
          </Link>
          <Link href="/demo" size="4" weight="medium" underline="hover">
            View Demo
          </Link>
        </div>
      </Card>

      <div className="p-4 bg-green-2 rounded-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-9 rounded-full"></div>
          <Text size="2">
            <Text weight="medium">New:</Text>{' '}
            <Link href="/features/ai" color="green" size="2" weight="medium">
              AI-powered features
            </Link>{' '}
            are now available in beta.
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### External and Download Links

```jsx
import { Link } from '@frosted-ui/core';

function ExternalLinks() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Heading size="3">External Resources</Heading>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Link href="https://github.com/company/repo" target="_blank" rel="noopener noreferrer" color="blue">
              View on GitHub
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-blue-11">
              <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H7.29289L3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355C3.34171 9.04882 3.65829 9.04882 3.85355 8.85355L8 4.70711V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 8.77614 3 8.5 3H3.5Z" />
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/files/report.pdf" download color="green">
              Download Report
            </Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-green-11">
              <path d="M6 1C6.27614 1 6.5 1.22386 6.5 1.5V7.29289L8.14645 5.64645C8.34171 5.45118 8.65829 5.45118 8.85355 5.64645C9.04882 5.84171 9.04882 6.15829 8.85355 6.35355L6.35355 8.85355C6.15829 9.04882 5.84171 9.04882 5.64645 8.85355L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L5.5 7.29289V1.5C5.5 1.22386 5.72386 1 6 1ZM2 9.5C2 9.22386 2.22386 9 2.5 9H9.5C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Text size="2" color="gray">
          Need more information? Check our{' '}
          <Link href="/help" size="2" underline="hover">
            help documentation
          </Link>{' '}
          or{' '}
          <Link href="mailto:support@company.com" size="2" color="blue">
            email our support team
          </Link>
          .
        </Text>
      </div>
    </div>
  );
}
```

### With Custom Components (asChild)

```jsx
import { Link } from '@frosted-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import NextLink from 'next/link';

function CustomLinkExample() {
  return (
    <div className="space-y-4">
      {/* React Router */}
      <div className="space-y-2">
        <Heading size="3">React Router Integration</Heading>
        <Text>
          Go to{' '}
          <Link asChild color="blue">
            <RouterLink to="/dashboard">your dashboard</RouterLink>
          </Link>{' '}
          to see your data.
        </Text>
      </div>

      {/* Next.js */}
      <div className="space-y-2">
        <Heading size="3">Next.js Integration</Heading>
        <Text>
          Learn more on our{' '}
          <Link asChild color="green">
            <NextLink href="/blog/getting-started">getting started guide</NextLink>
          </Link>
          .
        </Text>
      </div>

      {/* Custom component */}
      <div className="space-y-2">
        <Heading size="3">Custom Link Component</Heading>
        <Link asChild size="4" weight="medium" color="purple">
          <button onClick={() => console.log('Custom action')}>Trigger Action</button>
        </Link>
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Tailwind Tokens

### Typography Integration

```jsx
<div className="space-y-2">
  <Text size="4" weight="medium">
    Featured Article
  </Text>
  <Text>
    Discover the latest trends in our{' '}
    <Link href="/blog/trends-2024" color="blue" weight="medium">
      2024 trends report
    </Link>
  </Text>
</div>
```

### Layout and Spacing

```jsx
<div className="flex items-center gap-3">
  <Text>Quick actions:</Text>
  <Link href="/new" size="2" color="green">
    New
  </Link>
  <Link href="/edit" size="2">
    Edit
  </Link>
  <Link href="/delete" size="2" color="red">
    Delete
  </Link>
</div>
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

## Accessibility

The Link component includes comprehensive accessibility features:

### Keyboard Navigation

- **Tab** - Navigate to the link
- **Enter** - Activate the link
- **Space** - Activate the link (when button-like)

### Screen Reader Support

- Proper semantic `<a>` elements by default
- Clear focus indicators
- Support for `aria-label` and `aria-describedby`
- External link indicators when appropriate

### Focus Management

- Clear focus outlines that respect user preferences
- Focus styles consistent with the design system
- Proper contrast ratios for all color combinations

## Advanced Usage

### Link State Management

```jsx
import { Link } from '@frosted-ui/core';

function StatefulLinks() {
  const [visitedLinks, setVisitedLinks] = React.useState(new Set());

  const handleLinkClick = (href) => {
    setVisitedLinks((prev) => new Set([...prev, href]));
  };

  return (
    <div className="space-y-2">
      {['/page1', '/page2', '/page3'].map((href) => (
        <Link
          key={href}
          href={href}
          onClick={() => handleLinkClick(href)}
          color={visitedLinks.has(href) ? 'gray' : 'blue'}
        >
          {visitedLinks.has(href) ? '✓ ' : ''}Page {href.slice(-1)}
        </Link>
      ))}
    </div>
  );
}
```

### Conditional Link Rendering

```jsx
import { Link, Text } from '@frosted-ui/core';

function ConditionalLink({ href, children, disabled }) {
  if (disabled) {
    return (
      <Text color="gray" className="cursor-not-allowed">
        {children}
      </Text>
    );
  }

  return (
    <Link href={href} color="blue">
      {children}
    </Link>
  );
}
```

## Best Practices

### Content Integration

- **Use within Text components** for inline links in paragraphs
- **Match the surrounding text size** for better reading flow
- **Choose appropriate underline styles** based on context
- **Use semantic colors** that convey meaning (red for destructive actions)

### Accessibility Guidelines

- **Always provide meaningful link text** - avoid "click here" or "read more"
- **Use high contrast colors** when possible
- **Indicate external links** with icons or text
- **Test with keyboard navigation** and screen readers

### Typography Consistency

- **Use consistent sizing** with surrounding text
- **Match font weights** appropriately for hierarchy
- **Consider color contrast** against backgrounds
- **Maintain readable line spacing** in paragraphs with links

## Related Components

- **[Text](../text/text.ai.md)** - Base typography component that Link extends
- **[Button](../button/button.ai.md)** - For action-oriented interactions
- **[TabsNav](../tabs-nav/tabs-nav.ai.md)** - For tab-style navigation
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - Complete typography system
