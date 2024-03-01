import * as React from 'react';
import { IconProps } from './types';

export const Trash20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.5 4.75L5.13865 17.0973C5.20106 18.3038 6.19751 19.25 7.40562 19.25H12.5944C13.8025 19.25 14.7989 18.3038 14.8613 17.0973L15.5 4.75M6.75 4.75L7.11764 2.78928C7.33934 1.60685 8.37178.75 9.57482.75H10.4252C11.6282.75 12.6607 1.60685 12.8824 2.78928L13.25 4.75M2.75 4.75H17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Trash20;
