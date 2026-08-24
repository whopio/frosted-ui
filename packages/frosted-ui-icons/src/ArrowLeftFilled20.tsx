import * as React from 'react';
import { IconProps } from './types';

export const ArrowLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowLeftFilled20"
      {...props}
    >
      <path
        d="M8.75 16.5L2.25 10l6.5-6.5M2.25 10h15.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowLeftFilled20.category = 'Arrows';

export default ArrowLeftFilled20;
