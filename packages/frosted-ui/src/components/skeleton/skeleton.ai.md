# Frosted UI Skeleton Component

Loading placeholders with shimmer animation that precisely match the dimensions of actual components during content loading states.

## Overview

The Skeleton component provides three specialized loading placeholders:

- **Skeleton.Text** - Text loading placeholder that matches exact Text and Heading component dimensions
- **Skeleton.Avatar** - Avatar loading placeholder that matches exact Avatar component dimensions
- **Skeleton.Rect** - Flexible rectangular placeholder for custom content areas

**Key Design Principle:** Skeleton components are dimensionally identical to their corresponding actual components, ensuring smooth visual transitions when content loads.

## Basic Usage

```jsx
import { Skeleton } from '@frosted-ui/react';

// Text skeleton matching typography sizes
<Skeleton.Text size="3" className="w-80" />

// Avatar skeleton matching avatar sizes
<Skeleton.Avatar size="3" />

// Custom rectangle skeleton
<Skeleton.Rect className="w-32 h-20" />
```

## Skeleton.Text Props

All Skeleton.Text props are optional with intelligent defaults.

| Prop           | Type                                                                              | Default     | Description                            |
| -------------- | --------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `size`         | `'0' \| '1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`              | `'3'`       | Typography size (matches Text/Heading) |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `'gray'`    | Skeleton color theme                   |
| `highContrast` | `boolean`                                                                         | `false`     | High contrast mode                     |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes                 |
| `style`        | `React.CSSProperties`                                                             | `undefined` | Inline styles for width/height         |

**Typography Size Correspondence:**

- **Size matches exactly:** `<Skeleton.Text size="3" />` has identical height to `<Text size="3" />`
- **Line height preserved:** Uses same `--line-height-X` tokens as typography components
- **Perfect replacement:** Skeleton dimensions match loaded content precisely

## Skeleton.Avatar Props

All Skeleton.Avatar props are optional with intelligent defaults.

| Prop           | Type                                                                              | Default     | Description                            |
| -------------- | --------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| `size`         | `'1' \| '2' \| '3' \| '4' \| '5' \| '6' \| '7' \| '8' \| '9'`                     | `'3'`       | Avatar size (matches Avatar component) |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `'gray'`    | Skeleton color theme                   |
| `highContrast` | `boolean`                                                                         | `false`     | High contrast mode                     |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes                 |

**Avatar Size Correspondence:**

- **Exact dimensions:** `<Skeleton.Avatar size="3" />` is identical in size to `<Avatar size="3" />`
- **Border radius preserved:** Matches Avatar's rounded corners exactly
- **Space token consistency:** Uses same `--space-X` tokens as Avatar component

## Skeleton.Rect Props

All Skeleton.Rect props are optional with custom dimensions required via className or style.

| Prop           | Type                                                                              | Default     | Description                  |
| -------------- | --------------------------------------------------------------------------------- | ----------- | ---------------------------- |
| `color`        | Radix color (`'blue'`, `'red'`, etc.) or semantic (`'danger'`, `'success'`, etc.) | `'gray'`    | Skeleton color theme         |
| `highContrast` | `boolean`                                                                         | `false`     | High contrast mode           |
| `className`    | `string`                                                                          | `undefined` | Additional CSS classes       |
| `style`        | `React.CSSProperties`                                                             | `undefined` | Inline styles for dimensions |

## Size Reference

### Text Skeleton Sizes (Typography Scale)

**CRITICAL:** Skeleton.Text sizes correspond exactly to Text and Heading component sizes:

