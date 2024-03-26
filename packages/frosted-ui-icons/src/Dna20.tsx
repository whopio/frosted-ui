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
          d="M10 10C7.70846 8.26316 4.24998 5.95835 4.24998 1.75M4.24997 18.25C4.24997 14.0416 7.70844 11.7368 9.99998 10 12.2915 8.26315 15.7498 5.95835 15.7498 1.75M15.7498 18.25C15.7498 15.3684 14.1284 13.3793 12.3703 11.8539M15.5 3.25L4.5 3.25M4.49985 16.75L15.4998 16.75M14.1 6.25L5.89998 6.25M5.89984 13.75L14.0998 13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna20;
