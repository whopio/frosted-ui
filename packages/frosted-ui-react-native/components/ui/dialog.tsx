import { Heading } from '@/components/ui/heading';
import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { Text } from '@/components/ui/text';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as DialogPrimitive from '@rn-primitives/dialog';
import * as React from 'react';
import { Platform, useWindowDimensions, View, type ViewStyle } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Types
// ============================================================================

type DialogSize = '1' | '2' | '3' | '4';

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
// Size helpers
// ============================================================================

function getDialogSizeStyles(size: DialogSize) {
  switch (size) {
    case '1':
      return {
        padding: 12, // space-3
        borderRadius: 8,
        titleMarginBottom: 4, // space-1
        descriptionMarginBottom: 12, // space-3
        minWidth: 200,
      };
    case '2':
      return {
        padding: 16, // space-4
        borderRadius: 12,
        titleMarginBottom: 8, // space-2
        descriptionMarginBottom: 16, // space-4
        minWidth: 240,
      };
    case '3':
      return {
        padding: 20,
        borderRadius: 16,
        titleMarginBottom: 12, // space-3
        descriptionMarginBottom: 20,
        minWidth: 280,
      };
    case '4':
      return {
        padding: 24, // space-5
        borderRadius: 20,
        titleMarginBottom: 12, // space-3
        descriptionMarginBottom: 24, // space-5
        minWidth: 320,
      };
  }
}

function getDialogTitleSize(size: DialogSize): '3' | '5' | '6' {
  switch (size) {
    case '1':
      return '3';
    case '2':
    case '3':
      return '5';
    case '4':
      return '6';
  }
}

function getDialogDescriptionSize(size: DialogSize): '1' | '2' | '3' {
  switch (size) {
    case '1':
      return '1';
    case '2':
    case '3':
      return '2';
    case '4':
      return '3';
  }
}

// ============================================================================
// Shadow helper (shadow-6)
// ============================================================================

function getDialogShadowStyle(
  gray: { a3: string; a6: string; a7: string },
  black: { a3: string; a4: string; a6: string; a11: string },
  isDark: boolean
): ViewStyle {
  if (Platform.OS === 'web') {
    const boxShadow = isDark
      ? `0 0 0 1px ${gray.a6}, 0 12px 60px ${black.a4}, 0 16px 64px ${black.a6}, 0 16px 36px -20px ${black.a11}`
      : `0 0 0 1px ${gray.a3}, 0 12px 60px ${black.a3}, 0 16px 64px ${gray.a3}, 0 16px 36px -20px ${gray.a7}`;

    return { boxShadow } as ViewStyle;
  }

  // Native shadow approximation
  return {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: isDark ? 0.5 : 0.25,
    shadowRadius: 32,
    elevation: 24,
    // Add border for native
    borderWidth: 1,
    borderColor: isDark ? gray.a6 : gray.a3,
  };
}

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
  const overlayStyle: ViewStyle = {
    position: Platform.OS === 'web' ? ('fixed' as unknown as 'absolute') : 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16, // space-4
    paddingBottom: 32, // max(space-4, 4vh) approximation
    paddingLeft: 16, // space-4
    paddingRight: 16, // space-4
  };

  const backdropStyle: ViewStyle =
    Platform.OS === 'web'
      ? ({
          position: 'absolute' as const,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backdropFilter: 'blur(3px) brightness(0.7)',
          WebkitBackdropFilter: 'blur(3px) brightness(0.7)',
        } as ViewStyle)
      : {
          position: 'absolute' as const,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        };

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
  const sizeStyles = getDialogSizeStyles(size);

  const gray = colors.palettes.gray;
  const black = colors.palettes.black;
  const shadowStyle = getDialogShadowStyle(gray, black, isDark);

  // Calculate available width (screen width minus overlay padding)
  const overlayPadding = 16; // space-4
  const availableWidth = windowWidth - overlayPadding * 2;
  const defaultMaxWidth = 580;

  // Extract maxWidth from style prop if provided
  const flatStyle = style ? (Array.isArray(style) ? Object.assign({}, ...style) : style) : {};
  const userMaxWidth = (flatStyle as ViewStyle).maxWidth;
  const effectiveMaxWidth = typeof userMaxWidth === 'number' ? userMaxWidth : defaultMaxWidth;

  const contentStyle: ViewStyle = {
    // On web, width: '100%' works with flexbox centering
    // On native, we calculate a fixed width based on available space and maxWidth
    width: Platform.OS === 'web' ? '100%' : Math.min(availableWidth, effectiveMaxWidth),
    minWidth: sizeStyles.minWidth,
    maxWidth: defaultMaxWidth,
    backgroundColor: colors.panelSolid,
    padding: sizeStyles.padding,
    borderRadius: sizeStyles.borderRadius,
    overflow: Platform.OS === 'web' ? ('auto' as unknown as 'hidden') : 'hidden',
    zIndex: 1,
    ...shadowStyle,
  };

  const contextValue = React.useMemo(() => ({ size }), [size]);

  return (
    <DialogPrimitive.Portal hostName={portalHost}>
      <DialogOverlay>
        {/* @ts-expect-error - Known type incompatibility with rn-primitives */}
        <DialogPrimitive.Content
          style={[contentStyle, style]}
          {...props}
          {...(Platform.OS === 'web' && {
            style: [
              contentStyle,
              {
                animation: 'fui-dialog-content-show 400ms cubic-bezier(0.16, 1, 0.3, 1)',
              } as ViewStyle,
              style,
            ],
          })}>
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
