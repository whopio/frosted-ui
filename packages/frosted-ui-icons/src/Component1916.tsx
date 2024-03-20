import * as React from 'react';
import { IconProps } from './types';

export const Component1916 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M8 5.75L8 9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="12" r="1" fill={color} />
        <path
          d="M9.12182 2.40133L15.0821 12.8415C15.1921 13.0342 15.25 13.2522 15.25 13.4741C15.25 14.1788 14.6788 14.75 13.9741 14.75H2.02592C1.32125 14.75 0.75 14.1788 0.75 13.4741C0.75 13.2522 0.807856 13.0342 0.917858 12.8415L6.87813 2.40133C7.10806 1.99859 7.53622 1.75 7.99998 1.75C8.46373 1.75 8.8919 1.99859 9.12182 2.40133Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Component1916;
