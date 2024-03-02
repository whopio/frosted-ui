import * as React from 'react';
import { IconProps } from './types';

export const DollarCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_16_130)">
          <path
            d="M5.75 10.75H9.375C10.1344 10.75 10.75 10.1344 10.75 9.375C10.75 8.61561 10.1344 8 9.375 8H6.625C5.86561 8 5.25 7.38439 5.25 6.625C5.25 5.86561 5.86561 5.25 6.625 5.25H10.25M8 12.25V10.75M8 5.25V3.75M15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75C12.0041 0.75 15.25 3.99594 15.25 8Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_16_130">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default DollarCircle16;
