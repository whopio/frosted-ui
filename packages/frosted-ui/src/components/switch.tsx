'use client';

import * as SwitchPrimitive from '@radix-ui/react-switch';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { switchPropDefs } from './switch.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type SwitchOwnProps = GetPropDefTypes<typeof switchPropDefs>;
interface SwitchProps
  extends Omit<PropsWithoutRefOrColor<typeof SwitchPrimitive.Root>, 'children'>,
    MarginProps,
    SwitchOwnProps {}

const Switch = (props: SwitchProps) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const {
    className,
    style,
    size = switchPropDefs.size.default,
    color = switchPropDefs.color.default,
    highContrast = switchPropDefs.highContrast.default,
    ...switchProps
  } = marginRest;
  return (
    <span
      className={classNames(
        'fui-SwitchRoot',
        className,
        withBreakpoints(size, 'fui-r-size'),
        { 'fui-high-contrast': highContrast },
        withMarginProps(marginProps),
      )}
      style={style}
    >
      <SwitchPrimitive.Root
        data-accent-color={color}
        {...switchProps}
        className={classNames('fui-reset', 'fui-SwitchButton', {
          'fui-high-contrast': highContrast,
        })}
      >
        <SwitchPrimitive.Thumb
          className={classNames('fui-SwitchThumb', {
            'fui-high-contrast': highContrast,
          })}
        />
      </SwitchPrimitive.Root>
    </span>
  );
};
Switch.displayName = 'Switch';

export { Switch };
export type { SwitchProps };
