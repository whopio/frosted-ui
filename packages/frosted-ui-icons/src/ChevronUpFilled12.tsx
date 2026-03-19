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
        d="M3.40002 7.25L5.82325 4.82677C5.92088 4.72914 6.07917 4.72914 6.1768 4.82677L8.60003 7.25"
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
