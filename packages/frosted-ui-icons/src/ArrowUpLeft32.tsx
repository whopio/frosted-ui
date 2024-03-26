import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpLeft32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M23.955 23.9549L8.04507 8.04504M8.04507 8.04504L8.22184 19.8891M8.04507 8.04504L19.8891 8.22182"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowUpLeft32;
