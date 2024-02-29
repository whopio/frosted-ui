import * as React from 'react';
import { IconProps } from './types';

export const Photo16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_16_219)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0.75 12.51V3.49C0.75 1.97674 1.97674 0.75 3.49 0.75H12.51C14.0233 0.75 15.25 1.97674 15.25 3.49V12.51C15.25 14.0233 14.0233 15.25 12.51 15.25H3.49C1.97674 15.25 0.75 14.0233 0.75 12.51Z" />
          <path d="M1 12.25L3.65826 8.8917C4.10409 8.32846 4.78299 8 5.50132 8V8C6.14019 8 6.75153 8.26004 7.19464 8.72027L13 14.75" />
          <circle cx="10.5" cy="5.5" r="1.75" />
        </g>
        <defs>
          <clipPath id="clip0_16_219">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Photo16;
