import { getAvatarSize, type AvatarShape, type AvatarSize } from '@/components/avatar';
import type { TextSize } from '@/components/text';
import type { AccentColor, Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { Platform, View, type ViewProps, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

function resolveAccentFromColor(color?: Color): AccentColor {
  if (!color) return 'gray';
  switch (color) {
    case 'danger':
      return 'red';
    case 'warning':
      return 'amber';
    case 'success':
      return 'green';
    case 'info':
      return 'blue';
    default:
      return color as AccentColor;
  }
}

// Text border radius based on size
function getTextBorderRadius(size: TextSize): number {
  switch (size) {
    case '0':
    case '1':
    case '2':
      return 4; // radius-1
    case '3':
    case '4':
      return 6; // radius-2
    case '5':
    case '6':
      return 8; // radius-3
    case '7':
    case '8':
      return 10; // radius-4
    case '9':
      return 12; // radius-5
  }
}

// Pulse animation hook using Reanimated (runs on UI thread) - native only
function usePulseAnimation() {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    // Skip on web - we use CSS animations there
    if (Platform.OS === 'web') return;

    // Use withRepeat with reverse=true for smooth looping: 1 → 0.5 → 1 → 0.5 → ...
    opacity.value = withRepeat(
      withTiming(0.5, { duration: 1000, easing: Easing.bezier(0.4, 0, 0.6, 1) }),
      -1, // Infinite repeat
      true // Reverse on each iteration
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return animatedStyle;
}

// CSS animation style for web (GPU-accelerated)
const webPulseStyle: ViewStyle | undefined =
  Platform.OS === 'web'
    ? ({
        animationName: 'skeleton-pulse',
        animationDuration: '2s',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        animationIterationCount: 'infinite',
      } as ViewStyle)
    : undefined;

// Inject keyframes on web
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const styleId = 'skeleton-pulse-keyframes';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes skeleton-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================================================
// Skeleton.Avatar
// ============================================================================

type SkeletonAvatarProps = ViewProps & {
  size?: AvatarSize;
  shape?: AvatarShape;
  color?: Color;
};

function SkeletonAvatar({
  size = '3',
  shape = 'circle',
  color = 'gray',
  style,
  ...props
}: SkeletonAvatarProps) {
  const { colors } = useThemeTokens();
  const animatedStyle = usePulseAnimation();

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  const avatarSize = getAvatarSize(size);
  const borderRadius = shape === 'circle' ? avatarSize / 2 : avatarSize * 0.25;

  const avatarStyle: ViewStyle = {
    width: avatarSize,
    height: avatarSize,
    borderRadius,
    backgroundColor: palette.a3,
    flexShrink: 0,
  };

  if (Platform.OS === 'web') {
    return <View style={[avatarStyle, webPulseStyle, style]} {...props} />;
  }

  return <Animated.View style={[avatarStyle, animatedStyle, style]} {...props} />;
}

// ============================================================================
// Skeleton.Text
// ============================================================================

type SkeletonTextProps = ViewProps & {
  size?: TextSize;
  color?: Color;
};

function SkeletonText({ size = '3', color = 'gray', style, ...props }: SkeletonTextProps) {
  const { colors, typography } = useThemeTokens();
  const animatedStyle = usePulseAnimation();

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  const typo = typography[size];
  const borderRadius = getTextBorderRadius(size);

  // Container matches line-height, inner bar matches font-size
  const containerStyle: ViewStyle = {
    height: typo.lineHeight,
    justifyContent: 'center',
    alignItems: 'stretch',
  };

  const barStyle: ViewStyle = {
    height: typo.fontSize,
    borderRadius,
    backgroundColor: palette.a3,
    width: '100%',
  };

  if (Platform.OS === 'web') {
    return (
      <View style={[containerStyle, style]} {...props}>
        <View style={[barStyle, webPulseStyle]} />
      </View>
    );
  }

  return (
    <View style={[containerStyle, style]} {...props}>
      <Animated.View style={[barStyle, animatedStyle]} />
    </View>
  );
}

// ============================================================================
// Skeleton.Rect
// ============================================================================

type SkeletonRectProps = ViewProps & {
  color?: Color;
};

function SkeletonRect({ color = 'gray', style, ...props }: SkeletonRectProps) {
  const { colors } = useThemeTokens();
  const animatedStyle = usePulseAnimation();

  const accentColor = resolveAccentFromColor(color);
  const palette = colors.palettes[accentColor];

  const rectStyle: ViewStyle = {
    backgroundColor: palette.a3,
    flexShrink: 0,
  };

  if (Platform.OS === 'web') {
    return <View style={[rectStyle, webPulseStyle, style]} {...props} />;
  }

  return <Animated.View style={[rectStyle, animatedStyle, style]} {...props} />;
}

// ============================================================================
// Export composite component
// ============================================================================

const Skeleton = {
  Avatar: SkeletonAvatar,
  Text: SkeletonText,
  Rect: SkeletonRect,
};

export { Skeleton, SkeletonAvatar, SkeletonRect, SkeletonText };
export type { SkeletonAvatarProps, SkeletonRectProps, SkeletonTextProps };
