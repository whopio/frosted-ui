import * as React from 'react';
import { IconProps } from './types';

export const Download32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M21.6666 17.6667L16.9428 22.3906C16.4221 22.9112 15.5778 22.9112 15.0572 22.3906L10.3333 17.6667M16 3.66669V22.3334M25.6666 28.3334H6.33331"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Download32;
