import * as React from 'react';
import { IconProps } from './types';

export const CreditCard16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 6.25H15.25M3.75 9.75H6.25M2.54 13.25H13.46C14.4486 13.25 15.25 12.4486 15.25 11.46V4.54C15.25 3.55141 14.4486 2.75 13.46 2.75H2.54C1.55141 2.75 0.75 3.55141 0.75 4.54V11.46C0.75 12.4486 1.55141 13.25 2.54 13.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CreditCard16;
