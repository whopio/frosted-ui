import * as React from 'react';
import { IconProps } from './types';

export const Logout32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.625 27H19C21.2091 27 23 25.2091 23 23V22.3125M2 7V6C2 3.79086 3.79086 2 6 2H18C20.7614 2 23 4.23858 23 7V7.9375M21 15.5H31M31 15.5L27.5 12M31 15.5L27.5 19"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 6.1592C2 3.78486 4.49483 2.23744 6.6219 3.29246L14.2217 7.06198C15.9235 7.90607 17 9.64162 17 11.5413V26.8408C17 29.2151 14.5052 30.7626 12.3781 29.7075L4.77828 25.938C3.07648 25.0939 2 23.3584 2 21.4587V6.1592Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout32;
