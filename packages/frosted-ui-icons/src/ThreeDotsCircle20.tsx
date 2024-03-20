import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66665 10V9.99166M6.87498 10C6.87498 10.1151 6.7817 10.2083 6.66665 10.2083 6.55159 10.2083 6.45831 10.1151 6.45831 10 6.45831 9.88491 6.55159 9.79166 6.66665 9.79166 6.7817 9.79166 6.87498 9.88491 6.87498 10zM10 10V9.99166M10.2084 10C10.2084 10.1151 10.1151 10.2083 10 10.2083 9.88494 10.2083 9.79169 10.1151 9.79169 10 9.79169 9.88491 9.88494 9.79166 10 9.79166 10.1151 9.79166 10.2084 9.88491 10.2084 10zM13.3333 10V9.99166M13.5417 10C13.5417 10.1151 13.4484 10.2083 13.3333 10.2083 13.2182 10.2083 13.125 10.1151 13.125 10 13.125 9.88491 13.2182 9.79166 13.3333 9.79166 13.4484 9.79166 13.5417 9.88491 13.5417 10z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.7084 10C17.7084 14.2572 14.2572 17.7083 10 17.7083C5.74283 17.7083 2.29169 14.2572 2.29169 10C2.29169 5.74281 5.74283 2.29166 10 2.29166C14.2572 2.29166 17.7084 5.74281 17.7084 10Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircle20;
