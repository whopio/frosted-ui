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
        d="M8.875 1.75L22.6512 15.5262C22.9129 15.7879 22.9129 16.2121 22.6512 16.4738L8.875 30.25"
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
