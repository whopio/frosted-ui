# Frosted UI Design Patterns Guide

> **For Design Engineer AI Agents**: This guide covers UX patterns, layout composition, and visual design principles for building polished, user-friendly apps with Frosted UI.

---

## Core Design Principles

### 1. Consistency Over Creativity

Use Frosted UI's built-in variants, sizes, and colors. Don't override component styles unless absolutely necessary. The design system exists to ensure visual consistency.

### 2. Hierarchy Through Size & Weight

Establish clear visual hierarchy using:

- **Typography scale** (`size="1"` to `size="9"`) for text importance
- **Font weight** (`weight="bold"` for headings, `weight="medium"` for labels, `weight="regular"` for body)
- **Component sizes** — larger sizes draw more attention

### 3. Color With Purpose

- Use **accent color** for interactive elements and primary actions
- Use **gray** for secondary/supporting UI
- Use **semantic colors** (`danger`, `warning`, `success`, `info`) only for status and feedback
- Don't use color decoratively — every color should communicate something

### 4. Colored Sections

When creating a themed section (e.g., promotional banner, newsletter signup), use the palette's alpha shades for a cohesive look:

| Element        | Token                        | Example                 |
| -------------- | ---------------------------- | ----------------------- |
| Background     | `palette.a2`                 | Card/section background |
| Border         | `palette.a5`                 | Subtle themed border    |
| Text (body)    | `palette.a11`                | Body text, descriptions |
| Text (heading) | `palette.a12`                | High-contrast headings  |
| Form inputs    | `variant="soft" color="..."` | Match the section color |

### 5. Whitespace Is Your Friend

Generous spacing improves readability and touch targets. Use consistent gaps:

- `4px` — tight (related items)
- `8px` — standard (within groups)
- `12-16px` — comfortable (between groups)
- `24-32px` — sections

---

## Spacing Scale

Use these values for `gap`, `padding`, and `margin`:

| Value | Use Case                                           |
| ----- | -------------------------------------------------- |
| `4`   | Tight spacing: icon + text, badge content          |
| `8`   | Standard spacing: form fields, list items internal |
| `12`  | Comfortable: between related groups                |
| `16`  | Section padding, card padding                      |
| `24`  | Between distinct sections                          |
| `32`  | Major section breaks, screen padding               |

---

## Responsive Design

Apps built with Frosted UI should be mobile-first but work well on web/desktop. Choose the right layout strategy based on app complexity.

### When to Use Each Layout Strategy

| App Type                            | Layout Strategy   | Example                         |
| ----------------------------------- | ----------------- | ------------------------------- |
| Landing pages, forms, settings      | **Centered**      | Max-width container, centered   |
| E-commerce, marketplace, dashboards | **Adaptive Grid** | Single column → multi-column    |
| Chat, feed, detail views            | **Centered**      | Content-focused, easy reading   |
| File browsers, admin panels         | **Adaptive Grid** | Utilize full screen real estate |

---

### Strategy 1: Centered Layout (Simple Apps)

Best for: landing pages, forms, articles, settings, detail views.

```tsx
import { useWindowDimensions } from 'react-native';

const MAX_CONTENT_WIDTH = 600;
const BREAKPOINT = 768;

function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  const isWide = width >= BREAKPOINT;
  const horizontalPadding = isWide ? Math.max(24, (width - MAX_CONTENT_WIDTH) / 2) : 16;

  return { isWide, horizontalPadding, screenWidth: width };
}

function SimpleScreen() {
  const { colors } = useThemeTokens();
  const { horizontalPadding, isWide } = useResponsiveLayout();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{
        paddingHorizontal: horizontalPadding,
        paddingVertical: 16,
        gap: 24,
        maxWidth: isWide ? MAX_CONTENT_WIDTH + horizontalPadding * 2 : undefined,
        alignSelf: isWide ? 'center' : undefined,
        width: '100%',
      }}>
      {/* Content */}
    </ScrollView>
  );
}
```

---

### Strategy 2: Adaptive Grid (Complex Apps)

Best for: e-commerce, marketplaces, dashboards, productivity apps, file browsers.

```tsx
import { useWindowDimensions } from 'react-native';

// Breakpoints
const TABLET = 768;
const DESKTOP = 1024;
const WIDE = 1280;

function useAdaptiveLayout() {
  const { width } = useWindowDimensions();

  // Calculate columns based on screen width
  const getColumns = (minItemWidth: number, maxColumns: number = 4) => {
    const availableWidth = width - 32; // Account for padding
    const columns = Math.floor(availableWidth / minItemWidth);
    return Math.max(1, Math.min(columns, maxColumns));
  };

  return {
    screenWidth: width,
    isTablet: width >= TABLET,
    isDesktop: width >= DESKTOP,
    isWide: width >= WIDE,
    getColumns,
    padding: width >= TABLET ? 24 : 16,
  };
}
```

#### Product Grid Example

```tsx
function ProductGridScreen() {
  const { colors } = useThemeTokens();
  const { getColumns, padding, isDesktop } = useAdaptiveLayout();

  // Min 200px per item for comfortable cards, max 3 columns
  const columns = getColumns(200, 3);
  const gap = 16;

  const products = [...]; // Your product data

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{
        padding,
        gap: 24,
        maxWidth: isDesktop ? 1200 : undefined,
        alignSelf: isDesktop ? 'center' : undefined,
        width: '100%',
      }}>
      {/* Header */}
      <View style={{ gap: 4 }}>
        <Heading size="5">Products</Heading>
        <Text color="gray">{products.length} items</Text>
      </View>

      {/* Responsive Grid */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
        {products.map((product) => (
          <View
            key={product.id}
            style={{
              flexGrow: 1,
              flexBasis: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 2}%`,
              maxWidth: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 1}%`,
            }}>
            <ProductCard product={product} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
```

#### Simpler Grid with Fixed Breakpoints

