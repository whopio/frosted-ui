import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeft32"
      {...props}
    >
      <path
        d="M23.25 3.75H3.75v19.5m0-19.5l24.5 24.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft32.category = 'Arrows';

export default ArrowUpLeft32;
