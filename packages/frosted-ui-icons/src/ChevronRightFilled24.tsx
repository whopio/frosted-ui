import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightFilled24"
      {...props}
    >
      <path
        d="M8 3.25l8.396 8.396c.196.196.196.512 0 .708L8 20.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled24.category = 'Arrows';

export default ChevronRightFilled24;
