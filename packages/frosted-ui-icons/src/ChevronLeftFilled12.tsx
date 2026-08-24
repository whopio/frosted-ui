import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeftFilled12"
      {...props}
    >
      <path
        d="M7.25 2.25L3.677 5.823c-.098.098-.098.256 0 .354L7.25 9.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftFilled12.category = 'Arrows';

export default ChevronLeftFilled12;
