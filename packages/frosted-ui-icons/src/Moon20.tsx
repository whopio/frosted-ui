import * as React from 'react';
import { IconProps } from './types';

export const Moon20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.7068 9.84266C16.8241 10.4667 15.7465 10.8333 14.5834 10.8333C11.5918 10.8333 9.16669 8.40824 9.16669 5.41666C9.16669 4.25346 9.53335 3.17589 10.1574 2.29323C10.105 2.29218 10.0526 2.29166 10 2.29166C5.74283 2.29166 2.29169 5.7428 2.29169 9.99999C2.29169 14.2572 5.74283 17.7083 10 17.7083C14.2572 17.7083 17.7084 14.2572 17.7084 9.99999C17.7084 9.94741 17.7079 9.89499 17.7068 9.84266Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon20;
