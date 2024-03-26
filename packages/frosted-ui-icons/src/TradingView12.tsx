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
          d="M4.94366 8.53524H2.97183V5.43664H1V3.46481H4.94366V8.53524zM8.88732 8.53524H6.6338L8.74648 3.46481H11L8.88732 8.53524zM6.6338 5.71833C7.25609 5.71833 7.76056 5.21387 7.76056 4.59157 7.76056 3.96928 7.25609 3.46481 6.6338 3.46481 6.01151 3.46481 5.50704 3.96928 5.50704 4.59157 5.50704 5.21387 6.01151 5.71833 6.6338 5.71833z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView12;
