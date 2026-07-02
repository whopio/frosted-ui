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
        d="M2.25 7.5L5.82322 3.92678C5.92085 3.82915 6.07915 3.82915 6.17678 3.92678L9.75 7.5"
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
