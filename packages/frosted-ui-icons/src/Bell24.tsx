import * as React from 'react';
import { IconProps } from './types';

export const Bell24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75 19.25V20C8.75 21.7949 10.2051 23.25 12 23.25V23.25C13.7949 23.25 15.25 21.7949 15.25 20V19.25M20.25 15.7654V10C20.25 5.44365 16.5563 1.75 12 1.75 7.44365 1.75 3.75 5.44365 3.75 10V15.7654C3.75 16.4648 3.55444 17.1502 3.1854 17.7443L2.82891 18.3181C2.57648 18.7245 2.86869 19.25 3.34706 19.25H20.6529C21.1313 19.25 21.4235 18.7245 21.1711 18.3181L20.8146 17.7443C20.4456 17.1502 20.25 16.4648 20.25 15.7654z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bell24;
