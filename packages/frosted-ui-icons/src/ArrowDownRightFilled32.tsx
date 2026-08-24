import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowDownRightFilled32"
      {...props}
    >
      <path
        d="M9.25 27.75h18.5V9.25m0 18.5L4.25 4.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowDownRightFilled32.category = 'Arrows';

export default ArrowDownRightFilled32;
