import * as React from 'react';
import { IconProps } from './types';

export const XMarkSmallFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.9999 10.0001L15.9998 16M21.9997 21.9999L15.9998 16M15.9998 16L9.9999 21.9999M15.9998 16L21.9997 10.0001"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

XMarkSmallFilled32.category = 'Interface General';

export default XMarkSmallFilled32;
