import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.125 1.75L5.10835 7.76665C4.97947 7.89553 4.97947 8.10447 5.10835 8.23335L11.125 14.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft16.category = 'Arrows';

export default ChevronLeft16;
