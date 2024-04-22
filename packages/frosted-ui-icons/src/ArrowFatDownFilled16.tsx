import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.13334 2L9.86668 2C10.014 2 10.1333 2.11939 10.1333 2.26667L10.1333 7.33333C10.1333 7.48061 10.2527 7.6 10.4 7.6L12.764 7.6C12.9901 7.6 13.1136 7.86369 12.9689 8.03738L8.20487 13.7542C8.09826 13.8821 7.90176 13.8821 7.79515 13.7542L3.03116 8.03738C2.88642 7.86369 3.00993 7.6 3.23602 7.6L5.60001 7.6C5.74729 7.6 5.86668 7.48061 5.86668 7.33333L5.86668 2.26667C5.86668 2.11939 5.98607 2 6.13334 2Z"
          fill={color}
          fillOpacity=".875"
        />
        <path
          d="M8.78103 14.2343L8.22386 13.77L8.78104 14.2343L13.545 8.51752C14.0968 7.85534 13.626 6.85 12.764 6.85L10.8833 6.85L10.8833 2.26667C10.8833 1.70518 10.4282 1.25 9.86668 1.25L6.13334 1.25C5.57186 1.25 5.11668 1.70517 5.11668 2.26667L5.11668 6.85L3.23602 6.85C2.37406 6.85 1.90317 7.85533 2.455 8.51752L7.21899 14.2343L7.79028 13.7582L7.21899 14.2343C7.62544 14.7221 8.37458 14.7221 8.78103 14.2343Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled16;
