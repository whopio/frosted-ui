import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.74997 28.25L3.74998 8.75002M3.74997 28.25L23.25 28.25M3.74997 28.25L28.25 3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft32.category = 'Arrows';

export default ArrowDownLeft32;
