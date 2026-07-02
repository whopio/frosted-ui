import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.7002 5.05005L5.82342 7.17328C5.92105 7.27091 6.07934 7.27091 6.17697 7.17328L8.30029 5.05005"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallFilled12.category = 'Arrows';

export default ChevronDownSmallFilled12;
