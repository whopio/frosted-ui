import * as React from 'react';
import { IconProps } from './types';

export const Heart20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13.6364 3C12.1091 3 10.7636 3.81667 10 5.1C9.23636 3.81667 7.89091 3 6.36364 3C3.96364 3 2 5.1 2 7.66667C2 12.2944 10 17 10 17C10 17 18 12.3333 18 7.66667C18 5.1 16.0364 3 13.6364 3Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Heart20;
