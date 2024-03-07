import * as React from 'react';
import { IconProps } from './types';

export const FileLines16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_309_39)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M1 13V3C1 1.34315 2.34315 0 4 0H6.625H7.92893C9.25501 0 10.5268 0.526783 11.4645 1.46446L13.5355 3.53553C14.4732 4.47322 15 5.74499 15 7.07107V13C15 14.6569 13.6569 16 12 16H4C2.34315 16 1 14.6569 1 13Z"
            strokeLinejoin="round"
          />
          <path d="M9 0.5V5C9 5.55228 9.44772 6 10 6H14.5" />
          <path
            d="M4.625 9.23999H8.625M4.625 12.24H11.625"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_309_39">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default FileLines16;
