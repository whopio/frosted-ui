import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.74998 10.25L1.74998 3.75002M1.74998 10.25L8.25 10.25M1.74998 10.25L10.25 1.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownLeft12.category = 'Arrows';

export default ArrowDownLeft12;
