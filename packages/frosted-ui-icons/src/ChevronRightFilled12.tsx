import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightFilled12"
      {...props}
    >
      <path
        d="M4.5 2.25l3.573 3.573c.098.098.098.256 0 .354L4.5 9.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled12.category = 'Arrows';

export default ChevronRightFilled12;
