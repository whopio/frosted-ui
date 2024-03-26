import * as React from 'react';
import { IconProps } from './types';

export const Upload32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.25 17.75L3.25 25.68C3.25 27.6516 4.84834 29.25 6.82 29.25L25.18 29.25C27.1517 29.25 28.75 27.6516 28.75 25.68L28.75 17.75M16 21.25L16 2.74998M16 2.74998L8.75 10.25M16 2.74998L23.25 10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload32;
