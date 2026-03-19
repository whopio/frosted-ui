import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.25 3.24999L3.24999 11.75M3.25 3.24999L11.75 3.24999M3.25 3.24999L12.75 12.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled16.category = 'Arrows';

export default ArrowUpLeftFilled16;
