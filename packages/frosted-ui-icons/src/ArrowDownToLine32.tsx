import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownToLine32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.6667 17.6667L16.9428 22.3905C16.4221 22.9112 15.5779 22.9112 15.0572 22.3905L10.3333 17.6667M16 3.66666V22.3333M25.6667 28.3333H6.33334"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownToLine32;
