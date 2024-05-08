import * as React from 'react';
import { IconProps } from './types';

export const Stats26 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M1.25 2.75V12C1.25 12.9665 2.0335 13.75 3 13.75H14.25M3.5 10L6.75 6.75L9 9L13.25 4.75M13.25 4.75H10.75M13.25 4.75V7.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Stats26;
