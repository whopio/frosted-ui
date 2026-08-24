import * as React from 'react';
import { IconProps } from './types';

export const DotBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="DotBold12"
      {...props}
    >
      <path
        d="M4 6c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

DotBold12.category = 'Interface General';

export default DotBold12;
