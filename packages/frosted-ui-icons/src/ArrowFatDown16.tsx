import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.78107 14.2343L8.22389 13.77L8.78107 14.2343L13.5451 8.51752C14.0969 7.85534 13.626 6.85 12.764 6.85L10.8834 6.85L10.8834 2.26667C10.8834 1.70518 10.4282 1.25 9.86671 1.25L6.13338 1.25C5.57189 1.25 5.11671 1.70517 5.11671 2.26667L5.11671 6.85L3.23605 6.85C2.37409 6.85 1.9032 7.85533 2.45503 8.51752L7.21902 14.2343L7.79031 13.7582L7.21902 14.2343C7.62548 14.7221 8.37461 14.7221 8.78107 14.2343Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ArrowFatDown16;
