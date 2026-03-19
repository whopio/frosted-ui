import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFilleed16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.00007 2.25L2.50023 7.74994M8.00007 2.25L13.5 7.74994M8.00007 2.25V13.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpFilleed16.category = 'Arrows';

export default ArrowUpFilleed16;
