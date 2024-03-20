import * as React from 'react';
import { IconProps } from './types';

export const LockOpen12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 6.95C1.75 6.01112 2.51112 5.25 3.45 5.25H8.55C9.48888 5.25 10.25 6.01112 10.25 6.95V9.55C10.25 10.4889 9.48888 11.25 8.55 11.25H3.45C2.51112 11.25 1.75 10.4889 1.75 9.55V6.95zM3.25 5.25V3.5C3.25 1.98122 4.48122.75 6 .75 7.19961.75 8.21983 1.51812 8.59564 2.58935"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LockOpen12;
