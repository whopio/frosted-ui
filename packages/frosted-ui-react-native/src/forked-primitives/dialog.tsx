/**
 * Forked from @rn-primitives/dialog
 *
 * Changes from original:
 * - Export DialogContext so it can be re-provided after FullWindowOverlay breaks context
 * - Fix Portal to not pass hostName when undefined (bypasses default)
 * - Use local hooks implementation to avoid bundler issues
 * - Convert to TypeScript
 */

import { Portal as RNPortal } from '@rn-primitives/portal';
import * as Slot from '@rn-primitives/slot';
import React, { useEffect, useId } from 'react';
import {
    BackHandler,
    Pressable,
    Text as RNText,
    View,
    type GestureResponderEvent,
    type PressableProps,
    type TextProps,
    type ViewProps,
} from 'react-native';
import { useControllableState } from './hooks';

// ============================================================================
// Types
// ============================================================================

type ViewRef = React.ElementRef<typeof View>;
type PressableRef = React.ElementRef<typeof Pressable>;
type TextRef = React.ElementRef<typeof RNText>;

interface RootContext {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  nativeID: string;
}

interface RootProps extends ViewProps {
  asChild?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
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

interface ContentProps extends ViewProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

interface TriggerProps extends PressableProps {
  asChild?: boolean;
}

interface CloseProps extends PressableProps {
  asChild?: boolean;
}

interface TitleProps extends TextProps {
  asChild?: boolean;
}

interface DescriptionProps extends TextProps {
  asChild?: boolean;
}

// ============================================================================
// Context - EXPORTED so it can be re-provided after FullWindowOverlay
// ============================================================================

const DialogContext = React.createContext<RootContext | null>(null);

function useRootContext(): RootContext {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error('Dialog compound components cannot be rendered outside the Dialog component');
  }
  return context;
}

// ============================================================================
// Components
// ============================================================================

const Root = React.forwardRef<ViewRef, RootProps>(
  ({ asChild, open: openProp, defaultOpen, onOpenChange: onOpenChangeProp, ...viewProps }, ref) => {
    const nativeID = useId();
    const [open = false, onOpenChange] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChangeProp,
    });

    const Component = asChild ? Slot.View : View;

    return (
      <DialogContext.Provider value={{ open, onOpenChange, nativeID }}>
        <Component ref={ref} {...viewProps} />
      </DialogContext.Provider>
    );
  }
);
Root.displayName = 'RootNativeDialog';

const Trigger = React.forwardRef<PressableRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { open, onOpenChange } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
      const newValue = !open;
      onOpenChange(newValue);
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
Trigger.displayName = 'TriggerNativeDialog';

/**
 * Portal component that wraps content for rendering in a portal.
 * FIX: Only passes hostName when explicitly provided (not undefined)
 */
function Portal({ forceMount, hostName, children }: PortalProps) {
  const value = useRootContext();

  if (!forceMount) {
    if (!value.open) {
      return null;
    }
  }

  // FIX: Only pass hostName if explicitly provided
  const portalProps = hostName ? { hostName } : {};

  return (
    <RNPortal {...portalProps} name={`${value.nativeID}_portal`}>
      <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
    </RNPortal>
  );
}

const Overlay = React.forwardRef<PressableRef, OverlayProps>(
  ({ asChild, forceMount, closeOnPress = true, onPress: onPressProp, ...props }, ref) => {
    const { open, onOpenChange } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (closeOnPress) {
        onOpenChange(!open);
      }
      onPressProp?.(ev);
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
Overlay.displayName = 'OverlayNativeDialog';

const Content = React.forwardRef<ViewRef, ContentProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { open, nativeID, onOpenChange } = useRootContext();

    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        onOpenChange(false);
        return true;
      });
      return () => {
        backHandler.remove();
      };
    }, [onOpenChange]);

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
        aria-labelledby={`${nativeID}_label`}
        aria-describedby={`${nativeID}_desc`}
        aria-modal={true}
        onStartShouldSetResponder={onStartShouldSetResponder}
        {...props}
      />
    );
  }
);
Content.displayName = 'ContentNativeDialog';

const Close = React.forwardRef<PressableRef, CloseProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { onOpenChange } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      if (disabled) return;
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
Close.displayName = 'CloseNativeDialog';

const Title = React.forwardRef<TextRef, TitleProps>(({ asChild, ...props }, ref) => {
  const { nativeID } = useRootContext();
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} role="heading" nativeID={`${nativeID}_label`} {...props} />;
});
Title.displayName = 'TitleNativeDialog';

const Description = React.forwardRef<TextRef, DescriptionProps>(({ asChild, ...props }, ref) => {
  const { nativeID } = useRootContext();
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} nativeID={`${nativeID}_desc`} {...props} />;
});
Description.displayName = 'DescriptionNativeDialog';

function onStartShouldSetResponder() {
  return true;
}

// ============================================================================
// Exports
// ============================================================================

export {
    Close,
    Content,
    Description,
    DialogContext, // ADDED: Export context for re-providing after FullWindowOverlay
    Overlay,
    Portal,
    Root,
    Title,
    Trigger,
    useRootContext
};

    export type {
        CloseProps, PressableRef as CloseRef, ContentProps, ViewRef as ContentRef, DescriptionProps, TextRef as DescriptionRef, OverlayProps, PressableRef as OverlayRef, PortalProps,
        RootContext,
        RootProps, ViewRef as RootRef, TitleProps, TextRef as TitleRef, TriggerProps, PressableRef as TriggerRef
    };

