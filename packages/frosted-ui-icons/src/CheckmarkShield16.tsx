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
          d="M7.21457 1.17682C6.03479 2.79802 3.86671 3.67743 2.64609 4.06472C2.12874 4.22887 1.75 4.69979 1.75 5.24256V5.96491C1.75 9.95684 3.95976 13.999 7.76611 15.2019C7.86485 15.2331 7.94406 15.25 7.99997 15.25C8.05589 15.25 8.1351 15.2331 8.23383 15.2019C12.0402 13.999 14.25 9.95685 14.25 5.96491V5.24257C14.25 4.69979 13.8713 4.22887 13.3539 4.06472C12.1333 3.67743 9.96516 2.79802 8.78537 1.17682C8.60025 0.922439 8.31459 0.75 7.99997 0.75C7.68536 0.75 7.3997 0.922439 7.21457 1.17682Z"
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
