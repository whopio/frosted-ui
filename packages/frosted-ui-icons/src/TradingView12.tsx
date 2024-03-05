import * as React from 'react';
import { IconProps } from './types';

export const TradingView12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.93365 4.176C7.93365 4.85226 7.38547 5.40048 6.70919 5.40048C6.03293 5.40048 5.48471 4.85226 5.48471 4.176C5.48471 3.49973 6.03293 2.95151 6.70919 2.95151C7.38547 2.95151 7.93365 3.49973 7.93365 4.176ZM4.89797 3.00763H1.83923e-05L0 5.45661H2.44899V9.04849H4.89797V3.00763ZM9.19181 3.00763H12L9.46944 9.04849H6.65308L9.19181 3.00763Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default TradingView12;
