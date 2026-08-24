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
      data-fui-icon="ArrowUpLeftFilled16"
      {...props}
    >
      <path
        d="M11.75 3.25h-8.5v8.5m0-8.5l9.5 9.5"
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
