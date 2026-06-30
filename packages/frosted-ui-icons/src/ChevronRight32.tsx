import * as React from 'react';
import { IconProps } from './types';

export const ChevronRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 2.75L22.7762 15.5262C23.0379 15.7879 23.0379 16.2121 22.7762 16.4738L10 29.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRight32.category = 'Arrows';

export default ChevronRight32;
