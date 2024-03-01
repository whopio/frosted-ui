import * as React from 'react';
import { IconProps } from './types';

export const CreditCard20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 6C.75 4.75736 1.75736 3.75 3 3.75H17C18.2426 3.75 19.25 4.75736 19.25 6V14C19.25 15.2426 18.2426 16.25 17 16.25H3C1.75736 16.25.75 15.2426.75 14V6zM.75 8.25H19.25M4.75 12.75H8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M.75 5.88C.75 4.70363 1.70363 3.75 2.88 3.75H17.12C18.2964 3.75 19.25 4.70363 19.25 5.88V14.12C19.25 15.2964 18.2964 16.25 17.12 16.25H2.88C1.70363 16.25.75 15.2964.75 14.12V5.88zM.75 8.25H19.25M4.75 12.75H8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CreditCard20;
