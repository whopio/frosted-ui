import * as React from 'react';
import { IconProps } from './types';

export const ChevronDownSmallBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M3.7002 5.05005L5.8234 7.17328C5.92103 7.27091 6.07932 7.27091 6.17695 7.17328L8.30027 5.05005"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ChevronDownSmallBold12.category = 'Arrows';

export default ChevronDownSmallBold12;
