import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.50004 12.3958H9.50004M5.83337 14.8333H10.1667C11.2713 14.8333 12.1667 13.9379 12.1667 12.8333V3.16667C12.1667 2.0621 11.2713 1.16667 10.1667 1.16667H5.83337C4.72881 1.16667 3.83337 2.0621 3.83337 3.16667V12.8333C3.83337 13.9379 4.72881 14.8333 5.83337 14.8333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone16;
