import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeft20"
      {...props}
    >
      <path
        d="M13.25 2.75H2.75v10.5m0-10.5l14.5 14.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft20.category = 'Arrows';

export default ArrowUpLeft20;
