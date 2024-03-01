import * as React from 'react';
import { IconProps } from './types';

export const Split12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M11.25 9.25H8.44055C7.86718 9.25 7.34613 8.91662 7.10585 8.39602L6 6L7.10585 3.60399C7.34613 3.08338 7.86718 2.75 8.44055 2.75H11.25M11.25 9.25L9.75 11.25M11.25 9.25L9.75 7.25M11.25 2.75L9.75 4.75M11.25 2.75L9.75 0.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="2.5"
          cy="6"
          r="1.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.75003 6L4.25 6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Split12;
