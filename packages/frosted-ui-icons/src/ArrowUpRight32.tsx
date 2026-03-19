import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.25 3.74997L28.25 23.25M28.25 3.74997L8.74999 3.74997M28.25 3.74997L3.75 28.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight32.category = 'Arrows';

export default ArrowUpRight32;
