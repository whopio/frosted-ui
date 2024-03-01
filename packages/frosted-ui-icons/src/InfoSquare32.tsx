import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M18.25 13.75V24.2499M14.75 13.75V24.2499M18.25 13.75H12.75M12.75 24.2499L20.25 24.2499"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16.5"
          cy="9.504"
          r="1.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.25 25.68V6.32C3.25 4.34834 4.84834 2.75 6.82 2.75H26.18C28.1517 2.75 29.75 4.34834 29.75 6.32V25.68C29.75 27.6517 28.1517 29.25 26.18 29.25H6.82C4.84834 29.25 3.25 27.6517 3.25 25.68Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default InfoSquare32;
