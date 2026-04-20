import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 2L10.7667 7.76665C10.8955 7.89553 10.8955 8.10447 10.7667 8.23335L5 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold16.category = 'Arrows';

export default ChevronRightBold16;
