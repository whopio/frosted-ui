import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.625 5.74997L5.5 6.62497L7.375 4.74999M10.125 5.95617V3.47075C10.125 3.04032 9.84955 2.65818 9.44125 2.52206L6.31625 1.4804C6.11095 1.41197 5.88905 1.41197 5.68375 1.4804L2.55877 2.52206C2.15043 2.65818 1.875 3.04032 1.875 3.47075V5.95617C1.875 8.44237 4 9.62497 6 10.7039C8 9.62497 10.125 8.44237 10.125 5.95617Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ShieldCheckmark12;
