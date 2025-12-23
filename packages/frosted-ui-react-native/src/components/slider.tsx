import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as SliderPrimitive from '@rn-primitives/slider';
import * as React from 'react';
import { Platform, View, type LayoutChangeEvent, type ViewStyle } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  type GestureUpdateEvent,
  type PanGestureHandlerEventPayload,
  type TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

type SliderSize = '1' | '2' | '3';

// Size styles from CSS:
// Size 1: --slider-track-size: calc(var(--space-2) * 0.75) = 6px
// Size 2: --slider-track-size: var(--space-2) = 8px
// Size 3: --slider-track-size: calc(var(--space-2) * 1.25) = 10px
// --slider-thumb-size: calc(var(--slider-track-size) + var(--space-1)) = track + 4px
function getSizeStyle(size: SliderSize): {
  trackHeight: number;
  thumbSize: number;
} {
  switch (size) {
    case '1': {
      const trackHeight = 6;
      const thumbSize = trackHeight + 4; // 10
      return { trackHeight, thumbSize };
    }
    case '2': {
      const trackHeight = 8;
      const thumbSize = trackHeight + 4; // 12
      return { trackHeight, thumbSize };
    }
    case '3': {
      const trackHeight = 10;
      const thumbSize = trackHeight + 4; // 14
      return { trackHeight, thumbSize };
    }
  }
}

type SliderProps = {
  /** Size of the slider track and thumb */
  size?: SliderSize;
  /** Accent color for the filled range */
  color?: Color;
  /** Use high contrast colors for the range */
  highContrast?: boolean;
  /** Current value - controlled mode */
  value?: number;
  /** Default value - uncontrolled mode */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Callback when value changes */
  onValueChange?: (value: number) => void;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Container style */
  style?: ViewStyle;
};

