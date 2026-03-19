import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.75 3.25L16.75 14.25M16.75 3.25L5.75001 3.25M16.75 3.25L3.25 16.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightFilled20.category = 'Arrows';

export default ArrowUpRightFilled20;
