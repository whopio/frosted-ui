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
          d="M4.94366 8.53522H2.97183V5.43663H1V3.4648H4.94366V8.53522zM8.88732 8.53522H6.6338L8.74648 3.4648H11L8.88732 8.53522zM6.6338 5.71832C7.25609 5.71832 7.76056 5.21385 7.76056 4.59156 7.76056 3.96927 7.25609 3.4648 6.6338 3.4648 6.01151 3.4648 5.50704 3.96927 5.50704 4.59156 5.50704 5.21385 6.01151 5.71832 6.6338 5.71832z"
          fill={color}
        />
      </svg>
    );
  },
);

export default TradingView12;
