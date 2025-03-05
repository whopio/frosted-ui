import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircle12 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <circle
        cx="6"
        cy="6"
        r="5.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.39563 5.802L5.04054 7.78198L8.14758 4.21802"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckmarkCircle12;
