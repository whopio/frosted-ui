import * as React from 'react';
import { IconProps } from './types';

export const LocationPin24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M19.75 9.5C19.75 16.0302 12 22.25 12 22.25C12 22.25 4.25 16.0302 4.25 9.5C4.25 5.21979 7.71979 1.75 12 1.75C16.2802 1.75 19.75 5.21979 19.75 9.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="9.5"
          r="3.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LocationPin24;
