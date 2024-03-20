import * as React from 'react';
import { IconProps } from './types';

export const Happy32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle cx="9.5" cy="17.5" r="1.5" fill={color} />
        <circle cx="22.499" cy="17.5" r="1.5" fill={color} />
        <path
          d="M20.25 21.75C20.25 21.75 19 24.25 16 24.25C13 24.25 11.75 21.75 11.75 21.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Happy32;
