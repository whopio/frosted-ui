import * as React from 'react';
import { IconProps } from './types';

export const Paypal12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_882_251)">
          <path
            d="M2.77346 9.70612L2.57601 10.644C2.52777 10.8731 2.70259 11.0886 2.93674 11.0886L4.40873 11.0887C4.6284 11.0887 4.81755 10.9336 4.86063 10.7182L5.17327 9.15492C5.21635 8.93952 5.40548 8.78447 5.62515 8.78447H6.16901C10.1281 8.78447 10.6952 5.95785 10.7675 5.4171L10.768 5.41359C10.7757 5.35551 10.7833 5.29853 10.7895 5.24022C10.8256 4.89908 10.8497 3.65321 9.39478 3.03912M2.81382 9.70622H1.55948C1.32363 9.70622 1.14844 9.48782 1.1996 9.25758L2.78282 2.13309C2.87653 1.7114 3.25055 1.41138 3.68252 1.41138H6.6298C9.5357 1.41138 9.44989 3.46817 9.40429 3.87609C9.39902 3.92331 9.39308 3.96913 9.38602 4.01612C9.31821 4.4674 8.76504 6.94127 4.7865 6.94127H4.22465C4.0132 6.94127 3.82887 7.08518 3.77759 7.29033L3.26088 9.35716C3.20959 9.5623 3.02527 9.70622 2.81382 9.70622Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_882_251">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Paypal12;
