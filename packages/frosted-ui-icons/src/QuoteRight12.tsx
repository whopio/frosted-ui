import * as React from 'react';
import { IconProps } from './types';

export const QuoteRight12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.24493 2.5C2.01415 2.5 1 3.47509 1 4.69791 1 5.92075 2.01415 6.89585 3.24493 6.89585 3.71443 6.89585 4.15241 6.75395 4.51459 6.51055 4.41275 6.78 4.28124 7.0155 4.12681 7.22835 3.68864 7.83225 3.04452 8.2872 2.23918 8.81055 2.06553 8.92345 2.01625 9.1557 2.1291 9.32935 2.24196 9.503 2.47422 9.5523 2.64788 9.43945 3.44534 8.92115 4.20367 8.3995 4.73385 7.6688 5.27565 6.92205 5.5585 5.9897 5.48985 4.68746 5.4841 3.46954 4.4722 2.5 3.24493 2.5zM8.74495 2.5C7.51415 2.5 6.5 3.47509 6.5 4.69791 6.5 5.92075 7.51415 6.89585 8.74495 6.89585 9.21445 6.89585 9.6524 6.75395 10.0146 6.51055 9.91275 6.78 9.78125 7.0155 9.6268 7.22835 9.18865 7.83225 8.5445 8.2872 7.7392 8.81055 7.56555 8.92345 7.51625 9.1557 7.6291 9.32935 7.74195 9.503 7.97425 9.5523 8.1479 9.43945 8.94535 8.92115 9.70365 8.3995 10.2338 7.6688 10.7756 6.92205 11.0585 5.9897 10.9898 4.68746 10.9841 3.46954 9.9722 2.5 8.74495 2.5z"
          fill={color}
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default QuoteRight12;
