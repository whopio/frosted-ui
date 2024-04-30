import * as React from 'react';
import { IconProps } from './types';

export const Reply32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.55278 15.5033L13.888 5.33062C14.3172 4.94542 14.9999 5.25005 14.9999 5.82678V11.3327C26.3332 11.3327 29.3332 15.6661 29.3332 26.9994C27.3332 22.9994 26.3332 20.6661 14.9999 20.6661V26.172C14.9999 26.7488 14.3172 27.0534 13.888 26.6682L2.55278 16.4956C2.25759 16.2306 2.25759 15.7681 2.55278 15.5033Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply32;
