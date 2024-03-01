import * as React from 'react';
import { IconProps } from './types';

export const Shop32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5 14.5V24.1435C5 26.6876 7.06242 28.75 9.60654 28.75H22.3935C24.9376 28.75 27 26.6876 27 24.1435V14.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 28.75V21.1447C12 20.6506 12.4006 20.25 12.8947 20.25H19.1053C19.5994 20.25 20 20.6506 20 21.1447V28.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M28.7312 6.90632C27.8631 4.9849 25.9502 3.75 23.8418 3.75H19.396L20.8089 11.0914C21.2176 13.2151 23.0761 14.75 25.2388 14.75 27.7303 14.75 29.75 12.7303 29.75 10.2388V10.152C29.75 9.49918 29.611 8.85387 29.3422 8.25896L28.7312 6.90632zM3.28274 6.90632C4.15077 4.9849 6.06371 3.75 8.17211 3.75H12.6179L11.205 11.0914C10.7963 13.2151 8.93784 14.75 6.77511 14.75 4.28365 14.75 2.26392 12.7303 2.26392 10.2388V10.152C2.26392 9.49918 2.40292 8.85387 2.67167 8.25896L3.28274 6.90632z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M11.5398 9.77521L12.1989 3.75H19.8014L20.4605 9.77521C20.7509 12.4306 18.6713 14.75 16.0002 14.75C13.329 14.75 11.2494 12.4306 11.5398 9.77521Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Shop32;
