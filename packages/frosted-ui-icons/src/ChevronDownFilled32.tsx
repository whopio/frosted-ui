import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.25 10.25L15.5262 22.5262C15.7879 22.7879 16.2121 22.7879 16.4738 22.5262L28.75 10.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled32.category = 'Arrows';

export default ChevronDownFilled32;