```tsx
function SimpleGrid({ items, renderItem }) {
  const { width } = useWindowDimensions();

  // Simple breakpoint-based columns
  const columns = width >= 1024 ? 3 : width >= 600 ? 2 : 1;
  const gap = 16;

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap }}>
      {items.map((item, index) => (
        <View
          key={item.id ?? index}
          style={{
            flexGrow: 1,
            flexBasis: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 2}%`,
            maxWidth: columns === 1 ? '100%' : `${Math.floor(100 / columns) - 1}%`,
          }}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  );
}
```

---

### Strategy 3: Hybrid Layout (Mixed Content)

Best for: screens with both full-width and constrained sections.

```tsx
function HybridScreen() {
  const { colors } = useThemeTokens();
  const { isDesktop, padding, getColumns } = useAdaptiveLayout();

  const maxContentWidth = 800;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Full-width hero/banner */}
      <View style={{ padding, backgroundColor: colors.palettes.accent.a2 }}>
        <View
          style={{
            maxWidth: maxContentWidth,
            alignSelf: 'center',
            width: '100%',
          }}>
          <Heading size="6">Welcome Back</Heading>
          <Text color="gray">Your dashboard overview</Text>
        </View>
      </View>

      {/* Constrained content area */}
      <View
        style={{
          padding,
          gap: 24,
          maxWidth: isDesktop ? 1200 : undefined,
          alignSelf: 'center',
          width: '100%',
        }}>
        {/* Stats Grid - adapts columns */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          {stats.map((stat) => (
            <View key={stat.label} style={{ flex: 1, minWidth: 150 }}>
              <StatCard {...stat} />
            </View>
          ))}
        </View>

        {/* Two-column layout on desktop */}
        <View
          style={{
            flexDirection: isDesktop ? 'row' : 'column',
            gap: 16,
          }}>
          <View style={{ flex: isDesktop ? 2 : 1 }}>
            <Card>
              <Heading size="4">Recent Activity</Heading>
              {/* Activity list */}
            </Card>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Heading size="4">Quick Actions</Heading>
              {/* Actions */}
            </Card>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
```

---

### Responsive Design Principles

| Principle             | Mobile          | Tablet (768px+) | Desktop (1024px+) |
| --------------------- | --------------- | --------------- | ----------------- |
| **Grid columns**      | 1-2             | 2-3             | 3-4               |
| **Content max-width** | Full            | Full or 800px   | 1200px            |
| **Side padding**      | 16px            | 24px            | 24-48px           |
| **Card arrangement**  | Stacked         | Side-by-side    | Multi-column      |
| **Touch targets**     | 44px+ (size 3+) | Same            | Same              |
| **Component sizes**   | Don't change    | Don't change    | Don't change      |

### Do's and Don'ts

**Do:**

- Use `flexWrap: 'wrap'` for responsive grids
- Set `minWidth` on grid items to control breakpoints
- Use `flex: 1` for equal-width columns
- Constrain max-width on very wide screens (1200-1400px)
- Keep consistent gap/padding at each breakpoint

**Don't:**

- Change button sizes based on screen width
- Use different font sizes for mobile vs desktop
- Create completely different layouts (keep hierarchy similar)
- Forget touch targets — desktop users may have touchscreens

---

## Layout Patterns

### Screen Structure

```tsx
<View style={{ flex: 1, backgroundColor: colors.background }}>
  {/* Header */}
  <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
    <Heading size="6">Screen Title</Heading>
  </View>

  {/* Content */}
  <ScrollView contentContainerStyle={{ padding: 16, gap: 24 }}>{/* Sections go here */}</ScrollView>

  {/* Footer (optional - for primary actions) */}
  <View style={{ padding: 16, borderTopWidth: 1, borderTopColor: colors.stroke }}>
    <Button variant="solid">
      <Text>Primary Action</Text>
    </Button>
  </View>
</View>
```

### Section with Header

```tsx
<View style={{ gap: 12 }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <Heading size="4">Section Title</Heading>
    <Button variant="ghost" size="1">
      <Text>See All</Text>
    </Button>
  </View>
  <Card>{/* Section content */}</Card>
</View>
```

### Title + Description Pattern

Use this pattern for headings with supporting text:

```tsx
<View style={{ gap: 4 }}>
  <Heading size="5">Welcome back</Heading>
  <Text size="3" color="gray">
    Here's what's happening today
  </Text>
</View>
```

### Form Field Pattern

```tsx
<View style={{ gap: 6 }}>
  <Label nativeID="field-id">Field Label</Label>
  <TextField.Input placeholder="Placeholder..." aria-labelledby="field-id" />
  <Text size="1" color="gray">
    Helper text explaining the field
  </Text>
</View>
```

### Form Section Pattern

Group related fields together:

```tsx
<View style={{ gap: 16 }}>
  <Heading size="3">Personal Information</Heading>

  <View style={{ gap: 12 }}>
    {/* First Name */}
    <View style={{ gap: 6 }}>
      <Label nativeID="first-name">First Name</Label>
      <TextField.Input placeholder="John" aria-labelledby="first-name" />
    </View>

    {/* Last Name */}
    <View style={{ gap: 6 }}>
      <Label nativeID="last-name">Last Name</Label>
      <TextField.Input placeholder="Doe" aria-labelledby="last-name" />
    </View>

    {/* Email */}
    <View style={{ gap: 6 }}>
      <Label nativeID="email">Email</Label>
      <TextField.Input
        placeholder="john@example.com"
        aria-labelledby="email"
        keyboardType="email-address"
      />
    </View>
  </View>
</View>
```

---

## List Patterns

> **Key Pattern**: Use `<Card style={{ padding: 0 }}>` and add `paddingHorizontal: 16` to each list item. This ensures separators span full width while items have proper padding.

### List with Separators

```tsx
<Card style={{ padding: 0 }}>
  {users.map((user, index) => (
    <React.Fragment key={user.id}>
      {index > 0 && <Separator size="4" />}
      <Pressable
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          paddingHorizontal: 16,
          paddingVertical: 14,
          backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
        })}>
        <Avatar fallback={user.name} size="3" />
        <View style={{ flex: 1, gap: 2 }}>
          <Text size="2" weight="medium">
            {user.name}
          </Text>
          <Text size="1" color="gray">
            {user.email}
          </Text>
        </View>
        <Badge color={user.status === 'Active' ? 'success' : 'warning'} size="1">
          <Text>{user.status}</Text>
        </Badge>
        <Icon as={ChevronRight} size={16} color={colors.palettes.gray.a8} />
      </Pressable>
    </React.Fragment>
  ))}
</Card>
```

### Settings List

```tsx
<Card style={{ padding: 0 }}>
  {/* Switch setting */}
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 14,
    }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: colors.palettes.blue.a3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon as={Bell} size={20} color={colors.palettes.blue.a11} />
      </View>
      <Text weight="medium">Notifications</Text>
    </View>
    <Switch checked={enabled} onCheckedChange={setEnabled} />
  </View>

  <Separator size="4" />

  {/* Pressable setting with checkbox */}
  <Pressable
    style={({ pressed }) => ({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
    })}
    onPress={() => setDarkMode(!darkMode)}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: colors.palettes.purple.a3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon as={Settings} size={20} color={colors.palettes.purple.a11} />
      </View>
      <Text weight="medium">Dark Mode</Text>
    </View>
    <Checkbox checked={darkMode} onCheckedChange={setDarkMode} />
  </Pressable>
</Card>
```

---

## Card Patterns

### Card Variants

Cards come in three variants. Choose based on visual weight needed:

| Variant   | Visual Style                            | When to Use                                              |
| --------- | --------------------------------------- | -------------------------------------------------------- |
| `surface` | Solid background, border, subtle shadow | **Default** — Elevated content like messages, profiles   |
| `soft`    | Translucent tinted background           | Highlighted sections, tips, promotions, feature callouts |
| `ghost`   | No background or border (just padding)  | Section grouping, layout containers, minimal UI          |

#### Surface — Message Card (default)

```tsx
<Card variant="surface">
  <View style={{ flexDirection: 'row', gap: 12 }}>
    <Avatar fallback="SJ" color="blue" size="3" />
    <View style={{ flex: 1, gap: 4 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text weight="medium">Sarah Johnson</Text>
        <Text size="1" color="gray">
          2m ago
        </Text>
      </View>
      <Text size="3" color="gray">
        Hey! Just finished the design review. The new dashboard looks amazing! 🎉
      </Text>
    </View>
  </View>
</Card>
```

#### Soft — Pro Tip / Feature Highlight

```tsx
<Card variant="soft">
  <View style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.palettes.amber.a3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon as={Lightbulb} size={20} color={colors.palettes.amber.a11} />
    </View>
    <View style={{ flex: 1, gap: 4 }}>
      <Text weight="medium">Pro Tip</Text>
      <Text size="3" color="gray">
        Enable notifications to stay updated on new messages and activity from your team.
      </Text>
      <Button variant="ghost" size="2" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
        <Text>Enable Notifications</Text>
        <Icon as={ChevronRight} size={16} />
      </Button>
    </View>
  </View>
</Card>
```

#### Ghost — Section Container

Use `ghost` when you need layout grouping but no visual container:

```tsx
<Card variant="ghost" style={{ padding: 0 }}>
  <View style={{ gap: 12 }}>
    {/* Section header */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Heading size="4">Recent Activity</Heading>
      <Button variant="ghost" size="2">
        <Text>See All</Text>
      </Button>
    </View>

    {/* Content in a surface card (has overflow: hidden for separators) */}
    <Card variant="surface" style={{ padding: 0 }}>
      {items.map((item, index, arr) => (
        <View key={index}>
          <Pressable
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
              paddingHorizontal: 16,
              paddingVertical: 14,
              backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
            })}>
            <Avatar fallback={item.initials} size="3" color={item.color} />
            <View style={{ flex: 1, gap: 2 }}>
              <Text size="2" weight="medium" numberOfLines={1}>
                {item.name}
              </Text>
              <Text size="2" color="gray" numberOfLines={1}>
                {item.action}
              </Text>
            </View>
            <Text size="1" color="gray">
              {item.time}
            </Text>
          </Pressable>
          {index < arr.length - 1 && <Separator size="4" />}
        </View>
      ))}
    </Card>
  </View>
