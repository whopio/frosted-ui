import * as React from 'react';
import { IconProps } from './types';

export const QuoteLeft20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M14.5918 15.8334C16.6431 15.8334 18.3334 14.2083 18.3334 12.1703 18.3334 10.1322 16.6431 8.50702 14.5918 8.50702 13.8093 8.50702 13.0793 8.74352 12.4757 9.14919 12.6454 8.7001 12.8646 8.3076 13.1219 7.95285 13.8523 6.94634 14.9258 6.18813 16.268 5.31581 16.5574 5.12771 16.6396 4.7406 16.4515 4.45118 16.2634 4.16175 15.8763 4.07961 15.5869 4.26771 14.2578 5.1315 12.9939 6.00089 12.1102 7.21877 11.2073 8.46335 10.7359 10.0173 10.8503 12.1877 10.8599 14.2175 12.5464 15.8334 14.5918 15.8334zM5.42504 15.8334C7.47635 15.8334 9.16662 14.2083 9.16662 12.1703 9.16662 10.1322 7.47635 8.50702 5.42504 8.50702 4.64254 8.50702 3.91257 8.74352 3.30894 9.14919 3.47867 8.7001 3.69785 8.30761 3.95524 7.95285 4.68552 6.94634 5.75907 6.18813 7.10129 5.31581 7.39072 5.12771 7.47286 4.7406 7.28476 4.45118 7.09666 4.16175 6.70955 4.07961 6.42013 4.26771 5.09102 5.1315 3.82715 6.00089 2.9435 7.21877 2.04051 8.46335 1.56912 10.0173 1.68353 12.1877 1.69313 14.2175 3.37959 15.8334 5.42504 15.8334z"
          fill={color}
        />
      </svg>
    );
  },
);

export default QuoteLeft20;