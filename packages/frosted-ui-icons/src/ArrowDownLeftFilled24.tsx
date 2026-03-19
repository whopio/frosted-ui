import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.24999 20.75L3.24999 7.75001M3.24999 20.75L16.25 20.75M3.24999 20.75L20.75 3.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftFilled24.category = 'Arrows';

export default ArrowDownLeftFilled24;
