import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.00012 19.25L15.5287 12.7214C15.7891 12.4611 16.2112 12.4611 16.4715 12.7214L23 19.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled32.category = 'Arrows';

export default ChevronUpFilled32;
