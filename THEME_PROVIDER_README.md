# Frosted UI Theme Provider

The `<Theme>` component is the central provider that controls the visual appearance of your entire Frosted UI application. It manages color schemes, appearance modes, and theming configuration.

## Overview

The Theme provider works by:

- Setting CSS custom properties through data attributes
- Managing light/dark mode appearance
- Providing theme context to all child components
- Handling automatic gray color pairing
- Supporting nested theme customization

## Basic Usage

```jsx
import { Theme } from 'frosted-ui';

function App() {
  return <Theme>{/* Your app content */}</Theme>;
}
```

## Whop Defaults

At Whop, the default Theme configuration is:

```jsx
<Theme
  appearance="inherit"
  accentColor="blue"
  grayColor="gray"
  dangerColor="red"
  warningColor="amber"
  successColor="green"
  infoColor="sky"
  hasBackground={true}
>
  {/* App content */}
</Theme>
```

## Props

### `appearance`

Controls the light/dark mode setting.

- **Type:** `"inherit" | "light" | "dark"`
- **Default:** `"inherit"`

```jsx
{
  /* Inherit from system/parent */
}
<Theme appearance="inherit" />;

{
  /* Force light mode */
}
<Theme appearance="light" />;

{
  /* Force dark mode */
}
<Theme appearance="dark" />;
```

**`"inherit"` behavior:**

- Root Theme: Inherits from system preference or parent theme class
- Nested Theme: Inherits from parent Theme component

### `accentColor`

Sets the primary accent color used throughout the application.

- **Type:** All available color names + `"gray"`
- **Default:** `"blue"`

```jsx
{/* Whop's default blue accent */}
<Theme accentColor="blue" />

{/* Other accent options */}
<Theme accentColor="violet" />
<Theme accentColor="green" />
<Theme accentColor="amber" />
```

**Available accent colors:**

- **Regular:** `tomato`, `red`, `ruby`, `crimson`, `pink`, `plum`, `purple`, `violet`, `iris`, `cyan`, `teal`, `jade`, `green`, `grass`, `brown`, `blue`, `orange`, `indigo`
- **Bright:** `sky`, `mint`, `yellow`, `amber`, `lime`, `lemon`, `magenta`
- **Metal:** `gold`, `bronze`
- **Gray:** `gray`

### `grayColor`

Sets the gray color scale used for neutral elements.

- **Type:** `"gray" | "mauve" | "slate" | "sage" | "olive" | "sand" | "auto"`
- **Default:** `"gray"`

```jsx
{/* Whop's default pure gray */}
<Theme grayColor="gray" />

{/* Auto-matching gray (recommended) */}
<Theme accentColor="blue" grayColor="auto" /> {/* Uses slate */}
<Theme accentColor="green" grayColor="auto" /> {/* Uses sage */}

{/* Manual gray selection */}
<Theme grayColor="slate" />
<Theme grayColor="mauve" />
```

**`"auto"` behavior:** Automatically selects the best gray scale that harmonizes with your accent color:

- Red family → `mauve`
- Blue family → `slate`
- Green family → `sage`
- Yellow family → `sand`
- Purple family → `gray`

### `dangerColor`

Sets the color used for danger/error states.

- **Type:** `"tomato" | "red" | "ruby"`
- **Default:** `"red"`

```jsx
<Theme dangerColor="red" />     {/* Standard red */}
<Theme dangerColor="tomato" />  {/* Warmer red */}
<Theme dangerColor="ruby" />    {/* Deeper red */}
```

### `warningColor`

Sets the color used for warning states.

- **Type:** `"yellow" | "amber"`
- **Default:** `"amber"`

```jsx
<Theme warningColor="amber" />  {/* Whop default */}
<Theme warningColor="yellow" /> {/* Brighter yellow */}
```

### `successColor`

Sets the color used for success states.

- **Type:** `"teal" | "jade" | "green" | "grass"`
- **Default:** `"green"`

```jsx
<Theme successColor="green" />  {/* Whop default */}
<Theme successColor="jade" />   {/* Cooler green */}
<Theme successColor="teal" />   {/* Blue-green */}
<Theme successColor="grass" />  {/* Natural green */}
```

### `infoColor`

Sets the color used for informational states.

- **Type:** `"blue" | "sky"`
- **Default:** `"sky"`

```jsx
<Theme infoColor="sky" />   {/* Whop default - bright blue */}
<Theme infoColor="blue" />  {/* Standard blue */}
```

### `hasBackground`

Controls whether the theme applies a background color to the body.

- **Type:** `boolean`
- **Default:** `true`