</Card>
```

> **Tip**: Card has `overflow: 'hidden'` by default, so full-width separators won't overflow the rounded corners.

### Info Card

```tsx
<Card>
  <View style={{ gap: 12 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Icon as={Info} size={16} />
      <Text weight="medium">Card Title</Text>
    </View>
    <Text size="3" color="gray">
      Supporting description text that provides more context.
    </Text>
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <Button variant="soft" color="gray" size="2">
        <Text>Dismiss</Text>
      </Button>
      <Button variant="solid" size="2">
        <Text>Action</Text>
      </Button>
    </View>
  </View>
</Card>
```

### Stat Card

```tsx
<Card>
  <View style={{ gap: 4 }}>
    <Text size="1" color="gray">
      Total Revenue
    </Text>
    <Heading size="6">$12,345</Heading>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      <Badge color="success" size="1">
        <Text>+12%</Text>
      </Badge>
      <Text size="1" color="gray">
        vs last month
      </Text>
    </View>
  </View>
</Card>
```

### Buy Box (E-commerce)

Use `size="4"` buttons for prominent CTAs in e-commerce and conversion-focused screens:

```tsx
<Card>
  <View style={{ gap: 16 }}>
    {/* Product Image */}
    <View
      style={{
        height: 200,
        backgroundColor: colors.palettes.gray.a3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text color="gray">Product Image</Text>
    </View>

    {/* Product Info */}
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Badge color="success" size="1">
          <Text>In Stock</Text>
        </Badge>
        <Badge variant="soft" color="gray" size="1">
          <Text>Free Shipping</Text>
        </Badge>
      </View>
      <Heading size="5">Premium Wireless Headphones</Heading>
      <Text size="3" color="gray">
        High-fidelity audio with active noise cancellation and 30-hour battery life.
      </Text>
    </View>

    {/* Price */}
    <View style={{ gap: 4 }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
        <Heading size="6">$299</Heading>
        <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
          $349
        </Text>
      </View>
      <Text size="1" color="success">
        Save $50 (14% off)
      </Text>
    </View>

    <Separator size="4" />

    {/* CTA Buttons - Use size="4" for prominent actions */}
    <View style={{ gap: 12 }}>
      <Button variant="solid" size="4">
        <Text>Add to Cart</Text>
      </Button>
      <Button variant="soft" color="gray" size="4">
        <Icon as={Heart} size={18} />
        <Text>Add to Wishlist</Text>
      </Button>
    </View>
  </View>
</Card>
```

> **Tip**: Use `size="4"` buttons for important conversion actions like "Add to Cart", "Buy Now", "Subscribe", or "Sign Up". The larger touch target and visual weight helps drive conversions.

### Promotional Banner (Apple-like)

Create clean, premium promotional sections with structured layout:

```tsx
<Card
  style={{
    padding: 0,
    backgroundColor: colors.palettes.pink.a2,
    borderWidth: 1,
    borderColor: colors.palettes.pink.a4,
  }}>
  <View style={{ padding: 20, gap: 16 }}>
    {/* Header row with badge + timer */}
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Badge color="pink" variant="soft" size="1">
        <Icon as={Zap} size={10} />
        <Text>Limited Time</Text>
      </Badge>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: colors.palettes.pink['9'],
          }}
        />
        <Text size="1" weight="medium" style={{ color: colors.palettes.pink.a11 }}>
          Ends in 02:34:56
        </Text>
      </View>
    </View>

    {/* Main content */}
    <View style={{ gap: 4 }}>
      <Text size="5" weight="bold" style={{ color: colors.palettes.pink.a12 }}>
        Flash Sale
      </Text>
      <Text size="3" style={{ color: colors.palettes.pink.a11 }}>
        Up to 50% off on selected items. Don't miss out.
      </Text>
    </View>

    {/* CTA */}
    <Button variant="solid" color="pink" size="3">
      <Text>Shop Now</Text>
      <Icon as={ChevronRight} size={16} />
    </Button>
  </View>
</Card>
```

> **Key Pattern**: Use a consistent color palette (e.g., pink) across background (`a2`), border (`a4`), text (`a11`, `a12`), and button for a cohesive, premium feel.

### Achievement Card (Apple-like)

For gamification elements like achievements, badges, or milestones:

```tsx
<Card style={{ padding: 0, borderWidth: 1, borderColor: colors.stroke }}>
  {/* Header section with award */}
  <View
    style={{
      paddingVertical: 24,
      paddingHorizontal: 20,
      alignItems: 'center',
      gap: 16,
      backgroundColor: colors.palettes.gray.a2,
      borderBottomWidth: 1,
      borderBottomColor: colors.stroke,
    }}>
    {/* Centered badge with glow effect */}
    <Badge
      size="2"
      color="amber"
      variant="soft"
      style={{
        alignSelf: 'center',
        shadowColor: colors.palettes.amber['9'],
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 4,
      }}>
      <Icon as={Award} size={14} />
      <Text>First Purchase</Text>
    </Badge>

    <View style={{ gap: 4, alignItems: 'center' }}>
      <Text size="4" weight="bold">
        Achievement Unlocked!
      </Text>
      <Text size="2" color="gray" style={{ textAlign: 'center' }}>
        You've made your first purchase and earned 100 bonus points.
      </Text>
    </View>
  </View>

  {/* Stats row */}
  <View style={{ flexDirection: 'row', paddingVertical: 16, paddingHorizontal: 20 }}>
    <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
      <Text size="4" weight="bold">
        100
      </Text>
      <Text size="1" color="gray">
        Points Earned
      </Text>
    </View>
    <View style={{ width: 1, backgroundColor: colors.stroke }} />
    <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
      <Text size="4" weight="bold">
        3
      </Text>
      <Text size="1" color="gray">
        Achievements
      </Text>
    </View>
    <View style={{ width: 1, backgroundColor: colors.stroke }} />
    <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
      <Text size="4" weight="bold">
        Gold
      </Text>
      <Text size="1" color="gray">
        Next Tier
      </Text>
    </View>
  </View>
</Card>
```

> **Key Pattern**: Use `colors.stroke` for subtle borders between sections. Center important elements using `alignSelf: 'center'`. Add shadow to badges for a "glow" effect.

### Newsletter Signup (Themed)

Use the palette's alpha shades to create cohesive themed sections:

```tsx
<Card
  style={{
    backgroundColor: colors.palettes.accent.a2,
    borderWidth: 1,
    borderColor: colors.palettes.accent.a5,
  }}>
  <View style={{ gap: 16 }}>
    <View style={{ gap: 4 }}>
      <Text size="4" weight="bold" style={{ color: colors.palettes.accent.a12 }}>
        Stay in the loop
      </Text>
      <Text size="3" style={{ color: colors.palettes.accent.a11 }}>
        Get weekly updates on new features and tips.
      </Text>
    </View>

    <TextField.Root variant="soft" color="accent">
      <TextField.Input placeholder="Enter your email" keyboardType="email-address" />
    </TextField.Root>

    <Button variant="solid" size="3">
      <Text>Subscribe</Text>
    </Button>

    <Text size="1" style={{ color: colors.palettes.accent.a11 }}>
      No spam, unsubscribe anytime.
    </Text>
  </View>
</Card>
```

---

## Button Placement

### Primary Action at Bottom

For screens with a clear primary action, place it at the bottom:

```tsx
<View style={{ flex: 1 }}>
  <ScrollView style={{ flex: 1 }}>{/* Content */}</ScrollView>
  <View style={{ padding: 16, gap: 8 }}>
    <Button variant="solid" size="3">
      <Text>Continue</Text>
    </Button>
  </View>
</View>
```

### Action Pairs

When you have two actions (primary + secondary):

```tsx
<View style={{ flexDirection: 'row', gap: 8 }}>
  <Button variant="soft" color="gray" style={{ flex: 1 }}>
    <Text>Cancel</Text>
  </Button>
  <Button variant="solid" style={{ flex: 1 }}>
    <Text>Confirm</Text>
  </Button>
</View>
```

### Inline Actions

For less prominent actions within content:

```tsx
<View style={{ flexDirection: 'row', gap: 8 }}>
  <Button variant="ghost" size="2">
    <Icon as={Heart} size={16} />
    <Text>Like</Text>
  </Button>
  <Button variant="ghost" size="2">
    <Icon as={MessageCircle} size={16} />
    <Text>Comment</Text>
  </Button>
  <Button variant="ghost" size="2">
    <Icon as={Share} size={16} />
    <Text>Share</Text>
  </Button>
</View>
```

---

## Empty States

Always design for empty states:

```tsx
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 16 }}>
  <View
    style={{
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: colors.palettes.gray.a3,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Icon as={Inbox} size={32} color={colors.palettes.gray.a11} />
  </View>
  <View style={{ gap: 4, alignItems: 'center' }}>
    <Heading size="4">No messages yet</Heading>
    <Text size="3" color="gray" style={{ textAlign: 'center' }}>
      When you receive messages, they'll appear here
    </Text>
  </View>
  <Button variant="solid">
    <Text>Start a conversation</Text>
  </Button>
</View>
```

---

## Loading States

### Skeleton Loading

Match skeleton dimensions to actual content:

```tsx
{
  isLoading ? (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Skeleton.Avatar size="2" />
        <View style={{ flex: 1, gap: 4 }}>
          <Skeleton.Text size="2" style={{ width: '60%' }} />
          <Skeleton.Text size="1" style={{ width: '40%' }} />
        </View>
      </View>
    </View>
  ) : (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar fallback={user.name} size="2" />
      <View style={{ gap: 4 }}>
        <Text weight="medium">{user.name}</Text>
        <Text size="1" color="gray">
          {user.email}
        </Text>
      </View>
    </View>
  );
}
```

### Button Loading

The Spinner component wraps content and automatically shows/hides based on the `loading` prop:

```tsx
<Button variant="solid" disabled={isLoading} onPress={handleSubmit}>
  <Spinner loading={isLoading} size="1">
    <Text>Submit</Text>
  </Spinner>
</Button>
```

### Page Loading

```tsx
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Spinner size="4" />
</View>
```

---

## Feedback & Status

### Success State

```tsx
<Callout.Root color="success">
  <Callout.Icon>
    <Icon as={CheckCircle} size={16} />
  </Callout.Icon>
  <Callout.Text>
    <Text>Your changes have been saved successfully.</Text>
  </Callout.Text>
</Callout.Root>
```

### Error State

```tsx
<Callout.Root color="danger">
  <Callout.Icon>
    <Icon as={AlertCircle} size={16} />
  </Callout.Icon>
  <Callout.Text>
    <Text>Something went wrong. Please try again.</Text>
  </Callout.Text>
</Callout.Root>
```

### Inline Validation Error

```tsx
<View style={{ gap: 6 }}>
  <Label nativeID="email">Email</Label>
  <TextField.Input
    placeholder="you@example.com"
    aria-labelledby="email"
    style={{ borderColor: colors.palettes.danger['7'] }}
  />
  <Text size="1" color="danger">
    Please enter a valid email address
  </Text>
</View>
```

---

## Modal & Dialog Best Practices

### Dialog Content Structure

```tsx
<Dialog.Content>
  {/* Title + Description */}
  <Dialog.Title>Confirm Action</Dialog.Title>
  <Dialog.Description>Are you sure you want to proceed?</Dialog.Description>

  {/* Optional: Form or additional content */}
  <View style={{ gap: 12, marginVertical: 16 }}>{/* Content */}</View>

  {/* Actions - always at bottom, right-aligned */}
  <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
    <Dialog.Close>
      <Button variant="soft" color="gray">
        <Text>Cancel</Text>
      </Button>
    </Dialog.Close>
    <Dialog.Close>
      <Button variant="solid">
        <Text>Confirm</Text>
      </Button>
    </Dialog.Close>
  </View>
</Dialog.Content>
```

### Destructive Dialog

```tsx
<AlertDialog.Content>
  <AlertDialog.Header>
    <AlertDialog.Title>Delete Account</AlertDialog.Title>
    <AlertDialog.Description>
      This will permanently delete your account and all associated data. This action cannot be
      undone.
    </AlertDialog.Description>
  </AlertDialog.Header>
  <AlertDialog.Footer>
    <AlertDialog.Cancel>
      <Button variant="soft" color="gray">
        <Text>Cancel</Text>
      </Button>
    </AlertDialog.Cancel>
    <AlertDialog.Action>
      <Button variant="solid" color="danger">
        <Text>Delete Account</Text>
      </Button>
    </AlertDialog.Action>
  </AlertDialog.Footer>
</AlertDialog.Content>
```

---

## Navigation Patterns

### Header with Back Button

```tsx
<View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    gap: 8,
  }}>
  <IconButton variant="ghost" onPress={goBack}>
    <Icon as={ArrowLeft} size={20} />
  </IconButton>
  <Heading size="4" style={{ flex: 1 }}>
    Page Title
  </Heading>
  <IconButton variant="ghost">
    <Icon as={MoreHorizontal} size={20} />
  </IconButton>
</View>
```

### Tab Navigation

```tsx
<Tabs.Root value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="overview">{/* Overview content */}</Tabs.Content>
  <Tabs.Content value="activity">{/* Activity content */}</Tabs.Content>
  <Tabs.Content value="settings">{/* Settings content */}</Tabs.Content>
</Tabs.Root>
```

### Segmented Control

For switching between mutually exclusive views:

```tsx
const [view, setView] = React.useState('list');

<SegmentedControl.Root value={view} onValueChange={setView}>
  <SegmentedControl.List>
    <SegmentedControl.Trigger value="list">List</SegmentedControl.Trigger>
    <SegmentedControl.Trigger value="grid">Grid</SegmentedControl.Trigger>
    <SegmentedControl.Trigger value="table">Table</SegmentedControl.Trigger>
  </SegmentedControl.List>
</SegmentedControl.Root>;
```

### Radio Group

For selecting one option from a list:

```tsx
const [selected, setSelected] = React.useState('option1');

<RadioGroup.Root value={selected} onValueChange={setSelected}>
  <View style={{ gap: 8 }}>
    <Pressable
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
      onPress={() => setSelected('option1')}>
      <RadioGroup.Item value="option1" />
      <Text>Option 1</Text>
    </Pressable>
    <Pressable
      style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
      onPress={() => setSelected('option2')}>
      <RadioGroup.Item value="option2" />
      <Text>Option 2</Text>
    </Pressable>
  </View>
</RadioGroup.Root>;
```

### Search Field

```tsx
<TextField.Root>
  <TextField.Slot>
    <Icon as={Search} size={16} />
  </TextField.Slot>
  <TextField.Input placeholder="Search..." />
  <TextField.Slot>
    <IconButton variant="ghost" size="1">
      <Icon as={X} size={14} />
    </IconButton>
  </TextField.Slot>
</TextField.Root>
```

---

## Accessibility Checklist

- [ ] All interactive elements have sufficient touch targets (minimum 44×44px, use `size="3"` or larger)
- [ ] Form inputs have associated `<Label>` with `nativeID` and `aria-labelledby`
- [ ] Color is not the only way to convey information (add icons or text)
- [ ] Text has sufficient contrast (Frosted UI handles this automatically)
- [ ] Loading states are announced (use `aria-busy`)
- [ ] Error messages are associated with inputs (use `aria-describedby`)

---

## Visual Polish Tips

### 1. Align Everything

Use consistent padding and alignment. If your screen padding is 16px, all content should align to that grid.

### 2. Group Related Items

Use `gap` to show relationships:

- Tighter gaps (4-8px) = closely related
- Larger gaps (16-24px) = separate groups

### 3. Use Cards to Elevate

Wrap distinct content sections in `<Card>` to create visual separation and hierarchy.

### 4. Consistent Icon Sizes

- `14-16px` — inline with text, buttons
- `18-20px` — list items, navigation
- `24-32px` — feature icons, empty states

### 5. Icon Colors

When icons are standalone (not inside Frosted UI components):

```tsx
// Gray icons (neutral)
<Icon as={Settings} size={20} color={colors.palettes.gray.a11} />

// Colored icons (e.g., in icon boxes)
<View style={{ backgroundColor: colors.palettes.blue.a3 }}>
  <Icon as={Bell} size={20} color={colors.palettes.blue.a11} />
</View>

// Semantic icons
<Icon as={AlertCircle} size={20} color={colors.palettes.danger['9']} />
```

> **Important**: Use `palette.a11` for colored icons, not `palette['9']`. The alpha shades adapt better to light/dark mode.

### 5. Balance Whitespace

If something feels cramped, add padding. If something feels disconnected, reduce gaps. Trust your visual instincts.

---

## Store & Marketing Patterns

### Pricing Tier

```tsx
<Card>
  <View style={{ gap: 16 }}>
    <Badge color="accent" size="1" style={{ alignSelf: 'flex-start' }}>
      <Text>MOST POPULAR</Text>
    </Badge>

    <View style={{ gap: 4 }}>
      <Text size="3" weight="bold">
        Pro Plan
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
        <Text size="7" weight="bold">
          $19
        </Text>
        <Text size="2" color="gray">
          /month
        </Text>
      </View>
    </View>

    <Separator size="4" />

    <View style={{ gap: 12 }}>
      {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'].map(
        (feature) => (
          <View key={feature} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: colors.palettes.success.a3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon as={Check} size={12} color={colors.palettes.success['9']} />
            </View>
            <Text size="2">{feature}</Text>
          </View>
        )
      )}
    </View>

    <Button variant="solid" size="4">
      <Text>Get Started</Text>
    </Button>
  </View>
