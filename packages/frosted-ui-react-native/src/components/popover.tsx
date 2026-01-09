import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { PopoverPrimitive } from '@/forked-primitives';
import { getPanelContentStyle, type PanelSize, type PanelVariant } from '@/lib/panel-styles';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Types
// ============================================================================

type PopoverSize = PanelSize; // '1' | '2' | '3' | '4'
type PopoverVariant = PanelVariant;

// ============================================================================
// Popover.Root
// ============================================================================

type PopoverRootProps = PopoverPrimitive.RootProps;

const PopoverRoot = PopoverPrimitive.Root;

// ============================================================================
// Popover.Trigger
// ============================================================================

const PopoverTrigger = PopoverPrimitive.Trigger;

// ============================================================================
// Popover.Close
// ============================================================================

const PopoverClose = PopoverPrimitive.Close;

// ============================================================================
// Popover.Content
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

type PopoverContentProps = PopoverPrimitive.ContentProps & {
  size?: PopoverSize;
  variant?: PopoverVariant;
  portalHost?: string;
};

// Helper to safely get context on native (not available on web)
function usePopoverRootContext() {
  // On web, the forked primitive re-exports from @rn-primitives which doesn't have useRootContext
  if (Platform.OS === 'web' || !PopoverPrimitive.useRootContext) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return PopoverPrimitive.useRootContext();
}

function PopoverContent({
  size = '2',
  variant = 'translucent',
  align = 'start',
  sideOffset = 8,
  portalHost,
  style,
  children,
  ...props
}: PopoverContentProps) {
  const { colors, isDark } = useThemeTokens();

  // Capture primitive context BEFORE the portal/FullWindowOverlay (native only)
  const primitiveContext = usePopoverRootContext();

  const contentStyle = getPanelContentStyle({
    size,
    variant,
    colors,
    isDark,
  });

  const content = (
    <PopoverPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
      <NativeOnlyAnimatedView entering={FadeIn.duration(200)} exiting={FadeOut}>
        <PopoverPrimitive.Content
          align={align}
          insets={{ top: 8, right: 8, bottom: 8, left: 8 }}
          sideOffset={sideOffset}
          {...props}>
          <View style={[contentStyle, style]}>{children}</View>
        </PopoverPrimitive.Content>
      </NativeOnlyAnimatedView>
    </PopoverPrimitive.Overlay>
  );

  // On native, re-provide context after FullWindowOverlay breaks it
  // On web, just render content directly (Radix handles its own context)
  const ContextProvider = PopoverPrimitive.PopoverContext?.Provider;
  const shouldProvideContext = Platform.OS !== 'web' && ContextProvider && primitiveContext;

  return (
    <PopoverPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        {shouldProvideContext ? (
          <ContextProvider value={primitiveContext}>{content}</ContextProvider>
        ) : (
          content
        )}
      </FullWindowOverlay>
    </PopoverPrimitive.Portal>
  );
}

// ============================================================================
// Export composite component
// ============================================================================

const Popover: {
  Root: typeof PopoverRoot;
  Trigger: typeof PopoverTrigger;
  Close: typeof PopoverClose;
  Content: typeof PopoverContent;
} = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Close: PopoverClose,
  Content: PopoverContent,
};

export { Popover, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger };
export type { PopoverContentProps, PopoverRootProps, PopoverSize, PopoverVariant };
