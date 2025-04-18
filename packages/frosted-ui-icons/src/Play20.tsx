import * as React from 'react';
import { IconProps } from './types';

export const Play20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16.7958 8.60073L7.36371 2.4976C6.25478 1.78005 4.79163 2.57604 4.79163 3.89689V16.1031C4.79163 17.4239 6.25477 18.2199 7.36371 17.5024L16.7958 11.3992C17.8108 10.7425 17.8108 9.25748 16.7958 8.60073Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Play20;
