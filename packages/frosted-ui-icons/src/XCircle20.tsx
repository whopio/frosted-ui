import * as React from 'react';
import { IconProps } from './types';

export const XCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_321_227)">
          <g
            stroke={color}
            clipPath="url(#clip1_321_227)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10" cy="10" r="9" />
            <path d="M7.17157 7.17157L9.99999 10M12.8284 12.8284L9.99999 10M9.99999 10L7.17157 12.8284M9.99999 10L12.8284 7.17157" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_321_227">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
          <clipPath id="clip1_321_227">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default XCircle20;
