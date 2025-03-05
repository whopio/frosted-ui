import * as React from 'react';
import { IconProps } from './types';

export const Heart12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.81818 2.75C7.05455 2.75 6.38182 3.17292 6 3.8375C5.61818 3.17292 4.94545 2.75 4.18182 2.75C2.98182 2.75 2 3.8375 2 5.16667C2 7.56319 6 10 6 10C6 10 10 7.58333 10 5.16667C10 3.8375 9.01818 2.75 7.81818 2.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Heart12;
