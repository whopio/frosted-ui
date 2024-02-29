import * as React from 'react';
import { IconProps } from './types';

export const Parachute12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25003 10.7399V8.74991H8.74997V10.7399C8.74997 11.0216 8.52164 11.2499 8.23998 11.2499H3.76002C3.47836 11.2499 3.25003 11.0216 3.25003 10.7399Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M.750053 5.99994L3.25003 8.74991M8.74997 8.74991L11.2499 5.99994M6 5.74994V8.74991M11.2499 5.99994C11.2499 5.99994 10.4162 4.74995 8.62497 4.74995 6.83372 4.74995 6 5.99994 6 5.99994 6 5.99994 5.16628 4.74995 3.37503 4.74995 1.58377 4.74995.750053 5.99994.750053 5.99994"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.750053 5.99994C0.750053 5.99994 1.00005 0.749992 6 0.749992C10.9999 0.749992 11.2499 5.99994 11.2499 5.99994"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Parachute12;
