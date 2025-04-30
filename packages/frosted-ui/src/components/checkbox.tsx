'use client';

import classNames from 'classnames';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import * as React from 'react';

import { checkboxPropDefs } from './checkbox.props';

import type { GetPropDefTypes, PropsWithoutColor } from '../helpers';

interface IconProps extends React.ComponentProps<'svg'> {
  children?: never;
  color?: string;
  size: CheckboxOwnProps['size'];
}

const CheckboxCheckmarkIcon = ({ color = 'currentColor', size, ...props }: IconProps) => {
  switch (size) {
    case '1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
          <path d="M4 8.5L6.5 11L12 5.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case '2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
          <path d="M5 11L8 14L15 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case '3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <path d="M7 13L10 16L17 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      throw Error('Invalid size');
  }
};
CheckboxCheckmarkIcon.displayName = 'CheckboxCheckmarkIcon';

const CheckboxIndeterminateIcon = ({ color = 'currentColor', size, ...props }: IconProps) => {
  switch (size) {
    case '1':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
          <path d="M5 8H11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case '2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
          <path d="M6 10H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case '3':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
          <path d="M7 12H17" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      throw Error('Invalid size');
  }
};
CheckboxIndeterminateIcon.displayName = 'CheckboxIndeterminateIcon';

type CheckboxOwnProps = GetPropDefTypes<typeof checkboxPropDefs>;
interface CheckboxProps extends PropsWithoutColor<typeof CheckboxPrimitive.Root>, CheckboxOwnProps {}

const Checkbox = (props: CheckboxProps) => {
  const {
    children,
    className,
    style,
    size = checkboxPropDefs.size.default,
    color = checkboxPropDefs.color.default,
    highContrast = checkboxPropDefs.highContrast.default,
    ...checkboxProps
  } = props;

  const Comp = children ? 'label' : 'span';

  return (
    <Comp className={classNames('fui-CheckboxRoot', className, `fui-r-size-${size}`)} style={style}>
      <CheckboxPrimitive.Root
        data-accent-color={color}
        {...checkboxProps}
        className={classNames('fui-reset', 'fui-CheckboxButton', {
          'fui-high-contrast': highContrast,
        })}
      >
        <CheckboxPrimitive.Indicator className="fui-CheckboxIndicator">
          {checkboxProps.checked === 'indeterminate' ? (
            <CheckboxIndeterminateIcon size={size} className="fui-CheckboxIndicatorIcon" />
          ) : (
            <CheckboxCheckmarkIcon size={size} className="fui-CheckboxIndicatorIcon" />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {children}
    </Comp>
  );
};
Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
