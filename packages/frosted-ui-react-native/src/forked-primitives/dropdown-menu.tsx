/**
 * Forked from @rn-primitives/dropdown-menu
 *
 * Changes from original:
 * - Export DropdownMenuContext so it can be re-provided after FullWindowOverlay breaks context
 * - Fix Portal to not pass hostName when undefined (bypasses default)
 * - Use local hooks implementation to avoid bundler issues
 * - Convert to TypeScript
 */

import { Portal as RNPortal } from '@rn-primitives/portal';
import * as Slot from '@rn-primitives/slot';
import type { Insets, PositionedContentProps } from '@rn-primitives/types';
import * as React from 'react';
import {
    BackHandler,
    Pressable,
    Text as RNText,
    View,
    type GestureResponderEvent,
    type LayoutChangeEvent,
    type LayoutRectangle,
    type PressableProps,
    type TextProps,
    type ViewProps,
    type ViewStyle,
} from 'react-native';
import { useAugmentedRef, useControllableState, useRelativePosition } from './hooks';

// ============================================================================
// Types
// ============================================================================

type ViewRef = React.ElementRef<typeof View>;
type PressableRef = React.ElementRef<typeof Pressable>;
type TextRef = React.ElementRef<typeof RNText>;

interface TriggerPosition {
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

interface RootContext {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  triggerPosition: TriggerPosition | null;
  setTriggerPosition: React.Dispatch<React.SetStateAction<TriggerPosition | null>>;
  contentLayout: LayoutRectangle | null;
  setContentLayout: React.Dispatch<React.SetStateAction<LayoutRectangle | null>>;
  nativeID: string;
}

interface RootProps extends ViewProps {
  asChild?: boolean;
  onOpenChange?: (value: boolean) => void;
}

interface PortalProps {
  children: React.ReactNode;
  forceMount?: true | undefined;
  hostName?: string;
}

interface OverlayProps extends PressableProps {
  asChild?: boolean;
  forceMount?: true | undefined;
  closeOnPress?: boolean;
}

interface ContentProps
  extends Omit<PositionedContentProps, 'style' | 'loop' | 'onCloseAutoFocus' | 'onEscapeKeyDown' | 'onPointerDownOutside' | 'onFocusOutside' | 'onInteractOutside' | 'collisionBoundary' | 'sticky' | 'hideWhenDetached'>,
    Omit<PressableProps, 'style'> {
  asChild?: boolean;
  style?: ViewStyle;
}

interface TriggerProps extends PressableProps {
  asChild?: boolean;
}

interface ItemProps extends PressableProps {
  asChild?: boolean;
  textValue?: string;
  closeOnPress?: boolean;
}

interface GroupProps extends ViewProps {
  asChild?: boolean;
}

interface LabelProps extends TextProps {
  asChild?: boolean;
}

interface CheckboxItemProps extends PressableProps {
  asChild?: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  textValue?: string;
  closeOnPress?: boolean;
}

interface RadioGroupProps extends ViewProps {
  asChild?: boolean;
  value: string;
  onValueChange: (value: string) => void;
}

interface RadioItemProps extends PressableProps {
  asChild?: boolean;
  value: string;
  textValue?: string;
  closeOnPress?: boolean;
}

interface ItemIndicatorProps extends ViewProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

interface SeparatorProps extends ViewProps {
  asChild?: boolean;
  decorative?: boolean;
}

interface SubProps extends ViewProps {
  asChild?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
}

interface SubTriggerProps extends PressableProps {
  asChild?: boolean;
  textValue?: string;
}

interface SubContentProps extends PressableProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

// ============================================================================
// Context - EXPORTED so it can be re-provided after FullWindowOverlay
// ============================================================================

const DropdownMenuContext = React.createContext<RootContext | null>(null);

function useRootContext(): RootContext {
  const context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error(
      'DropdownMenu compound components cannot be rendered outside the DropdownMenu component'
    );
  }
  return context;
}

// ============================================================================
// Components
// ============================================================================

