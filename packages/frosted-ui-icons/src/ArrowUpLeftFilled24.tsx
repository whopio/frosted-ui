import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.24999 3.25L3.24999 16.25M3.24999 3.25L16.25 3.25M3.24999 3.25L20.75 20.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled24.category = 'Arrows';

export default ArrowUpLeftFilled24;
