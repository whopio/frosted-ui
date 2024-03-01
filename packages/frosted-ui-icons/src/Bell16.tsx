import * as React from 'react';
import { IconProps } from './types';

export const Bell16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_1_6748)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13.25 9.68619V6C13.25 3.1005 10.8995.75 8 .75 5.10051.75 2.75 3.10051 2.75 6V9.68619C2.75 10.1068 2.60904 10.5153 2.34963 10.8464L1.83264 11.5063C1.59611 11.8082 1.81121 12.25 2.19475 12.25H13.8053C14.1888 12.25 14.4039 11.8082 14.1674 11.5063L13.6504 10.8464C13.391 10.5153 13.25 10.1068 13.25 9.68619zM5.75 12.25V13C5.75 14.2426 6.75736 15.25 8 15.25V15.25C9.24264 15.25 10.25 14.2426 10.25 13V12.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_6748">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Bell16;
