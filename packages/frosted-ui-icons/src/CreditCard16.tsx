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
          d="M.75 4.54C.75 3.55141 1.55141 2.75 2.54 2.75H13.46C14.4486 2.75 15.25 3.55141 15.25 4.54V11.46C15.25 12.4486 14.4486 13.25 13.46 13.25H2.54C1.55141 13.25.75 12.4486.75 11.46V4.54zM.75 6.25H15.25M3.75 9.75H6.25"
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
