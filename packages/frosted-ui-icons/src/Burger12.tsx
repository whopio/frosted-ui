import * as React from 'react';
import { IconProps } from './types';

export const Burger12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g
          stroke={color}
          clipPath="url(#clip0_1122_195)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path
            d="M8.97458 11.043H3.02542C2.18295 11.043 1.5 10.4069 1.5 9.5644 1.5 9.14318 1.84149 8.80169 2.26271 8.80169H9.73729C10.1585 8.80169 10.5 9.14318 10.5 9.5644 10.5 10.4069 9.81705 11.043 8.97458 11.043zM9.73729 4.25H2.26271C1.84149 4.25 1.5 3.79526 1.5 3.37404 1.5 2.11034 2.52444 1.0859 3.78814 1.0859H8.21186C9.47556 1.0859 10.5 2.11034 10.5 3.37404 10.5 3.79526 10.1585 4.25 9.73729 4.25z"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path d="M1.75 6.59375L10.25 6.59375" />
        </g>
        <defs>
          <clipPath id="clip0_1122_195">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Burger12;
