import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpFilled16"
      {...props}
    >
      <path
        d="M13.5 7.75L8 2.25l-5.5 5.5M8 2.25v11.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpFilled16.category = 'Arrows';

export default ArrowUpFilled16;