</Card>
```

### Testimonial

```tsx
<Card>
  <View style={{ gap: 16 }}>
    <Icon as={Quote} size={32} color={colors.palettes.gray.a6} />

    <Text size="3" style={{ fontStyle: 'italic' }}>
      "This product has completely transformed how our team works. We've seen a 40% increase in
      productivity and the support team is incredibly responsive."
    </Text>

    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          as={Star}
          size={16}
          color={colors.palettes.amber['9']}
          fill={colors.palettes.amber['9']}
        />
      ))}
    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar fallback="JD" size="3" color="blue" />
      <View style={{ gap: 2 }}>
        <Text weight="medium">Jennifer Davis</Text>
        <Text size="1" color="gray">
          CTO at TechCorp
        </Text>
      </View>
    </View>
  </View>
</Card>
```

### Feature Showcase

```tsx
const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Sub-100ms response times', color: 'amber' },
  { icon: Users, title: 'Team Collaboration', description: 'Real-time sync', color: 'blue' },
  { icon: Sparkles, title: 'AI Powered', description: 'Smart suggestions', color: 'purple' },
];

<View style={{ gap: 12 }}>
  {features.map((feature) => (
    <Card key={feature.title} variant="soft">
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: colors.palettes[feature.color].a3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={feature.icon} size={24} color={colors.palettes[feature.color].a11} />
        </View>
        <View style={{ flex: 1, gap: 4 }}>
          <Text weight="medium">{feature.title}</Text>
          <Text size="2" color="gray">
            {feature.description}
          </Text>
        </View>
      </View>
    </Card>
  ))}
