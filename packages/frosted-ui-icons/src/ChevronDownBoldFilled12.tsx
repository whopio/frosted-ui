import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 4.5L5.82322 7.82322C5.92085 7.92085 6.07915 7.92085 6.17678 7.82322L9.5 4.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBoldFilled12.category = 'Arrows';

export default ChevronDownBoldFilled12;
