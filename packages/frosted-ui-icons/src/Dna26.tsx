import * as React from 'react';
import { IconProps } from './types';

export const Dna26 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.99991 8C5.98613 6.47368 2.75 4.94825 2.75.75M13.25.750007C13.25 4.94825 10.0137 6.47369 7.99991 8 5.98613 9.52632 2.75 11.0518 2.75 15.25M13.2499 15.25C13.2499 12.3915 11.7496 10.7721 10.1564 9.54785M13 1.75L3 1.75M3 14.25L13 14.25M11.75 4.75L4.25 4.75M4.25 11.25L11.75 11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna26;
