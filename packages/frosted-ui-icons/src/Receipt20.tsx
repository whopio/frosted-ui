import * as React from 'react';
import { IconProps } from './types';

export const Receipt20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.16669 17.0066L2.75 18.875V1.125L5.16669 2.99342 7.58335 1.125 10 2.99342 12.4167 1.125 14.8333 2.99342 17.25 1.125V18.875L14.8333 17.0066 12.4167 18.875 10 17.0066 7.58335 18.875 5.16669 17.0066zM6.5 6.75H13.5M6.5 10H13.5M6.5 13.25H10.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Receipt20;
