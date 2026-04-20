import * as React from 'react';
import { IconProps } from './types';

export const ChevronRightFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.625 1.25L8.19822 5.82322C8.29585 5.92085 8.29585 6.07915 8.19822 6.17678L3.625 10.75"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronRightFilled12.category = 'Arrows';

export default ChevronRightFilled12;