const Root = React.forwardRef<ViewRef, RootProps>(
  ({ asChild, onOpenChange: onOpenChangeProp, ...viewProps }, ref) => {
    const nativeID = React.useId();
    const [triggerPosition, setTriggerPosition] = React.useState<TriggerPosition | null>(null);
    const [contentLayout, setContentLayout] = React.useState<LayoutRectangle | null>(null);
    const [open, setOpen] = React.useState(false);

    // Memoize to prevent infinite re-render loops in Content's useEffect
    const onOpenChange = React.useCallback(
      (value: boolean) => {
        setOpen(value);
        onOpenChangeProp?.(value);
      },
      [onOpenChangeProp]
    );

    const Component = asChild ? Slot.View : View;

    return (
      <DropdownMenuContext.Provider
        value={{
          open,
          onOpenChange,
          contentLayout,
          setContentLayout,
          nativeID,
          setTriggerPosition,
          triggerPosition,
        }}>
        <Component ref={ref} {...viewProps} />
      </DropdownMenuContext.Provider>
    );
  }
);
Root.displayName = 'RootNativeDropdownMenu';

const Trigger = React.forwardRef<PressableRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { open, onOpenChange, setTriggerPosition } = useRootContext();

    const augmentedRef = useAugmentedRef({
      ref,
      methods: {
        open: () => {
          onOpenChange(true);
          (augmentedRef.current as any)?.measure?.(
            (_x: number, _y: number, width: number, height: number, pageX: number, pageY: number) => {
              setTriggerPosition({ width, pageX, pageY, height });
            }
          );
        },
        close: () => {
          setTriggerPosition(null);
          onOpenChange(false);
        },
      },
    });

    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
      (augmentedRef.current as any)?.measure?.(
        (_x: number, _y: number, width: number, height: number, pageX: number, pageY: number) => {
          setTriggerPosition({ width, pageX, pageY, height });
        }
      );
      const newValue = !open;
      onOpenChange(newValue);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={augmentedRef}
        aria-disabled={disabled ?? undefined}
        role="button"
        onPress={onPress}
        disabled={disabled ?? undefined}
        aria-expanded={open}
        {...props}
      />
    );
  }
);
Trigger.displayName = 'TriggerNativeDropdownMenu';

/**
 * Portal component that wraps content for rendering in a portal.
 * FIX: Only passes hostName when explicitly provided (not undefined)
 */
function Portal({ forceMount, hostName, children }: PortalProps) {
  const value = useRootContext();

  if (!value.triggerPosition) {
    return null;
  }

  if (!forceMount) {
    if (!value.open) {
      return null;
    }
  }

  // FIX: Only pass hostName if explicitly provided
  const portalProps = hostName ? { hostName } : {};

  return (
    <RNPortal {...portalProps} name={`${value.nativeID}_portal`}>
      <DropdownMenuContext.Provider value={value}>{children}</DropdownMenuContext.Provider>
    </RNPortal>
  );
}

const Overlay = React.forwardRef<PressableRef, OverlayProps>(
  ({ asChild, forceMount, onPress: OnPressProp, closeOnPress = true, ...props }, ref) => {
    const { open, onOpenChange, setContentLayout, setTriggerPosition } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (closeOnPress) {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
      }
      OnPressProp?.(ev);
    }

    if (!forceMount) {
      if (!open) {
        return null;
      }
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return <Component ref={ref} onPress={onPress} {...props} />;
  }
);
Overlay.displayName = 'OverlayNativeDropdownMenu';

const Content = React.forwardRef<PressableRef, ContentProps>(
  (
    {
      asChild = false,
      forceMount,
      align = 'start',
      side = 'bottom',
      sideOffset = 0,
      alignOffset = 0,
      avoidCollisions = true,
      onLayout: onLayoutProp,
      insets,
      style,
      disablePositioningStyle,
      ...props
    },
    ref
  ) => {
    const {
      open,
      onOpenChange,
      nativeID,
      triggerPosition,
      setTriggerPosition,
      contentLayout,
      setContentLayout,
    } = useRootContext();

    React.useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
        return true;
      });
      return () => {
        setContentLayout(null);
        backHandler.remove();
      };
    }, [onOpenChange, setContentLayout, setTriggerPosition]);

    const positionStyle = useRelativePosition({
      align,
      avoidCollisions,
      triggerPosition,
      contentLayout,
      alignOffset,
      insets: insets as Insets,
      sideOffset,
      side,
      disablePositioningStyle,
    });

    function onLayout(event: LayoutChangeEvent) {
      setContentLayout(event.nativeEvent.layout);
      onLayoutProp?.(event);
    }

    if (!forceMount) {
      if (!open) {
        return null;
      }
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={ref}
        role="menu"
        nativeID={nativeID}
        aria-modal={true}
        style={[positionStyle as ViewStyle, style]}
        onLayout={onLayout}
        {...props}
      />
    );
  }
);
Content.displayName = 'ContentNativeDropdownMenu';