| Size | Height | Font Size Token | Use Case             |
| ---- | ------ | --------------- | -------------------- |
| 0    | 12px   | `--font-size-0` | Micro text, captions |
| 1    | 16px   | `--font-size-1` | Small text, labels   |
| 2    | 20px   | `--font-size-2` | Secondary text       |
| 3    | 24px   | `--font-size-3` | Body text (default)  |
| 4    | 26px   | `--font-size-4` | Large body text      |
| 5    | 28px   | `--font-size-5` | Small headings       |
| 6    | 30px   | `--font-size-6` | Medium headings      |
| 7    | 34px   | `--font-size-7` | Large headings       |
| 8    | 38px   | `--font-size-8` | Extra large headings |
| 9    | 48px   | `--font-size-9` | Display headings     |

### Avatar Skeleton Sizes

**CRITICAL:** Skeleton.Avatar sizes correspond exactly to Avatar component sizes:

| Size | Dimensions | Space Token | Use Case                  |
| ---- | ---------- | ----------- | ------------------------- |
| 1    | 24px       | `--space-5` | Small inline avatars      |
| 2    | 32px       | `--space-6` | Standard inline avatars   |
| 3    | 40px       | `--space-7` | Default avatars (default) |
| 4    | 48px       | `--space-8` | Medium prominence         |
| 5    | 64px       | `--space-9` | Large avatars             |
| 6    | 80px       | Fixed size  | Extra large avatars       |
| 7    | 96px       | Fixed size  | Profile headers           |
| 8    | 128px      | Fixed size  | Hero sections             |
| 9    | 160px      | Fixed size  | Landing page avatars      |

## Examples

### Basic Text Skeletons

```jsx
function TextSkeletonExample() {
  return (
    <div className="space-y-3">
      {/* Skeleton matching heading size */}
      <Skeleton.Text size="6" className="w-64" />

      {/* Skeleton matching body text */}
      <Skeleton.Text size="3" className="w-96" />
      <Skeleton.Text size="3" className="w-80" />

      {/* Skeleton matching small text */}
      <Skeleton.Text size="2" className="w-48" />
    </div>
  );
}
```

### Basic Avatar Skeletons

```jsx
function AvatarSkeletonExample() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton.Avatar size="1" />
      <Skeleton.Avatar size="3" />
      <Skeleton.Avatar size="5" />
      <Skeleton.Avatar size="7" />
    </div>
  );
}
```

### Loading Card with Component Matching

```jsx
function UserCardSkeleton({ loading }) {
  if (loading) {
    return (
      <div className="flex items-center gap-4 p-4 bg-panel-solid rounded-lg">
        {/* Avatar skeleton matches Avatar size="3" exactly */}
        <Skeleton.Avatar size="3" />

        <div className="space-y-2 flex-1">
          {/* Text skeletons match Text component sizes exactly */}
          <Skeleton.Text size="4" className="w-32" />
          <Skeleton.Text size="2" className="w-48" />
          <Skeleton.Text size="2" className="w-40" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-panel-solid rounded-lg">
      {/* Real components with identical dimensions */}
      <Avatar size="3" fallback="JD" />

      <div className="space-y-2 flex-1">
        <Text size="4" weight="medium">
          John Doe
        </Text>
        <Text size="2" color="gray">
          Senior Designer
        </Text>
        <Text size="2" color="gray">
          San Francisco, CA
        </Text>
      </div>
    </div>
  );
}
```

### Article Loading State

