import { Heading } from '@/components/heading';
import { Text } from '@/components/text';
import { AlertDialogPrimitive } from '@/forked-primitives';
import {
  getDialogBackdropStyle,
  getDialogContentStyle,
  getDialogDescriptionSize,
  getDialogOverlayStyle,
  getDialogSizeStyles,
  getDialogTitleSize,
  type DialogSize,
} from '@/lib/dialog-styles';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Context
// ============================================================================

interface AlertDialogContentContextValue {
  size: DialogSize;
}

const AlertDialogContentContext = React.createContext<AlertDialogContentContextValue>({
  size: '3',
});

// ============================================================================
// Components
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

// Root
type AlertDialogRootProps = AlertDialogPrimitive.RootProps;
const AlertDialogRoot = (props: AlertDialogRootProps) => <AlertDialogPrimitive.Root {...props} />;
AlertDialogRoot.displayName = 'AlertDialog.Root';

// Trigger
type AlertDialogTriggerProps = AlertDialogPrimitive.TriggerProps;
const AlertDialogTrigger = (props: AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger {...props} asChild />
);
AlertDialogTrigger.displayName = 'AlertDialog.Trigger';

// Overlay - receives primitiveContext to re-provide after FullWindowOverlay
interface AlertDialogOverlayProps extends Omit<AlertDialogPrimitive.OverlayProps, 'asChild'> {
  children?: React.ReactNode;
  primitiveContext: AlertDialogPrimitive.RootContext | null;
}

function AlertDialogOverlay({ children, primitiveContext, ...props }: AlertDialogOverlayProps) {
  const overlayStyle = getDialogOverlayStyle();
  const backdropStyle = getDialogBackdropStyle();

  if (Platform.OS === 'web') {
    return (
      <FullWindowOverlay>
        <AlertDialogPrimitive.Overlay style={overlayStyle} {...props}>
          <View style={backdropStyle} pointerEvents="none" />
          {children}
        </AlertDialogPrimitive.Overlay>
      </FullWindowOverlay>
    );
  }

  // Native: AlertDialog should NOT dismiss on backdrop tap, so we use View (not Pressable)
  const nativeBackdropStyle = getDialogBackdropStyle();

  const overlayContent = (
    <AlertDialogPrimitive.Overlay {...props} asChild>
      <View style={overlayStyle}>
        {/* Animated backdrop */}
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(150)}
          style={nativeBackdropStyle as ViewStyle}
          pointerEvents="none"
        />
        {/* Animated content */}
        <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(150)}>
          {children}
        </Animated.View>
      </View>
    </AlertDialogPrimitive.Overlay>
  );

  // On native, re-provide context after FullWindowOverlay breaks it
  // (we're already in native branch after the web check above)
  if (primitiveContext && AlertDialogPrimitive.AlertDialogContext) {
    return (
      <FullWindowOverlay>
        <AlertDialogPrimitive.AlertDialogContext.Provider value={primitiveContext}>
          {overlayContent}
        </AlertDialogPrimitive.AlertDialogContext.Provider>
      </FullWindowOverlay>
    );
  }

  return <FullWindowOverlay>{overlayContent}</FullWindowOverlay>;
}
AlertDialogOverlay.displayName = 'AlertDialog.Overlay';

// Content
interface AlertDialogContentProps extends Omit<AlertDialogPrimitive.ContentProps, 'asChild'> {
  size?: DialogSize;
  portalHost?: string;
}

// Helper to safely get primitive context on native (not available on web)
function useAlertDialogRootContext() {
  if (Platform.OS === 'web' || !AlertDialogPrimitive.useRootContext) {
    return null;
  }

  return AlertDialogPrimitive.useRootContext();
}

function AlertDialogContent({
  size = '3',
  portalHost,
  children,
  style,
  ...props
}: AlertDialogContentProps) {
  const { colors, isDark } = useThemeTokens();
  const { width: windowWidth } = useWindowDimensions();

  // Capture primitive context BEFORE the portal/FullWindowOverlay (native only)
  const primitiveContext = useAlertDialogRootContext();

  const contentStyle = getDialogContentStyle(size, colors, isDark, windowWidth, style);

  const contextValue = React.useMemo(() => ({ size }), [size]);

  // On web, flatten styles to avoid "indexed property setter" error
  const finalStyle =
    Platform.OS === 'web'
      ? StyleSheet.flatten([
          contentStyle,
          { animation: 'fui-dialog-content-show 400ms cubic-bezier(0.16, 1, 0.3, 1)' } as ViewStyle,
          style,
        ])
      : [contentStyle, style];

  return (
    <AlertDialogPrimitive.Portal hostName={portalHost}>
      <AlertDialogOverlay primitiveContext={primitiveContext}>
        <AlertDialogPrimitive.Content style={finalStyle} {...props}>
          <AlertDialogContentContext.Provider value={contextValue}>
            {children}
          </AlertDialogContentContext.Provider>
        </AlertDialogPrimitive.Content>
      </AlertDialogOverlay>
    </AlertDialogPrimitive.Portal>
  );
}
AlertDialogContent.displayName = 'AlertDialog.Content';

