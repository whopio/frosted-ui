import * as React from 'react';
import { IconProps } from './types';

export const XCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 6L6.00001 10M10 10L6.00001 6M14.1667 8C14.1667 11.4057 11.4057 14.1667 8.00001 14.1667C4.59426 14.1667 1.83334 11.4057 1.83334 8C1.83334 4.59425 4.59426 1.83334 8.00001 1.83334C11.4057 1.83334 14.1667 4.59425 14.1667 8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default XCircle16;
