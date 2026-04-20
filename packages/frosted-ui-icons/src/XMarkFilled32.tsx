import * as React from 'react';
import { IconProps } from './types';

export const XMarkFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 2.25L15.9999 16M29.75 29.75L15.9999 16M15.9999 16L2.25 29.75M15.9999 16L29.75 2.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkFilled32.category = 'Interface General';

export default XMarkFilled32;
