import * as React from 'react';
import { IconProps } from './types';

export const Heart16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.99999 3.71462C12.2221 -0.578433 19.4599 7.3944 7.99999 13.8333C-3.45989 7.3944 3.7779 -0.578434 7.99999 3.71462Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Heart16;