const Item = React.forwardRef<PressableRef, ItemProps>(
  ({ asChild, textValue, onPress: onPressProp, disabled = false, closeOnPress = true, ...props }, ref) => {
    const { onOpenChange, setTriggerPosition, setContentLayout } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (closeOnPress) {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
      }
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={ref}
        role="menuitem"
        onPress={onPress}
        disabled={disabled}
        aria-valuetext={textValue}
        aria-disabled={!!disabled}
        accessibilityState={{ disabled: !!disabled }}
        {...props}
      />
    );
  }
);
Item.displayName = 'ItemNativeDropdownMenu';

const Group = React.forwardRef<ViewRef, GroupProps>(({ asChild, ...props }, ref) => {
  const Component = asChild ? Slot.View : View;
  return <Component ref={ref} role="group" {...props} />;
});
Group.displayName = 'GroupNativeDropdownMenu';

const Label = React.forwardRef<TextRef, LabelProps>(({ asChild, ...props }, ref) => {
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} {...props} />;
});
Label.displayName = 'LabelNativeDropdownMenu';

// Form item context for checkbox/radio
interface FormItemContextValue {
  checked?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const CheckboxItem = React.forwardRef<PressableRef, CheckboxItemProps>(
  (
    {
      asChild,
      checked,
      onCheckedChange,
      textValue,
      onPress: onPressProp,
      closeOnPress = true,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const { onOpenChange, setContentLayout, setTriggerPosition } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      onCheckedChange(!checked);
      if (closeOnPress) {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
      }
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <FormItemContext.Provider value={{ checked }}>
        <Component
          ref={ref}
          role="checkbox"
          aria-checked={checked}
          onPress={onPress}
          disabled={disabled}
          aria-disabled={!!disabled}
          aria-valuetext={textValue}
          accessibilityState={{ disabled: !!disabled }}
          {...props}
        />
      </FormItemContext.Provider>
    );
  }
);
CheckboxItem.displayName = 'CheckboxItemNativeDropdownMenu';

function useFormItemContext() {
  const context = React.useContext(FormItemContext);
  if (!context) {
    throw new Error(
      'CheckboxItem or RadioItem compound components cannot be rendered outside of a CheckboxItem or RadioItem component'
    );
  }
  return context;
}

const RadioGroup = React.forwardRef<ViewRef, RadioGroupProps>(
  ({ asChild, value, onValueChange, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return (
      <FormItemContext.Provider value={{ value, onValueChange }}>
        <Component ref={ref} role="radiogroup" {...props} />
      </FormItemContext.Provider>
    );
  }
);
RadioGroup.displayName = 'RadioGroupNativeDropdownMenu';

interface RadioItemContextValue {
  itemValue?: string;
}

const RadioItemContext = React.createContext<RadioItemContextValue>({});

const RadioItem = React.forwardRef<PressableRef, RadioItemProps>(
  (
    {
      asChild,
      value: itemValue,
      textValue,
      onPress: onPressProp,
      disabled = false,
      closeOnPress = true,
      ...props
    },
    ref
  ) => {
    const { onOpenChange, setContentLayout, setTriggerPosition } = useRootContext();
    const { value, onValueChange } = useFormItemContext();

    function onPress(ev: GestureResponderEvent) {
      onValueChange?.(itemValue);
      if (closeOnPress) {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
      }
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <RadioItemContext.Provider value={{ itemValue }}>
        <Component
          ref={ref}
          onPress={onPress}
          role="radio"
          aria-checked={value === itemValue}
          disabled={disabled ?? false}
          accessibilityState={{
            disabled: disabled ?? false,
            checked: value === itemValue,
          }}
          aria-valuetext={textValue}
          {...props}
        />
      </RadioItemContext.Provider>
    );
  }
);
RadioItem.displayName = 'RadioItemNativeDropdownMenu';

function useItemIndicatorContext() {
  return React.useContext(RadioItemContext);
}

const ItemIndicator = React.forwardRef<ViewRef, ItemIndicatorProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { itemValue } = useItemIndicatorContext();
    const { checked, value } = useFormItemContext();

    if (!forceMount) {
      if (itemValue == null && !checked) {
        return null;
      }
      if (value !== itemValue) {
        return null;
      }
    }

    const Component = asChild ? Slot.View : View;
    return <Component ref={ref} role="presentation" {...props} />;
  }
);
ItemIndicator.displayName = 'ItemIndicatorNativeDropdownMenu';

