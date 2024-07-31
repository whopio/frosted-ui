import * as React from 'react';
import { IconProps } from './types';

export const RotateRight32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M26.3462 19.6667C24.836 23.9391 20.7615 27 15.972 27C9.89692 27 4.97205 22.0751 4.97205 16C4.97205 9.92487 9.89692 5 15.972 5C19.7283 5 22.2388 6.60584 24.6667 9.34521M25.6667 5.33333V9.66667C25.6667 10.2189 25.219 10.6667 24.6667 10.6667H20.3334"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateRight32;
