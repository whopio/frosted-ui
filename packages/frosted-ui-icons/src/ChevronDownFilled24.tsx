import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownFilled24"
      {...props}
    >
      <path
        d="M3.25 8.25l8.396 8.396c.196.196.512.196.708 0L20.75 8.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled24.category = 'Arrows';

export default ChevronDownFilled24;
