import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21 3L21 15.5M21 3L8.49998 3.00001M21 3L3 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowUpRightBold24.category = 'Arrows';

export default ArrowUpRightBold24;
