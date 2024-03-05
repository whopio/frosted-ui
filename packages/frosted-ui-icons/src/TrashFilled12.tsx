import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.09857 10.0671L9.5 5.25H2.5L2.90143 10.0671C2.95714 10.7357 3.51606 11.25 4.18697 11.25H7.81303C8.48394 11.25 9.04286 10.7357 9.09857 10.0671Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.75 3.25L4.2862 1.46265C4.4131 1.03967 4.80242.75 5.24403.75H6.75597C7.19758.75 7.5869 1.03967 7.7138 1.46265L8.25 3.25M.75 3.25H11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default TrashFilled12;
