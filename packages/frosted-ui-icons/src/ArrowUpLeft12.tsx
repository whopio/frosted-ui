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
      data-fui-icon="ArrowUpLeft12"
      {...props}
    >
      <path
        d="M8.25 1.75h-6.5v6.5m0-6.5l8.5 8.5"
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
