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
          d="M0.75 8.25H19.25M4.75 12.75H8.25M3 16.25H17C18.2426 16.25 19.25 15.2426 19.25 14V6C19.25 4.75736 18.2426 3.75 17 3.75H3C1.75736 3.75 0.75 4.75736 0.75 6V14C0.75 15.2426 1.75736 16.25 3 16.25ZM2.88 16.25H17.12C18.2964 16.25 19.25 15.2964 19.25 14.12V5.88C19.25 4.70363 18.2964 3.75 17.12 3.75H2.88C1.70363 3.75 0.75 4.70363 0.75 5.88V14.12C0.75 15.2964 1.70363 16.25 2.88 16.25Z"
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
