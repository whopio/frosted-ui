import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 22L15.5262 9.22376C15.7879 8.96211 16.2121 8.96211 16.4738 9.22376L29.25 22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp32.category = 'Arrows';

export default ChevronUp32;
