import * as React from 'react';
import { IconProps } from './types';

export const Sun12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="6"
          cy="6"
          r="2.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 1.75L6 .750006M2.99475 2.99481L2.28765 2.28771M1.75 6L.750006 6M2.99481 9.00519L2.28771 9.71229M6 11.25L6 10.25M9.71228 9.71228L9.00518 9.00518M11.25 6L10.25 6M9.71228 2.28766L9.00518 2.99476"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Sun12;
