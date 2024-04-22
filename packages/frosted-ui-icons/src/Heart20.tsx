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
          d="M9.99997 4.64328C15.2776 -0.723042 24.3248 9.243 9.99997 17.2917C-4.32488 9.243 4.72236 -0.723042 9.99997 4.64328Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Heart20;
