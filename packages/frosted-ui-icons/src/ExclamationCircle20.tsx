import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g stroke={color} clipPath="url(#clip0_198_52)">
          <circle
            cx="10"
            cy="10"
            r="9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 6V11"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="15" r=".5" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_198_52">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ExclamationCircle20;
