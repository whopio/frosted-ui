import * as React from 'react';
import { IconProps } from './types';

export const Compress20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
      <path
        d="M10 7.91667V1.5625M10 7.91667L7.08337 5M10 7.91667L12.9167 5M9.99996 12.0833L9.99996 18.4375M9.99996 12.0833L12.9166 15M9.99996 12.0833L7.08329 15M3.125 10H16.875"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compress20;
