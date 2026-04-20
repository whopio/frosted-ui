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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.375 1.25L3.80178 5.82322C3.70415 5.92085 3.70415 6.07915 3.80178 6.17678L8.375 10.75"
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