</View>;
```

### App Stats

```tsx
const stats = [
  { value: '10M+', label: 'Downloads', icon: Download },
  { value: '4.8★', label: 'Rating', icon: Star },
  { value: '#1', label: 'Top Charts', icon: Trophy },
];

<View style={{ flexDirection: 'row', gap: 12 }}>
  {stats.map((stat) => (
    <Card key={stat.label} style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Icon as={stat.icon} size={24} color={colors.palettes.accent.a11} />
        <Text size="4" weight="bold">
          {stat.value}
        </Text>
        <Text size="1" color="gray">
          {stat.label}
        </Text>
      </View>
    </Card>
  ))}
</View>;
```

---

## Apple-like Design Principles

When creating premium, polished interfaces, follow these principles:

### 1. Structure Over Decoration

- Use clear sections with subtle borders (`colors.stroke`)
- Separate header areas with different background shades (`gray.a2`)
- Avoid gratuitous gradients or shadows

### 2. Consistent Color Theming

When theming a section:

```tsx
// Use a single palette consistently
backgroundColor: colors.palettes.pink.a2,      // Subtle background
borderColor: colors.palettes.pink.a4,          // Border
color: colors.palettes.pink.a11,               // Body text
color: colors.palettes.pink.a12,               // Heading
```

### 3. Subtle Emphasis

- Use `shadowRadius: 12` with `shadowOpacity: 0.3` for a soft "glow"
- Add small indicator dots (6×6) for live/active states
- Use `weight="medium"` more than `weight="bold"` for cleaner text

### 4. Centered Focal Points

For achievements, promotions, or highlights:

```tsx
<Badge style={{ alignSelf: 'center' }}>
  <Icon as={Award} size={14} />
  <Text>Achievement Name</Text>
