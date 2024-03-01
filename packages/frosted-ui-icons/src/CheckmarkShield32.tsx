import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkShield32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.9565 2.58907C12.5758 5.86364 8.15762 7.59847 5.81021 8.32613C4.90793 8.60582 4.25 9.42563 4.25 10.3703V12C4.25 19.8381 8.56524 27.7855 16.0368 30.1544C16.2325 30.2165 16.3894 30.25 16.5 30.25C16.6106 30.25 16.7675 30.2165 16.9632 30.1544C24.4348 27.7855 28.75 19.8381 28.75 12V10.3703C28.75 9.42563 28.0921 8.60582 27.1898 8.32613C24.8424 7.59847 20.4242 5.86364 18.0435 2.58907C17.6799 2.08891 17.1184 1.75 16.5 1.75C15.8816 1.75 15.3201 2.08891 14.9565 2.58907Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.75 16.25L15 20.75L23.25 12.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CheckmarkShield32;
