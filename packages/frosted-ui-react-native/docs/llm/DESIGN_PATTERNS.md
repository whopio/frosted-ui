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
    <Tabs.Trigger value="overview">
      <Text>Overview</Text>
    </Tabs.Trigger>
    <Tabs.Trigger value="activity">
      <Text>Activity</Text>
    </Tabs.Trigger>
    <Tabs.Trigger value="settings">
      <Text>Settings</Text>
    </Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="overview">{/* Overview content */}</Tabs.Content>
  <Tabs.Content value="activity">{/* Activity content */}</Tabs.Content>
  <Tabs.Content value="settings">{/* Settings content */}</Tabs.Content>
</Tabs.Root>
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

### Order Status

```tsx
<Card>
  <View style={{ gap: 16 }}>
    {/* Header */}
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ gap: 2 }}>
        <Text size="1" color="gray">
          Order #12345
        </Text>
        <Text size="3" weight="medium">
          Out for Delivery
        </Text>
      </View>
      <Badge color="success" size="1">
        <Icon as={Truck} size={12} />
        <Text>On the way</Text>
      </Badge>
    </View>

    {/* Progress steps */}
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.palettes.success['9'],
        }}
      />
      <View style={{ flex: 1, height: 2, backgroundColor: colors.palettes.success['9'] }} />
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.palettes.success['9'],
        }}
      />
      <View style={{ flex: 1, height: 2, backgroundColor: colors.palettes.success['9'] }} />
      <View
        style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colors.palettes.gray.a6 }}
      />
    </View>

    {/* Delivery info */}
    <View style={{ gap: 4 }}>
      <Text size="2" color="gray">
        Estimated delivery
      </Text>
      <Text size="3" weight="medium">
        Today, 3:00 PM - 5:00 PM
      </Text>
    </View>
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
      <Text size="4" weight="bold">
        Alex Kim
      </Text>
      <Text size="2" color="gray">
        Product Designer
      </Text>
    </View>
    <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
      <Button variant="solid" size="2">
        <Text>Follow</Text>
      </Button>
      <Button variant="soft" color="gray" size="2">
        <Text>Message</Text>
      </Button>
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

---

## Gamification Patterns

### Streak Counter

```tsx
<Card
  style={{
    backgroundColor: colors.palettes.orange.a2,
    borderWidth: 1,
    borderColor: colors.palettes.orange.a4,
  }}>
  <View style={{ alignItems: 'center', gap: 8 }}>
    <Icon as={Flame} size={32} color={colors.palettes.orange['9']} />
    <Text size="6" weight="bold" style={{ color: colors.palettes.orange.a12 }}>
      7 Day Streak!
    </Text>
    <Text size="2" style={{ color: colors.palettes.orange.a11 }}>
      Keep it going! Come back tomorrow.
    </Text>
  </View>
</Card>
```

### Leaderboard Item

```tsx
<View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  }}>
  <Text size="3" weight="bold" style={{ width: 24 }}>
    #1
  </Text>
  <Avatar fallback="JD" size="3" color="amber" />
  <View style={{ flex: 1, gap: 2 }}>
    <Text size="2" weight="medium">
      Jane Doe
    </Text>
    <Text size="1" color="gray">
      Level 42
    </Text>
  </View>
  <View style={{ alignItems: 'flex-end' }}>
    <Text size="2" weight="bold">
      12,450
    </Text>
    <Text size="1" color="gray">
      points
    </Text>
  </View>
</View>
```
