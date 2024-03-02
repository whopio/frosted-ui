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
          d="M18.25 5.75L17.6089 19.854C17.548 21.1945 16.4434 22.25 15.1015 22.25H8.8985C7.55658 22.25 6.45202 21.1945 6.39109 19.854L5.75 5.75M15.5 5.75L15.1706 3.99321C14.9267 2.69253 13.791 1.75 12.4677 1.75H11.5323C10.209 1.75 9.07328 2.69253 8.8294 3.99321L8.5 5.75M3.75 5.75H20.25"
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
