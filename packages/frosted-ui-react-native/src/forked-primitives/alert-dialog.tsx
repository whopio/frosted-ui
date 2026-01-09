/**
 * Forked from @rn-primitives/alert-dialog
 *
 * Changes from original:
 * - Export AlertDialogContext so it can be re-provided after FullWindowOverlay breaks context
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

interface OverlayProps extends ViewProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

interface ContentProps extends ViewProps {
  asChild?: boolean;
  forceMount?: true | undefined;
}

interface TriggerProps extends PressableProps {
  asChild?: boolean;
}

interface CancelProps extends PressableProps {
  asChild?: boolean;
}

interface ActionProps extends PressableProps {
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

const AlertDialogContext = React.createContext<RootContext | null>(null);

function useRootContext(): RootContext {
  const context = React.useContext(AlertDialogContext);
  if (!context) {
    throw new Error(
      'AlertDialog compound components cannot be rendered outside the AlertDialog component'
    );
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
      <AlertDialogContext.Provider value={{ open, onOpenChange, nativeID }}>
        <Component ref={ref} {...viewProps} />
      </AlertDialogContext.Provider>
    );
  }
);
Root.displayName = 'RootNativeAlertDialog';

const Trigger = React.forwardRef<PressableRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { open: value, onOpenChange } = useRootContext();

    function onPress(ev: GestureResponderEvent) {
      onOpenChange(!value);
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
Trigger.displayName = 'TriggerNativeAlertDialog';

function Portal({ forceMount, hostName, children }: PortalProps) {
  const value = useRootContext();

  if (!forceMount) {
    if (!value.open) {
      return null;
    }
  }

  const portalProps = hostName ? { hostName } : {};

  return (
    <RNPortal {...portalProps} name={`${value.nativeID}_portal`}>
      <AlertDialogContext.Provider value={value}>{children}</AlertDialogContext.Provider>
    </RNPortal>
  );
}

const Overlay = React.forwardRef<ViewRef, OverlayProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { open: value } = useRootContext();

    if (!forceMount) {
      if (!value) {
        return null;
      }
    }

    const Component = asChild ? Slot.View : View;

    return <Component ref={ref} {...props} />;
  }
);
Overlay.displayName = 'OverlayNativeAlertDialog';

const Content = React.forwardRef<ViewRef, ContentProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { open: value, nativeID, onOpenChange } = useRootContext();

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
      if (!value) {
        return null;
      }
    }

    const Component = asChild ? Slot.View : View;

    return (
      <Component
        ref={ref}
        role="alertdialog"
        nativeID={nativeID}
        aria-labelledby={`${nativeID}_label`}
        aria-describedby={`${nativeID}_desc`}
        aria-modal={true}
        {...props}
      />
    );
  }
);
Content.displayName = 'ContentNativeAlertDialog';

const Cancel = React.forwardRef<PressableRef, CancelProps>(
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
Cancel.displayName = 'CancelNativeAlertDialog';

const Action = React.forwardRef<PressableRef, ActionProps>(
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
Action.displayName = 'ActionNativeAlertDialog';

const Title = React.forwardRef<TextRef, TitleProps>(({ asChild, ...props }, ref) => {
  const { nativeID } = useRootContext();
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} role="heading" nativeID={`${nativeID}_label`} {...props} />;
});
Title.displayName = 'TitleNativeAlertDialog';

const Description = React.forwardRef<TextRef, DescriptionProps>(({ asChild, ...props }, ref) => {
  const { nativeID } = useRootContext();
  const Component = asChild ? Slot.Text : RNText;
  return <Component ref={ref} nativeID={`${nativeID}_desc`} {...props} />;
});
Description.displayName = 'DescriptionNativeAlertDialog';

// ============================================================================
// Exports
// ============================================================================

export {
  Action,
  AlertDialogContext,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
  useRootContext,
};

export type {
  ActionProps,
  CancelProps,
  ContentProps,
  DescriptionProps,
  OverlayProps,
  PortalProps,
  RootContext,
  RootProps,
  TitleProps,
  TriggerProps,
  PressableRef as ActionRef,
  PressableRef as CancelRef,
  ViewRef as ContentRef,
  TextRef as DescriptionRef,
  ViewRef as OverlayRef,
  ViewRef as RootRef,
  TextRef as TitleRef,
  PressableRef as TriggerRef,
};
