# Frosted UI TextField Component

A robust, customizable text input component with support for icons, buttons, and various styles. The TextField component provides a complete input experience with automatic focus management, keyboard navigation, and accessibility features.

## Overview

The TextField component is a flexible input control that supports multiple composition patterns. It consists of three sub-components (Root, Input, Slot) that can be used together to create sophisticated input interfaces with leading/trailing icons, buttons, and custom content.

Key features:

- **Flexible Composition**: Root, Input, and Slot components for complex layouts
- **3 Variants**: Classic, surface, and soft styling options
- **3 Size Options**: Compact to large with consistent spacing
- **Complete Color System**: All Frosted UI colors with automatic focus states
- **Icon & Button Support**: Built-in slots for icons and interactive elements
- **Automatic Focus Management**: Click anywhere to focus the input
- **Accessibility Built-in**: Proper ARIA support and keyboard navigation

## Basic Usage

```jsx
import { TextField } from '@frosted-ui/core';

function BasicExample() {
  const [value, setValue] = React.useState('');

  return <TextField.Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your email" />;
}
```

## Components

### TextField.Root

Container component that provides context and click-to-focus behavior.

**Props:**

- `size`: `'1' | '2' | '3'` (default: `'2'`)
- `variant`: `'classic' | 'surface' | 'soft'` (default: `'surface'`)
- `color`: Color from Frosted UI palette (default: `'gray'`)

### TextField.Input

The main input element with all text input functionality.

**Props:**

- All standard HTML input props
- `size`: `'1' | '2' | '3'` (default: `'2'`)
- `variant`: `'classic' | 'surface' | 'soft'` (default: `'surface'`)
- `color`: Color from Frosted UI palette (default: `'gray'`)

### TextField.Slot

Container for icons, buttons, or other content inside the input.

**Props:**

- `color`: Color from Frosted UI palette
- All standard div props

## Examples

### With Leading Icon

```jsx
import { MagnifyingGlassIcon } from '@frosted-ui/icons';

function SearchExample() {
  return (
    <TextField.Root className="w-[300px]">
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input placeholder="Search the docs..." />
    </TextField.Root>
  );
}
```

### With Trailing Button

```jsx
import { MagnifyingGlassIcon, DotsHorizontalIcon } from '@frosted-ui/icons';

function SearchWithMenuExample() {
  return (
    <TextField.Root className="w-[300px]">
      <TextField.Slot>
        <MagnifyingGlassIcon />
      </TextField.Slot>
      <TextField.Input placeholder="Search the docs..." />
      <TextField.Slot>
        <IconButton variant="ghost" size="1" color="gray">
          <DotsHorizontalIcon />
        </IconButton>
      </TextField.Slot>
    </TextField.Root>
  );
}
```

### Size Variations

```jsx
function SizeExample() {
  return (
    <div className="flex flex-col gap-3 max-w-[400px]">
      <div className="flex items-center gap-2">
        <TextField.Root size="1">
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Input placeholder="Size 1" />
        </TextField.Root>
        <Button size="1">Search</Button>
      </div>

      <div className="flex items-center gap-2">
        <TextField.Root size="2">
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Input placeholder="Size 2" />
        </TextField.Root>
        <Button size="2">Search</Button>
      </div>

      <div className="flex items-center gap-2">
        <TextField.Root size="3">
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Input placeholder="Size 3" />
        </TextField.Root>
        <Button size="3">Search</Button>
      </div>
    </div>
  );
}
```

### Variant Styles

```jsx
function VariantExample() {
  return (
    <div className="flex flex-col gap-3 max-w-[400px]">
      <TextField.Input variant="surface" placeholder="Surface variant" />
      <TextField.Input variant="classic" placeholder="Classic variant" />
      <TextField.Input variant="soft" placeholder="Soft variant" />

      {/* Disabled states */}
      <TextField.Input variant="surface" disabled placeholder="Disabled surface" />
      <TextField.Input variant="classic" disabled placeholder="Disabled classic" />
      <TextField.Input variant="soft" disabled placeholder="Disabled soft" />
    </div>
  );
}
```

### Color Variants

