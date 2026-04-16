# Lightbox Component — Code Review

**Date**: April 11, 2026
**Path**: `packages/frosted-ui/src/components/lightbox/`

## File Inventory

| File | Purpose |
|---|---|
| `lightbox.ts` | Barrel export — public API surface |
| `index.ts` | Re-export as `Lightbox` namespace |
| `lightbox-context.tsx` | Shared context, VT helpers (`findMorphTarget`, `supportsViewTransitions`) |
| `lightbox-root.tsx` | State provider, open/close orchestration, VT morph logic |
| `lightbox-content.tsx` | Native `<dialog>` modal, keyboard nav, backdrop click |
| `lightbox-trigger.tsx` | Per-index trigger button, registers element for VT |
| `lightbox-item.tsx` | Individual media item, lazy render, caption registration |
| `lightbox-item-group.tsx` | Item container, preload window, direction tracking |
| `lightbox-close.tsx` | Close button |
| `lightbox-previous.tsx` | Previous navigation button |
| `lightbox-next.tsx` | Next navigation button |
| `lightbox-counter.tsx` | "1 / 12" counter with `aria-live` |
| `lightbox-caption.tsx` | Active item caption from registry |
| `lightbox-thumbnail.tsx` | Tab button for thumbnail navigation |
| `lightbox-thumbnail-group.tsx` | Tablist container with roving tabindex |
| `lightbox.css` | All default styles, transitions, and VT rules |
| `lightbox.stories.tsx` | Storybook demos |

---

## 1. Bugs and Correctness Issues

### 1.1 `setItemCount` only grows, never shrinks

Each `LightboxItem` calls `setItemCount(prev => Math.max(prev, index + 1))` on mount. There is no cleanup — when items are removed (e.g. filtering a gallery), `itemCount` stays at the high-water mark. This causes `Previous`/`Next` boundary checks and `Counter` total to be wrong.

**File**: `lightbox-item.tsx:75-77`

```tsx
React.useEffect(() => {
  setItemCount((prev: number) => Math.max(prev, index + 1));
}, [index, setItemCount]);
```

**Suggested fix**: Switch to a registration pattern (like captions), or have `ItemGroup` derive the count from `React.Children.count` / a ref-based Set:

```tsx
// In Item — register on mount, unregister on unmount
React.useEffect(() => {
  registerItem(index);
  return () => unregisterItem(index);
}, [index]);

// In Root — derive count from set size
const [registeredItems] = React.useState(() => new Set<number>());
const itemCount = registeredItems.size;
```

---

### 1.2 VT `transition.finished` callbacks are not generation-guarded

The non-VT close path correctly uses `closeGenRef` to discard stale animation callbacks. The VT paths do not — both `transition.finished.then(...)` blocks (open and close) fire unconditionally. If a user rapidly opens and closes, a stale callback could:

- Clear `viewTransitionName` from the wrong element
- Remove `data-lightbox-view-transition` mid-animation
- Focus a trigger from a previous close cycle

**File**: `lightbox-root.tsx:212-221` (open), `lightbox-root.tsx:259-267` (close)

**Suggested fix**: Capture `closeGenRef.current` before the VT and guard inside `.then()`:

```tsx
const gen = closeGenRef.current;
transition.finished.then(() => {
  if (closeGenRef.current !== gen) return;
  // ... cleanup ...
});
```

---

### 1.3 Preload distance ignores `loop`

The preload window uses linear distance: `Math.abs(index - activeIndex) <= preload`. When `loop` is enabled and the active item is at index 0, item N-1 is logically 1 step away but has linear distance N-1 — so it won't preload. Navigating backward at the boundary will show an empty slot until the item mounts.

**File**: `lightbox-item.tsx:49`

```tsx
const distance = Math.abs(index - activeIndex);
const isVisible = distance <= preload;
```

**Suggested fix**: Use circular distance when `loop` is enabled. This requires passing `loop` and `itemCount` into the item group context:

```tsx
const linearDist = Math.abs(index - activeIndex);
const circularDist = itemCount - linearDist;
const distance = loop ? Math.min(linearDist, circularDist) : linearDist;
```

---

### 1.4 No default `aria-label` on the dialog

