import * as React from 'react';
import { IconProps } from './types';

export const Parachute20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 10.25L5.75 14.75M1.75 10.25C1.75 10.25 2 1.75 10 1.75C18 1.75 18.25 10.25 18.25 10.25M1.75 10.25C1.75 10.25 2.5 8.25 5.875 8.25C9.25 8.25 10 10.25 10 10.25M14.25 14.75L18.25 10.25M18.25 10.25C18.25 10.25 17.5 8.25 14.125 8.25C10.75 8.25 10 10.25 10 10.25M10 10.25V14.75M5.75 15.25V17.45C5.75 17.8918 6.10817 18.25 6.55 18.25H13.45C13.8918 18.25 14.25 17.8918 14.25 17.45V15.25C14.25 14.9739 14.0261 14.75 13.75 14.75H6.25C5.97386 14.75 5.75 14.9739 5.75 15.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Parachute20;
