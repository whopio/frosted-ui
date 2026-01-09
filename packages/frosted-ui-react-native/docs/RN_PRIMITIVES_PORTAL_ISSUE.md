# @rn-primitives Portal Issue in Pure React Native

## TL;DR

`@rn-primitives` portal-based components (Dialog, DropdownMenu, Popover, etc.) don't work in **pure React Native** (non-Expo) due to two bugs:

1. **Portal hostName bug**: Passing `hostName={undefined}` breaks portal routing
2. **Context loss bug**: React context doesn't survive portal boundaries

**Symptoms**: Components open (state changes to `open=true`) but nothing appears on screen. No errors.

---

## Bug #1: Portal hostName Prop

### The Problem

When `hostName` is `undefined`, the primitives pass it explicitly:

```jsx
// Inside @rn-primitives/dialog, dropdown-menu, etc.
<Portal hostName={hostName}>  // hostName is undefined
```

This is **not equivalent** to:

```jsx
<Portal>  // Would use default "INTERNAL_PRIMITIVE_DEFAULT_HOST_NAME"
```

Passing `hostName={undefined}` explicitly sets the prop to `undefined`, bypassing the default parameter. The portal content gets stored under key `undefined` in the zustand store, but `<PortalHost>` looks for key `"INTERNAL_PRIMITIVE_DEFAULT_HOST_NAME"`.

### The Fix

Only pass `hostName` when it's defined:

```jsx
// Before (broken):
<DialogPrimitive.Portal hostName={portalHost}>

// After (fixed):
<DialogPrimitive.Portal {...(portalHost && { hostName: portalHost })}>
```

---

## Bug #2: Context Loss Through Portal

### The Problem

`@rn-primitives/portal` works by:
1. Storing children in a **Zustand store**
2. Rendering them at `<PortalHost />` (at app root)

The children are **unmounted** from their original location and **remounted** at PortalHost. They're no longer descendants of the primitive's Root component, so context is lost:

```
DialogPrimitive.Root (provides context)
  └── DialogPrimitive.Portal
        ↓ teleports to PortalHost (OUTSIDE Root)
        
<PortalHost />
  └── DialogPrimitive.Title 
        ❌ Crash: "Dialog compound components cannot be rendered outside the Dialog component"
```

### The Fix

Capture context **before** the portal, re-provide it inside:

```jsx
function DialogContent({ children }) {
  // Capture BEFORE portal boundary
  const primitiveContext = DialogPrimitive.useRootContext();
  
  return (
    <DialogPrimitive.Portal {...(portalHost && { hostName: portalHost })}>
      <OurContext.Provider value={{ 
        nativeID: primitiveContext.nativeID,
        onOpenChange: primitiveContext.onOpenChange 
      }}>
        {children}
      </OurContext.Provider>
    </DialogPrimitive.Portal>
  );
}

// Then in Title, use OurContext instead of DialogPrimitive.Title:
function DialogTitle({ children }) {
  const { nativeID } = useContext(OurContext);
  return <Heading nativeID={`${nativeID}_label`}>{children}</Heading>;
}
```

---

## Affected Components

All portal-based primitives:
- `@rn-primitives/dialog`
- `@rn-primitives/alert-dialog`
- `@rn-primitives/dropdown-menu`
- `@rn-primitives/popover`
- `@rn-primitives/select`
- `@rn-primitives/context-menu`
- `@rn-primitives/tooltip`
- `@rn-primitives/hover-card`

---

## Why It Works in Expo

Expo apps typically work because:
- Different initialization timing
- Expo's bundler may handle things differently
- The portal store state may initialize in a way that masks the bug

The bug specifically manifests in **pure React Native CLI projects**.

---

## Related Issues

- [react-native-reusables #405](https://github.com/founded-labs/react-native-reusables/issues/405) - Same symptoms reported

---

## Recommended Upstream Fix

The `@rn-primitives` packages should:

1. **Fix hostName handling** in Portal:
   ```jsx
   function Portal({ hostName, children }) {
     const resolvedHostName = hostName ?? DEFAULT_HOST;
     // Use resolvedHostName everywhere
   }
   ```

2. **Re-provide context inside Portal**:
   ```jsx
   function Portal({ children }) {
     const rootContext = useRootContext();
     return (
       <PortalPrimitive>
         <RootContext.Provider value={rootContext}>
           {children}
         </RootContext.Provider>
       </PortalPrimitive>
     );
   }
   ```

