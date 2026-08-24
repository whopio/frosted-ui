import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRight24"
      {...props}
    >
      <path
        d="M8.75 2.75h12.5v12.5m0-12.5l-18.5 18.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight24.category = 'Arrows';

export default ArrowUpRight24;
