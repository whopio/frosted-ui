import * as React from 'react';
import { IconProps } from './types';

export const Eye32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.25 16C22.25 19.4518 19.4518 22.25 16 22.25C12.5482 22.25 9.75 19.4518 9.75 16C9.75 12.5482 12.5482 9.75 16 9.75C19.4518 9.75 22.25 12.5482 22.25 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Eye32;
