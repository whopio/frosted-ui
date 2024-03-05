import * as React from 'react';
import { IconProps } from './types';

export const TrashFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.878 17.116L15.5 6.75H4.5L5.12196 17.116C5.19388 18.3147 6.187 19.25 7.38788 19.25H12.6121C13.813 19.25 14.8061 18.3147 14.878 17.116Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.75 4.75L7.11764 2.78928C7.33934 1.60685 8.37178.75 9.57482.75H10.4252C11.6282.75 12.6607 1.60685 12.8824 2.78928L13.25 4.75M2.75 4.75H17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default TrashFilled20;
