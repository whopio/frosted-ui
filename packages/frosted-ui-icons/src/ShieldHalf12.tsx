import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.125 3.11037C10.125 2.89516 9.9873 2.70409 9.7831 2.63603L6.1581 1.4277C6.0555 1.39349 5.9445 1.39349 5.8419 1.4277L2.21689 2.63603C2.01272 2.70409 1.875 2.89516 1.875 3.11037V5.95615C1.875 8.4424 4 9.625 6 10.704C8 9.625 10.125 8.4424 10.125 5.95615V3.11037Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M6 0.951996C5.89854 0.952001 5.79708 0.968251 5.69961 1.00075L2.07463 2.20907C1.68671 2.33838 1.42505 2.70141 1.42505 3.11032V5.9561C1.42505 7.34991 2.0289 8.37867 2.87781 9.18417C3.70978 9.9736 4.79578 10.5655 5.78639 11.0999C5.85305 11.1359 5.92653 11.1539 6 11.1539V0.951996Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf12;
