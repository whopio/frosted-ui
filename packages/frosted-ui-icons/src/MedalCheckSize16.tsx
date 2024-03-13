import * as React from 'react';
import { IconProps } from './types';

export const MedalCheckSize16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g stroke={color} clipPath="url(#clip0_622_711)" strokeWidth="1.5">
          <circle cx="7" cy="9.216" r="4.034" strokeMiterlimit="16" />
          <path
            d="M5.6855 5.09712C5.6855 5.09712 4.73219 3.96488 4.37004 2.14122 4.21944 1.38283 3.60591.749985 2.83271.749985H1.72798C1.14808.749985.667258 1.2248.77224 1.79512 1.31325 4.73415 3.9995 6.14043 3.9995 6.14043M8.31401 5.09712C8.31401 5.09712 9.26732 3.96488 9.62947 2.14122 9.78007 1.38283 10.3936.749985 11.1668.749985H12.2715C12.8514.749985 13.3323 1.2248 13.2273 1.79512 12.6863 4.73415 10 6.14043 10 6.14043"
            strokeLinejoin="round"
          />
          <path
            d="M5.5108 9.46396L6.33798 10.2912L8.4884 8.14066"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_622_711">
            <path fill={color} d="M0 0H14V14H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default MedalCheckSize16;
