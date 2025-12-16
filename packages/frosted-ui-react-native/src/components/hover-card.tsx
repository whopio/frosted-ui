import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { getPanelContentStyle, type PanelSize, type PanelVariant } from '@/lib/panel-styles';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as HoverCardPrimitive from '@rn-primitives/hover-card';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Types
// ============================================================================

// HoverCard only supports sizes 1-3 (no size 4)
type HoverCardSize = '1' | '2' | '3';
type HoverCardVariant = PanelVariant;

// ============================================================================
// HoverCard.Root
// ============================================================================

type HoverCardRootProps = HoverCardPrimitive.RootProps & {
  openDelay?: number;
  closeDelay?: number;
};

function HoverCardRoot({ openDelay = 200, closeDelay = 150, ...props }: HoverCardRootProps) {
  return <HoverCardPrimitive.Root openDelay={openDelay} closeDelay={closeDelay} {...props} />;
}

// ============================================================================
// HoverCard.Trigger
// ============================================================================

const HoverCardTrigger = HoverCardPrimitive.Trigger;

// ============================================================================
// HoverCard.Content
// ============================================================================

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

type HoverCardContentProps = HoverCardPrimitive.ContentProps & {
  size?: HoverCardSize;
  variant?: HoverCardVariant;
};

function HoverCardContent({
  size = '2',
  variant = 'translucent',
  align = 'start',
  sideOffset = 8,
  style,
  children,
  ...props
}: HoverCardContentProps) {
  const { colors, isDark } = useThemeVars();

  const contentStyle = getPanelContentStyle({
    size: size as PanelSize,
    variant,
    colors,
    isDark,
  });

  return (
    <HoverCardPrimitive.Portal>
      <FullWindowOverlay>
        <HoverCardPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
          <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
            <HoverCardPrimitive.Content
              align={align}
              sideOffset={sideOffset}
              insets={{ top: 8, right: 8, bottom: 8, left: 8 }}
              {...props}>
              <View style={[contentStyle, style]}>{children}</View>
            </HoverCardPrimitive.Content>
          </NativeOnlyAnimatedView>
        </HoverCardPrimitive.Overlay>
      </FullWindowOverlay>
    </HoverCardPrimitive.Portal>
  );
}

// ============================================================================
// Export composite component
// ============================================================================

const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
};

export { HoverCard, HoverCardContent, HoverCardRoot, HoverCardTrigger };
export type { HoverCardContentProps, HoverCardRootProps, HoverCardSize, HoverCardVariant };