</Badge>
```

### 5. Stats Rows

Display multiple metrics in a clean horizontal layout:

```tsx
<View style={{ flexDirection: 'row' }}>
  <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
    <Text size="4" weight="bold">
      100
    </Text>
    <Text size="1" color="gray">
      Points
    </Text>
  </View>
  <View style={{ width: 1, backgroundColor: colors.stroke }} />
  {/* More stats... */}
</View>
```

---

## Common Mistakes to Avoid

| Mistake                     | Better Approach                                        |
| --------------------------- | ------------------------------------------------------ |
| Using many different colors | Stick to accent + gray + semantic colors               |
| Inconsistent spacing        | Use the spacing scale (4, 8, 12, 16, 24, 32)           |
| Too many primary buttons    | One `solid` button per view/section                    |
| Overriding component styles | Use built-in variants and props                        |
| Missing loading states      | Always show feedback during async operations           |
| Missing empty states        | Design what users see with no data                     |
| Text without hierarchy      | Use Heading for titles, Text with size/weight for body |
| Cramped touch targets       | Use `size="2"` or `size="3"` for interactive elements  |

---

## Quick Reference: Common Compositions

| Pattern      | Components Used                                   |
| ------------ | ------------------------------------------------- |
| Page header  | `<Heading>` + optional `<Text>` description       |
| Form field   | `<Label>` + `<TextField.Input>` + helper `<Text>` |
| List item    | `<Avatar>` + `<Text>` stack + `<Badge>` or action |
| Card action  | `<Card>` + content + `<Button>` row               |
| Empty state  | Icon + `<Heading>` + `<Text>` + `<Button>`        |
| Settings row | Label + `<Switch>` or `<Select>`                  |
| Dialog       | Title + Description + content + button row        |
| Feedback     | `<Callout>` with semantic color                   |

---

## E-commerce Patterns

### Product Card

```tsx
<Card style={{ padding: 0 }}>
  {/* Product Image */}
  <View style={{ height: 200, backgroundColor: colors.palettes.gray.a3 }} />

  <View style={{ padding: 16, gap: 12 }}>
    {/* Category + Rating */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Badge variant="soft" color="gray" size="1">
        <Text>Electronics</Text>
      </Badge>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Icon
          as={Star}
          size={14}
          color={colors.palettes.amber['9']}
          fill={colors.palettes.amber['9']}
        />
        <Text size="1" weight="medium">
          4.8
        </Text>
        <Text size="1" color="gray">
          (128)
        </Text>
      </View>
    </View>

    {/* Title */}
    <Text size="3" weight="medium" numberOfLines={2}>
      Wireless Noise-Cancelling Headphones
    </Text>

    {/* Price */}
    <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
      <Text size="4" weight="bold">
        $299
      </Text>
      <Text size="2" color="gray" style={{ textDecorationLine: 'line-through' }}>
        $349
      </Text>
    </View>

    {/* Quick action */}
    <Button variant="solid" size="3">
      <Text>Add to Cart</Text>
    </Button>
  </View>
</Card>
```

### Cart Item

```tsx
<View
  style={{
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.stroke,
  }}>
  {/* Thumbnail */}
  <View
    style={{
      width: 80,
      height: 80,
      borderRadius: 8,
      backgroundColor: colors.palettes.gray.a3,
    }}
  />

  {/* Details */}
  <View style={{ flex: 1, gap: 4 }}>
    <Text size="2" weight="medium" numberOfLines={2}>
      Premium Wireless Headphones
    </Text>
    <Text size="1" color="gray">
      Black · Qty: 1
    </Text>
    <Text size="3" weight="bold">
      $299
    </Text>
  </View>

  {/* Remove button */}
  <IconButton variant="ghost" size="2" color="gray">
    <Icon as={Trash2} size={16} />
  </IconButton>
</View>
```

### Order Summary

```tsx
<Card>
  <View style={{ gap: 16 }}>
    <Heading size="4">Order Summary</Heading>

    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text color="gray">Subtotal (3 items)</Text>
        <Text weight="medium">$239.97</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text color="gray">Shipping</Text>
        <Text weight="medium" color="success">
          Free
        </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text color="gray">Tax</Text>
        <Text weight="medium">$19.20</Text>
      </View>
    </View>

    <Separator size="4" />

    {/* Discount Code */}
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <View style={{ flex: 1 }}>
        <TextField.Input placeholder="Discount code" />
      </View>
      <Button variant="surface">
        <Text>Apply</Text>
      </Button>
    </View>

    <Separator size="4" />

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text size="4" weight="bold">
        Total
      </Text>
      <Text size="5" weight="bold">
        $259.17
      </Text>
    </View>

    <Button variant="solid" size="4">
      <Text>Checkout</Text>
    </Button>
  </View>
</Card>
```

### Shipping Options

Use radio groups for selection lists like shipping methods:

```tsx
const [selected, setSelected] = React.useState('standard');

const options = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    price: 'Free',
    time: '5-7 business days',
    icon: Truck,
  },
  { id: 'express', name: 'Express Shipping', price: '$9.99', time: '2-3 business days', icon: Zap },
  { id: 'overnight', name: 'Overnight', price: '$24.99', time: 'Next business day', icon: Clock },
];

<Card style={{ padding: 0 }}>
  <RadioGroup.Root value={selected} onValueChange={setSelected}>
    {options.map((option, index) => (
      <React.Fragment key={option.id}>
        {index > 0 && <Separator size="4" />}
        <Pressable
          onPress={() => setSelected(option.id)}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
          })}>
          <RadioGroup.Item value={option.id} />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor:
                selected === option.id ? colors.palettes.accent.a3 : colors.palettes.gray.a3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              as={option.icon}
              size={20}
              color={selected === option.id ? colors.palettes.accent.a11 : colors.palettes.gray.a11}
            />
          </View>
          <View style={{ flex: 1, gap: 2 }}>
            <Text weight="medium">{option.name}</Text>
            <Text size="1" color="gray">
              {option.time}
            </Text>
          </View>
          <Text weight="medium" color={option.price === 'Free' ? 'success' : undefined}>
            {option.price}
          </Text>
        </Pressable>
      </React.Fragment>
    ))}
  </RadioGroup.Root>
</Card>;
```

### Payment Method

```tsx
const [selected, setSelected] = React.useState('visa');

