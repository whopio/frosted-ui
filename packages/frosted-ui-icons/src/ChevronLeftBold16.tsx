import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11 2L5.23335 7.76665C5.10447 7.89553 5.10447 8.10447 5.23335 8.23335L11 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronLeftBold16.category = 'Arrows';

export default ChevronLeftBold16;
