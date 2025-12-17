import { Heading } from '@/components/heading';
import { Text } from '@/components/text';
import {
  getDialogBackdropStyle,
  getDialogContentStyle,
  getDialogDescriptionSize,
  getDialogOverlayStyle,
  getDialogSizeStyles,
  getDialogTitleSize,
  type DialogSize,
} from '@/lib/dialog-styles';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as AlertDialogPrimitive from '@rn-primitives/alert-dialog';
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
type AlertDialogRootProps = React.ComponentProps<typeof AlertDialogPrimitive.Root>;
const AlertDialogRoot = (props: AlertDialogRootProps) => <AlertDialogPrimitive.Root {...props} />;
AlertDialogRoot.displayName = 'AlertDialog.Root';

// Trigger
type AlertDialogTriggerProps = React.ComponentProps<typeof AlertDialogPrimitive.Trigger>;
const AlertDialogTrigger = (props: AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger {...props} asChild />
);
AlertDialogTrigger.displayName = 'AlertDialog.Trigger';

// Overlay
function AlertDialogOverlay({
  children,
  ...props
}: Omit<AlertDialogPrimitive.OverlayProps, 'asChild'> &
  React.RefAttributes<AlertDialogPrimitive.OverlayRef> & {
    children?: React.ReactNode;
  }) {
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

  return (
    <FullWindowOverlay>
      <AlertDialogPrimitive.Overlay {...props} asChild>
        <View style={overlayStyle}>
          {/* Animated backdrop */}
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(150)}
            style={nativeBackdropStyle}
            pointerEvents="none"
          />
          {/* Animated content */}
          <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(150)}>
            {children}
          </Animated.View>
        </View>
      </AlertDialogPrimitive.Overlay>
    </FullWindowOverlay>
  );
}
AlertDialogOverlay.displayName = 'AlertDialog.Overlay';

// Content
interface AlertDialogContentProps
  extends
    Omit<AlertDialogPrimitive.ContentProps, 'asChild'>,
    React.RefAttributes<AlertDialogPrimitive.ContentRef> {
  size?: DialogSize;
  portalHost?: string;
}

function AlertDialogContent({
  size = '3',
  portalHost,
  children,
  style,
  ...props
}: AlertDialogContentProps) {
  const { colors, isDark } = useThemeVars();
  const { width: windowWidth } = useWindowDimensions();

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
      <AlertDialogOverlay>
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

// Title
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

// Description
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

// Action
type AlertDialogActionProps = React.ComponentProps<typeof AlertDialogPrimitive.Action>;

function AlertDialogAction({ children, ...props }: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action {...props} asChild>
      {children}
    </AlertDialogPrimitive.Action>
  );
}
AlertDialogAction.displayName = 'AlertDialog.Action';

// Cancel
type AlertDialogCancelProps = React.ComponentProps<typeof AlertDialogPrimitive.Cancel>;

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
  AlertDialogTriggerProps as TriggerProps,
};
