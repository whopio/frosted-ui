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
          d="M6 10.25C5 8.99999 2 8.99999 0.75 10.25V3.00001C1.5 1.4238 5 1.4238 6 3.00021M6 10.25C7 8.99999 10 8.99999 11.25 10.25V3.00001C10.5 1.42378 7 1.42381 6 3.00021M6 10.25V3.00021"
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
