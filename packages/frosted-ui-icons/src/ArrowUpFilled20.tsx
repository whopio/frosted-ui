import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFilled20"
      {...props}
    >
      <path
        d="M16.5 8.75L10 2.25l-6.5 6.5m6.5-6.5v15.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpFilled20.category = 'Arrows';

export default ArrowUpFilled20;
