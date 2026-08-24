import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowUpRightBoldFilled32"
      {...props}
    >
      <path
        d="M9.25 4.25h18.5v18.5m0-18.5l-23.5 23.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled32.category = 'Arrows';

export default ArrowUpRightBoldFilled32;
