import * as React from 'react';
import { IconProps } from './types';

export const Codeblock24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M5.75 14.4595V17.05C5.75 18.1701 5.75 18.7302 5.968 19.158C6.1597 19.5343 6.4657 19.8403 6.842 20.032C7.2698 20.25 7.8299 20.25 8.95 20.25H17.05C18.1701 20.25 18.7302 20.25 19.158 20.032C19.5343 19.8403 19.8403 19.5343 20.032 19.158C20.25 18.7302 20.25 18.1701 20.25 17.05V8.875C20.25 7.82559 20.25 7.30088 20.058 6.89489C19.8601 6.4766 19.5234 6.13986 19.1051 5.94202C18.6991 5.75 18.1744 5.75 17.125 5.75H16.2206"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2206 7.11182L14.7819 8.52001C15.1995 8.89664 15.1995 9.48412 14.7819 9.86076L13.2206 11.269M8.11788 12.4554L10.8525 5.75002M5.75001 11.269L4.18869 9.86076C3.77109 9.48412 3.77109 8.89664 4.18869 8.52001L5.75001 7.11182"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Codeblock24;
