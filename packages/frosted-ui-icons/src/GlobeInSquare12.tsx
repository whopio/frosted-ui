import * as React from 'react';
import { IconProps } from './types';

export const GlobeInSquare12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1679_667)">
          <path
            d="M2.25 0.75C1.42157 0.75 0.75 1.42157 0.75 2.25V9.75C0.75 10.5784 1.42157 11.25 2.25 11.25H9.75C10.5784 11.25 11.25 10.5784 11.25 9.75V2.25C11.25 1.42157 10.5784 0.75 9.75 0.75H2.25Z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M5.25 3.87803C4.61069 4.10399 4.10399 4.61069 3.87803 5.25L5.25 5.25L5.25 3.87803ZM6.75 3.87803V5.25L8.12197 5.25C7.89601 4.61069 7.38931 4.10399 6.75 3.87803ZM5.25 6.75H3.87803C4.10399 7.38931 4.61069 7.89601 5.25 8.12197L5.25 6.75ZM6.75 8.12197V6.75H8.12197C7.89601 7.38931 7.38931 7.89601 6.75 8.12197ZM6 2.25C3.92893 2.25 2.25 3.92893 2.25 6C2.25 8.07107 3.92893 9.75 6 9.75C8.07107 9.75 9.75 8.07107 9.75 6C9.75 3.92893 8.07107 2.25 6 2.25Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_1679_667">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default GlobeInSquare12;
