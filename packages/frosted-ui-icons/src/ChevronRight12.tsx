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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.375 0.75L8.44822 5.82322C8.54585 5.92085 8.54585 6.07915 8.44822 6.17678L3.375 11.2499"
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
