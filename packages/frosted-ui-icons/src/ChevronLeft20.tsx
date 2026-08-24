import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeft20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronLeft20"
      {...props}
    >
      <path
        d="M13 2.75L6.047 9.703c-.164.164-.164.43 0 .594L13 17.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeft20.category = 'Arrows';

export default ChevronLeft20;
