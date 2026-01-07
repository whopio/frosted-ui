'use client';

import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import classNames from 'classnames';
import * as React from 'react';

import { switchPropDefs } from './switch.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../../helpers';

type SwitchOwnProps = GetPropDefTypes<typeof switchPropDefs>;
type SwitchProps = Omit<
  PropsWithoutColor<typeof SwitchPrimitive.Root>,
  'children' | 'className' | 'render' | 'nativeButton'
> &
  Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> &
  SwitchOwnProps;

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
