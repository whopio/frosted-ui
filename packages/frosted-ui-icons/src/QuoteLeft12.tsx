import * as React from 'react';
import { IconProps } from './types';

export const QuoteLeft12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.75504 9.50005C9.98584 9.50005 11 8.52495 11 7.30215 11 6.0793 9.98584 5.1042 8.75504 5.1042 8.28554 5.1042 7.84754 5.2461 7.48539 5.4895 7.58724 5.22005 7.71874 4.98455 7.87314 4.7717 8.31134 4.16779 8.95544 3.71286 9.76079 3.18947 9.93444 3.07661 9.98374 2.84435 9.87089 2.67069 9.75799 2.49704 9.52574 2.44775 9.35209 2.56061 8.55464 3.07889 7.79629 3.60052 7.26609 4.33125 6.72434 5.078 6.44149 6.01035 6.51014 7.3126 6.51589 8.5305 7.52779 9.50005 8.75504 9.50005zM3.25505 9.50005C4.48583 9.50005 5.5 8.52495 5.5 7.30215 5.5 6.0793 4.48583 5.1042 3.25505 5.1042 2.78555 5.1042 2.34757 5.2461 1.98539 5.4895 2.08723 5.22005 2.21873 4.98455 2.37317 4.7717 2.81134 4.16779 3.45546 3.71286 4.2608 3.18947 4.43445 3.07661 4.48374 2.84435 4.37088 2.67069 4.25802 2.49704 4.02575 2.44775 3.8521 2.56061 3.05463 3.07889 2.29631 3.60052 1.76612 4.33125 1.22433 5.078.941494 6.01035 1.01014 7.3126 1.0159 8.5305 2.02778 9.50005 3.25505 9.50005z"
          fill={color}
        />
      </svg>
    );
  },
);

export default QuoteLeft12;
