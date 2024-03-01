import * as React from 'react';
import { IconProps } from './types';

export const Trash24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.75 5.75L6.39109 19.854C6.45202 21.1945 7.55658 22.25 8.8985 22.25H15.1015C16.4434 22.25 17.548 21.1945 17.6089 19.854L18.25 5.75M8.5 5.75L8.8294 3.99321C9.07328 2.69253 10.209 1.75 11.5323 1.75H12.4677C13.791 1.75 14.9267 2.69253 15.1706 3.99321L15.5 5.75M3.75 5.75H20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash24;
