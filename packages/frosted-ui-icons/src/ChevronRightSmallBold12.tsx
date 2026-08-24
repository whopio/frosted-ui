import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRightSmallBold12"
      {...props}
    >
      <path
        d="M5 3.7l2.123 2.123c.098.098.098.256 0 .354L5 8.3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightSmallBold12.category = 'Arrows';

export default ChevronRightSmallBold12;
