'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import * as React from 'react';
import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from '../helpers';
import { checkboxPropDefs } from './checkbox.props';

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from '../helpers';

type IconElement = React.ElementRef<'svg'>;
interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  children?: never;
  color?: string;
  size: CheckboxOwnProps['size'];
}

const CheckboxCheckmarkIcon = React.forwardRef<IconElement, IconProps>(
  ({ color = 'currentColor', size, ...props }, forwardedRef) => {
    switch (size) {
      case '1':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            {...props}
            ref={forwardedRef}
          >
            <path
              d="M4 8.5L6.5 11L12 5.5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case '2':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
            ref={forwardedRef}
          >
            <path
              d="M5 11L8 14L15 7"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case '3':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
            ref={forwardedRef}
          >
            <path
              d="M7 13L10 16L17 9"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        throw Error('Invalid size');
    }
  },
);
CheckboxCheckmarkIcon.displayName = 'CheckboxCheckmarkIcon';

type CheckboxElement = React.ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxOwnProps = GetPropDefTypes<typeof checkboxPropDefs>;
interface CheckboxProps
  extends Omit<
      PropsWithoutRefOrColor<typeof CheckboxPrimitive.Root>,
      'children'
    >,
    MarginProps,
    CheckboxOwnProps {}
const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      style,
      size = checkboxPropDefs.size.default,
      color = checkboxPropDefs.color.default,
      highContrast = checkboxPropDefs.highContrast.default,
      ...checkboxProps
    } = marginRest;
    return (
      <span
        className={classNames(
          'rt-CheckboxRoot',
          className,
          withBreakpoints(size, 'rt-r-size'),
          withMarginProps(marginProps),
        )}
        style={style}
      >
        <CheckboxPrimitive.Root
          data-accent-color={color}
          {...checkboxProps}
          ref={forwardedRef}
          className={classNames('rt-reset', 'rt-CheckboxButton', {
            'rt-high-contrast': highContrast,
          })}
        >
          <CheckboxPrimitive.Indicator className="rt-CheckboxIndicator">
            <CheckboxCheckmarkIcon
              size={size}
              className="rt-CheckboxIndicatorIcon"
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </span>
    );
  },
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
export type { CheckboxProps };
