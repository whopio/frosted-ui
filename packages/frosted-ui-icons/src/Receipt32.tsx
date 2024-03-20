import * as React from 'react';
import { IconProps } from './types';

export const Receipt32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M8.16667 27.25L4.25 30.25V1.75L8.16667 4.75 12.0833 1.75 15.9999 4.75 19.9165 1.75 23.8332 4.75 27.7498 1.75V30.25L23.8332 27.25 19.9165 30.25 15.9999 27.25 12.0833 30.25 8.16667 27.25zM10.1249 11H21.8749M10.1249 16H21.8749M10.1249 21H16.8749"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Receipt32;
