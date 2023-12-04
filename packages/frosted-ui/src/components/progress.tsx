'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import classNames from 'classnames';
import * as React from 'react';
import {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { progressPropDefs } from './progress.props';

type ProgressElement = React.ElementRef<typeof ProgressPrimitive.Root>;
type ProgressOwnProps = GetPropDefTypes<typeof progressPropDefs>;
interface ProgressProps
  extends Omit<
      PropsWithoutRefOrColor<typeof ProgressPrimitive.Root>,
      'children'
    >,
    MarginProps,
    ProgressOwnProps {}

const Progress = React.forwardRef<ProgressElement, ProgressProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      size = progressPropDefs.size.default,
      variant = progressPropDefs.variant.default,
      color = progressPropDefs.color.default,
      highContrast = progressPropDefs.highContrast.default,
      value = 0,
      max = 100,
      ...progressProps
    } = marginRest;

    const progress = Math.max(0, Math.min((value || 0) / max, 100));

    return (
      <ProgressPrimitive.Root
        data-accent-color={color}
        ref={forwardedRef}
        className={classNames(
          'fui-ProgressRoot',
          className,
          `fui-variant-${variant}`,
          {
            'fui-high-contrast': highContrast,
          },
          withBreakpoints(size, 'fui-r-size'),
          withMarginProps(marginProps),
        )}
        value={value}
        max={max}
        {...progressProps}
      >
        <ProgressPrimitive.Indicator
          className="fui-ProgressIndicator"
          style={{ width: `${progress * 100}%` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);

Progress.displayName = 'Progress';

export { Progress };
export type { ProgressProps };
