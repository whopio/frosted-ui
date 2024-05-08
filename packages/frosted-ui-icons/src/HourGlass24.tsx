import * as React from 'react';
import { IconProps } from './types';

export const HourGlass24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_190_45)">
          <path
            d="M9.59999 12C9.59999 9.39945 5.28507 10.4974 4.8374 3.605C4.79444 2.94365 5.33725 2.40002 5.99999 2.40002H18C18.6627 2.40002 19.2055 2.94365 19.1626 3.605C18.7149 10.4974 14.4 9.39945 14.4 12C14.4 14.6006 18.7149 13.5027 19.1626 20.395C19.2055 21.0564 18.6627 21.6 18 21.6H5.99999C5.33725 21.6 4.79444 21.0564 4.8374 20.3951C5.28507 13.5027 9.59999 14.6006 9.59999 12Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3417 9.23391C9.72718 8.45114 8.24577 7.21401 7.88393 5.9171C7.79487 5.59792 8.07014 5.32495 8.40151 5.32495H15.5985C15.9298 5.32495 16.2051 5.59792 16.116 5.9171C15.7542 7.21401 14.2728 8.45114 12.6583 9.23391C12.2424 9.43555 11.7576 9.43555 11.3417 9.23391Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_190_45">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default HourGlass24;
