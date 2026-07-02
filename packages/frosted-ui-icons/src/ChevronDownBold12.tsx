import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2 4.5L5.82322 8.32322C5.92085 8.42085 6.07915 8.42085 6.17678 8.32322L10 4.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold12.category = 'Arrows';

export default ChevronDownBold12;
