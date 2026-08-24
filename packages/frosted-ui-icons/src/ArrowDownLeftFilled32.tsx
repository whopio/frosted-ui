import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftFilled32"
      {...props}
    >
      <path
        d="M22.75 27.75H4.25V9.25m0 18.5l23.5-23.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftFilled32.category = 'Arrows';

export default ArrowDownLeftFilled32;
