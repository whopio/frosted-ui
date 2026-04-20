import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M0.75 8.75L5.82322 3.67678C5.92085 3.57915 6.07915 3.57915 6.17678 3.67678L11.2499 8.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp12.category = 'Arrows';

export default ChevronUp12;
