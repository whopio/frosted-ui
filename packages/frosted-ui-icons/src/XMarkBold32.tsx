import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 2L15.9999 16M29.9999 30L15.9999 16M15.9999 16L1.99994 29.9999M15.9999 16L29.9999 2.00003"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkBold32.category = 'Interface General';

export default XMarkBold32;
