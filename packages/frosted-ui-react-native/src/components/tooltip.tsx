import { NativeOnlyAnimatedView } from '@/components/native-only-animated-view';
import { Text } from '@/components/text';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as TooltipPrimitive from '@rn-primitives/tooltip';
import * as React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { FullWindowOverlay as RNFullWindowOverlay } from 'react-native-screens';

const FullWindowOverlay = Platform.OS === 'ios' ? RNFullWindowOverlay : React.Fragment;

interface TooltipProps extends Omit<TooltipPrimitive.RootProps, 'delayDuration'> {
  /** The content to display in the tooltip */
  content: React.ReactNode;
  /** The trigger element */
  children: React.ReactNode;
  /** Delay before showing tooltip (ms) */
  delayDuration?: number;
  /** Side offset from trigger */
  sideOffset?: number;
  /** Which side to show tooltip */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Portal host name */
  portalHost?: string;
}

/**
 * Tooltip component matching web version.
 * Uses reversed theme appearance (light mode shows dark tooltip, dark mode shows light tooltip).
 */
function Tooltip({
  children,
  content,
  delayDuration = 400,
  sideOffset = 4,
  side = 'top',
  portalHost,
  ...rootProps
}: TooltipProps) {
  const { invertedColors } = useThemeTokens();

  // Use inverted theme colors - tooltip shows opposite of current theme
  const backgroundColor = invertedColors.background;
  const textColor = invertedColors.palettes.gray['12'];

  // Shadow style
  const shadowStyle: ViewStyle = Platform.select({
    web: {
      boxShadow: `
        0 4px 16px -8px rgba(0, 0, 0, 0.08),
        0 3px 12px -4px rgba(0, 0, 0, 0.05),
        0 2px 3px -2px rgba(0, 0, 61, 0.05)
      `.trim(),
    } as ViewStyle,
    default: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
  }) as ViewStyle;

  const contentStyle: ViewStyle = {
    backgroundColor,
    paddingVertical: 4, // space-1
    paddingHorizontal: 8, // space-2
    borderRadius: 10, // radius-4
    ...shadowStyle,
  };

  return (
    <TooltipPrimitive.Root delayDuration={delayDuration} {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal hostName={portalHost}>
        <FullWindowOverlay>
          <TooltipPrimitive.Overlay style={Platform.select({ native: StyleSheet.absoluteFill })}>
            <NativeOnlyAnimatedView entering={FadeIn.duration(100)} exiting={FadeOut.duration(100)}>
              <TooltipPrimitive.Content sideOffset={sideOffset} side={side}>
                <View style={contentStyle}>
                  <Text size="2" style={{ color: textColor }}>
                    {content}
                  </Text>
                </View>
              </TooltipPrimitive.Content>
            </NativeOnlyAnimatedView>
          </TooltipPrimitive.Overlay>
        </FullWindowOverlay>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

export { Tooltip };
export type { TooltipProps };
