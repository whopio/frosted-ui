import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeft20"
      {...props}
    >
      <path
        d="M8.25 16.5L1.75 10l6.5-6.5M1.75 10h16.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeft20.category = 'Arrows';

export default ArrowLeft20;
