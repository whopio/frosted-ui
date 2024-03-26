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
          d="M11.9998 12C9.15272 9.84211 4.75 6.97856 4.75 1.75M4.75001 22.25C4.75001 17.0214 9.15272 14.1579 11.9998 12 14.8469 9.8421 19.2496 6.97856 19.2496 1.75M18.975 3.75L5.02501 3.75M5.02457 20.25L18.9746 20.25M17.25 7.25L6.75 7.25M6.74957 16.75L17.2496 16.75M19.2496 22.25C19.2496 18.6401 17.1509 16.1576 14.9145 14.2563"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna24;
