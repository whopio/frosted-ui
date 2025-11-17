import * as React from 'react';
import { IconProps } from './types';

export const LightsOn12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5 11.25H7M3 6C3 7.11791 3.83316 7.68039 4.2576 7.89441C4.39887 7.96564 4.5 8.10671 4.5 8.26491C4.5 8.67089 4.82911 9 5.23509 9H6.76491C7.17089 9 7.5 8.67089 7.5 8.26491C7.5 8.10671 7.60113 7.96564 7.7424 7.89441C8.16684 7.68039 9 7.11791 9 6C9 4.5 8 3 6 3C4 3 3 4.5 3 6Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx=".75" cy="6" r=".75" fill={color} />
      <circle cx="2.25" cy="2.25" r=".75" fill={color} />
      <circle cx="2.25" cy="9.75" r=".75" fill={color} />
      <circle cx="9.75" cy="2.25" r=".75" fill={color} />
      <circle cx="9.75" cy="9.75" r=".75" fill={color} />
      <circle cx="6" cy=".75" r=".75" fill={color} />
      <circle cx="11.25" cy="6" r=".75" fill={color} />
    </svg>
  );
};

export default LightsOn12;
