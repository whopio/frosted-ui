import * as React from 'react';
import { IconProps } from './types';

export const Code24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.74996 20.25L14.25 3.75M18.25 7.75L20.9599 10.6293C21.6847 11.3994 21.6847 12.6006 20.9599 13.3707L18.25 16.25M5.74996 16.25L3.04006 13.3707C2.31526 12.6006 2.31526 11.3994 3.04006 10.6293L5.74996 7.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code24;
