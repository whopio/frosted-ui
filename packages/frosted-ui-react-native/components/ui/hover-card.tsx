import { NativeOnlyAnimatedView } from '@/components/ui/native-only-animated-view';
import { useThemeVars } from '@/lib/use-theme-vars';
import * as HoverCardPrimitive from '@rn-primitives/hover-card';
import * as React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

// ============================================================================
// Types
// ============================================================================

type HoverCardSize = '1' | '2' | '3';
type HoverCardVariant = 'solid' | 'translucent';

// ============================================================================
// Helpers
// ============================================================================

function getSizeStyle(size: HoverCardSize): { padding: number; borderRadius: number } {
  switch (size) {
    case '1':
      return { padding: 12, borderRadius: 8 }; // space-3, 8px
    case '2':
      return { padding: 16, borderRadius: 12 }; // space-4, 12px
    case '3':
      return { padding: 24, borderRadius: 16 }; // space-5, 16px
  }
}

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

  const sizeStyle = getSizeStyle(size);

  // Background based on variant
  const backgroundColor = variant === 'solid' ? colors.panelSolid : colors.panelTranslucent;

  // Backdrop blur for translucent variant (web only)
  // Light: blur(20px) saturate(190%) contrast(50%) brightness(130%)
  // Dark: blur(20px) saturate(190%) contrast(90%) brightness(80%)
  const backdropFilter = isDark
    ? 'blur(20px) saturate(190%) contrast(90%) brightness(80%)'
    : 'blur(20px) saturate(190%) contrast(50%) brightness(130%)';

  const backdropStyle: ViewStyle | undefined =
    variant === 'translucent' && Platform.OS === 'web'
      ? ({
          backdropFilter,
          WebkitBackdropFilter: backdropFilter,
        } as ViewStyle)
      : undefined;

  // Shadow style (shadow-4 equivalent)
  // Light mode: 1px gray.a6 outline via boxShadow (no border on web)
  // Dark mode: 0.5px black outline via boxShadow + 1px gray.a6 border
  const baseShadow = '0px 12px 60px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.12)';
  const outlineShadow = isDark ? `, 0 0 0 0.5px black` : `, 0 0 0 1px ${colors.palettes.gray.a6}`;

  const shadowStyle: ViewStyle = Platform.select({
    web: {
      boxShadow: baseShadow + outlineShadow,
    } as ViewStyle,
    default: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.25,
      shadowRadius: 30,
      elevation: 24,
    },
  }) as ViewStyle;

  // Border: dark mode has 1px gray.a6 border on all platforms
  // Light mode: no border on web (uses boxShadow outline), border on native as fallback
  const borderStyle: ViewStyle | undefined =
    isDark || Platform.OS !== 'web'
      ? {
          borderWidth: 1,
          borderColor: colors.palettes.gray.a6,
        }
      : undefined;

  const contentStyle: ViewStyle = {
    backgroundColor,
    padding: sizeStyle.padding,
    borderRadius: sizeStyle.borderRadius,
    overflow: 'hidden',
    ...shadowStyle,
    ...backdropStyle,
    ...borderStyle,
  };

  return (
    <HoverCardPrimitive.Portal>
      <FullWindowOverlay>
        <HoverCardPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
          <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
            <HoverCardPrimitive.Content align={align} sideOffset={sideOffset} {...props}>
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
