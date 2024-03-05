import * as React from 'react';
import { IconProps } from './types';

export const TradingView24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.8673 8.35199C15.8673 9.70453 14.7709 10.801 13.4184 10.801C12.0659 10.801 10.9694 9.70453 10.9694 8.35199C10.9694 6.99946 12.0659 5.90302 13.4184 5.90302C14.7709 5.90302 15.8673 6.99946 15.8673 8.35199ZM9.79594 6.01526H3.67846e-05L0 10.9132H4.89797V18.097H9.79594V6.01526ZM18.3836 6.01526H24L18.9389 18.097H13.3062L18.3836 6.01526Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default TradingView24;
