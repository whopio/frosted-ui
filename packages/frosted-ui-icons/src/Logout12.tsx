import * as React from 'react';
import { IconProps } from './types';

export const Logout12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 3.38095V2.28C7 1.57308 6.42692 1 5.72 1H2.28C1.57308 1 1 1.57308 1 2.28V9.72C1 10.4269 1.57308 11 2.28 11H5.72C6.42692 11 7 10.4269 7 9.72V8.61905M4.75 6H11.25M11.25 6L8.75 3.75M11.25 6L8.75 8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout12;
