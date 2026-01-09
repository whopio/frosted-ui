/**
 * Forked from @rn-primitives/popover
 *
 * Changes from original:
 * - Export PopoverContext so it can be re-provided after FullWindowOverlay breaks context
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
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
  type LayoutRectangle,
  type PressableProps,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { useAugmentedRef, useRelativePosition } from './hooks';

// ============================================================================
// Types
// ============================================================================

type ViewRef = React.ElementRef<typeof View>;
type PressableRef = React.ElementRef<typeof Pressable>;

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
    ViewProps {
  asChild?: boolean;
}

interface TriggerProps extends PressableProps {
  asChild?: boolean;
}

interface CloseProps extends PressableProps {
  asChild?: boolean;
}

// ============================================================================
// Context - EXPORTED so it can be re-provided after FullWindowOverlay
// ============================================================================

const PopoverContext = React.createContext<RootContext | null>(null);

function useRootContext(): RootContext {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover compound components cannot be rendered outside the Popover component');
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
      <PopoverContext.Provider
        value={{
          open,
          onOpenChange,
          contentLayout,
          nativeID,
          setContentLayout,
          setTriggerPosition,
          triggerPosition,
        }}>
        <Component ref={ref} {...viewProps} />
      </PopoverContext.Provider>
    );
  }
);
Root.displayName = 'RootNativePopover';

const Trigger = React.forwardRef<PressableRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { onOpenChange, open, setTriggerPosition } = useRootContext();

    const augmentedRef = useAugmentedRef({
      ref,
      methods: {
        open: () => {
          onOpenChange(true);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        role="button"
        onPress={onPress}
        disabled={disabled ?? undefined}
        {...props}
      />
    );
  }
);
Trigger.displayName = 'TriggerNativePopover';

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
      <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
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
Overlay.displayName = 'OverlayNativePopover';

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
      ...props
    },
    ref
  ) => {
    const {
      open,
      onOpenChange,
      contentLayout,
      nativeID,
      setContentLayout,
      setTriggerPosition,
      triggerPosition,
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
        role="dialog"
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
Content.displayName = 'ContentNativePopover';

const Close = React.forwardRef<PressableRef, CloseProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { onOpenChange, setContentLayout, setTriggerPosition } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
      setTriggerPosition(null);
      setContentLayout(null);
      onOpenChange(false);
      onPressProp?.(ev);
    }

    const Component = asChild ? Slot.Pressable : Pressable;

    return (
      <Component
        ref={ref}
        aria-disabled={disabled ?? undefined}
        role="button"
        onPress={onPress}
        disabled={disabled ?? undefined}
        {...props}
      />
    );
  }
);
Close.displayName = 'CloseNativePopover';

function onStartShouldSetResponder() {
  return true;
}

// ============================================================================
// Exports
// ============================================================================

export {
  Close,
  Content,
  Overlay,
  PopoverContext, // ADDED: Export context for re-providing after FullWindowOverlay
  Portal,
  Root,
  Trigger,
  useRootContext,
};

export type {
  CloseProps,
  ContentProps,
  OverlayProps,
  PortalProps,
  RootContext,
  RootProps,
  TriggerProps,
  PressableRef as CloseRef,
  ViewRef as ContentRef,
  PressableRef as OverlayRef,
  ViewRef as RootRef,
  PressableRef as TriggerRef,
};

