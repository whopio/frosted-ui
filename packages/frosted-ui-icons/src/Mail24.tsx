import * as React from 'react';
import { IconProps } from './types';

export const Mail24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0.75 7.75L9.52683 13.5108C10.2615 13.9931 11.1212 14.25 12 14.25C12.8788 14.25 13.7385 13.9931 14.4732 13.5108L23.25 7.75M3.86 20.75H20.14C21.8576 20.75 23.25 19.3576 23.25 17.64V6.36C23.25 4.64239 21.8576 3.25 20.14 3.25H3.86C2.14239 3.25 0.75 4.64239 0.75 6.36V17.64C0.75 19.3576 2.1424 20.75 3.86 20.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail24;
