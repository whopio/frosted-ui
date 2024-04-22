import * as React from 'react';
import { IconProps } from './types';

export const ProfileX20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.6677 13.3334L15.001 15M15.001 15L13.3343 16.6667M15.001 15L13.3343 13.3334M15.001 15L16.6677 16.6667M9.878 11.0428C7.11285 11.0907 5.01819 12.7549 4.15305 15.0941C3.81238 16.0152 4.59886 16.875 5.58096 16.875H10.2093M9.878 11.0428C9.91883 11.042 9.95983 11.0417 10.001 11.0417C10.4344 11.0417 10.8517 11.0812 11.251 11.1566M9.878 11.0428C9.33625 11.0522 8.8205 11.1236 8.33441 11.25M13.126 5.41669C13.126 7.14258 11.7268 8.54169 10.001 8.54169C8.27509 8.54169 6.87598 7.14258 6.87598 5.41669C6.87598 3.6908 8.27509 2.29169 10.001 2.29169C11.7268 2.29169 13.126 3.6908 13.126 5.41669Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ProfileX20;