`LightboxContent` renders a bare `<dialog>` with no default accessible name. Consumers must always pass `aria-label` manually. If they forget, screen readers will announce the dialog without context.

**File**: `lightbox-content.tsx:107-121`

**Suggested fix**: Add a sensible default that consumers can override via props:

```tsx
<dialog
  aria-label="Media viewer"
  {...rest}
>
```

Since `{...rest}` comes after, a consumer's `aria-label` will override the default.

---

### 1.5 VT rejection is not handled

`document.startViewTransition()` can reject if another view transition is already running. The `.then()` cleanup (removing `viewTransitionName`, `data-lightbox-view-transition`, CSS custom properties) would never execute, leaving stale attributes on `<html>` and inline styles on morph targets.

**File**: `lightbox-root.tsx:189-221` (open), `lightbox-root.tsx:240-267` (close)

**Suggested fix**: Use `.finally()` for cleanup that must always run:

```tsx
const transition = startViewTransition(() => { /* ... */ });

transition.finished.finally(() => {
  if (triggerTarget) triggerTarget.style.viewTransitionName = '';
  docEl.removeAttribute('data-lightbox-view-transition');
  docEl.style.removeProperty('--fui-morph-border-radius-from');
  docEl.style.removeProperty('--fui-morph-border-radius-to');
});
```

---

## 2. Simplification Opportunities

### 2.1 Caption registry triggers full-tree re-renders

Every time a `LightboxItem` mounts with a `caption` prop, it calls `registerCaption`, which calls `setCaptions(new Map(...))`. This is a state update on `Root`, causing the entire lightbox tree to re-render — including every other item, thumbnail, and button.

**File**: `lightbox-root.tsx:136-151`

**Alternative**: Use a `ref`-based Map that doesn't trigger re-renders on registration. Only the `Caption` component needs to re-render when the active caption changes, which it already does via `activeIndex`:

```tsx
const captionsRef = React.useRef(new Map<number, React.ReactNode>());

const registerCaption = React.useCallback((index: number, caption: React.ReactNode) => {
  captionsRef.current.set(index, caption);
  return () => { captionsRef.current.delete(index); };
}, []);
```

Then `LightboxCaption` reads directly from `captionsRef.current.get(activeIndex)`.

---

### 2.2 Dual context for `activeIndex`

`LightboxItemGroupContext` provides `activeIndex`, `preload`, and `direction` to items. The `activeIndex` is already available from the root `LightboxContext`. The separate context exists to limit re-renders — items only re-render when the group context changes, not on every root context change.

This is a valid optimization trade-off. No change recommended, but worth documenting the rationale in a code comment.

---

### 2.3 Imperative ref overlaps with controlled props

`LightboxRootRef` exposes `.open(index?)`, `.close()`, and `.goTo(index)`. These duplicate what controlled `open` + `value` props do. Both are valid patterns, but it's unclear when to use which.

**Suggestion**: Add a JSDoc note on the ref type clarifying that it's primarily for uncontrolled usage or for triggering actions from outside the React tree.

---

## 3. Missing Features / Hardening

### 3.1 No touch/swipe support

Arrow keys and `Previous`/`Next` buttons handle navigation, but there is no touch gesture support. Swiping left/right to navigate is one of the most expected interactions on mobile lightboxes.

**Suggestion**: Add pointer-event-based swipe detection in `Content` or `ItemGroup`, behind an opt-in prop. Alternatively, provide a `Lightbox.Swipeable` wrapper that consumers can compose in.

---

### 3.2 No pinch-to-zoom

Zooming into images is a common lightbox feature. Not required for v1, but worth considering for v2.

---

### 3.3 No lifecycle callbacks

There is no way for consumers to know when the open or close animation has completed. Use cases:

- Auto-play a video after the open animation finishes
- Track analytics on close
- Chain sequential animations

**Suggestion**: Add `onOpenComplete` and `onCloseComplete` callbacks to `LightboxRootProps`. Hook them into the existing `transition.finished.then()` (VT) and `Promise.allSettled(...).then()` (non-VT) paths.

---

### 3.4 No drag-to-dismiss

Many mobile lightboxes support dragging the image down to dismiss. Not required for v1 but commonly expected on mobile.

