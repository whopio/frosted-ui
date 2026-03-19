import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.25 17.25L17.25 6.75001M17.25 17.25L6.75 17.25M17.25 17.25L2.75 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight20.category = 'Arrows';

export default ArrowDownRight20;
