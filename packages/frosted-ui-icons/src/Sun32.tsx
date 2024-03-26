import * as React from 'react';
import { IconProps } from './types';

export const Sun32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          r="5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6.25L16 1.75M22.8943 9.10571L26.0763 5.92373M6.25 16L1.75 16M9.10571 9.10571L5.92373 5.92373M16 30.25L16 25.75M5.92371 26.0763L9.10569 22.8943M30.25 16L25.75 16M26.0763 26.0763L22.8943 22.8943"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sun32;
