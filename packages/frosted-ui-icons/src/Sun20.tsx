import * as React from 'react';
import { IconProps } from './types';

export const Sun20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_321_178)">
          <g stroke={color} clipPath="url(#clip1_321_178)" strokeWidth="1.5">
            <circle cx="10" cy="10" r="3.25" />
            <path
              d="M10 3V1M17 10H19M1 10L3 10M10 19V17M14.9497 5.05025L16.364 3.63604M14.9498 14.9497L16.364 16.364M3.63605 3.63604L5.05026 5.05025M3.63602 16.364L5.05023 14.9497"
              strokeLinecap="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_321_178">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
          <clipPath id="clip1_321_178">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Sun20;
