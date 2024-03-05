import * as React from 'react';
import { IconProps } from './types';

export const TradingView16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M10.5782 5.56798C10.5782 6.46968 9.8473 7.20064 8.94558 7.20064C8.0439 7.20064 7.31294 6.46968 7.31294 5.56798C7.31294 4.66629 8.0439 3.93533 8.94558 3.93533C9.8473 3.93533 10.5782 4.66629 10.5782 5.56798ZM6.53063 4.01016H2.45231e-05L0 7.27546H3.26531V12.0646H6.53063V4.01016ZM12.2558 4.01016H16L12.6259 12.0646H8.87077L12.2558 4.01016Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default TradingView16;
