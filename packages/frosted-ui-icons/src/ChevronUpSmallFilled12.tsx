import * as React from 'react';
import { IconProps } from './types';

export const ChevronUpSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.3999 7.25L5.82313 4.82677C5.92076 4.72914 6.07905 4.72914 6.17668 4.82677L8.59991 7.25"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronUpSmallFilled12.category = 'Arrows';

export default ChevronUpSmallFilled12;
