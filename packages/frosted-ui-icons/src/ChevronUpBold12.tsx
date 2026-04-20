import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1 8.75L5.82322 3.92678C5.92085 3.82915 6.07915 3.82915 6.17678 3.92678L11 8.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpBold12.category = 'Arrows';

export default ChevronUpBold12;
