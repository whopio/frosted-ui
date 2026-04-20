import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.5 1L8.32322 5.82322C8.42085 5.92085 8.42085 6.07915 8.32322 6.17678L3.5 11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightBold12.category = 'Arrows';

export default ChevronRightBold12;
