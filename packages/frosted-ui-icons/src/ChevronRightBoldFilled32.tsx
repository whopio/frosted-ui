import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.25 2.5L22.2762 15.5262C22.5379 15.7879 22.5379 16.2121 22.2762 16.4738L9.25 29.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBoldFilled32.category = 'Arrows';

export default ChevronRightBoldFilled32;
