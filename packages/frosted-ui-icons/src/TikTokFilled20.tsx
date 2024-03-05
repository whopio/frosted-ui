import * as React from 'react';
import { IconProps } from './types';

export const TikTokFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_215_29)">
          <path
            d="M17.875 8.63281H17.8398C16.2227 8.63281 14.7461 8.14062 13.5508 7.26172V13.5547C13.5508 16.7188 10.9844 19.25 7.82031 19.25C4.65625 19.25 2.125 16.7188 2.125 13.5547C2.125 10.3906 4.65625 7.82422 7.82031 7.82422C8.10156 7.82422 8.34766 7.85938 8.62891 7.89453V11.0586C8.34766 10.9531 8.10156 10.918 7.82031 10.918C6.37891 10.918 5.18359 12.1133 5.18359 13.5547C5.18359 14.9961 6.37891 16.1914 7.82031 16.1914C9.26172 16.1914 10.457 14.9961 10.457 13.5547V1.25H13.5508C13.5508 1.28516 13.5508 1.28516 13.5508 1.32031C13.5508 1.56641 13.5508 1.8125 13.6211 2.05859C13.832 3.21875 14.5352 4.23828 15.5195 4.87109C16.1875 5.32812 16.9961 5.57422 17.8398 5.57422C17.8398 5.57422 17.8398 5.57422 17.875 5.57422V8.63281Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_215_29">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default TikTokFilled20;
