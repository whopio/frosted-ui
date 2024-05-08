import * as React from 'react';
import { IconProps } from './types';

export const HappyPlus12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.75 3.75V2.25M9.75 2.25V.75M9.75 2.25H8.25M9.75 2.25H11.25M11.25 6C11.25 8.89949 8.89949 11.25 6 11.25 3.10051 11.25.75 8.89949.75 6 .75 3.10051 3.10051.75 6 .75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="3.813" cy="5.781" r=".75" fill={color} />
        <circle
          cx=".75"
          cy=".75"
          r=".75"
          transform="matrix(-1 0 0 1 9.094 5.031)"
          fill={color}
        />
        <path
          d="M7.59375 8.0625C7.59375 8.0625 7.125 9 6 9C4.875 9 4.40625 8.0625 4.40625 8.0625"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default HappyPlus12;