```jsx
function ArticleSkeleton({ loading }) {
  if (loading) {
    return (
      <article className="max-w-2xl space-y-6">
        {/* Heading skeleton matches Heading size */}
        <Skeleton.Text size="8" className="w-96" />

        {/* Subtitle skeleton */}
        <Skeleton.Text size="4" className="w-80" />

        {/* Author section */}
        <div className="flex items-center gap-3">
          <Skeleton.Avatar size="2" />
          <div className="space-y-1">
            <Skeleton.Text size="2" className="w-24" />
            <Skeleton.Text size="1" className="w-20" />
          </div>
        </div>

        {/* Image placeholder */}
        <Skeleton.Rect className="w-full h-64 rounded-lg" />

        {/* Paragraph skeletons matching body text */}
        <div className="space-y-3">
          <Skeleton.Text size="3" className="w-full" />
          <Skeleton.Text size="3" className="w-full" />
          <Skeleton.Text size="3" className="w-3/4" />
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-2xl space-y-6">
      <Heading size="8">Real Article Title</Heading>
      <Text size="4" color="gray">
        Article subtitle content
      </Text>

      <div className="flex items-center gap-3">
        <Avatar size="2" fallback="AB" />
        <div className="space-y-1">
          <Text size="2" weight="medium">
            Author
          </Text>
          <Text size="1" color="gray">
            2 days ago
          </Text>
        </div>
      </div>

      <img src="article.jpg" className="w-full h-64 object-cover rounded-lg" alt="Article" />

      <div className="space-y-3">
        <Text size="3">Article content paragraph...</Text>
        <Text size="3">More article content...</Text>
        <Text size="3">Final paragraph...</Text>
      </div>
    </article>
  );
}
```

### Different Colors and High Contrast

```jsx
function ColoredSkeletons() {
  return (
    <div className="space-y-4">
      {/* Default gray skeletons */}
      <div className="flex items-center gap-3">
        <Skeleton.Avatar size="3" />
        <Skeleton.Text size="3" className="w-48" />
      </div>

      {/* Colored skeletons */}
      <div className="flex items-center gap-3">
        <Skeleton.Avatar size="3" color="blue" />
        <Skeleton.Text size="3" color="blue" className="w-48" />
      </div>

      {/* High contrast skeletons */}
      <div className="flex items-center gap-3">
        <Skeleton.Avatar size="3" color="violet" highContrast />
        <Skeleton.Text size="3" color="violet" highContrast className="w-48" />
      </div>
    </div>
  );
}
```

### Dashboard Loading Layout

```jsx
function DashboardSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header with title and user */}
      <div className="flex items-center justify-between">
        <Skeleton.Text size="7" className="w-48" />
        <div className="flex items-center gap-2">
          <Skeleton.Text size="2" className="w-16" />
          <Skeleton.Avatar size="2" />
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="p-4 bg-panel-solid rounded-lg space-y-3">
              <Skeleton.Text size="1" className="w-16" />
              <Skeleton.Text size="6" className="w-20" />
              <Skeleton.Text size="2" className="w-24" />
            </div>
          ))}
      </div>

      {/* Chart area */}
      <Skeleton.Rect className="w-full h-80 rounded-lg" />

      {/* Table */}
      <div className="space-y-3">
        <Skeleton.Text size="5" className="w-32" />

        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-panel-solid rounded-md">
              <Skeleton.Avatar size="1" />
              <Skeleton.Text size="3" className="w-32" />
              <Skeleton.Text size="2" className="w-48" />
              <Skeleton.Text size="2" className="w-16" />
            </div>
          ))}
      </div>
    </div>
  );
}
```

## Integration with Frosted UI Design System

### Size Token Synchronization

**Critical Advantage:** Skeleton components use the exact same CSS custom properties as their corresponding components:

```jsx
// Skeleton.Text uses identical font size and line height tokens
<Skeleton.Text size="3" /> // Uses --font-size-3 and --line-height-3
<Text size="3" />           // Uses --font-size-3 and --line-height-3

// Skeleton.Avatar uses identical space tokens
<Skeleton.Avatar size="3" /> // Uses --space-7 (40px)
<Avatar size="3" />          // Uses --space-7 (40px)
```

### Color System Integration

All Skeleton components support the full Frosted UI color system. See the [Color System](/COLOR_SYSTEM_README.md) for the complete list and usage guidelines.

```jsx
// Accent colors
<Skeleton.Text color="blue" />
<Skeleton.Avatar color="violet" />

// Semantic colors
<Skeleton.Text color="success" />
<Skeleton.Avatar color="danger" />

// High contrast mode
<Skeleton.Text color="blue" highContrast />
```

### Animation System

