import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13 25.6667H19M11.6667 29.6667H20.3334C22.5426 29.6667 24.3334 27.8759 24.3334 25.6667V6.33334C24.3334 4.1242 22.5426 2.33334 20.3334 2.33334H11.6667C9.45755 2.33334 7.66669 4.1242 7.66669 6.33334V25.6667C7.66669 27.8759 9.45755 29.6667 11.6667 29.6667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone32;
