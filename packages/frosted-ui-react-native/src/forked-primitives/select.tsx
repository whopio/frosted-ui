/**
 * Forked from @rn-primitives/select
 *
 * Changes from original:
 * - Export SelectContext so it can be re-provided after FullWindowOverlay breaks context
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

interface SelectValue {
  value: string;
  label: string;
}

interface RootContext {
  value: SelectValue | undefined;
  onValueChange: (value: SelectValue) => void;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  disabled?: boolean;
  triggerPosition: TriggerPosition | null;
  setTriggerPosition: React.Dispatch<React.SetStateAction<TriggerPosition | null>>;
  contentLayout: LayoutRectangle | null;
  setContentLayout: React.Dispatch<React.SetStateAction<LayoutRectangle | null>>;
  nativeID: string;
}

interface RootProps extends ViewProps {
  asChild?: boolean;
  value?: SelectValue;
  defaultValue?: SelectValue;
  onValueChange?: (value: SelectValue) => void;
  onOpenChange?: (value: boolean) => void;
  disabled?: boolean;
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
    ViewProps {
  asChild?: boolean;
  position?: 'popper' | 'item-aligned';
}

interface TriggerProps extends PressableProps {
  asChild?: boolean;
}

interface ValueProps extends TextProps {
  asChild?: boolean;
  placeholder?: string;
}

interface ItemProps extends PressableProps {
  asChild?: boolean;
  value: string;
  label: string;
  closeOnPress?: boolean;
}

interface ItemTextProps extends TextProps {
  asChild?: boolean;
}

interface ItemIndicatorProps extends ViewProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

interface GroupProps extends ViewProps {
  asChild?: boolean;
}

interface LabelProps extends TextProps {
  asChild?: boolean;
}

interface SeparatorProps extends ViewProps {
  asChild?: boolean;
  decorative?: boolean;
}

// ============================================================================
// Context - EXPORTED so it can be re-provided after FullWindowOverlay
// ============================================================================

const SelectContext = React.createContext<RootContext | null>(null);

function useRootContext(): RootContext {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('Select compound components cannot be rendered outside the Select component');
  }
  return context;
}

// Item context
interface ItemContextValue {
  itemValue: string;
  label: string;
}

const ItemContext = React.createContext<ItemContextValue | null>(null);

function useItemContext(): ItemContextValue {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error('Item compound components cannot be rendered outside of an Item component');
  }
  return context;
}

// ============================================================================
// Components
// ============================================================================

const Root = React.forwardRef<ViewRef, RootProps>(
  (
    {
      asChild,
      value: valueProp,
      defaultValue,
      onValueChange: onValueChangeProp,
      onOpenChange: onOpenChangeProp,
      disabled,
      ...viewProps
    },
    ref
  ) => {
    const nativeID = React.useId();
    const [value, onValueChange] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChangeProp,
    });
    const [triggerPosition, setTriggerPosition] = React.useState<TriggerPosition | null>(null);
    const [contentLayout, setContentLayout] = React.useState<LayoutRectangle | null>(null);
    const [open, setOpen] = React.useState(false);

    // Memoize to prevent infinite re-render loops in Content's useEffect
    const onOpenChange = React.useCallback(
      (val: boolean) => {
        setOpen(val);
        onOpenChangeProp?.(val);
      },
      [onOpenChangeProp]
    );

    const Component = asChild ? Slot.View : View;

    return (
      <SelectContext.Provider
        value={{
          value,
          onValueChange,
          open,
          onOpenChange,
          disabled,
          contentLayout,
          nativeID,
          setContentLayout,
          setTriggerPosition,
          triggerPosition,
        }}>
        <Component ref={ref} {...viewProps} />
      </SelectContext.Provider>
    );
  }
);
Root.displayName = 'RootNativeSelect';

const Trigger = React.forwardRef<PressableRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { open, onOpenChange, disabled: disabledRoot, setTriggerPosition } = useRootContext();

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
      onOpenChange(!open);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={augmentedRef}
        aria-disabled={disabled ?? undefined}
        role="combobox"
        onPress={onPress}
        disabled={disabled ?? disabledRoot}
        aria-expanded={open}
        {...props}
      />
    );
  }
);
Trigger.displayName = 'TriggerNativeSelect';

const Value = React.forwardRef<TextRef, ValueProps>(({ asChild, placeholder, ...props }, ref) => {
  const { value } = useRootContext();
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component ref={ref} {...props}>
      {value?.label ?? placeholder}
    </Component>
  );
});
Value.displayName = 'ValueNativeSelect';

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

  const portalProps = hostName ? { hostName } : {};

  return (
    <RNPortal {...portalProps} name={`${value.nativeID}_portal`}>
      <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
    </RNPortal>
  );
}

const Overlay = React.forwardRef<PressableRef, OverlayProps>(
  ({ asChild, forceMount, onPress: OnPressProp, closeOnPress = true, ...props }, ref) => {
    const { open, onOpenChange, setTriggerPosition, setContentLayout } = useRootContext();

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
Overlay.displayName = 'OverlayNativeSelect';

const Content = React.forwardRef<ViewRef, ContentProps>(
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
      position: _position,
      ...props
    },
    ref
  ) => {
    const {
      open,
      onOpenChange,
      contentLayout,
      nativeID,
      triggerPosition,
      setContentLayout,
      setTriggerPosition,
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

    const Component = asChild ? Slot.View : View;

    return (
      <Component
        ref={ref}
        role="list"
        nativeID={nativeID}
        aria-modal={true}
        style={[positionStyle as ViewStyle, style]}
        onLayout={onLayout}
        onStartShouldSetResponder={onStartShouldSetResponder}
        {...props}
      />
    );
  }
);
Content.displayName = 'ContentNativeSelect';

const Item = React.forwardRef<PressableRef, ItemProps>(
  (
    { asChild, value: itemValue, label, onPress: onPressProp, disabled = false, closeOnPress = true, ...props },
    ref
  ) => {
    const { onOpenChange, value, onValueChange, setTriggerPosition, setContentLayout } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (closeOnPress) {
        setTriggerPosition(null);
        setContentLayout(null);
        onOpenChange(false);
      }
      onValueChange({ value: itemValue, label });
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <ItemContext.Provider value={{ itemValue, label }}>
        <Component
          ref={ref}
          role="option"
          onPress={onPress}
          disabled={disabled}
          aria-checked={value?.value === itemValue}
          aria-valuetext={label}
          aria-disabled={!!disabled}
          accessibilityState={{
            disabled: !!disabled,
            checked: value?.value === itemValue,
          }}
          {...props}
        />
      </ItemContext.Provider>
    );
  }
);
Item.displayName = 'ItemNativeSelect';

const ItemText = React.forwardRef<TextRef, ItemTextProps>(({ asChild, ...props }, ref) => {
  const { label } = useItemContext();
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component ref={ref} {...props}>
      {label}
    </Component>
  );
});
ItemText.displayName = 'ItemTextNativeSelect';

const ItemIndicator = React.forwardRef<ViewRef, ItemIndicatorProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { itemValue } = useItemContext();
    const { value } = useRootContext();

    if (!forceMount) {
      if (value?.value !== itemValue) {
        return null;
      }
    }

    const Component = asChild ? Slot.View : View;
    return <Component ref={ref} role="presentation" {...props} />;
  }
);
ItemIndicator.displayName = 'ItemIndicatorNativeSelect';

const Group = React.forwardRef<ViewRef, GroupProps>(({ asChild, ...props }, ref) => {
  const Component = asChild ? Slot.View : View;
  return <Component ref={ref} role="group" {...props} />;
});
Group.displayName = 'GroupNativeSelect';

const Label = React.forwardRef<TextRef, LabelProps>(({ asChild, ...props }, ref) => {
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} {...props} />;
});
Label.displayName = 'LabelNativeSelect';

const Separator = React.forwardRef<ViewRef, SeparatorProps>(({ asChild, decorative, ...props }, ref) => {
  const Component = asChild ? Slot.View : View;
  return <Component role={decorative ? 'presentation' : 'separator'} ref={ref} {...props} />;
});
Separator.displayName = 'SeparatorNativeSelect';

const ScrollUpButton = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const ScrollDownButton = ({ children }: { children: React.ReactNode }) => <>{children}</>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Viewport = ({ children }: any) => <>{children}</>;

function onStartShouldSetResponder() {
  return true;
}

// ============================================================================
// Exports
// ============================================================================

export {
  Content,
  Group,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Overlay,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  SelectContext, // ADDED: Export context for re-providing after FullWindowOverlay
  Separator,
  Trigger,
  useItemContext,
  useRootContext,
  Value,
  Viewport,
};

export type {
  ContentProps,
  GroupProps,
  ItemIndicatorProps,
  ItemProps,
  ItemTextProps,
  LabelProps,
  OverlayProps,
  PortalProps,
  RootContext,
  RootProps,
  SeparatorProps,
  TriggerProps,
  ValueProps,
};

