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
          d="M6.50001 12.3959H9.50001M5.83334 14.8334H10.1667C11.2713 14.8334 12.1667 13.938 12.1667 12.8334V3.16669C12.1667 2.06212 11.2713 1.16669 10.1667 1.16669H5.83334C4.72878 1.16669 3.83334 2.06212 3.83334 3.16669V12.8334C3.83334 13.938 4.72878 14.8334 5.83334 14.8334Z"
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
