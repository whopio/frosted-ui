'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, MarginProps, PropsWithoutColor, extractMarginProps, withMarginProps } from '../helpers';
import { circularProgressPropDefs } from './circular-progress.props';

type CircularProgressOwnProps = GetPropDefTypes<typeof circularProgressPropDefs>;
interface CircularProgressProps
  extends Omit<PropsWithoutColor<typeof ProgressPrimitive.Root>, 'children'>,
    MarginProps,
    CircularProgressOwnProps {}

const CircularProgress = (props: CircularProgressProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    size = circularProgressPropDefs.size.default,
    color = circularProgressPropDefs.color.default,
    highContrast = circularProgressPropDefs.highContrast.default,
    value = 0,
    max = 100,
    ...progressProps
  } = marginRest;

  const progress = Math.max(0, Math.min((value || 0) / max, 100));

  return (
    <ProgressPrimitive.Root
      data-accent-color={color}
      className={classNames(
        'fui-CircularProgressRoot',
        className,
        {
          'fui-high-contrast': highContrast,
        },
        `fui-r-size-${size}`,
        withMarginProps(marginProps),
      )}
      value={value}
      max={max}
      {...progressProps}
    >
      <ProgressPrimitive.Indicator
        className="fui-CircularProgressIndicator"
        style={
          {
            '--circular-progress-progress': progress,
          } as React.CSSProperties
        }
      />
    </ProgressPrimitive.Root>
  );
};

CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
export type { CircularProgressProps };
