import * as React from 'react';
import { IconProps } from './types';

export const ChevronUp24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronUp24"
      {...props}
    >
      <path
        d="M2.75 16.25l8.896-8.896c.196-.196.512-.196.708 0l8.896 8.896"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUp24.category = 'Arrows';

export default ChevronUp24;
