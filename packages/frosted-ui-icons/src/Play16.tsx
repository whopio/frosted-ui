import * as React from 'react';
import { IconProps } from './types';

export const Play16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.4367 6.88058L5.89101 1.99808C5.00386 1.42404 3.83334 2.06084 3.83334 3.11751V12.8824C3.83334 13.9391 5.00386 14.5759 5.89101 14.0019L13.4367 9.11938C14.2487 8.59398 14.2487 7.40598 13.4367 6.88058Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Play16;
