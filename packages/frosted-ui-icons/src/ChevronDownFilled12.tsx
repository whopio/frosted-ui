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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M2.25 4.5L5.82322 8.07322C5.92085 8.17085 6.07915 8.17085 6.17678 8.07322L9.75 4.5"
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
