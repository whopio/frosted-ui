import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_14_1665)">
          <path
            d="M8 11.2499V7.75H6.75M6.75 11.2499L9.2499 11.2499"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="5.004" r="1" fill={color} />
          <path
            d="M0.75 12.75V3.25C0.75 1.86929 1.86929 0.75 3.25 0.75H12.75C14.1307 0.75 15.25 1.86929 15.25 3.25V12.75C15.25 14.1307 14.1307 15.25 12.75 15.25H3.25C1.86929 15.25 0.75 14.1307 0.75 12.75Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_1665">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default InfoSquare16;
