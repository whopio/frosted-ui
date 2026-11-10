import * as React from 'react';
import { IconProps } from './types';

export const TriangleBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TriangleBold32"
      {...props}
    >
      <path
        d="M13.242 4.837L2.43 25.304C1.305 27.436 2.85 30 5.26 30h21.505c2.405 0 3.95-2.552 2.837-4.683L18.91 4.85c-1.194-2.286-4.463-2.293-5.667-.013z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TriangleBold32.category = 'Interface General';

export default TriangleBold32;
