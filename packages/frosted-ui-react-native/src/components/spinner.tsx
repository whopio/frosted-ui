import { useThemeVars } from '@/lib/use-theme-vars';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
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
  // Web CSS uses negative animation-delay: -(800 - index * 100)ms
  // This means each leaf starts at a different phase of the animation
  // Leaf 0: starts at 0% through cycle (opacity 1)
  // Leaf 1: starts at 87.5% through cycle
  // ...
  // Leaf 7: starts at 12.5% through cycle

  // Calculate where in the animation cycle this leaf should start
  // Phase goes from 0 to 1 over the animation duration
  // Web delay is -(DURATION - index * DURATION/8), so time elapsed is (DURATION - index * DURATION/8)
  // Phase = (8 - index) / 8 for leaf at index (wrapping around)
  const phaseOffset = ((NUM_LEAVES - index) % NUM_LEAVES) / NUM_LEAVES;

  // Opacity goes from 1 to 0.25 (range of 0.75)
  // At phase p: opacity = 1 - p * 0.75
  const initialOpacity = 1 - phaseOffset * 0.75;
  const opacity = useSharedValue(initialOpacity);

  // Calculate how much time remains in the first cycle
  const remainingDuration = ANIMATION_DURATION * (1 - phaseOffset);

  React.useEffect(() => {
    // First, complete the current cycle from the starting point
    // Then repeat the full cycle infinitely
    opacity.value = withSequence(
      // Complete the first partial cycle
      withTiming(0.25, {
        duration: remainingDuration,
        easing: Easing.linear,
      }),
      // Then repeat full cycles
      withRepeat(
        withSequence(
          // Jump back to 1 instantly
          withTiming(1, { duration: 0 }),
          // Animate to 0.25
          withTiming(0.25, {
            duration: ANIMATION_DURATION,
            easing: Easing.linear,
          })
        ),
        -1, // infinite
        false
      )
    );
  }, [opacity, remainingDuration]);

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
      ]}>
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
      }>
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

function Spinner({ size = '2', loading = true, children, color, style }: SpinnerProps) {
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
      ]}>
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
      }}>
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
        }}>
        {spinner}
      </View>
    </View>
  );
}

Spinner.displayName = 'Spinner';

export { Spinner };
export type { SpinnerProps, SpinnerSize };
