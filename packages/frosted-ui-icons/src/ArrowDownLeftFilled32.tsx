import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.24998 27.75L4.24999 9.25001M4.24998 27.75L22.75 27.75M4.24998 27.75L27.75 4.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftFilled32.category = 'Arrows';

export default ArrowDownLeftFilled32;
