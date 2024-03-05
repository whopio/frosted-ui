import * as React from 'react';
import { IconProps } from './types';

export const Logout20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 6V4.01C12 2.89991 11.1001 2 9.99 2H5.01C3.89991 2 3 2.89991 3 4.01V15.99C3 17.1001 3.89991 18 5.01 18H9.99C11.1001 18 12 17.1001 12 15.99V14M8.75 10H18.25M18.25 10L14.75 6.75M18.25 10L14.75 13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout20;
