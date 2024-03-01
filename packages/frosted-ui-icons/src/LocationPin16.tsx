import * as React from 'react';
import { IconProps } from './types';

export const LocationPin16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.75 6.25C13.75 10.8995 8 15.25 8 15.25C8 15.25 2.25 10.8995 2.25 6.25C2.25 2.85051 5.10051 0.75 8 0.75C10.8995 0.75 13.75 2.85051 13.75 6.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="6.5"
          r="2.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LocationPin16;
