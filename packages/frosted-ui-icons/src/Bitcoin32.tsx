import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle
          cx="16"
          cy="16"
          r="14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.75 9.5H19C20.7949 9.5 22.25 10.9551 22.25 12.75V12.75C22.25 14.5449 20.7949 16 19 16H12M9.75 22.5H19C20.7949 22.5 22.25 21.0449 22.25 19.25V19.25C22.25 17.4551 20.7949 16 19 16H12M11.75 9.49986L11.7896 22.5001M13.25 6.99986L13.25 9.5M13.25 22.5L13.25 25.0001M18.75 6.99986L18.75 9.5M18.75 22.5L18.75 25.0001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bitcoin32;
