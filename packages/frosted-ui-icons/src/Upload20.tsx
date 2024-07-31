import * as React from 'react';
import { IconProps } from './types';

export const Upload20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 10.75L1.75 15.68C1.75 17.0994 2.90063 18.25 4.32 18.25L15.68 18.25C17.0994 18.25 18.25 17.0994 18.25 15.68L18.25 10.75M10 12.25L10 1.75M10 1.75L5.5 6.5M10 1.75L14.5 6.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload20;
