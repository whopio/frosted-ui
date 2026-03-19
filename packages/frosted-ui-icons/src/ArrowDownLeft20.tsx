import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.74998 17.25L2.74999 6.75001M2.74998 17.25L13.25 17.25M2.74998 17.25L17.25 2.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft20.category = 'Arrows';

export default ArrowDownLeft20;
