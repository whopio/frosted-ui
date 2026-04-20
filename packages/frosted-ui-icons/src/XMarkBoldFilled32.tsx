import * as React from 'react';
import { IconProps } from './types';

export const XMarkBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.5 2.5L16.0001 16M29.5 29.5L16.0001 16M16.0001 16L2.5 29.5M16.0001 16L29.5 2.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBoldFilled32.category = 'Interface General';

export default XMarkBoldFilled32;