// Header
function AlertDialogHeader({ style, ...props }: React.ComponentProps<typeof View>) {
  return <View style={[{ flexDirection: 'column', gap: 8 }, style]} {...props} />;
}
AlertDialogHeader.displayName = 'AlertDialog.Header';

// Footer
function AlertDialogFooter({ style, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View
      style={[
        {
          flexDirection: Platform.OS === 'web' ? ('row' as const) : ('column-reverse' as const),
          gap: 12,
          justifyContent: 'flex-end',
        },
        style,
      ]}
      {...props}
    />
  );
}
AlertDialogFooter.displayName = 'AlertDialog.Footer';

// Title - uses AlertDialogPrimitive.Title which now works because context is re-provided
type AlertDialogTitleProps = Omit<React.ComponentProps<typeof Heading>, 'as'>;

function AlertDialogTitle({ size: sizeProp, style, ...props }: AlertDialogTitleProps) {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  const size = sizeProp ?? getDialogTitleSize(contextSize);
  const sizeStyles = getDialogSizeStyles(contextSize);

  return (
    <View style={{ marginBottom: sizeStyles.titleMarginBottom }}>
      <AlertDialogPrimitive.Title asChild>
        <Heading size={size} style={style} {...props} />
      </AlertDialogPrimitive.Title>
    </View>
  );
}
AlertDialogTitle.displayName = 'AlertDialog.Title';

// Description - uses AlertDialogPrimitive.Description which now works because context is re-provided
type AlertDialogDescriptionProps = Omit<React.ComponentProps<typeof Text>, 'as'>;

function AlertDialogDescription({ size: sizeProp, style, ...props }: AlertDialogDescriptionProps) {
  const { size: contextSize } = React.useContext(AlertDialogContentContext);
  const size = sizeProp ?? getDialogDescriptionSize(contextSize);
  const sizeStyles = getDialogSizeStyles(contextSize);

  return (
    <View style={{ marginBottom: sizeStyles.descriptionMarginBottom }}>
      <AlertDialogPrimitive.Description asChild>
        <Text size={size} style={style} {...props} />
      </AlertDialogPrimitive.Description>
    </View>
  );
}
AlertDialogDescription.displayName = 'AlertDialog.Description';

// Action - uses AlertDialogPrimitive.Action which now works because context is re-provided
type AlertDialogActionProps = AlertDialogPrimitive.ActionProps;

function AlertDialogAction({ children, ...props }: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action {...props} asChild>
      {children}
    </AlertDialogPrimitive.Action>
  );
}
AlertDialogAction.displayName = 'AlertDialog.Action';

// Cancel - uses AlertDialogPrimitive.Cancel which now works because context is re-provided
type AlertDialogCancelProps = AlertDialogPrimitive.CancelProps;

function AlertDialogCancel({ children, ...props }: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel {...props} asChild>
      {children}
    </AlertDialogPrimitive.Cancel>
  );
}
AlertDialogCancel.displayName = 'AlertDialog.Cancel';

// Inject CSS keyframes for web animations (same as Dialog)
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const styleId = 'frosted-ui-dialog-keyframes';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = `
      @keyframes fui-dialog-content-show {
        from {
          opacity: 0;
          transform: translateY(5px) scale(0.97);
        }
        to {
          opacity: 1;
          transform: translateY(0px) scale(1);
        }
      }
      @keyframes fui-dialog-content-hide {
        from {
          opacity: 1;
          transform: translateY(0px) scale(1);
        }
        to {
          opacity: 0;
          transform: translateY(5px) scale(0.99);
        }
      }
    `;
    document.head.appendChild(styleEl);
  }
}

// ============================================================================
// Exports
// ============================================================================

const AlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});

export { AlertDialog };
export type {
  AlertDialogActionProps as ActionProps,
  AlertDialogCancelProps as CancelProps,
  AlertDialogContentProps as ContentProps,
  AlertDialogDescriptionProps as DescriptionProps,
  AlertDialogRootProps as RootProps,
  AlertDialogTitleProps as TitleProps,
  AlertDialogTriggerProps as TriggerProps
};

