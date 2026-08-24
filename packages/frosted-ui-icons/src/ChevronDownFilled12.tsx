import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ChevronDownFilled12"
      {...props}
    >
      <path
        d="M2.25 4.5l3.573 3.573c.098.098.256.098.354 0L9.75 4.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownFilled12.category = 'Arrows';

export default ChevronDownFilled12;