<Card style={{ padding: 0 }}>
  <RadioGroup.Root value={selected} onValueChange={setSelected}>
    {[
      { id: 'visa', name: 'Visa', last4: '4242', expiry: '12/25' },
      { id: 'mastercard', name: 'Mastercard', last4: '8888', expiry: '03/26' },
    ].map((card, index) => (
      <React.Fragment key={card.id}>
        {index > 0 && <Separator size="4" />}
        <Pressable
          onPress={() => setSelected(card.id)}
          style={({ pressed }) => ({
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
          })}>
          <RadioGroup.Item value={card.id} />
          <View
            style={{
              width: 48,
              height: 32,
              borderRadius: 6,
              backgroundColor: colors.palettes.gray.a3,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: colors.stroke,
            }}>
            <Icon as={CreditCard} size={20} color={colors.palettes.gray.a11} />
          </View>
          <View style={{ flex: 1, gap: 2 }}>
            <Text weight="medium">
              {card.name} •••• {card.last4}
            </Text>
            <Text size="1" color="gray">
              Expires {card.expiry}
            </Text>
          </View>
        </Pressable>
      </React.Fragment>
    ))}

    <Separator size="4" />

    {/* Add new card option */}
    <Pressable
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: pressed ? colors.palettes.gray.a3 : 'transparent',
      })}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: colors.palettes.accent['9'],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon as={Plus} size={14} color={colors.palettes.accent.a11} />
      </View>
      <Text weight="medium" color="accent">
        Add new card
      </Text>
    </Pressable>
  </RadioGroup.Root>
</Card>;
```

### Order Status (Timeline)

```tsx
const steps = [
  { id: 'ordered', label: 'Ordered', date: 'Dec 15', completed: true },
  { id: 'shipped', label: 'Shipped', date: 'Dec 16', completed: true },
  { id: 'transit', label: 'In Transit', date: 'Dec 17', completed: true, active: true },
  { id: 'delivered', label: 'Delivered', date: 'Dec 19', completed: false },
];

<Card>
  <View style={{ gap: 16 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Heading size="4">Order Status</Heading>
      <Badge color="info" size="1">
        <Text>In Transit</Text>
      </Badge>
    </View>

    <View style={{ gap: 0 }}>
      {steps.map((step, index) => (
        <View key={step.id} style={{ flexDirection: 'row', gap: 12 }}>
          {/* Timeline */}
          <View style={{ alignItems: 'center', width: 24 }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: step.completed
                  ? colors.palettes.success['9']
                  : colors.palettes.gray.a4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {step.completed && <Icon as={Check} size={14} color="white" />}
            </View>
            {index < steps.length - 1 && (
              <View
                style={{
                  width: 2,
                  height: 32,
                  backgroundColor: step.completed
                    ? colors.palettes.success['9']
                    : colors.palettes.gray.a4,
                }}
              />
            )}
          </View>
          {/* Content */}
          <View style={{ flex: 1, paddingBottom: index < steps.length - 1 ? 16 : 0 }}>
            <Text weight={step.active ? 'bold' : 'medium'}>{step.label}</Text>
            <Text size="1" color="gray">
              {step.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </View>
</Card>;
```

### Product Review

```tsx
<Card>
  <View style={{ gap: 12 }}>
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Avatar fallback="MJ" size="3" color="blue" />
        <View style={{ gap: 2 }}>
          <Text weight="medium">Michael Johnson</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                as={Star}
                size={12}
                color={star <= 5 ? colors.palettes.amber['9'] : colors.palettes.gray.a6}
                fill={star <= 5 ? colors.palettes.amber['9'] : 'transparent'}
              />
            ))}
          </View>
        </View>
      </View>
      <Text size="1" color="gray">
        2 days ago
      </Text>
    </View>

    <Text size="3" color="gray">
      Absolutely love these headphones! The noise cancellation is incredible and the battery life
      exceeds expectations. Highly recommend for anyone looking for premium audio quality.
    </Text>

    <Button variant="ghost" size="2" style={{ alignSelf: 'flex-start' }}>
      <Icon as={ThumbsUp} size={14} />
      <Text>Helpful (24)</Text>
    </Button>
  </View>
</Card>
```

### Wishlist Item

```tsx
<Card style={{ padding: 0 }}>
  <View style={{ flexDirection: 'row', padding: 16, gap: 12 }}>
    <View
      style={{
        width: 80,
        height: 80,
        backgroundColor: colors.palettes.gray.a3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon as={ShoppingBag} size={32} color={colors.palettes.gray.a8} />
    </View>
    <View style={{ flex: 1, gap: 4 }}>
      <Text size="2" weight="medium" numberOfLines={2}>
        Premium Leather Wallet
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            as={Star}
            size={10}
            color={star <= 4 ? colors.palettes.amber['9'] : colors.palettes.gray.a6}
            fill={star <= 4 ? colors.palettes.amber['9'] : 'transparent'}
          />
        ))}
        <Text size="0" color="gray">
          (89)
        </Text>
      </View>
      <Text size="3" weight="bold">
        $49.99
      </Text>
    </View>
  </View>
  <Separator size="4" />
  <View style={{ flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 12, gap: 8 }}>
    <Button variant="solid" size="2" style={{ flex: 1 }}>
      <Icon as={ShoppingCart} size={14} />
      <Text>Move to Cart</Text>
    </Button>
    <IconButton variant="surface" size="2" color="danger">
      <Icon as={Trash2} size={16} />
    </IconButton>
  </View>
</Card>
```

---

## Profile & Social Patterns

### Team Member Card

```tsx
<Card>
  <View style={{ alignItems: 'center', gap: 12 }}>
    <Avatar fallback="AK" size="7" color="blue" />
    <View style={{ alignItems: 'center', gap: 4 }}>
      <Text size="3" weight="bold">
        Alex Kim
      </Text>
      <Text size="2" color="gray">
        Senior Designer
      </Text>
    </View>
    <View style={{ flexDirection: 'row', gap: 8 }}>
      <IconButton variant="soft" size="2" color="gray">
        <Icon as={Twitter} size={16} />
      </IconButton>
      <IconButton variant="soft" size="2" color="gray">
        <Icon as={Linkedin} size={16} />
      </IconButton>
      <IconButton variant="soft" size="2" color="gray">
        <Icon as={Send} size={16} />
      </IconButton>
    </View>
  </View>
</Card>
```

### User Stats Row

```tsx
<View style={{ flexDirection: 'row' }}>
  <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
    <Text size="5" weight="bold">
      2.4k
    </Text>
    <Text size="1" color="gray">
      Followers
    </Text>
  </View>
  <View style={{ width: 1, backgroundColor: colors.stroke }} />
  <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
    <Text size="5" weight="bold">
      486
    </Text>
    <Text size="1" color="gray">
      Following
    </Text>
  </View>
  <View style={{ width: 1, backgroundColor: colors.stroke }} />
  <View style={{ flex: 1, alignItems: 'center', gap: 2 }}>
    <Text size="5" weight="bold">
      12
    </Text>
    <Text size="1" color="gray">
      Projects
    </Text>
  </View>
</View>
```

### Social Post

```tsx
const [liked, setLiked] = React.useState(false);
const [likes, setLikes] = React.useState(42);

<Card style={{ padding: 0 }}>
  {/* Header */}
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 }}>
    <Avatar fallback="EW" size="3" color="purple" />
    <View style={{ flex: 1, gap: 2 }}>
      <Text weight="medium">Emma Wilson</Text>
      <Text size="1" color="gray">
        2 hours ago
      </Text>
    </View>
    <IconButton variant="ghost" size="2">
      <Icon as={MoreHorizontal} size={18} />
    </IconButton>
  </View>

  {/* Content */}
  <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
    <Text size="3">
      Just finished my morning run! 🏃‍♀️ Nothing beats starting the day with some exercise.
    </Text>
  </View>

  {/* Image placeholder */}
  <View
    style={{
      height: 200,
      backgroundColor: colors.palettes.gray.a3,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Icon as={MapPin} size={48} color={colors.palettes.gray.a8} />
  </View>

  {/* Actions */}
  <View style={{ flexDirection: 'row', padding: 12, gap: 16 }}>
    <Button
      variant="ghost"
      size="2"
      color={liked ? 'danger' : 'gray'}
      onPress={() => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
      }}>
      <Icon as={Heart} size={18} />
      <Text>{likes}</Text>
    </Button>
    <Button variant="ghost" size="2" color="gray">
      <Icon as={MessageCircle} size={18} />
      <Text>12</Text>
    </Button>
    <Button variant="ghost" size="2" color="gray">
      <Icon as={Share} size={18} />
    </Button>
  </View>
</Card>;
```

---

## Gamification Patterns

### Streak Counter

```tsx
<Card>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 14,
        backgroundColor: colors.palettes.orange.a3,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon as={Flame} size={28} color={colors.palettes.orange['9']} />
    </View>
    <View style={{ flex: 1, gap: 4 }}>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 4 }}>
        <Text size="6" weight="bold">
          7
        </Text>
        <Text size="3" weight="medium">
          Day Streak
        </Text>
      </View>
      <Text size="2" color="gray">
        Keep it up! You're on fire 🔥
      </Text>
    </View>
  </View>
