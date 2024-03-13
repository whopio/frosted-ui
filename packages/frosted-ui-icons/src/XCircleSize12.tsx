import * as React from 'react';
import { IconProps } from './types';

export const XCircleSize12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M7.5 4.50001L4.5 7.50001M7.5 7.50001L4.5 4.50001M10.625 6.00001C10.625 8.55431 8.5543 10.625 6 10.625C3.44568 10.625 1.375 8.55431 1.375 6.00001C1.375 3.44569 3.44568 1.37501 6 1.37501C8.5543 1.37501 10.625 3.44569 10.625 6.00001Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default XCircleSize12;
