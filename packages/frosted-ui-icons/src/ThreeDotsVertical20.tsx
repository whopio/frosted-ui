import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsVertical20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="10"
          cy="16"
          r="1"
          transform="rotate(180 10 16)"
          fill={color}
        />
        <circle
          cx="10"
          cy="10"
          r="1"
          transform="rotate(180 10 10)"
          fill={color}
        />
        <circle
          cx="10"
          cy="4"
          r="1"
          transform="rotate(180 10 4)"
          fill={color}
        />
      </svg>
    );
  },
);

export default ThreeDotsVertical20;
