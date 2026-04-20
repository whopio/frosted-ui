import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M4.875 1.75L10.8917 7.76665C11.0205 7.89553 11.0205 8.10447 10.8917 8.23335L4.875 14.2499"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight16.category = 'Arrows';

export default ChevronRight16;
