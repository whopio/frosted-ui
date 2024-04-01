import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="10"
          cy="10"
          r="8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3853 16.25L15.8751 16.818C16.0403 16.6755 16.1353 16.4682 16.1353 16.25C16.1353 16.0319 16.0403 15.8245 15.8751 15.6821L15.3853 16.25ZM4.6145 16.25L4.12468 15.6821C3.95948 15.8245 3.8645 16.0319 3.8645 16.25C3.8645 16.4682 3.95948 16.6755 4.12468 16.818L4.6145 16.25ZM14.8954 15.6821C13.5813 16.8154 11.8715 17.5 9.99988 17.5V19C12.2445 19 14.2989 18.1773 15.8751 16.818L14.8954 15.6821ZM9.99988 17.5C8.1283 17.5 6.41849 16.8154 5.10433 15.6821L4.12468 16.818C5.70084 18.1773 7.75523 19 9.99988 19V17.5ZM5.10433 16.818C6.41849 15.6846 8.1283 15 9.99988 15V13.5C7.75523 13.5 5.70084 14.3227 4.12468 15.6821L5.10433 16.818ZM9.99988 15C11.8715 15 13.5813 15.6846 14.8954 16.818L15.8751 15.6821C14.2989 14.3227 12.2445 13.5 9.99988 13.5V15Z"
          fill={color}
        />
        <circle
          cx="10"
          cy="9"
          r="2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileCircle20;
