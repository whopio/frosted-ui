import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkShield16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.21451 1.17682C6.03473 2.79802 3.86665 3.67743 2.64603 4.06472C2.12868 4.22887 1.74994 4.69979 1.74994 5.24256V5.96491C1.74994 9.95684 3.9597 13.999 7.76605 15.2019C7.86478 15.2331 7.94399 15.25 7.99991 15.25C8.05583 15.25 8.13504 15.2331 8.23377 15.2019C12.0401 13.999 14.2499 9.95685 14.2499 5.96491V5.24257C14.2499 4.69979 13.8712 4.22887 13.3538 4.06472C12.1332 3.67743 9.9651 2.79802 8.78531 1.17682C8.60019 0.922439 8.31453 0.75 7.99991 0.75C7.6853 0.75 7.39963 0.922439 7.21451 1.17682Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.75 8.75L7 10.25L10.25 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CheckmarkShield16;
