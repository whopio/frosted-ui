import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.74998 1.74998L1.74998 8.24998M1.74998 1.74998L8.25 1.74998M1.74998 1.74998L10.25 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft12.category = 'Arrows';

export default ArrowUpLeft12;
