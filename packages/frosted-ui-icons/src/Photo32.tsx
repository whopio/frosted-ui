import * as React from 'react';
import { IconProps } from './types';

export const Photo32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 24.25V7.75C2.75 4.98858 4.98858 2.75 7.75 2.75H24.25C27.0114 2.75 29.25 4.98858 29.25 7.75V24.25C29.25 27.0114 27.0114 29.25 24.25 29.25H7.75C4.98858 29.25 2.75 27.0114 2.75 24.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.75 21L6.80723 16.3783C7.43677 15.6611 8.34475 15.25 9.299 15.25V15.25C10.2089 15.25 11.0788 15.6239 11.7049 16.2842L24 29.25M16.5 21L18.5825 18.4376C19.1931 17.6863 20.1098 17.25 21.0781 17.25V17.25C21.9687 17.25 22.8194 17.6194 23.4275 18.27L29.25 24.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="18"
          cy="10"
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

export default Photo32;
