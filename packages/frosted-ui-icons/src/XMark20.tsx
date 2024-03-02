import * as React from 'react';
import { IconProps } from './types';

export const XMark20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M15.3033 16.364C15.5962 16.6569 16.0711 16.6569 16.364 16.364C16.6569 16.0711 16.6569 15.5962 16.364 15.3033L11.0607 10L16.364 4.69674C16.6569 4.40384 16.6569 3.92897 16.364 3.63608C16.0711 3.34318 15.5962 3.34318 15.3033 3.63608L10 8.93937L4.69671 3.63605C4.40382 3.34316 3.92894 3.34316 3.63605 3.63605C3.34316 3.92895 3.34316 4.40382 3.63605 4.69671L8.93937 10L3.63605 15.3033C3.34316 15.5962 3.34316 16.0711 3.63605 16.364C3.92895 16.6569 4.40382 16.6569 4.69671 16.364L10 11.0607L15.3033 16.364Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default XMark20;
