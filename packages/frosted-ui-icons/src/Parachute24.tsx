import * as React from 'react';
import { IconProps } from './types';

export const Parachute24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.75 21.25V18.25C6.75 17.9739 6.97386 17.75 7.25 17.75H16.75C17.0261 17.75 17.25 17.9739 17.25 18.25V21.25C17.25 21.8023 16.8023 22.25 16.25 22.25H7.75C7.19772 22.25 6.75 21.8023 6.75 21.25zM1.75 12.25L6.75 17.75M17.25 17.75L22.25 12.25M12 12.25V17.75M1.75 12.25C1.75 12.25 2 1.75 12 1.75 22 1.75 22.25 12.25 22.25 12.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.25 12.25C22.25 12.25 21 9.75001 17.125 9.75001C13.25 9.75001 12 12.25 12 12.25C12 12.25 10.7502 9.75 6.87518 9.75C3.00018 9.75 1.75018 12.25 1.75018 12.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Parachute24;
