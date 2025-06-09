'use client';

import classNames from 'classnames';
import { Switch as SwitchPrimitive } from 'radix-ui';
import * as React from 'react';

import { switchPropDefs } from './switch.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SwitchOwnProps = GetPropDefTypes<typeof switchPropDefs>;
interface SwitchProps extends Omit<PropsWithoutColor<typeof SwitchPrimitive.Root>, 'children'>, SwitchOwnProps {}

const Switch = (props: SwitchProps) => {
  const {
    className,
    style,
    size = switchPropDefs.size.default,
    color = switchPropDefs.color.default,
    highContrast = switchPropDefs.highContrast.default,
    ...switchProps
  } = props;
  return (
    <span
      className={classNames('fui-SwitchRoot', className, `fui-r-size-${size}`, { 'fui-high-contrast': highContrast })}
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
