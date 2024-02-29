import * as React from 'react';
import { IconProps } from './types';

export const CreditCard12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 3.7C.75 2.89919 1.39919 2.25 2.2 2.25H9.8C10.6008 2.25 11.25 2.89919 11.25 3.7V8.8C11.25 9.60081 10.6008 10.25 9.8 10.25H2.2C1.39919 10.25.75 9.60081.75 8.8V3.7zM.75 5.25H11.25M3.75 7.75H4.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CreditCard12;
