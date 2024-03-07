import * as React from 'react';
import { IconProps } from './types';

export const FileLines20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g
          stroke={color}
          clipPath="url(#clip0_309_34)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M3.375 15V5C3.375 3.34315 4.71815 2 6.375 2H9H10.3039C11.63 2 12.9018 2.52678 13.8395 3.46446L15.9105 5.53553C16.8482 6.47322 17.375 7.74499 17.375 9.07107V15C17.375 16.6569 16.0319 18 14.375 18H6.375C4.71815 18 3.375 16.6569 3.375 15Z"
            strokeLinejoin="round"
          />
          <path d="M11.375 2.5V7C11.375 7.55228 11.8227 8 12.375 8H16.875" />
          <path d="M7 11.24H11M7 14.24H14" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_309_34">
            <path fill={color} d="M0 0H20V20H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default FileLines20;
