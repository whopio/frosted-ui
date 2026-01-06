'use client';

import { Meter } from '@base-ui/react/meter';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, PropsWithoutColor } from '../../helpers';
import { circularProgressPropDefs } from './circular-progress.props';

type CircularProgressOwnProps = GetPropDefTypes<typeof circularProgressPropDefs>;
interface CircularProgressProps
  extends Omit<PropsWithoutColor<typeof Meter.Root>, 'children'>, CircularProgressOwnProps {}

// Size configuration matching CSS variables
const sizeConfig: Record<string, { diameter: number; strokeWidth: number }> = {
  '1': { diameter: 16, strokeWidth: 3 },
  '2': { diameter: 20, strokeWidth: 4 },
  '3': { diameter: 24, strokeWidth: 5 },
  '4': { diameter: 32, strokeWidth: 5 },
  '5': { diameter: 40, strokeWidth: 6 },
  '6': { diameter: 48, strokeWidth: 7 },
  '7': { diameter: 56, strokeWidth: 8 },
  '8': { diameter: 64, strokeWidth: 9 },
  '9': { diameter: 72, strokeWidth: 10 },
};

const CircularProgress = (props: CircularProgressProps) => {
  const {
    className,
    size = circularProgressPropDefs.size.default,
    color = circularProgressPropDefs.color.default,
    highContrast = circularProgressPropDefs.highContrast.default,
    value = 0,
    max = 100,
    ...progressProps
  } = props;

  const { diameter, strokeWidth } = sizeConfig[size] || sizeConfig['3'];
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

  return (
    <Meter.Root
      data-accent-color={color}
      className={classNames(
        'fui-CircularProgressRoot',
        className,
        {
          'fui-high-contrast': highContrast,
        },
        `fui-r-size-${size}`,
      )}
      value={value}
      max={max}
      {...progressProps}
      render={
        <svg
          className="fui-CircularProgressSvg"
          width={diameter}
          height={diameter}
          viewBox={`0 0 ${diameter} ${diameter}`}
        />
      }
    >
      {/* Track (background circle) */}
      <Meter.Track
        render={
          <circle
            className="fui-CircularProgressTrack"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
        }
      />

      {/* Progress indicator */}
      {progress > 0 && (
        <Meter.Indicator
          render={
            <circle
              className="fui-CircularProgressIndicator"
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={progress >= 1 ? undefined : circumference}
              strokeDashoffset={progress >= 1 ? undefined : strokeDashoffset}
              strokeLinecap={progress >= 1 ? 'butt' : 'round'}
              transform={progress >= 1 ? undefined : `rotate(${rotation} ${center} ${center})`}
            />
          }
        />
      )}
    </Meter.Root>
  );
};

CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
export type { CircularProgressProps };