---

### 3.5 `scrollTriggerIntoView.behavior` ignored in VT close path

The consumer can set `behavior: 'smooth'` on `scrollTriggerIntoView`, but the VT close path hardcodes `'instant'`:

**File**: `lightbox-root.tsx:251-253`

```tsx
if (scrollTriggerIntoView) {
  scrollTriggerEl(triggerEl, 'instant');
}
```

The non-VT close path also hardcodes `'instant'` (line 280). While `'instant'` makes sense during a VT (the scroll must complete before the snapshot), the non-VT path could respect the consumer's choice.

**Suggested fix**: Use the consumer's `behavior` in the non-VT path:

```tsx
scrollTriggerEl(triggerEl, scrollTriggerIntoView.behavior ?? 'smooth');
```

Keep `'instant'` in the VT path since scroll must complete synchronously before the snapshot.

---

## 4. API Polish

### 4.1 Naming: `value` / `onValueChange`

The active index API uses `value` / `defaultValue` / `onValueChange`. This is generic and composable-friendly (matches patterns in Radix, Base UI), but not immediately obvious that `value` refers to the active item index.

An alternative: `activeIndex` / `defaultActiveIndex` / `onActiveIndexChange`.

**Trade-off**: `value` is more idiomatic for compound component libraries; `activeIndex` is more self-documenting. No change recommended for consistency with the existing ScrollGallery API, but worth noting.

---

### 4.2 Counter state attributes map to `null`

The `stateAttributesMapping` in `LightboxCounter` maps both `current` and `total` to `() => null`. These entries exist only to satisfy the type system — no data attributes are rendered.

**File**: `lightbox-counter.tsx:21-24`

```tsx
const counterStateAttributesMapping = {
  current: () => null,
  total: () => null,
};
```

**Suggestion**: Either render useful attributes (`data-current`, `data-total`) for CSS-driven styling, or add a brief comment explaining why the mapping returns null.

---

### 4.3 `Content` hardcodes dark theme

`LightboxContent` wraps children in `<Theme appearance="dark">`. There's no way to override this without wrapping content in another `<Theme>` (which adds an extra DOM node).

**File**: `lightbox-content.tsx:118`

```tsx
<Theme appearance="dark" style={{ display: 'contents' }}>
```

**Suggestion**: Accept an `appearance` prop on `Content` (defaulting to `"dark"`) so consumers can opt into a light theme:

```tsx
<Lightbox.Content appearance="light">
```

---

## 5. Priority Matrix

| # | Issue | Priority | Effort | Category |
|---|---|---|---|---|
| 1.1 | `setItemCount` never shrinks | **High** | Medium | Bug |
| 1.2 | VT callbacks not generation-guarded | **High** | Low | Bug |
| 1.3 | Preload ignores loop | **High** | Low | Bug |
| 1.4 | No default `aria-label` | Medium | Trivial | A11y |
| 1.5 | VT rejection not handled | **High** | Low | Bug |
| 2.1 | Caption registry re-renders | Medium | Medium | Perf |
| 2.2 | Dual context for activeIndex | Low | — | Docs |
| 2.3 | Imperative ref overlap | Low | Trivial | Docs |
| 3.1 | No touch/swipe | Medium | High | Feature |
| 3.2 | No pinch-to-zoom | Low | High | Feature |
| 3.3 | No lifecycle callbacks | Medium | Low | Feature |
| 3.4 | No drag-to-dismiss | Low | High | Feature |
| 3.5 | `scrollTriggerIntoView.behavior` ignored | Medium | Trivial | Bug |
| 4.1 | `value` naming | Low | — | API |
| 4.2 | Counter null attributes | Low | Trivial | Cleanup |
| 4.3 | Hardcoded dark theme | Medium | Low | API |

### Recommended action order

1. Fix bugs 1.1, 1.2, 1.3, 1.5 (high-priority correctness)
2. Fix bug 3.5 and add default `aria-label` 1.4 (quick wins)
3. Add lifecycle callbacks 3.3 and configurable theme 4.3 (medium-effort API improvements)
4. Optimize caption registry 2.1 (perf improvement)
5. Plan touch/swipe 3.1 for next iteration
