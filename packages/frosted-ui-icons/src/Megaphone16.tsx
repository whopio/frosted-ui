import * as React from 'react';
import { IconProps } from './types';

export const Megaphone16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M.75 5.25V9.75C.75 10.5784 1.42157 11.25 2.25 11.25 3.07843 11.25 3.75 10.5784 3.75 9.75V5.25C3.75 4.42157 3.07843 3.75 2.25 3.75 1.42157 3.75.75 4.42157.75 5.25zM6.75 11.5V14.25M11.25 12.5L3.75 9.75M3.75 5.74997L11.25 3M11.25 2.25V12.75C11.25 13.5784 11.9216 14.25 12.75 14.25 13.5784 14.25 14.25 13.5784 14.25 12.75V2.25C14.25 1.42157 13.5784.75 12.75.75 11.9216.75 11.25 1.42157 11.25 2.25z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Megaphone16;