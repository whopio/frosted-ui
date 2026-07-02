import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 2L3.67678 5.82322C3.57915 5.92085 3.57915 6.07915 3.67678 6.17678L7.5 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold12.category = 'Arrows';

export default ChevronLeftBold12;