const Separator = React.forwardRef<ViewRef, SeparatorProps>(
  ({ asChild, decorative, ...props }, ref) => {
    const Component = asChild ? Slot.View : View;
    return <Component role={decorative ? 'presentation' : 'separator'} ref={ref} {...props} />;
  }
);
Separator.displayName = 'SeparatorNativeDropdownMenu';

// Sub menu context
interface SubContext {
  nativeID: string;
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

const SubMenuContext = React.createContext<SubContext | null>(null);

const Sub = React.forwardRef<ViewRef, SubProps>(
  ({ asChild, defaultOpen, open: openProp, onOpenChange: onOpenChangeProp, ...props }, ref) => {
    const nativeID = React.useId();
    const [open = false, onOpenChange] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChangeProp,
    });

    const Component = asChild ? Slot.View : View;

    return (
      <SubMenuContext.Provider value={{ nativeID, open, onOpenChange }}>
        <Component ref={ref} {...props} />
      </SubMenuContext.Provider>
    );
  }
);
Sub.displayName = 'SubNativeDropdownMenu';

function useSubContext(): SubContext {
  const context = React.useContext(SubMenuContext);
  if (!context) {
    throw new Error('Sub compound components cannot be rendered outside of a Sub component');
  }
  return context;
}

const SubTrigger = React.forwardRef<PressableRef, SubTriggerProps>(
  ({ asChild, textValue, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { nativeID, open, onOpenChange } = useSubContext();

    function onPress(ev: GestureResponderEvent) {
      onOpenChange(!open);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={ref}
        aria-valuetext={textValue}
        role="menuitem"
        aria-expanded={open}
        accessibilityState={{ expanded: open, disabled: !!disabled }}
        nativeID={nativeID}
        onPress={onPress}
        disabled={disabled}
        aria-disabled={!!disabled}
        {...props}
      />
    );
  }
);
SubTrigger.displayName = 'SubTriggerNativeDropdownMenu';

const SubContent = React.forwardRef<PressableRef, SubContentProps>(
  ({ asChild = false, forceMount, ...props }, ref) => {
    const { open, nativeID } = useSubContext();

    if (!forceMount) {
      if (!open) {
        return null;
      }
    }

    const Component = asChild ? Slot.Pressable : Pressable;
    return <Component ref={ref} role="group" aria-labelledby={nativeID} {...props} />;
  }
);
SubContent.displayName = 'SubContentNativeDropdownMenu';

// ============================================================================
// Exports
// ============================================================================

export {
    CheckboxItem,
    Content,
    DropdownMenuContext, // ADDED: Export context for re-providing after FullWindowOverlay
    Group,
    Item,
    ItemIndicator,
    Label,
    Overlay,
    Portal,
    RadioGroup,
    RadioItem,
    Root,
    Separator,
    Sub,
    SubContent,
    SubTrigger,
    Trigger,
    useRootContext,
    useSubContext
};

    export type {
        CheckboxItemProps,
        ContentProps,
        GroupProps,
        ItemIndicatorProps,
        ItemProps,
        LabelProps,
        OverlayProps,
        PortalProps,
        RadioGroupProps,
        RadioItemProps,
        RootContext,
        RootProps,
        SeparatorProps,
        SubContentProps,
        SubProps,
        SubTriggerProps,
        TriggerProps
    };

