import * as React from 'react';
import { IconProps } from './types';

export const SquareAdd32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.3333 27H7.66667C6.19391 27 5 25.8061 5 24.3333V7.66667C5 6.19391 6.19391 5 7.66667 5H11.6667H20.3333H24.3333C25.8061 5 27 6.19391 27 7.66667V15M24.3333 19V23M24.3333 23V27M24.3333 23H20.3333M24.3333 23H28.3333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SquareAdd32;
