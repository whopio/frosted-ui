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
        <g clipPath="url(#clip0_16_219)">
          <path
            d="M1 12.25L3.65826 8.8917C4.10409 8.32846 4.78299 8 5.50132 8C6.14019 8 6.75153 8.26004 7.19464 8.72027L13 14.75M0.75 3.49V12.51C0.75 14.0233 1.97674 15.25 3.49 15.25H12.51C14.0233 15.25 15.25 14.0233 15.25 12.51V3.49C15.25 1.97674 14.0233 0.75 12.51 0.75H3.49C1.97674 0.75 0.75 1.97674 0.75 3.49ZM12.25 5.5C12.25 6.4665 11.4665 7.25 10.5 7.25C9.5335 7.25 8.75 6.4665 8.75 5.5C8.75 4.5335 9.5335 3.75 10.5 3.75C11.4665 3.75 12.25 4.5335 12.25 5.5Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
