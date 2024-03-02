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
          d="M2.75 21L6.80723 16.3783C7.43677 15.6611 8.34475 15.25 9.299 15.25C10.2089 15.25 11.0788 15.6239 11.7049 16.2842L24 29.25M16.5 21L18.5825 18.4376C19.1931 17.6863 20.1098 17.25 21.0781 17.25C21.9687 17.25 22.8194 17.6194 23.4275 18.27L29.25 24.5M2.75 7.75V24.25C2.75 27.0114 4.98858 29.25 7.75 29.25H24.25C27.0114 29.25 29.25 27.0114 29.25 24.25V7.75C29.25 4.98858 27.0114 2.75 24.25 2.75H7.75C4.98858 2.75 2.75 4.98858 2.75 7.75ZM21.25 10C21.25 11.7949 19.7949 13.25 18 13.25C16.2051 13.25 14.75 11.7949 14.75 10C14.75 8.20507 16.2051 6.75 18 6.75C19.7949 6.75 21.25 8.20507 21.25 10Z"
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
