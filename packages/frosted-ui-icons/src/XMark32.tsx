import * as React from 'react';
import { IconProps } from './types';

export const XMark32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 16L1.75001 30.25M16 16L1.75001 1.74999M16 16L30.25 1.74998M16 16L30.25 30.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

XMark32.category = 'Product Icons';

export default XMark32;
