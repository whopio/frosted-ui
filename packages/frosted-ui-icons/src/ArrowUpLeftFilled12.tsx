import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpLeftFilled12"
      {...props}
    >
      <path
        d="M8.75 2.25h-6.5v6.5m0-6.5l7.5 7.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeftFilled12.category = 'Arrows';

export default ArrowUpLeftFilled12;
