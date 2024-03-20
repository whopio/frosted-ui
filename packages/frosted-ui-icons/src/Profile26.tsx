import * as React from 'react';
import { IconProps } from './types';

export const Profile26 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.75 13.1164C1.75 12.7137 1.86353 12.316 2.15774 12.041C2.86173 11.3829 4.57163 10.25 8 10.25C11.4284 10.25 13.1383 11.3829 13.8423 12.041C14.1365 12.316 14.25 12.7137 14.25 13.1164V13.1164C14.25 14.2948 13.2948 15.25 12.1164 15.25H3.88356C2.70523 15.25 1.75 14.2948 1.75 13.1164V13.1164Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="8"
          cy="4.5"
          r="3.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile26;
