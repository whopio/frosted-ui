import * as React from 'react';
import { IconProps } from './types';

export const Export20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 13.75L1.75 15.75C1.75 17.1307 2.86929 18.25 4.25 18.25L15.75 18.25C17.1307 18.25 18.25 17.1307 18.25 15.75L18.25 13.75M8.25 13.25V7.875C8.25 6.14911 9.64911 4.75 11.375 4.75L16.25 4.75M16.25 4.75L13.25 7.5M16.25 4.75L13.25 2"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Export20;
