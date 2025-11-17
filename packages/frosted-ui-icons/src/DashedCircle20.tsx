import * as React from 'react';
import { IconProps } from './types';

export const DashedCircle20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <rect
        x=".75"
        y=".75"
        width="18.5"
        height="18.5"
        rx="9.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
};

export default DashedCircle20;
