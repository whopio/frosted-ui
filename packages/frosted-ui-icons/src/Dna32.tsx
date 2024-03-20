import * as React from 'react';
import { IconProps } from './types';

export const Dna32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16 16C12.0419 13 6.25 9.01897 6.25 1.75M25.75 30.25C25.75 25.1444 22.8926 21.6608 19.8202 19"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.25 30.25C6.25 22.981 12.0419 19 16 16 19.9581 13 25.75 9.01897 25.75 1.75M7 26.75H25M25 5.25L7 5.25M9.125 22.25H22.875M22.875 9.75L9.125 9.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Dna32;
