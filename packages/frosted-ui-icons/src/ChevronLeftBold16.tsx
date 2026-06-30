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
        d="M9.75 3L4.98335 7.76665C4.85447 7.89553 4.85447 8.10447 4.98335 8.23335L9.75 13"
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
