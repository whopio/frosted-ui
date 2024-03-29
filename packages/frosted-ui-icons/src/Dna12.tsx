import * as React from 'react';
import { IconProps } from './types';

export const Dna12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.99995 6C4.54169 4.89473 2.25 3.79011 2.25.75M2.25 11.25C2.25 8.20989 4.54169 7.10527 5.99995 6 7.4582 4.89474 9.74997 3.79011 9.74997.75M9.74993 11.25C9.74993 9.37413 8.87736 8.23517 7.86646 7.37827M9.375 2.25L2.625 2.25M2.625 9.75L9.375 9.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna12;
