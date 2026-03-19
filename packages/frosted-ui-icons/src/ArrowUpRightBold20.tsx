import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.0002 3L17.0002 13.5M17.0002 3L6.50023 3M17.0002 3L3.00024 16.9999"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBold20.category = 'Arrows';

export default ArrowUpRightBold20;
