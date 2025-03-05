import * as React from 'react';
import { IconProps } from './types';

export const Compress32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 12.6667V2.5M16 12.6667L11.3334 8M16 12.6667L20.6667 8M16 19.3333L16 29.5M16 19.3333L20.6666 24M16 19.3333L11.3333 24M5 16H27"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compress32;
