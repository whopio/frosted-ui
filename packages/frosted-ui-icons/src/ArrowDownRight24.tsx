import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.25 21.25L21.25 8.75001M21.25 21.25L8.75 21.25M21.25 21.25L2.75 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight24.category = 'Arrows';

export default ArrowDownRight24;
