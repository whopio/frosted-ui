import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircleSize20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.66668 10V9.99166M6.87501 10C6.87501 10.1151 6.78174 10.2083 6.66668 10.2083 6.55162 10.2083 6.45834 10.1151 6.45834 10 6.45834 9.88491 6.55162 9.79166 6.66668 9.79166 6.78174 9.79166 6.87501 9.88491 6.87501 10zM9.99999 10V9.99166M10.2083 10C10.2083 10.1151 10.1151 10.2083 9.99999 10.2083 9.88491 10.2083 9.79166 10.1151 9.79166 10 9.79166 9.88491 9.88491 9.79166 9.99999 9.79166 10.1151 9.79166 10.2083 9.88491 10.2083 10zM13.3333 10V9.99166M13.5417 10C13.5417 10.1151 13.4484 10.2083 13.3333 10.2083 13.2182 10.2083 13.125 10.1151 13.125 10 13.125 9.88491 13.2182 9.79166 13.3333 9.79166 13.4484 9.79166 13.5417 9.88491 13.5417 10z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.7083 10C17.7083 14.2572 14.2572 17.7083 9.99999 17.7083C5.7428 17.7083 2.29166 14.2572 2.29166 10C2.29166 5.74281 5.7428 2.29166 9.99999 2.29166C14.2572 2.29166 17.7083 5.74281 17.7083 10Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircleSize20;
