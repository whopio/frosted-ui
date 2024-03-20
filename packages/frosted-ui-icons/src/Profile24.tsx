import * as React from 'react';
import { IconProps } from './types';

export const Profile24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2 19.7425C2 18.9007 2.30513 18.0819 2.99624 17.6013C4.35429 16.6569 7.18534 15.25 12 15.25C16.8147 15.25 19.6457 16.6569 21.0038 17.6013C21.6949 18.0819 22 18.9007 22 19.7425V19.7425C22 21.6796 20.4296 23.25 18.4925 23.25H5.50753C3.57037 23.25 2 21.6796 2 19.7425V19.7425Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="6.5"
          r="5.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile24;
