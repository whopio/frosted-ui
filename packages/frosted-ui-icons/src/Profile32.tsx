import * as React from 'react';
import { IconProps } from './types';

export const Profile32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 26.8049C2.75 25.7982 3.09393 24.8137 3.88932 24.1966C5.6036 22.8667 9.37289 20.75 16 20.75C22.6271 20.75 26.3964 22.8667 28.1107 24.1966C28.9061 24.8137 29.25 25.7982 29.25 26.8049V26.8049C29.25 29.2599 27.2599 31.25 24.8049 31.25H7.19509C4.74014 31.25 2.75 29.2599 2.75 26.8049V26.8049Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="9"
          r="7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Profile32;
