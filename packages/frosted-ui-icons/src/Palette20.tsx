import * as React from 'react';
import { IconProps } from './types';

export const Palette20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M16.2005 12.0033C17.261 12.0033 18.2196 11.2787 18.2472 10.2187C18.249 10.146 18.25 10.0731 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 13.805 4.32589 17.0083 7.82897 17.9614C8.77822 18.2196 9.67151 17.5387 9.90109 16.5821L10.575 13.7742C10.8243 12.7356 11.7531 12.0033 12.8212 12.0033H16.2005Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 5.5C11 6.05228 10.5523 6.5 10 6.5 9.44772 6.5 9 6.05228 9 5.5 9 4.94772 9.44772 4.5 10 4.5 10.5523 4.5 11 4.94772 11 5.5zM7 8C7 8.55228 6.55228 9 6 9 5.44772 9 5 8.55228 5 8 5 7.44772 5.44772 7 6 7 6.55228 7 7 7.44772 7 8zM15 8C15 8.55228 14.5523 9 14 9 13.4477 9 13 8.55228 13 8 13 7.44772 13.4477 7 14 7 14.5523 7 15 7.44772 15 8zM7.5 12.5C7.5 13.0523 7.05228 13.5 6.5 13.5 5.94772 13.5 5.5 13.0523 5.5 12.5 5.5 11.9477 5.94772 11.5 6.5 11.5 7.05228 11.5 7.5 11.9477 7.5 12.5z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Palette20;