</Card>
```

### Leaderboard

```tsx
const entries = [
  { rank: 1, name: 'Sarah Chen', points: 12450, avatar: 'SC', color: 'pink' },
  { rank: 2, name: 'Alex Kim', points: 11200, avatar: 'AK', color: 'blue' },
  { rank: 3, name: 'Jordan Lee', points: 10890, avatar: 'JL', color: 'green' },
  { rank: 4, name: 'You', points: 9540, avatar: 'ME', color: 'accent', isUser: true },
];

<Card style={{ padding: 0 }}>
  {entries.map((entry, index) => (
    <React.Fragment key={entry.rank}>
      {index > 0 && <Separator size="4" />}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          paddingHorizontal: 16,
          paddingVertical: 14,
          backgroundColor: entry.isUser ? colors.palettes.accent.a2 : 'transparent',
        }}>
        <Text
          size="2"
          weight="bold"
          style={{ width: 24, textAlign: 'center' }}
          color={entry.rank <= 3 ? undefined : 'gray'}>
          {entry.rank}
        </Text>
        {entry.rank <= 3 && (
          <Icon
            as={entry.rank === 1 ? Trophy : Award}
            size={20}
            color={getMedalColor(entry.rank)}
          />
        )}
        <Avatar fallback={entry.avatar} size="2" color={entry.color} />
        <View style={{ flex: 1 }}>
          <Text weight={entry.isUser ? 'bold' : 'medium'}>{entry.name}</Text>
        </View>
        <Text weight="medium" color="gray">
          {entry.points.toLocaleString()} pts
        </Text>
      </View>
    </React.Fragment>
  ))}
</Card>;
```

### XP Progress

```tsx
<Card>
  <View style={{ gap: 12 }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <View
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: colors.palettes.purple['9'],
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text size="2" weight="bold" style={{ color: 'white' }}>
            12
          </Text>
        </View>
        <Text weight="medium">Level 12</Text>
      </View>
      <Badge color="purple" size="1">
        <Icon as={Sparkles} size={10} />
        <Text>250 XP to go</Text>
      </Badge>
    </View>
    <Progress value={75} size="2" color="purple" />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text size="1" color="gray">
        750 / 1,000 XP
      </Text>
      <Text size="1" color="gray">
        Next: Level 13
      </Text>
    </View>
  </View>
</Card>
```

### Daily Challenge

```tsx
<Card>
  <View style={{ gap: 12 }}>
    <View
      style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: colors.palettes.cyan.a3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon as={Timer} size={24} color={colors.palettes.cyan.a11} />
        </View>
        <View style={{ gap: 2 }}>
          <Text size="1" color="gray" weight="medium">
            DAILY CHALLENGE
          </Text>
          <Text weight="medium">Complete 5 lessons</Text>
        </View>
      </View>
      <Badge color="amber" size="1">
        <Icon as={Gift} size={10} />
        <Text>+50 XP</Text>
      </Badge>
    </View>
    <Progress value={60} size="2" color="cyan" />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text size="1" color="gray">
        3 of 5 completed
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
        <Icon as={Clock} size={12} color={colors.palettes.gray.a11} />
        <Text size="1" color="gray">
          8h remaining
        </Text>
      </View>
    </View>
  </View>
</Card>
```

---

## Media Patterns

### Now Playing (Music Player)

```tsx
const [isPlaying, setIsPlaying] = React.useState(true);

<Card>
  <View style={{ gap: 16 }}>
    {/* Album Art + Info */}
    <View style={{ flexDirection: 'row', gap: 16 }}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          backgroundColor: colors.palettes.pink.a3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon as={Music} size={32} color={colors.palettes.pink.a11} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', gap: 4 }}>
        <Text size="3" weight="bold" numberOfLines={1}>
          Midnight Dreams
        </Text>
        <Text size="2" color="gray" numberOfLines={1}>
          Aurora Synth
        </Text>
        <Text size="1" color="gray">
          Neon Horizons • 2024
        </Text>
      </View>
      <IconButton variant="ghost" size="2">
        <Icon as={Heart} size={20} />
      </IconButton>
    </View>

    {/* Progress */}
    <View style={{ gap: 8 }}>
      <Progress value={35} size="1" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text size="0" color="gray">
          1:24
        </Text>
        <Text size="0" color="gray">
          3:45
        </Text>
      </View>
    </View>

    {/* Controls */}
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <IconButton variant="ghost" size="3">
        <Icon as={SkipBack} size={24} />
      </IconButton>
      <IconButton variant="solid" size="4" onPress={() => setIsPlaying(!isPlaying)}>
        <Icon as={isPlaying ? Pause : Play} size={24} />
      </IconButton>
      <IconButton variant="ghost" size="3">
        <Icon as={SkipForward} size={24} />
      </IconButton>
    </View>
  </View>
</Card>;
```

### Poll Card

```tsx
const [voted, setVoted] = React.useState(null);

const options = [
  { id: 'react', label: 'React Native', votes: 156 },
  { id: 'flutter', label: 'Flutter', votes: 89 },
  { id: 'native', label: 'Native (Swift/Kotlin)', votes: 67 },
];

const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

<Card>
  <View style={{ gap: 16 }}>
    <View style={{ gap: 8 }}>
      <Text size="3" weight="medium">
        What's your preferred mobile framework?
      </Text>
      <Text size="1" color="gray">
        {totalVotes} votes • 2 days left
      </Text>
    </View>

    <View style={{ gap: 8 }}>
      {options.map((option) => {
        const percentage = Math.round((option.votes / totalVotes) * 100);
        const isSelected = voted === option.id;

        return (
          <Pressable
            key={option.id}
            onPress={() => !voted && setVoted(option.id)}
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: isSelected ? colors.palettes.accent['8'] : colors.stroke,
            }}>
            {/* Progress background */}
            <View
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: voted ? `${percentage}%` : '0%',
                backgroundColor: isSelected ? colors.palettes.accent.a3 : colors.palettes.gray.a3,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 12,
              }}>
              <Text weight={isSelected ? 'medium' : 'regular'}>{option.label}</Text>
              {voted && (
                <Text size="2" weight="medium">
                  {percentage}%
                </Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  </View>
</Card>;
```