Built-in shimmer animation with accessibility support:

- **8-second duration** for subtle, non-distracting effect
- **Respects `prefers-reduced-motion`** - no animation for users who prefer reduced motion
- **GPU-accelerated** background position animation for smooth performance

## Accessibility Features

### Motion Preferences

Animation only plays when user hasn't requested reduced motion. The shimmer effect is automatically disabled for users with motion sensitivity.

### Screen Reader Considerations

Skeleton components are presentational and don't interfere with screen readers. Consider adding `aria-label="Loading..."` to parent containers when appropriate.

### High Contrast Support

```jsx
// Enhanced visibility for users who need higher contrast
<Skeleton.Text color="blue" highContrast />
<Skeleton.Avatar color="violet" highContrast />
```

## Best Practices

### 1. Match Component Dimensions Exactly

```jsx
// ✅ CORRECT - Skeleton dimensions match actual component
const ProfileSkeleton = () => (
  <div className="flex items-center gap-3">
    <Skeleton.Avatar size="3" /> {/* Matches <Avatar size="3" /> */}
    <Skeleton.Text size="4" className="w-32" /> {/* Matches <Text size="4" /> */}
  </div>
);

// ❌ WRONG - Mismatched dimensions cause layout shift
const BadSkeleton = () => (
  <div className="flex items-center gap-3">
    <Skeleton.Avatar size="5" /> {/* Different from actual Avatar size="3" */}
    <Skeleton.Text size="2" className="w-32" /> {/* Different from actual Text size="4" */}
  </div>
);
```

### 2. Use Appropriate Widths

```jsx
// ✅ CORRECT - Realistic width approximations
<Skeleton.Text size="3" className="w-48" />  {/* ~192px for typical name */}
<Skeleton.Text size="2" className="w-32" />  {/* ~128px for role */}

// ❌ WRONG - Unrealistic widths
<Skeleton.Text size="3" className="w-4" />   {/* Too narrow */}
<Skeleton.Text size="2" className="w-96" />  {/* Too wide for typical content */}
```

### 3. Maintain Visual Hierarchy

```jsx
// ✅ CORRECT - Skeleton hierarchy matches content hierarchy
<div className="space-y-3">
  <Skeleton.Text size="6" className="w-64" /> {/* Main heading */}
  <Skeleton.Text size="3" className="w-96" /> {/* Body text */}
  <Skeleton.Text size="2" className="w-24" /> {/* Metadata */}
</div>
```

### 4. Color Coordination

```jsx
// ✅ CORRECT - Coordinate skeleton colors with theme
<div className="bg-blue-2 p-4 rounded-lg">
  <Skeleton.Avatar size="3" color="blue" />
  <Skeleton.Text size="3" color="blue" className="w-48" />
</div>
```

### 5. Loading State Management

```jsx
// ✅ CORRECT - Clean loading state transitions
function ComponentWithLoading({ data, isLoading }) {
  if (isLoading || !data) {
    return <SkeletonVersion />;
  }

  return <ActualComponent data={data} />;
}
```

## Related Components

- **[Text](../text/text.ai.md)** - For actual text content with matching sizes
- **[Heading](../heading/heading.ai.md)** - For actual heading content with matching sizes
- **[Avatar](../avatar/avatar.ai.md)** - For actual avatar content with matching sizes
- **[Typography System](/TYPOGRAPHY_SYSTEM_README.md)** - For complete typography scale reference
- **[Color System](/COLOR_SYSTEM_README.md)** - For color options and design tokens

## Technical Implementation

The Skeleton component is architected as three specialized sub-components that precisely mirror their corresponding components:

- **Dimensional accuracy** through shared CSS custom properties
- **Performance optimization** with GPU-accelerated animations
- **Accessibility compliance** with motion preference respect
- **Design system integration** through color and size token usage

This ensures skeleton loading states provide the smoothest possible user experience with zero layout shift when content loads.
