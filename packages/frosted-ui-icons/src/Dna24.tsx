import * as React from 'react';
import { IconProps } from './types';

export const Dna24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.9998 12C9.15269 9.84211 4.74997 6.97856 4.74997 1.75M4.74995 22.25C4.74995 17.0214 9.15266 14.1579 11.9997 12 14.8468 9.8421 19.2495 6.97856 19.2495 1.75M18.975 3.75L5.02498 3.75M5.02454 20.25L18.9745 20.25M17.25 7.25L6.75 7.25M6.74951 16.75L17.2495 16.75M19.2495 22.25C19.2495 18.6401 17.1508 16.1576 14.9144 14.2563"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna24;
