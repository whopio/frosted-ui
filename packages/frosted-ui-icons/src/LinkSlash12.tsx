import * as React from 'react';
import { IconProps } from './types';

export const LinkSlash12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.58947 1.09987C6.2937 0.395636 7.24885 -2.17669e-08 8.2448 0C10.3187 4.53275e-08 12 1.68126 12 3.7552C12 4.75115 11.6044 5.7063 10.9001 6.41053L10.4231 6.88754C10.1302 7.18043 9.65535 7.18043 9.36246 6.88754C9.06956 6.59465 9.06956 6.11977 9.36246 5.82688L9.83947 5.34987C10.2624 4.92694 10.5 4.35332 10.5 3.7552C10.5 2.50969 9.49031 1.5 8.2448 1.5C7.64668 1.5 7.07306 1.7376 6.65013 2.16053L6.17312 2.63754C5.88023 2.93043 5.40535 2.93043 5.11246 2.63754C4.81957 2.34465 4.81957 1.86977 5.11246 1.57688L5.58947 1.09987ZM2.63759 5.11242C2.93048 5.40531 2.93048 5.88018 2.63758 6.17308L2.16053 6.65013C1.7376 7.07306 1.5 7.64668 1.5 8.2448C1.5 9.49031 2.50969 10.5 3.7552 10.5C4.35332 10.5 4.92694 10.2624 5.34987 9.83947L5.82692 9.36242C6.11982 9.06952 6.59469 9.06952 6.88758 9.36241C7.18048 9.65531 7.18048 10.1302 6.88758 10.4231L6.41053 10.9001C5.7063 11.6044 4.75115 12 3.7552 12C1.68126 12 -4.53274e-08 10.3187 0 8.2448C2.1767e-08 7.24885 0.395637 6.2937 1.09987 5.58947L1.57693 5.11242C1.86982 4.81952 2.34469 4.81952 2.63759 5.11242Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M4.76257 7.2374C5.05546 7.53029 5.05547 8.00516 4.76258 8.29806L4.21967 8.84098C3.92677 9.13387 3.4519 9.13387 3.15901 8.84098 2.86611 8.54809 2.86611 8.07322 3.159 7.78032L3.70191 7.2374C3.9948 6.94451 4.46967 6.94451 4.76257 7.2374zM8.841 3.15897C9.13389 3.45186 9.1339 3.92673 8.84101 4.21963L8.29809 4.76255C8.0052 5.05544 7.53033 5.05544 7.23743 4.76255 6.94454 4.46966 6.94454 3.99479 7.23743 3.70189L7.78034 3.15897C8.07323 2.86608 8.5481 2.86608 8.841 3.15897zM1.27301 1.27294C1.56591.980045 2.04078.980045 2.33367 1.27294L10.7271 9.66632C11.02 9.95922 11.02 10.4341 10.7271 10.727 10.4342 11.0199 9.95929 11.0199 9.6664 10.727L1.27301 2.3336C.980121 2.04071.980121 1.56583 1.27301 1.27294z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LinkSlash12;
