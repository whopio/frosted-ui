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
        d="M6 2.75L11.0167 7.76665C11.1455 7.89553 11.1455 8.10447 11.0167 8.23335L6 13.2499"
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
