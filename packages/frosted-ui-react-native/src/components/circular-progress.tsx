import type { Color } from '@/lib/types';
import { useThemeTokens } from '@/lib/use-theme-tokens';
import * as React from 'react';
import { View, type ViewProps, type ViewStyle } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

// ============================================================================
// Types
// ============================================================================

type CircularProgressSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type CircularProgressProps = ViewProps & {
  /** Size of the circular progress indicator */
  size?: CircularProgressSize;
  /** Color theme for the progress indicator */
  color?: Color;
  /** Current progress value */
  value?: number;
  /** Maximum progress value */
  max?: number;
};

// ============================================================================
// Size configuration matching web CSS
// ============================================================================

interface SizeConfig {
  diameter: number;
  strokeWidth: number;
}

function getSizeConfig(size: CircularProgressSize): SizeConfig {
  switch (size) {
    case '1':
      return { diameter: 16, strokeWidth: 3 };
    case '2':
      return { diameter: 20, strokeWidth: 4 };
    case '3':
      return { diameter: 24, strokeWidth: 5 };
    case '4':
      return { diameter: 32, strokeWidth: 5 };
    case '5':
      return { diameter: 40, strokeWidth: 6 };
    case '6':
      return { diameter: 48, strokeWidth: 7 };
    case '7':
      return { diameter: 56, strokeWidth: 8 };
    case '8':
      return { diameter: 64, strokeWidth: 9 };
    case '9':
      return { diameter: 72, strokeWidth: 10 };
  }
}

// ============================================================================
// Component
// ============================================================================

function CircularProgress({
  size = '3',
  color,
  value = 0,
  max = 100,
  style,
  ...props
}: CircularProgressProps) {
  const { colors } = useThemeTokens();

  // Get size configuration
  const { diameter, strokeWidth } = getSizeConfig(size);

  // Calculate SVG geometry
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = diameter / 2;

  // Calculate progress (0 to 1)
  const progress = Math.max(0, Math.min((value || 0) / max, 1));

  // Round caps add visual length beyond the arc endpoints
  // Each cap extends by strokeWidth/2, total extension = strokeWidth
  const capArcLength = strokeWidth / 2;
  const totalCapArc = strokeWidth;

  // Calculate the arc to draw (reduced to account for cap visual extension)
  // Minimum arc ensures at least a dot (rounded cap) is visible when progress > 0
  const targetVisualArc = progress * circumference;
  const compensatedArc = targetVisualArc - totalCapArc;
  const minArc = progress > 0 ? 0.1 : 0;
  const actualArcToDraw = Math.max(minArc, compensatedArc);

  // Stroke dash offset (how much of the circumference to hide)
  const strokeDashoffset = circumference - actualArcToDraw;

  // Rotate to position start cap's outer edge at 12 o'clock
  const capAngle = (capArcLength / circumference) * 360;
  const rotation = -90 + capAngle;

  // Get colors
  const gray = colors.palettes.gray;
  const palette = colors.palettes[color ?? 'accent'] ?? gray;

  // Track color (background circle) - uses alpha variant
  const trackColor = palette.a3;

  // Indicator color
  const indicatorColor = palette['9'];

  const containerStyle: ViewStyle = {
    width: diameter,
    height: diameter,
  };

  return (
    <View
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      style={[containerStyle, style]}
      {...props}>
      <Svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}>
        {/* Track (background circle) */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress indicator */}
        {progress > 0 && (
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={indicatorColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={progress >= 1 ? undefined : circumference}
            strokeDashoffset={progress >= 1 ? undefined : strokeDashoffset}
            strokeLinecap={progress >= 1 ? 'butt' : 'round'}
            transform={progress >= 1 ? undefined : `rotate(${rotation} ${center} ${center})`}
          />
        )}
      </Svg>
    </View>
  );
}

CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
export type { CircularProgressProps, CircularProgressSize };

