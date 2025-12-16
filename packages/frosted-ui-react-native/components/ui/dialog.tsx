import { Heading } from '@/components/ui/heading';
import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { Text } from '@/components/ui/text';
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
import * as DialogPrimitive from '@rn-primitives/dialog';
import * as React from 'react';
import { Platform, StyleSheet, useWindowDimensions, View, type ViewStyle } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
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
type DialogRootProps = React.ComponentProps<typeof DialogPrimitive.Root>;
const DialogRoot = (props: DialogRootProps) => <DialogPrimitive.Root {...props} />;
DialogRoot.displayName = 'Dialog.Root';

// Trigger
type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
const DialogTrigger = (props: DialogTriggerProps) => <DialogPrimitive.Trigger {...props} asChild />;
DialogTrigger.displayName = 'Dialog.Trigger';

// Close
type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
const DialogClose = (props: DialogCloseProps) => <DialogPrimitive.Close {...props} asChild />;
DialogClose.displayName = 'Dialog.Close';

// Overlay
function DialogOverlay({
  children,
  ...props
}: Omit<DialogPrimitive.OverlayProps, 'asChild'> &
  React.RefAttributes<DialogPrimitive.OverlayRef> & {
    children?: React.ReactNode;
  }) {
  const overlayStyle = getDialogOverlayStyle();
  const backdropStyle = getDialogBackdropStyle();

  return (
    <FullWindowOverlay>
      {/* @ts-expect-error - Known type incompatibility with rn-primitives */}
      <DialogPrimitive.Overlay style={overlayStyle} {...props} asChild={Platform.OS !== 'web'}>
        <NativeOnlyAnimatedView entering={FadeIn.duration(200)} exiting={FadeOut.duration(150)}>
          <View style={backdropStyle} />
          <NativeOnlyAnimatedView entering={FadeIn.delay(50)} exiting={FadeOut.duration(150)}>
            {children}
          </NativeOnlyAnimatedView>
        </NativeOnlyAnimatedView>
      </DialogPrimitive.Overlay>
    </FullWindowOverlay>
  );
}
DialogOverlay.displayName = 'Dialog.Overlay';

// Content
interface DialogContentProps
  extends
    Omit<DialogPrimitive.ContentProps, 'asChild'>,
    React.RefAttributes<DialogPrimitive.ContentRef> {
  size?: DialogSize;
  portalHost?: string;
}

function DialogContent({ size = '3', portalHost, children, style, ...props }: DialogContentProps) {
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
    <DialogPrimitive.Portal hostName={portalHost}>
      <DialogOverlay>
        {/* @ts-expect-error - Known type incompatibility with rn-primitives */}
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

// Title
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

// Description
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
  DialogTriggerProps,
};
