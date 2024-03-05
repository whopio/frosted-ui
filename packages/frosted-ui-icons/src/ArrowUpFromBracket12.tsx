import * as React from 'react';
import { IconProps } from './types';

export const ArrowUpFromBracket12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 7.75L.75 9.1C.75 10.2874 1.71259 11.25 2.9 11.25L9.1 11.25C10.2874 11.25 11.25 10.2874 11.25 9.1L11.25 7.75M6 7.25L6 .75M6 .75L2.75 4.25M6 .75L9.25 4.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowUpFromBracket12;
