import * as React from 'react';
import { IconProps } from './types';

export const Play20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.7958 8.60079L7.36371 2.49766C6.25478 1.78011 4.79163 2.57611 4.79163 3.89695V16.1031C4.79163 17.424 6.25477 18.22 7.36371 17.5025L16.7958 11.3993C17.8108 10.7425 17.8108 9.25754 16.7958 8.60079Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Play20;
