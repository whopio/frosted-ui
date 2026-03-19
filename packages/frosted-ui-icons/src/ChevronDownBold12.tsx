import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.40002 4.75L5.82325 7.17323C5.92088 7.27086 6.07917 7.27086 6.1768 7.17323L8.60003 4.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownBold12.category = 'Arrows';

export default ChevronDownBold12;
