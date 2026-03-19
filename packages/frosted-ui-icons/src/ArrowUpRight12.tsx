import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.25 1.74998L10.25 8.24998M10.25 1.74998L3.75 1.74998M10.25 1.74998L1.75 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight12.category = 'Arrows';

export default ArrowUpRight12;
