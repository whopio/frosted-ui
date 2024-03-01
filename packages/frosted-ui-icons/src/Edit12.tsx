import * as React from 'react';
import { IconProps } from './types';

export const Edit12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_1_6703)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.25 7.75V9.75C11.25 10.5784 10.5784 11.25 9.75 11.25H2.25C1.42157 11.25 0.75 10.5784 0.75 9.75V2.25C0.75 1.42157 1.42157 0.75 2.25 0.75H4.25" />
          <path d="M4.25 7.74994H6.75L9.76388 4.73606C10.0751 4.4248 10.25 4.00265 10.25 3.56247C10.25 3.12226 10.0751 2.70009 9.76384 2.38883L9.6111 2.23611C9.29983 1.92486 8.87766 1.75 8.43747 1.75C7.99725 1.75 7.57506 1.92488 7.26378 2.23616L4.25 5.24994V7.74994Z" />
        </g>
        <defs>
          <clipPath id="clip0_1_6703">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Edit12;
