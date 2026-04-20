import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9 2L22.5262 15.5262C22.7879 15.7879 22.7879 16.2121 22.5262 16.4738L9 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold32.category = 'Arrows';

export default ChevronRightBold32;