function Slider({
  size = '2',
  color,
  highContrast = false,
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  disabled = false,
  style,
}: SliderProps) {
  const { colors } = useThemeTokens();

  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  // Use controlled value if provided, otherwise use internal state
  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const gray = colors.palettes.gray;
  const palette = colors.palettes[color ?? 'accent'] ?? gray;

  const { trackHeight, thumbSize } = getSizeStyle(size);

  // The thumb has a visible pseudo-element that's slightly larger
  const thumbVisibleSize = thumbSize + Math.floor(trackHeight * 0.5);

  // Range (filled track) color
  const rangeColor = disabled ? gray.a5 : highContrast ? palette['12'] : palette['9'];

  // Calculate range width based on value
  const rangePercent = ((currentValue - min) / (max - min)) * 100;

  // Update value helper
  const updateValue = React.useCallback(
    (newValue: number) => {
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    },
    [controlledValue, onValueChange]
  );

  // Handle value changes from rn-primitives (receives array)
  const handlePrimitiveValueChange = React.useCallback(
    (newValue: number[]) => {
      updateValue(newValue[0] ?? min);
    },
    [updateValue, min]
  );

  // Track styles
  const trackStyle: ViewStyle = {
    height: trackHeight,
    borderRadius: trackHeight / 2,
    backgroundColor: gray.a4,
    justifyContent: 'center',
    position: 'relative',
  };

  const rangeStyle: ViewStyle = {
    height: trackHeight,
    borderRadius: trackHeight / 2,
    backgroundColor: rangeColor,
    position: 'absolute',
    left: 0,
    width: `${rangePercent}%`,
  };

  // Container style
  const containerStyle: ViewStyle = {
    height: thumbVisibleSize + 8,
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  // Thumb styles for web
  const webThumbStyle = {
    width: thumbVisibleSize,
    height: thumbVisibleSize,
    borderRadius: thumbVisibleSize / 2,
    backgroundColor: disabled ? gray['1'] : 'white',
    boxShadow: disabled
      ? `0 0 0 1px ${gray['5']}`
      : `0 0 0 1px ${gray.a3}, 0 0 0 1px ${gray.a2}, 0 0 0 1px ${palette.a2}, 0 1px 2px ${gray.a4}, 0 1px 3px -0.5px ${gray.a3}`,
    cursor: disabled ? 'not-allowed' : 'grab',
  };

  // Web implementation using rn-primitives for accessibility (keyboard, focus)
  if (Platform.OS === 'web') {
    return (
      <SliderPrimitive.Root
        value={currentValue}
        min={min}
        max={max}
        step={step}
        onValueChange={handlePrimitiveValueChange}
        disabled={disabled}
        style={containerStyle}>
        <SliderPrimitive.Track style={trackStyle}>
          <SliderPrimitive.Range style={rangeStyle} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb style={webThumbStyle as ViewStyle}>
          <View />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    );
  }

  // Native implementation with Gesture Handler for proper scroll view negotiation
  return (
    <NativeSlider
      {...{
        currentValue,
        min,
        max,
        step,
        disabled,
        updateValue,
        trackHeight,
        thumbVisibleSize,
        gray,
        rangeColor,
        trackStyle,
        rangeStyle,
        containerStyle,
      }}
    />
  );
}

// Separate native component to avoid hook issues with conditional rendering
function NativeSlider({
  currentValue,
  min,
  max,
  step,
  disabled,
  updateValue,
  trackHeight,
  thumbVisibleSize,
  gray,
  rangeColor,
  trackStyle,
  rangeStyle,
  containerStyle,
}: {
  currentValue: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  updateValue: (value: number) => void;
  trackHeight: number;
  thumbVisibleSize: number;
  gray: Record<string, string>;
  rangeColor: string;
  trackStyle: ViewStyle;
  rangeStyle: ViewStyle;
  containerStyle: ViewStyle;
}) {
  // Track dimensions
  const trackWidth = useSharedValue(0);

  // Animated thumb position (as percentage 0-1)
  const thumbPosition = useSharedValue((currentValue - min) / (max - min));

  // Update thumb position when controlled value changes
  React.useEffect(() => {
    thumbPosition.value = (currentValue - min) / (max - min);
  }, [currentValue, min, max, thumbPosition]);

  // Convert position to stepped value
  const positionToValue = React.useCallback(
    (position: number) => {
      'worklet';
      const percent = Math.max(0, Math.min(1, position));
      const rawValue = min + percent * (max - min);
      // Round to step
      const steppedValue = Math.round(rawValue / step) * step;
      return Math.max(min, Math.min(max, steppedValue));
    },
    [min, max, step]
  );

  // Handle track layout to get dimensions
  const handleTrackLayout = React.useCallback(
    (event: LayoutChangeEvent) => {
      trackWidth.value = event.nativeEvent.layout.width;
      // We'll measure pageX on gesture start
    },
    [trackWidth]
  );

  // Track ref for measuring
  const trackRef = React.useRef<View>(null);

  // Pan gesture with proper scroll view handling
  const panGesture = React.useMemo(
    () =>
      Gesture.Pan()
        .enabled(!disabled)
        // Small horizontal threshold to claim gesture before scroll view
        .activeOffsetX([-5, 5])
        // Large vertical threshold - let scroll view handle vertical
        .failOffsetY([-20, 20])
        .onStart((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
          // Calculate position from touch
          if (trackWidth.value > 0) {
            // Use the locationX which is relative to the component
            const percent = Math.max(0, Math.min(1, event.x / trackWidth.value));
            thumbPosition.value = percent;
            const newValue = positionToValue(percent);
            runOnJS(updateValue)(newValue);
          }
        })
        .onUpdate((event: GestureUpdateEvent<PanGestureHandlerEventPayload>) => {
          if (trackWidth.value > 0) {
            const percent = Math.max(0, Math.min(1, event.x / trackWidth.value));
            thumbPosition.value = percent;
            const newValue = positionToValue(percent);
            runOnJS(updateValue)(newValue);
          }
        }),
    [disabled, trackWidth, thumbPosition, positionToValue, updateValue]
  );

  // Tap gesture for clicking on track
  const tapGesture = React.useMemo(
    () =>
      Gesture.Tap()
        .enabled(!disabled)
        .onStart((event: GestureUpdateEvent<TapGestureHandlerEventPayload>) => {
          if (trackWidth.value > 0) {
            const percent = Math.max(0, Math.min(1, event.x / trackWidth.value));
            thumbPosition.value = percent;
            const newValue = positionToValue(percent);
            runOnJS(updateValue)(newValue);
          }
        }),
    [disabled, trackWidth, thumbPosition, positionToValue, updateValue]
  );

  // Combine gestures - tap and pan work together
  const composedGesture = Gesture.Race(panGesture, tapGesture);

  // Animated styles for range fill
  const animatedRangeStyle = useAnimatedStyle(() => {
    return {
      width: `${thumbPosition.value * 100}%`,
    };
  });

  // Animated styles for thumb position
  const animatedThumbStyle = useAnimatedStyle(() => {
    const left = thumbPosition.value * trackWidth.value - thumbVisibleSize / 2;
    return {
      transform: [{ translateX: left }],
    };
  });

  // Thumb styles for native
  const thumbBaseStyle: ViewStyle = {
    width: thumbVisibleSize,
    height: thumbVisibleSize,
    borderRadius: thumbVisibleSize / 2,
    backgroundColor: disabled ? gray['1'] : 'white',
    position: 'absolute',
    top: (trackHeight - thumbVisibleSize) / 2,
    left: 0,
    shadowColor: '#000',
    shadowOpacity: disabled ? 0.1 : 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: disabled ? 1 : 2,
  };

  return (
    <GestureHandlerRootView style={containerStyle}>
      <GestureDetector gesture={composedGesture}>
        <View ref={trackRef} style={trackStyle} onLayout={handleTrackLayout}>
          <Animated.View
            style={[rangeStyle, animatedRangeStyle, { backgroundColor: rangeColor }]}
          />
          <Animated.View style={[thumbBaseStyle, animatedThumbStyle]} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export { Slider };
export type { SliderProps };
