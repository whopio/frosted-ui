import * as React from 'react';
import { IconProps } from './types';

export const ProfileCircle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="16"
          cy="16"
          r="14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.3544 26.75L25.847 27.3156C26.0106 27.1731 26.1044 26.9669 26.1044 26.75C26.1044 26.5331 26.0106 26.3269 25.847 26.1844L25.3544 26.75ZM6.64551 26.75L6.15294 26.1844C5.98939 26.3269 5.89551 26.5331 5.89551 26.75C5.89551 26.9669 5.98939 27.1731 6.15294 27.3156L6.64551 26.75ZM24.8619 26.1844C22.4902 28.25 19.392 29.5 16 29.5V31C19.7677 31 23.2127 29.6099 25.847 27.3156L24.8619 26.1844ZM16 29.5C12.608 29.5 9.50977 28.25 7.13808 26.1844L6.15294 27.3156C8.78729 29.6099 12.2322 31 16 31V29.5ZM7.13808 27.3156C9.50977 25.25 12.608 24 16 24V22.5C12.2322 22.5 8.78729 23.8901 6.15294 26.1844L7.13808 27.3156ZM16 24C19.392 24 22.4902 25.25 24.8619 27.3156L25.847 26.1844C23.2127 23.8901 19.7677 22.5 16 22.5V24Z"
          fill={color}
        />
        <circle
          cx="16"
          cy="14"
          r="4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileCircle32;
