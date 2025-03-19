'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import classNames from 'classnames';
import * as React from 'react';
import { GetPropDefTypes, PropsWithoutColor } from '../helpers';
import { progressPropDefs } from './progress.props';

type ProgressOwnProps = GetPropDefTypes<typeof progressPropDefs>;
interface ProgressProps extends Omit<PropsWithoutColor<typeof ProgressPrimitive.Root>, 'children'>, ProgressOwnProps {}

const Progress = (props: ProgressProps) => {
  const {
    className,
    size = progressPropDefs.size.default,
    variant = progressPropDefs.variant.default,
    color = progressPropDefs.color.default,
    highContrast = progressPropDefs.highContrast.default,
    value = 0,
    max = 100,
    ...progressProps
  } = props;

  const progress = Math.max(0, Math.min((value || 0) / max, 100));

  return (
    <ProgressPrimitive.Root
      data-accent-color={color}
      className={classNames(
        'fui-ProgressRoot',
        className,
        `fui-variant-${variant}`,
        {
          'fui-high-contrast': highContrast,
        },
        `fui-r-size-${size}`,
      )}
      value={value}
      max={max}
      {...progressProps}
    >
      <ProgressPrimitive.Indicator className="fui-ProgressIndicator" style={{ width: `${progress * 100}%` }} />
    </ProgressPrimitive.Root>
  );
};

Progress.displayName = 'Progress';

export { Progress };
export type { ProgressProps };
