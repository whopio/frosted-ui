import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M20.75 3.25L20.75 16.25M20.75 3.25L7.75001 3.25M20.75 3.25L3.25 20.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBoldFilled24.category = 'Arrows';

export default ArrowUpRightBoldFilled24;
