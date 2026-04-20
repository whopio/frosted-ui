import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M5.99996 6L1.24998 10.75M5.99996 6L1.24997 1.25003M5.99996 6L10.75 1.25003M5.99996 6L10.75 10.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMarkBoldFilled12.category = 'Interface General';

export default XMarkBoldFilled12;
