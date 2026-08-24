import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownLeftFilled20"
      {...props}
    >
      <path
        d="M14.25 16.75h-11v-11m0 11l13.5-13.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftFilled20.category = 'Arrows';

export default ArrowDownLeftFilled20;
