import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.25 10.25L10.25 3.75002M10.25 10.25L3.75 10.25M10.25 10.25L1.75 1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRight12.category = 'Arrows';

export default ArrowDownRight12;
