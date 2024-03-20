import * as React from 'react';
import { IconProps } from './types';

export const SparkleFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          fill={color}
          stroke={color}
          clipPath="url(#clip0_882_501)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.7921 3.56666L10.9911 1.10658C10.9219.89393 10.7236.75 10.5.75 10.2764.75 10.0781.89393 10.0089 1.10658L9.20794 3.56666C9.10897 3.87063 8.87063 4.10897 8.56666 4.20794L6.10658 5.0089C5.89393 5.07814 5.75 5.27637 5.75 5.5 5.75 5.72363 5.89393 5.92186 6.10658 5.9911L8.56666 6.79206C8.87063 6.89103 9.10897 7.12937 9.20794 7.43334L10.0089 9.89342C10.0781 10.1061 10.2764 10.25 10.5 10.25 10.7236 10.25 10.9219 10.1061 10.9911 9.89342L11.7921 7.43334C11.891 7.12937 12.1294 6.89103 12.4333 6.79206L14.8934 5.9911C15.1061 5.92186 15.25 5.72363 15.25 5.5 15.25 5.27637 15.1061 5.07814 14.8934 5.0089L12.4333 4.20794C12.1294 4.10897 11.891 3.87063 11.7921 3.56666zM8.02701 11.1935L5.83694 10.4849C5.68424 10.4355 5.56454 10.3158 5.51514 10.1631L4.80653 7.97299C4.76351 7.84006 4.63972 7.75 4.5 7.75 4.36028 7.75 4.23649 7.84006 4.19347 7.97299L3.48486 10.1631C3.43546 10.3158 3.31576 10.4355 3.16306 10.4849L.972993 11.1935C.840059 11.2365.75 11.3603.75 11.5.75 11.6397.840059 11.7635.972993 11.8065L3.16306 12.5151C3.31576 12.5645 3.43546 12.6842 3.48486 12.8369L4.19348 15.027C4.23649 15.1599 4.36028 15.25 4.5 15.25 4.63972 15.25 4.76351 15.1599 4.80653 15.027L5.51514 12.8369C5.56454 12.6842 5.68424 12.5645 5.83694 12.5151L8.02701 11.8065C8.15994 11.7635 8.25 11.6397 8.25 11.5 8.25 11.3603 8.15994 11.2365 8.02701 11.1935z" />
        </g>
        <defs>
          <clipPath id="clip0_882_501">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default SparkleFilled16;
