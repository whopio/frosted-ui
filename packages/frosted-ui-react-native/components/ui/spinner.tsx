import { useThemeVars } from '@/lib/use-theme-vars';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

// ============================================================================
// Types
// ============================================================================

type SpinnerSize = '1' | '2' | '3' | '4' | '5' | '6';

interface SpinnerProps {
  size?: SpinnerSize;
  loading?: boolean;
  children?: React.ReactNode;
  color?: string;
  style?: ViewStyle;
}

// ============================================================================
// Size helpers
// ============================================================================

function getSpinnerSize(size: SpinnerSize): number {
  switch (size) {
    case '1':
      return 12; // --space-3
    case '2':
      return 16; // --space-4
    case '3':
      return 20; // 1.25 * --space-4
    case '4':
      return 24; // --space-5
    case '5':
      return 32; // --space-6
    case '6':
      return 40; // --space-7
    default:
      return 16;
  }
}

// ============================================================================
// Spinner Leaf Component
// ============================================================================

const ANIMATION_DURATION = 800;
const NUM_LEAVES = 8;

interface SpinnerLeafProps {
  index: number;
  spinnerSize: number;
  color: string;
}

function SpinnerLeaf({ index, spinnerSize, color }: SpinnerLeafProps) {
  const opacity = useSharedValue(1);

  // Calculate the animation delay based on leaf index
  // Each leaf is offset by 100ms (total 800ms / 8 leaves)
  const delay = index * (ANIMATION_DURATION / NUM_LEAVES);

  React.useEffect(() => {
    // Start the animation with proper delay
    const startAnimation = () => {
      opacity.value = withRepeat(
        withTiming(0.25, {
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
        }),
        -1, // infinite
        false // don't reverse
      );
    };

    // Use setTimeout for initial delay offset
    const timer = setTimeout(startAnimation, delay);
    return () => clearTimeout(timer);
  }, [opacity, delay]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  // Calculate rotation for this leaf
  const rotation = index * 45; // 360 / 8 = 45 degrees per leaf

  // Leaf dimensions
  const leafWidth = spinnerSize * 0.125; // 12.5%
  const leafHeight = spinnerSize;
  const dotHeight = leafHeight * 0.3; // 30%
  const borderRadius = Math.max(2, leafWidth / 2);

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: leafWidth,
          height: leafHeight,
          left: (spinnerSize - leafWidth) / 2,
          top: 0,
          alignItems: 'center',
          transform: [{ rotate: `${rotation}deg` }],
          transformOrigin: 'center center',
        },
        animatedStyle,
      ]}
    >
      <View
        style={{
          width: '100%',
          height: dotHeight,
          borderRadius,
          backgroundColor: color,
        }}
      />
    </Animated.View>
  );
}

// Web-specific CSS animation version for better performance
function SpinnerLeafWeb({ index, spinnerSize, color }: SpinnerLeafProps) {
  const rotation = index * 45;
  const leafWidth = spinnerSize * 0.125;
  const leafHeight = spinnerSize;
  const dotHeight = leafHeight * 0.3;
  const borderRadius = Math.max(2, leafWidth / 2);

  // Animation delay (negative to start mid-animation)
  const animationDelay = -(ANIMATION_DURATION - index * (ANIMATION_DURATION / NUM_LEAVES));

  return (
    <View
      style={
        {
          position: 'absolute',
          width: leafWidth,
          height: leafHeight,
          left: (spinnerSize - leafWidth) / 2,
          top: 0,
          alignItems: 'center',
          transform: [{ rotate: `${rotation}deg` }],
          transformOrigin: 'center center',
          animation: `spinner-leaf-fade ${ANIMATION_DURATION}ms linear infinite`,
          animationDelay: `${animationDelay}ms`,
        } as ViewStyle
      }
    >
      <View
        style={{
          width: '100%',
          height: dotHeight,
          borderRadius,
          backgroundColor: color,
        }}
      />
    </View>
  );
}

// ============================================================================
// Spinner Component
// ============================================================================

function Spinner({
  size = '2',
  loading = true,
  children,
  color,
  style,
}: SpinnerProps) {
  const { colors } = useThemeVars();
  const spinnerSize = getSpinnerSize(size);

  // Use gray-12 as default color (matches text color in both light/dark modes)
  const resolvedColor = color ?? colors.palettes.gray['12'];

  // Inject CSS keyframes for web
  React.useEffect(() => {
    if (Platform.OS === 'web') {
      const styleId = 'frosted-ui-spinner-keyframes';
      if (!document.getElementById(styleId)) {
        const styleEl = document.createElement('style');
        styleEl.id = styleId;
        styleEl.textContent = `
          @keyframes spinner-leaf-fade {
            from { opacity: 1; }
            to { opacity: 0.25; }
          }
        `;
        document.head.appendChild(styleEl);
      }
    }
  }, []);

  if (!loading) {
    return <>{children}</>;
  }

  const LeafComponent = Platform.OS === 'web' ? SpinnerLeafWeb : SpinnerLeaf;

  const spinner = (
    <View
      style={[
        {
          width: spinnerSize,
          height: spinnerSize,
          position: 'relative',
          opacity: 0.65,
        },
        style,
      ]}
    >
      {Array.from({ length: NUM_LEAVES }).map((_, index) => (
        <LeafComponent key={index} index={index} spinnerSize={spinnerSize} color={resolvedColor} />
      ))}
    </View>
  );

  if (children === undefined) {
    return spinner;
  }

  // Wrap children with spinner overlay
  return (
    <View
      style={{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Hidden children for layout */}
      <View style={{ opacity: 0 }} aria-hidden pointerEvents="none">
        {children}
      </View>

      {/* Spinner overlay */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {spinner}
      </View>
    </View>
  );
}

Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps, SpinnerSize };

