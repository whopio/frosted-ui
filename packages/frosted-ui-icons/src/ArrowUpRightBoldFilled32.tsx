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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M27.75 4.24997L27.75 22.75M27.75 4.24997L9.25 4.24997M27.75 4.24997L4.25 27.75"
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
