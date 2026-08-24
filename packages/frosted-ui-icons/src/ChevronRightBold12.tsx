import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightBold12"
      {...props}
    >
      <path
        d="M4.5 2l3.823 3.823c.098.098.098.256 0 .354L4.5 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold12.category = 'Arrows';

export default ChevronRightBold12;
