import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28 4L28 23.5M28 4L8.49996 4M28 4L4 28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBold32.category = 'Arrows';

export default ArrowUpRightBold32;
