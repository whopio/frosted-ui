import * as React from 'react';
import { IconProps } from './types';

export const Split32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M29.25 24.5H22.562C21.1396 24.5 19.8338 23.7138 19.1682 22.4567L15.75 16 19.1682 9.54331C19.8338 8.28623 21.1396 7.5 22.562 7.5H29.25M29.25 24.5L24.75 29.25M29.25 24.5L24.75 19.75M29.25 7.5L24.75 12.25M29.25 7.5L24.75 2.75M15.75 16L10.75 16"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="6.5"
          cy="16"
          r="4.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Split32;
