import * as React from 'react';
import { IconProps } from './types';

export const Stats12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M1.25 1.75V8.9375C1.25 9.66237 1.83763 10.25 2.5625 10.25H11.25M3.4375 6.1875L5.375 4.25L7.0625 5.9375L10.25 2.75M10.25 2.75H8.25L10.25 4.75V2.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Stats12;
