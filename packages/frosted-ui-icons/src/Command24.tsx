import * as React from 'react';
import { IconProps } from './types';

export const Command24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 6C2.75 4.20507 4.20507 2.75 6 2.75V2.75C7.79493 2.75 9.25 4.20507 9.25 6V9.25H6C4.20507 9.25 2.75 7.79493 2.75 6V6zM2.75 18C2.75 19.7949 4.20507 21.25 6 21.25V21.25C7.79493 21.25 9.25 19.7949 9.25 18V14.75H6C4.20507 14.75 2.75 16.2051 2.75 18V18zM21.25 6C21.25 4.20507 19.7949 2.75 18 2.75V2.75C16.2051 2.75 14.75 4.20507 14.75 6V9.25H18C19.7949 9.25 21.25 7.79493 21.25 6V6zM14.75 9.25L14.75 14.75H9.25V9.25H14.75zM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25V21.25C16.2051 21.25 14.75 19.7949 14.75 18V14.75H18C19.7949 14.75 21.25 16.2051 21.25 18V18z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Command24;
