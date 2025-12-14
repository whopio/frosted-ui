import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { getPanelContentStyle, type PanelSize, type PanelVariant } from '@/lib/panel-styles';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as PopoverPrimitive from '@rn-primitives/popover';
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
  const { colors, isDark } = useThemeVars();

  const contentStyle = getPanelContentStyle({
    size,
    variant,
    colors,
    isDark,
  });

  return (
    <PopoverPrimitive.Portal hostName={portalHost}>
      <FullWindowOverlay>
        <PopoverPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
          <NativeOnlyAnimatedView entering={FadeIn.duration(200)} exiting={FadeOut}>
            <PopoverPrimitive.Content align={align} sideOffset={sideOffset} {...props}>
              <View style={[contentStyle, style]}>{children}</View>
            </PopoverPrimitive.Content>
          </NativeOnlyAnimatedView>
        </PopoverPrimitive.Overlay>
      </FullWindowOverlay>
    </PopoverPrimitive.Portal>
  );
}

// ============================================================================
// Export composite component
// ============================================================================

const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Close: PopoverClose,
  Content: PopoverContent,
};

export { Popover, PopoverClose, PopoverContent, PopoverRoot, PopoverTrigger };
export type { PopoverContentProps, PopoverRootProps, PopoverSize, PopoverVariant };
