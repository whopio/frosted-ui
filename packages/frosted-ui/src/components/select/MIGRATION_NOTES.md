# Select Migration: Radix UI → Base UI

## Component Mapping

| Radix UI           | Base UI                                                                | Notes                                  |
| ------------------ | ---------------------------------------------------------------------- | -------------------------------------- |
| `Select.Root`      | `Select.Root`                                                          | Adds `items` prop for value formatting |
| `Select.Trigger`   | `Select.Trigger` + `Select.Value` + `Select.Icon`                      | Compound structure                     |
| `Select.Content`   | `Select.Portal` + `Select.Positioner` + `Select.Popup` + `Select.List` | Internal structure change              |
| `Select.Item`      | `Select.Item` + `Select.ItemIndicator` + `Select.ItemText`             | Explicit children                      |
| `Select.Group`     | `Select.Group`                                                         | Similar                                |
| `Select.Label`     | `Select.GroupLabel`                                                    | Must be inside Group                   |
| `Select.Separator` | `Select.Separator`                                                     | Similar                                |
| `Select.Viewport`  | `Select.List`                                                          | Renamed                                |
| N/A                | `Select.ScrollUpArrow` / `Select.ScrollDownArrow`                      | New scroll helpers                     |
| N/A                | `Select.Backdrop`                                                      | New optional backdrop                  |

## Breaking Changes

### 1. `asChild` → `render`

```tsx
// Before (Radix)
<Select.Trigger asChild>
  <button>Custom</button>
</Select.Trigger>

// After (Base UI) - handled internally
<Select.Trigger>
  <Select.Value />
</Select.Trigger>
```

### 2. `position` prop removed

```tsx
// Before (Radix)
<Select.Content position="popper">

// After (Base UI)
<Select.Content alignItemWithTrigger={false}>
```

The `position="item-aligned"` (Radix default) corresponds to `alignItemWithTrigger={true}` (Base UI default).
The `position="popper"` corresponds to `alignItemWithTrigger={false}`.

### 3. `Label` must be inside `Group`

```tsx
// Before (Radix) - could be standalone
<Select.Label>Category</Select.Label>
<Select.Item value="1">Item</Select.Item>

// After (Base UI) - must be in Group
<Select.Group>
  <Select.Label>Category</Select.Label>
  <Select.Item value="1">Item</Select.Item>
</Select.Group>
```

### 4. `onValueChange` signature

```tsx
// Before (Radix)
onValueChange={(value: string) => void}

// After (Base UI)
onValueChange={(value, event) => void}
```

## New Features

### 1. `items` prop for value formatting

```tsx
const items = [
  { value: 'light', label: 'Light Mode' },
  { value: 'dark', label: 'Dark Mode' },
];

<Select.Root items={items}>
  <Select.Trigger>
    <Select.Value /> {/* Automatically shows label for selected value */}
  </Select.Trigger>
</Select.Root>;
```

### 2. `alignItemWithTrigger` positioning

By default, Base UI Select overlaps the trigger so the selected item aligns with the trigger text.
Set `alignItemWithTrigger={false}` on Positioner for standard dropdown behavior.

### 3. Multiple selection

```tsx
<Select.Root multiple>{/* Items can be selected/deselected */}</Select.Root>
```

### 4. Object values

```tsx
const themes = [
  { name: 'Light', settings: { brightness: 100 } },
  { name: 'Dark', settings: { brightness: 0 } },
];

<Select.Root items={themes} value={selectedTheme} onValueChange={setSelectedTheme}>
```

### 5. Scroll Arrows

```tsx
<Select.Popup>
  <Select.ScrollUpArrow />
  <Select.List>{/* items */}</Select.List>
  <Select.ScrollDownArrow />
</Select.Popup>
```

## Data Attribute Changes

| Radix                 | Base UI               |
| --------------------- | --------------------- |
| `data-state="open"`   | `data-open`           |
| `data-state="closed"` | (no attribute)        |
| `data-highlighted`    | `data-highlighted`    |
| `data-disabled`       | `data-disabled`       |
| N/A                   | `data-starting-style` |
| N/A                   | `data-ending-style`   |
| N/A                   | `data-side`           |

## CSS Variable Changes

| Radix                                     | Base UI              |
| ----------------------------------------- | -------------------- |
| `--radix-select-trigger-width`            | `--anchor-width`     |
| `--radix-select-content-available-height` | `--available-height` |
| `--radix-select-content-transform-origin` | `--transform-origin` |

## Internal Structure Change

Our `Select.Content` will internally render:

```tsx
<Select.Portal>
  <Select.Positioner>
    <Select.Popup>
      <Select.List>{children}</Select.List>
    </Select.Popup>
  </Select.Positioner>
</Select.Portal>
```

## Migration Checklist

- [x] Create migration notes
- [x] Update Select.Root with items support
- [x] Update Select.Trigger structure (Value + Icon)
- [x] Update Select.Content to use Portal/Positioner/Popup/List
- [x] Update Select.Item with ItemText/ItemIndicator
- [x] Update Select.Group
- [x] Rename Select.Label to Select.GroupLabel (also exported as Label for backwards compat)
- [x] Update Select.Separator
- [x] Update CSS for Base UI data attributes
- [x] Add positioning props (side, align, sideOffset, alignOffset)
- [x] Add alignItemWithTrigger prop
- [x] Update stories
- [ ] Test all existing functionality
