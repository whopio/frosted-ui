import * as React from 'react';
import { IconProps } from './types';

export const Profile20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 16.5448C1.75 15.9484 1.94714 15.3649 2.40969 14.9884C3.44993 14.1415 5.79844 12.75 10 12.75C14.2016 12.75 16.5501 14.1415 17.5903 14.9884C18.0529 15.3649 18.25 15.9484 18.25 16.5448V16.5448C18.25 18.0389 17.0389 19.25 15.5448 19.25H4.45518C2.96115 19.25 1.75 18.0389 1.75 16.5448V16.5448Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="10"
          cy="5.5"
          r="4.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile20;
