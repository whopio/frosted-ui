import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="12"
          cy="12"
          r="10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7085 19.75L19.1996 20.3169C19.3641 20.1744 19.4585 19.9676 19.4585 19.75C19.4585 19.5324 19.3641 19.3256 19.1996 19.1831L18.7085 19.75ZM5.29163 19.75L4.80053 19.1831C4.6361 19.3256 4.54163 19.5324 4.54163 19.75C4.54163 19.9676 4.6361 20.1744 4.80053 20.3169L5.29163 19.75ZM18.2174 19.1831C16.5508 20.6271 14.3783 21.5 12.0001 21.5V23C14.7526 23 17.2707 21.988 19.1996 20.3169L18.2174 19.1831ZM12.0001 21.5C9.62185 21.5 7.44938 20.6271 5.78273 19.1831L4.80053 20.3169C6.72948 21.988 9.24754 23 12.0001 23V21.5ZM5.78273 20.3169C7.44938 18.8729 9.62185 18 12.0001 18V16.5C9.24754 16.5 6.72948 17.512 4.80053 19.1831L5.78273 20.3169ZM12.0001 18C14.3783 18 16.5508 18.8729 18.2174 20.3169L19.1996 19.1831C17.2707 17.512 14.7526 16.5 12.0001 16.5V18Z"
          fill={color}
        />
        <circle
          cx="12"
          cy="10.5"
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

export default ProfileCircle24;
