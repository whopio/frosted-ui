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
            d="M2.77358 9.70612L2.57613 10.644C2.52789 10.8731 2.70271 11.0886 2.93687 11.0886L4.40885 11.0887C4.62853 11.0887 4.81767 10.9336 4.86075 10.7182L5.17339 9.15492C5.21647 8.93952 5.4056 8.78447 5.62527 8.78447H6.16913C10.1282 8.78447 10.6953 5.95785 10.7676 5.4171L10.7681 5.41359C10.7759 5.35551 10.7835 5.29853 10.7896 5.24022C10.8258 4.89908 10.8498 3.65321 9.3949 3.03912M2.81394 9.70622H1.5596C1.32376 9.70622 1.14856 9.48782 1.19972 9.25758L2.78294 2.13309C2.87665 1.7114 3.25067 1.41138 3.68265 1.41138H6.62992C9.53582 1.41138 9.45001 3.46817 9.40442 3.87609C9.39914 3.92331 9.3932 3.96913 9.38614 4.01612C9.31833 4.4674 8.76516 6.94127 4.78662 6.94127H4.22478C4.01332 6.94127 3.829 7.08518 3.77771 7.29033L3.261 9.35716C3.20972 9.5623 3.02539 9.70622 2.81394 9.70622Z"
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
