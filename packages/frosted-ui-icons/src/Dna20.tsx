import * as React from 'react';
import { IconProps } from './types';

export const Dna20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 10C7.70846 8.26316 4.24998 5.95835 4.24998 1.75M4.25003 18.25C4.25003 14.0416 7.7085 11.7368 10 10 12.2916 8.26315 15.7499 5.95835 15.7499 1.75M15.7499 18.25C15.7499 15.3684 14.1284 13.3793 12.3704 11.8539M15.5 3.25L4.5 3.25M4.49988 16.75L15.4999 16.75M14.1 6.25L5.89998 6.25M5.8999 13.75L14.0999 13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna20;
