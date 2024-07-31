import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.49989 1.83331H6.49992C6.13172 1.83331 5.83325 2.13179 5.83325 2.49998V9.16665H3.56017C3.27503 9.16665 3.12152 9.50145 3.30758 9.71751L7.49476 14.58C7.76069 14.8888 8.23909 14.8888 8.50509 14.58L12.6922 9.71751C12.8783 9.50145 12.7248 9.16665 12.4396 9.16665H10.1666V2.49998C10.1666 2.13179 9.86809 1.83331 9.49989 1.83331Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowFatDown16;
