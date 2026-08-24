import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownSmallFilled24"
      {...props}
    >
      <path
        d="M6.75 9.5l4.896 4.896c.196.196.512.196.708 0L17.25 9.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallFilled24.category = 'Arrows';

export default ChevronDownSmallFilled24;