```jsx
function ColorExample() {
  return (
    <div className="flex flex-col gap-3 max-w-[400px]">
      <TextField.Input color="indigo" placeholder="Indigo theme" />
      <TextField.Input color="green" placeholder="Green theme" />
      <TextField.Input color="red" placeholder="Red theme" />
      <TextField.Input color="orange" placeholder="Orange theme" />
    </div>
  );
}
```

### Form Integration

```jsx
function FormExample() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">Email</Text>
        <TextField.Input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">Password</Text>
        <TextField.Input
          type="password"
          value={formData.password}
          onChange={(e) => updateField('password', e.target.value)}
          placeholder="Create a password"
          required
        />
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">Confirm Password</Text>
        <TextField.Input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => updateField('confirmPassword', e.target.value)}
          placeholder="Confirm your password"
          color={formData.password !== formData.confirmPassword ? 'red' : 'green'}
          required
        />
      </div>

      <Button type="submit" variant="solid" className="w-full">
        Create Account
      </Button>
    </form>
  );
}
```

### Search Interface

```jsx
function SearchInterfaceExample() {
  const [query, setQuery] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsSearching(true);
    // Simulate search
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSearching(false);
  };

  return (
    <div className="space-y-4 max-w-[500px]">
      <div className="flex items-center gap-2">
        <TextField.Root className="flex-1">
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles, docs, examples..."
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {query && (
            <TextField.Slot>
              <IconButton variant="ghost" size="1" onClick={() => setQuery('')}>
                <CrossIcon />
              </IconButton>
            </TextField.Slot>
          )}
        </TextField.Root>

        <Button onClick={handleSearch} disabled={!query.trim() || isSearching} loading={isSearching}>
          Search
        </Button>
      </div>

      {query && (
        <Text size="2" color="gray">
          Searching for "{query}"...
        </Text>
      )}
    </div>
  );
}
```

### Input with Validation

```jsx
function ValidationExample() {
  const [email, setEmail] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    if (email) {
      setIsValid(validateEmail(email));
    }
  };

  return (
    <div className="space-y-2 max-w-[400px]">
      <Text size="2" weight="medium">Email Address</Text>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeIcon />
        </TextField.Slot>
        <TextField.Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!isValid) setIsValid(true); // Reset validation on change
          }}
          onBlur={handleBlur}
          placeholder="Enter your email"
          color={!isValid ? 'red' : email && isValid ? 'green' : 'gray'}
        />
        {isValid && email && (
          <TextField.Slot>
            <CheckIcon color="green" />
          </TextField.Slot>
        )}
      </TextField.Root>

      {!isValid && (
        <Text size="1" color="red">
          Please enter a valid email address
        </Text>
      )}
    </div>
  );
}
```

### Advanced Composition

```jsx
function AdvancedCompositionExample() {
  const [amount, setAmount] = React.useState('');
  const [currency, setCurrency] = React.useState('USD');

  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">
          Amount
        </Text>
        <TextField.Root>
          <TextField.Slot>
            <Text size="2" color="gray">
              $
            </Text>
          </TextField.Slot>
          <TextField.Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
          <TextField.Slot>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-0 outline-0 text-2"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </TextField.Slot>
        </TextField.Root>
      </div>

      <div className="space-y-2">
        <Text size="2" weight="medium">
          Website URL
        </Text>
        <TextField.Root>
          <TextField.Slot>
            <Text size="2" color="gray">
              https://
            </Text>
          </TextField.Slot>
          <TextField.Input placeholder="example.com" />
          <TextField.Slot>
            <IconButton variant="ghost" size="1">
              <ExternalLinkIcon />
            </IconButton>
          </TextField.Slot>
        </TextField.Root>
      </div>
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
      {/* Card with inputs */}
      <div className="p-4 bg-gray-1 border border-gray-6 rounded-4">
        <div className="space-y-3">
          <Heading size="3">Contact Information</Heading>

          <TextField.Root className="ring-2 ring-blue-6">
            <TextField.Slot color="blue">
              <UserIcon />
            </TextField.Slot>
            <TextField.Input placeholder="Full name" />
          </TextField.Root>

          <TextField.Root>
            <TextField.Slot color="green">
              <EnvelopeIcon />
            </TextField.Slot>
            <TextField.Input placeholder="Email address" />
          </TextField.Root>
        </div>
      </div>
    </div>
  );
}
```

### Typography Components Integration

