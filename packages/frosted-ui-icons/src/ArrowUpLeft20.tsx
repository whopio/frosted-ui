import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.74998 2.74998L2.74999 13.25M2.74998 2.74998L13.25 2.74999M2.74998 2.74998L17.25 17.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpLeft20.category = 'Arrows';

export default ArrowUpLeft20;