```jsx
{
  /* Apply background color (recommended for root theme) */
}
<Theme hasBackground={true} />;

{
  /* No background (useful for nested themes) */
}
<Theme hasBackground={false} />;
```

### `asChild`

Renders the theme provider using the child element instead of a div wrapper.

- **Type:** `boolean`
- **Default:** `false`

```jsx
{
  /* Normal wrapper div */
}
<Theme>
  <div>Content</div>
</Theme>;

{
  /* Apply theme to child element directly */
}
<Theme asChild>
  <main>Content</main>
</Theme>;
```

## Advanced Usage

### Nested Themes

You can nest Theme components to create sections with different configurations:

```jsx
<Theme accentColor="blue" grayColor="gray">
  {/* Main app with blue accent */}

  <Theme accentColor="green" appearance="dark">
    {/* Section with green accent and forced dark mode */}
  </Theme>

  <Theme grayColor="slate">{/* Section with different gray scale but same accent */}</Theme>
</Theme>
```

### Semantic Color Customization

```jsx
<Theme accentColor="blue" dangerColor="tomato" warningColor="yellow" successColor="jade" infoColor="blue">
  {/* Custom semantic color configuration */}
</Theme>
```

### Programmatic Theme Changes

The Theme component provides context that can be used to change theme properties programmatically:

```jsx
import { useThemeContext } from 'frosted-ui';

function ThemeToggle() {
  const { appearance, onAppearanceChange } = useThemeContext();

  return (
    <button onClick={() => onAppearanceChange(appearance === 'dark' ? 'light' : 'dark')}>
      Toggle {appearance === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

## Integration Examples

### Next.js App Router

```jsx
// app/layout.tsx
import { Theme } from 'frosted-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="inherit" accentColor="blue" grayColor="gray" hasBackground={true}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
```

### With Next.js Dark Mode

```jsx
// app/providers.tsx
'use client';
import { ThemeProvider } from 'next-themes';
import { Theme } from 'frosted-ui';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <Theme appearance="inherit" accentColor="blue">
        {children}
      </Theme>
    </ThemeProvider>
  );
}
```

### React SPA

```jsx
// App.jsx
import { Theme } from 'frosted-ui';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Theme appearance={darkMode ? 'dark' : 'light'} accentColor="blue" grayColor="auto">
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      {/* Rest of app */}
    </Theme>
  );
}
```

## CSS Output

The Theme component generates data attributes that control CSS custom properties:

```html
<!-- Root theme with blue accent and gray colors -->
<div
  class="frosted-ui"
  data-accent-color="blue"
  data-gray-color="gray"
  data-danger-color="red"
  data-warning-color="amber"
  data-success-color="green"
  data-info-color="sky"
  data-has-background="true"
  data-is-root-theme="true"
>
  <!-- Your content -->
</div>
```

These data attributes trigger CSS rules that set the appropriate custom properties:

```css
[data-accent-color='blue'] {
  --accent-1: var(--blue-1);
  --accent-2: var(--blue-2);
  /* ... all 12 steps */
  --accent-9-contrast: var(--blue-9-contrast);
}

[data-gray-color='gray'] {
  --gray-1: var(--gray-1);
  --gray-2: var(--gray-2);
  /* ... all 12 steps */
}
```

## Best Practices

### 1. Use Auto Gray Pairing

```jsx
{
  /* ✅ Recommended - automatic harmonious pairing */
}
<Theme accentColor="blue" grayColor="auto" />;

{
  /* ❌ Avoid - manual pairing may not harmonize */
}
<Theme accentColor="blue" grayColor="mauve" />;
```

### 2. Root Theme Configuration

```jsx
{
  /* ✅ Root theme with background */
}
<Theme hasBackground={true} appearance="inherit">
  {/* App content */}
</Theme>;

{
  /* ✅ Nested themes without background */
}
<Theme hasBackground={false} accentColor="green">
  {/* Section content */}
</Theme>;
```

### 3. Semantic Color Consistency

```jsx
{/* ✅ Consistent semantic colors across app */}
<Theme
  dangerColor="red"
  successColor="green"
  warningColor="amber"
  infoColor="sky"
>
```

## TypeScript Support

The Theme component is fully typed with TypeScript:

```tsx
import { Theme, type ThemeOptions } from 'frosted-ui';

// All props are typed and validated
<Theme
  accentColor="blue" // ✅ Valid
  accentColor="invalid" // ❌ TypeScript error
  grayColor="auto" // ✅ Valid
  appearance="inherit" // ✅ Valid
/>;

// Theme context is also typed
const { accentColor, onAccentColorChange } = useThemeContext();
//      ^? string (typed as valid accent color)
```

This comprehensive theming system provides the foundation for consistent, accessible, and beautiful user interfaces with Frosted UI.
