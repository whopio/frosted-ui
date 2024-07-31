import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.4893 28.5387C28.1156 22.0063 30.781 14.3561 28.6893 9.12771C27.6664 6.57095 25.5228 4.74563 23.0029 4.1824C20.7117 3.67028 18.1858 4.21749 15.9993 6.06608C13.8128 4.21749 11.287 3.67028 8.99572 4.18241C6.47589 4.74563 4.33228 6.57096 3.30941 9.12773C1.21768 14.3563 3.8832 22.0063 15.5096 28.5387C15.8137 28.7096 16.185 28.7096 16.4893 28.5387Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HeartFilled32;
