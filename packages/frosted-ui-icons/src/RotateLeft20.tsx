import * as React from 'react';
import { IconProps } from './types';

export const RotateLeft20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.5 8C3.5 6 5.5 3 10 3C14.5 3 17 6.5 17 10C17 13.5 14 17 10 17C4.5 17 3.5 12 3.5 12M3.5 8H8M3.5 8V8C3.22386 8 3 7.77614 3 7.5V3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateLeft20;
