import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleRight32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.75 20H27.75C29.1307 20 30.25 18.8807 30.25 17.5V5.75002M1.75 20L8.25 26.25M1.75 20L8.25 13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownAngleRight32;
