import * as React from 'react';
import { IconProps } from './types';

export const Upload32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.6667 9.33329L16.9428 4.60943C16.4222 4.08876 15.5779 4.08876 15.0572 4.60943L10.3334 9.33329M16 23.3333V4.66663M25.6667 28.6666H6.33337"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload32;
