import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.125 2.25L22.4012 15.5262C22.6629 15.7879 22.6629 16.2121 22.4012 16.4738L9.125 29.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled32.category = 'Arrows';

export default ChevronRightFilled32;
