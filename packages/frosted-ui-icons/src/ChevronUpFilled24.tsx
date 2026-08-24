import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUpFilled24"
      {...props}
    >
      <path
        d="M3.25 15.75l8.396-8.396c.196-.196.512-.196.708 0l8.396 8.396"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled24.category = 'Arrows';

export default ChevronUpFilled24;
