import * as React from 'react';
import { IconProps } from './types';

export const Apps20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.99994 0.75V3.75M9.99994 3.75C8.20502 3.75 6.74994 5.20507 6.74994 7C6.74994 8.79493 8.20502 10.25 9.99994 10.25C11.7949 10.25 13.2499 8.79493 13.2499 7C13.2499 5.20507 11.7949 3.75 9.99994 3.75ZM8.23941 9.7323L3.74994 19.25M16.2499 19.25L11.7605 9.7323M17 12C17 12 15.0295 16 10 16C4.97049 16 3 12 3 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps20;
