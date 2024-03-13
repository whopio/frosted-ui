import * as React from 'react';
import { IconProps } from './types';

export const MoonSize20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.7067 9.84266C16.8241 10.4667 15.7465 10.8333 14.5833 10.8333C11.5917 10.8333 9.16666 8.40825 9.16666 5.41666C9.16666 4.25346 9.53332 3.1759 10.1573 2.29324C10.105 2.29219 10.0526 2.29166 9.99999 2.29166C5.7428 2.29166 2.29166 5.74281 2.29166 10C2.29166 14.2572 5.7428 17.7083 9.99999 17.7083C14.2572 17.7083 17.7083 14.2572 17.7083 10C17.7083 9.94741 17.7078 9.895 17.7067 9.84266Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MoonSize20;
