import * as React from 'react';
import { IconProps } from './types';

export const Happy16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_882_1306)">
          <circle
            cx="8"
            cy="8"
            r="7.25"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="4.875" cy="8.875" r=".875" fill={color} />
          <circle
            cx=".875"
            cy=".875"
            r=".875"
            transform="matrix(-1 0 0 1 12 8)"
            fill={color}
          />
          <path
            d="M10.125 11C10.125 11 9.5 12.25 8 12.25C6.5 12.25 5.875 11 5.875 11"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_1306">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Happy16;
