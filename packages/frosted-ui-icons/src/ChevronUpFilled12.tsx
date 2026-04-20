import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.25 8.75L5.82322 4.17678C5.92085 4.07915 6.07915 4.07915 6.17678 4.17678L10.75 8.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpFilled12.category = 'Arrows';

export default ChevronUpFilled12;
