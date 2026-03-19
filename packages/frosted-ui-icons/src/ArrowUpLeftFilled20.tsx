import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.24999 3.25L3.24999 14.25M3.24999 3.25L14.25 3.25M3.24999 3.25L16.75 16.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled20.category = 'Arrows';

export default ArrowUpLeftFilled20;
