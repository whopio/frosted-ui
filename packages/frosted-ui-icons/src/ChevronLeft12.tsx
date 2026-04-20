import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8.625 0.75L3.55178 5.82322C3.45415 5.92085 3.45415 6.07915 3.55178 6.17678L8.625 11.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft12.category = 'Arrows';

export default ChevronLeft12;
