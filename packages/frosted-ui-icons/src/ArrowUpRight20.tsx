import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRight20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.25 2.74998L17.25 13.25M17.25 2.74998L6.75 2.74999M17.25 2.74998L2.75 17.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRight20.category = 'Arrows';

export default ArrowUpRight20;
