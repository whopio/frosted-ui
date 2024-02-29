import * as React from 'react';
import { IconProps } from './types';

export const Book12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 10.25V3C1.5 1.4238 5 1.4238 6 3.0002 7 1.4238 10.5 1.42377 11.25 3V10.25C10 8.99998 7 8.99998 6 10.25 5 8.99998 2 8.99998.75 10.25zM6 3L6 10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book12;
