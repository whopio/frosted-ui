import * as React from 'react';
import { IconProps } from './types';

export const Underline32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.66669 27.6667H24.3334M7.66669 5V16C7.66669 20.6024 11.3976 24.3333 16 24.3333C20.6024 24.3333 24.3334 20.6024 24.3334 16V5"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Underline32;
