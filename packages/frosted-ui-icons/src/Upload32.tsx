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
          d="M21.6667 9.33332L16.9428 4.60946C16.4221 4.08879 15.5779 4.08879 15.0572 4.60946L10.3333 9.33332M16 23.3333V4.66666M25.6667 28.6667H6.33334"
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
