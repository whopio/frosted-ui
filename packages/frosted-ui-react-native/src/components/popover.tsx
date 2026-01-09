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

  // Capture primitive context BEFORE the portal/FullWindowOverlay
  const primitiveContext = PopoverPrimitive.useRootContext();

  const contentStyle = getPanelContentStyle({
    size,
    variant,
    colors,
    isDark,
  });

  return (
    <PopoverPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        {/* Re-provide PopoverContext after FullWindowOverlay breaks context */}
        <PopoverPrimitive.PopoverContext.Provider value={primitiveContext}>
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
        </PopoverPrimitive.PopoverContext.Provider>
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
