import * as React from 'react';
import { IconProps } from './types';

export const RotateRight16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.1731 9.83333C12.418 11.9695 10.3808 13.5 7.98602 13.5C4.94846 13.5 2.48602 11.0375 2.48602 8C2.48602 4.96243 4.94846 2.5 7.98602 2.5C9.86416 2.5 11.1194 3.30292 12.3334 4.67261M12.8334 2.66667V4.83333C12.8334 5.10947 12.6095 5.33333 12.3334 5.33333H10.1667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default RotateRight16;
