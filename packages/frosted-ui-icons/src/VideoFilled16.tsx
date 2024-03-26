import * as React from 'react';
import { IconProps } from './types';

export const VideoFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M3.04547 5.00001H5.77771L9.17771 1.60001H6.44133C6.42854 1.61554 6.41488 1.6306 6.40035 1.64513L3.04547 5.00001ZM7.54547 5.00001H10.184L13.5815 1.60256C13.5434 1.60086 13.5051 1.60001 13.4667 1.60001H10.9413C10.9285 1.61554 10.9149 1.6306 10.9004 1.64513L7.54547 5.00001ZM11.9518 5.00001H16V4.13334C16 3.2682 15.5663 2.50434 14.9045 2.0473L11.9518 5.00001ZM16 6.25001H0V11.8667C0 13.2658 1.13421 14.4 2.53333 14.4H13.4667C14.8658 14.4 16 13.2658 16 11.8667V6.25001ZM1.27771 5.00001H0V4.13334C0 2.73422 1.13421 1.60001 2.53333 1.60001H4.67771L1.27771 5.00001ZM6.325 8.17838V12.1458C6.325 12.3372 6.53131 12.4576 6.69797 12.3634L10.1916 10.3896C10.3606 10.2941 10.3611 10.051 10.1926 9.9548L6.6989 7.96124C6.53224 7.86614 6.325 7.98649 6.325 8.17838Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default VideoFilled16;
