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
          d="M0.75 6.36C0.75 4.64239 2.14239 3.25 3.86 3.25H20.14C21.8576 3.25 23.25 4.64239 23.25 6.36V17.64C23.25 19.3576 21.8576 20.75 20.14 20.75H3.86C2.1424 20.75 0.75 19.3576 0.75 17.64V6.36Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 7.75L9.52683 13.5108C10.2615 13.9931 11.1212 14.25 12 14.25V14.25C12.8788 14.25 13.7385 13.9931 14.4732 13.5108L23.25 7.75"
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
