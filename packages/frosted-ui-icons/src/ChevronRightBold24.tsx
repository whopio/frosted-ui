import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBold24"
      {...props}
    >
      <path
        d="M8 3l8.646 8.646c.196.196.196.512 0 .708L8 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold24.category = 'Arrows';

export default ChevronRightBold24;
