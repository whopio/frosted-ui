import * as React from 'react';
import { IconProps } from './types';

export const LocationPin20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M3.25 8.25C3.25 13.2279 10 18.75 10 18.75C10 18.75 16.7498 13.2279 16.7498 8.25C16.7498 4.27208 13.7279 1.25 10 1.25C6.27208 1.25 3.25 4.27208 3.25 8.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="8"
          r="2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LocationPin20;
