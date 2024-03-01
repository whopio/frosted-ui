import * as React from 'react';
import { IconProps } from './types';

export const Parachute32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 28.86V24.25C8.75 23.9739 8.97386 23.75 9.25 23.75H22.75C23.0261 23.75 23.25 23.9739 23.25 24.25V28.86C23.25 29.6277 22.6277 30.25 21.86 30.25H10.14C9.37232 30.25 8.75 29.6277 8.75 28.86zM1.75 16.25L8.75 23.75M23.25 23.75L30.25 16.25M16 16.25V23.75M1.75 16.25C1.75 16.25 2.32317 1.75 16 1.75 29.6768 1.75 30.25 16.25 30.25 16.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.2499 16.25C30.2499 16.25 28.1485 12.75 23.1249 12.75C18.1013 12.75 15.9999 16.25 15.9999 16.25C15.9999 16.25 13.8986 12.75 8.875 12.75C3.85137 12.75 1.75 16.25 1.75 16.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Parachute32;