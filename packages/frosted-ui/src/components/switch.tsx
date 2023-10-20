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

type SwitchElement = React.ElementRef<typeof SwitchPrimitive.Root>;
type SwitchOwnProps = GetPropDefTypes<typeof switchPropDefs>;
interface SwitchProps
  extends Omit<PropsWithoutRefOrColor<typeof SwitchPrimitive.Root>, 'children'>,
    MarginProps,
    SwitchOwnProps {}
const Switch = React.forwardRef<SwitchElement, SwitchProps>(
  (props, forwardedRef) => {
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
          'rt-SwitchRoot',
          className,
          withBreakpoints(size, 'rt-r-size'),
          { 'rt-high-contrast': highContrast },
          withMarginProps(marginProps),
        )}
        style={style}
      >
        <SwitchPrimitive.Root
          data-accent-color={color}
          {...switchProps}
          ref={forwardedRef}
          className={classNames('rt-reset', 'rt-SwitchButton', {
            'rt-high-contrast': highContrast,
          })}
        >
          <SwitchPrimitive.Thumb
            className={classNames('rt-SwitchThumb', {
              'rt-high-contrast': highContrast,
            })}
          />
        </SwitchPrimitive.Root>
      </span>
    );
  },
);
Switch.displayName = 'Switch';

export { Switch };
export type { SwitchProps };