```jsx
import { Heading, Text } from '@frosted-ui/core';

function TypographyIntegrationExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Heading size="4" weight="bold">
          Account Settings
        </Heading>
        <Text size="2" color="gray">
          Update your account information below.
        </Text>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <Text size="2" weight="medium">
            Display Name
          </Text>
          <TextField.Input placeholder="How others see you" />
        </div>

        <div className="space-y-1">
          <Text size="2" weight="medium">
            Bio
          </Text>
          <TextField.Input placeholder="Tell us about yourself" />
          <Text size="1" color="gray">
            Keep it short and sweet
          </Text>
        </div>
      </div>
    </div>
  );
}
```

### Color Support

This component supports all Frosted UI colors and semantic colors. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

The TextField component uses specific color steps for different states:

- **Focus state**: Uses the accent color for focus rings and highlights
- **Placeholder**: Uses gray-a10 for placeholder text
- **Border**: Uses gray-a5 for default borders, accent colors for themed borders
- **Background**: Varies by variant (surface, classic, soft)

## Accessibility

The TextField component includes comprehensive accessibility features:

- **Keyboard Navigation**: Standard input keyboard behavior, tab navigation
- **Screen Reader Support**: Proper labeling and description association
- **Focus Management**: Clear focus indicators and click-to-focus behavior
- **Form Integration**: Works with form validation and submission
- **Placeholder Handling**: Accessible placeholder text
- **Required Field Support**: Integrates with required attribute

```jsx
function AccessibilityExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <label htmlFor="email-input">
          <Text size="2" weight="medium">
            Email Address *
          </Text>
        </label>
        <TextField.Input
          id="email-input"
          type="email"
          required
          aria-describedby="email-help"
          placeholder="Enter your email"
        />
        <Text id="email-help" size="1" color="gray">
          We'll use this to send you updates
        </Text>
      </div>

      <fieldset className="space-y-2">
        <legend>
          <Text size="2" weight="medium">
            Search Preferences
          </Text>
        </legend>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon />
          </TextField.Slot>
          <TextField.Input placeholder="Default search query" aria-label="Default search query" />
        </TextField.Root>
      </fieldset>
    </div>
  );
}
```

## Advanced Usage

## Best Practices

### Do's ✅

- **Use clear, descriptive placeholders** that guide user input
- **Match component sizes** across related form elements
- **Provide visual feedback** for validation states using colors
- **Use appropriate input types** (email, password, number, etc.)
- **Group related inputs** logically with proper spacing
- **Include helpful hint text** below inputs when needed

```jsx
// ✅ Good - Clear labeling and proper grouping
function GoodExample() {
  return (
    <div className="space-y-4 max-w-[400px]">
      <div className="space-y-2">
        <Text size="2" weight="medium">
          Email Address
        </Text>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeIcon />
          </TextField.Slot>
          <TextField.Input type="email" placeholder="Enter your email" required />
        </TextField.Root>
        <Text size="1" color="gray">
          We'll never share your email with anyone
        </Text>
      </div>
    </div>
  );
}
```

### Don'ts ❌

- **Don't use placeholder as labels** - they disappear when typing
- **Don't mix sizes** randomly across related form elements
- **Don't forget validation feedback** for user input
- **Don't use generic placeholders** like "Enter text here"
- **Don't overcrowd slots** with too many elements

```jsx
// ❌ Bad - Placeholder as label, no validation, mixed sizes
function BadExample() {
  return (
    <div className="space-y-2">
      <TextField.Input placeholder="Email" size="1" /> {/* Placeholder as label */}
      <TextField.Input placeholder="Enter text here" size="3" /> {/* Generic placeholder */}
      <TextField.Input type="email" /> {/* No validation feedback */}
    </div>
  );
}
```

## Related Components

- **[Button](../button/button.ai.md)** - For form submission and actions
- **[Text](../text/text.ai.md)** - For labels and helper text
- **[Heading](../heading/heading.ai.md)** - For form section headers
- **[IconButton](../icon-button/icon-button.ai.md)** - For input slot interactions
- **[Checkbox](../checkbox/checkbox.ai.md)** - For boolean input options
- **[Typography Components](/TYPOGRAPHY_SYSTEM_README.md)** - For text styling
