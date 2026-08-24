import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRight20"
      {...props}
    >
      <path
        d="M6.75 2.75h10.5v10.5m0-10.5l-14.5 14.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight20.category = 'Arrows';

export default ArrowUpRight20;
