import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeftFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.25 12.75L3.24999 4.25001M3.25 12.75L11.75 12.75M3.25 12.75L12.75 3.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeftFilled16.category = 'Arrows';

export default ArrowDownLeftFilled16;
