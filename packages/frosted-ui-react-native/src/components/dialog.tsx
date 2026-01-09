import { Heading } from '@/components/heading';
import { Text } from '@/components/text';
import { DialogPrimitive } from '@/forked-primitives';
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
import {
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
  type ViewStyle,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Context
// ============================================================================

interface DialogContentContextValue {
  size: DialogSize;
}

const DialogContentContext = React.createContext<DialogContentContextValue>({
  size: '3',
});

// ============================================================================
// Components
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

// Root
type DialogRootProps = DialogPrimitive.RootProps;
const DialogRoot = (props: DialogRootProps) => <DialogPrimitive.Root {...props} />;
DialogRoot.displayName = 'Dialog.Root';

// Trigger
type DialogTriggerProps = DialogPrimitive.TriggerProps;
const DialogTrigger = (props: DialogTriggerProps) => <DialogPrimitive.Trigger {...props} asChild />;
DialogTrigger.displayName = 'Dialog.Trigger';

// Close
type DialogCloseProps = DialogPrimitive.CloseProps;
const DialogClose = (props: DialogCloseProps) => <DialogPrimitive.Close {...props} asChild />;
DialogClose.displayName = 'Dialog.Close';

// Overlay - receives primitiveContext to re-provide after FullWindowOverlay
interface DialogOverlayProps extends Omit<DialogPrimitive.OverlayProps, 'asChild'> {
  children?: React.ReactNode;
  primitiveContext: DialogPrimitive.RootContext | null;
}

function DialogOverlay({ children, primitiveContext, ...props }: DialogOverlayProps) {
  const overlayStyle = getDialogOverlayStyle();
  const backdropStyle = getDialogBackdropStyle();

  if (Platform.OS === 'web') {
    return (
      <FullWindowOverlay>
        <DialogPrimitive.Overlay style={overlayStyle} {...props}>
          <View style={backdropStyle} pointerEvents="none" />
          {children}
        </DialogPrimitive.Overlay>
      </FullWindowOverlay>
    );
  }

  // Native: Use Pressable as direct child with asChild to handle onPress for dismissal
  // The Pressable receives onPress from the primitive to close the dialog when backdrop is tapped
  const nativeBackdropStyle = getDialogBackdropStyle();

  const overlayContent = (
    <DialogPrimitive.Overlay {...props} asChild>
      <Pressable style={overlayStyle}>
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
      </Pressable>
    </DialogPrimitive.Overlay>
  );

  // On native, re-provide context after FullWindowOverlay breaks it
  // (we're already in native branch after the web check above)
  if (primitiveContext && DialogPrimitive.DialogContext) {
    return (
      <FullWindowOverlay>
        <DialogPrimitive.DialogContext.Provider value={primitiveContext}>
          {overlayContent}
        </DialogPrimitive.DialogContext.Provider>
      </FullWindowOverlay>
    );
  }

  return <FullWindowOverlay>{overlayContent}</FullWindowOverlay>;
}
DialogOverlay.displayName = 'Dialog.Overlay';

// Content
interface DialogContentProps extends Omit<DialogPrimitive.ContentProps, 'asChild'> {
  size?: DialogSize;
  portalHost?: string;
}

// Helper to safely get primitive context on native (not available on web)
function useDialogRootContext() {
  if (Platform.OS === 'web' || !DialogPrimitive.useRootContext) {
    return null;
  }
  return DialogPrimitive.useRootContext();
}

function DialogContent({ size = '3', portalHost, children, style, ...props }: DialogContentProps) {
  const { colors, isDark } = useThemeTokens();
  const { width: windowWidth } = useWindowDimensions();

  // Capture primitive context BEFORE the portal/FullWindowOverlay (native only)
  const primitiveContext = useDialogRootContext();

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
    <DialogPrimitive.Portal hostName={portalHost}>
      <DialogOverlay primitiveContext={primitiveContext}>
        <DialogPrimitive.Content style={finalStyle} {...props}>
          <DialogContentContext.Provider value={contextValue}>
            {children}
          </DialogContentContext.Provider>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPrimitive.Portal>
  );
}
DialogContent.displayName = 'Dialog.Content';

// Title - uses DialogPrimitive.Title which now works because context is re-provided
type DialogTitleProps = Omit<React.ComponentProps<typeof Heading>, 'as'>;

function DialogTitle({ size: sizeProp, style, ...props }: DialogTitleProps) {
  const { size: contextSize } = React.useContext(DialogContentContext);
  const size = sizeProp ?? getDialogTitleSize(contextSize);
  const sizeStyles = getDialogSizeStyles(contextSize);

  return (
    <View style={{ marginBottom: sizeStyles.titleMarginBottom }}>
      <DialogPrimitive.Title asChild>
        <Heading size={size} style={style} {...props} />
      </DialogPrimitive.Title>
    </View>
  );
}
DialogTitle.displayName = 'Dialog.Title';

// Description - uses DialogPrimitive.Description which now works because context is re-provided
type DialogDescriptionProps = Omit<React.ComponentProps<typeof Text>, 'as'>;

function DialogDescription({ size: sizeProp, style, ...props }: DialogDescriptionProps) {
  const { size: contextSize } = React.useContext(DialogContentContext);
  const size = sizeProp ?? getDialogDescriptionSize(contextSize);
  const sizeStyles = getDialogSizeStyles(contextSize);

  return (
    <View style={{ marginBottom: sizeStyles.descriptionMarginBottom }}>
      <DialogPrimitive.Description asChild>
        <Text size={size} style={style} {...props} />
      </DialogPrimitive.Description>
    </View>
  );
}
DialogDescription.displayName = 'Dialog.Description';

// Inject CSS keyframes for web animations
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

const Dialog = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});

export { Dialog };
export type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogRootProps,
  DialogSize,
  DialogTitleProps,
  DialogTriggerProps
};

