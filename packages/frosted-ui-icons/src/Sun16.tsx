import * as React from 'react';
import { IconProps } from './types';

export const Sun16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g
        stroke={color}
        clipPath="url(#clip0_882_689)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="8" r="3.25" />
        <path d="M8 15.25L8 13.75M2.87354 13.1265L3.93419 12.0659M.75 8L2.25 8M2.87354 2.87347L3.9342 3.93413M8 2.25L8 .75M12.0659 3.93414L13.1266 2.87348M13.75 8L15.25 8M12.0659 12.0659L13.1266 13.1265" />
      </g>
      <defs>
        <clipPath id="clip0_882_689">
          <path fill={color} d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Sun16;
