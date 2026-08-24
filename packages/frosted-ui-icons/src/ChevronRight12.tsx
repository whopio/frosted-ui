import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronRight12"
      {...props}
    >
      <path
        d="M4.5 1.75l4.073 4.073c.098.098.098.256 0 .354L4.5 10.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight12.category = 'Arrows';

export default ChevronRight12;
