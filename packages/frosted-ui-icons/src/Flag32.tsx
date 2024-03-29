import * as React from 'react';
import { IconProps } from './types';

export const Flag32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M6.33331 20.1111V5.86553C6.33331 5.35819 6.6209 4.89539 7.09182 4.70667C8.10374 4.30117 9.98601 3.66669 11.8571 3.66669C14.607 3.66669 17.3929 6.40743 20.1428 6.40743C21.402 6.40743 22.6662 6.12009 23.6669 5.80855C24.6106 5.51474 25.6666 6.19453 25.6666 7.18291V19.2827C25.6666 19.79 25.379 20.2528 24.9081 20.4415C23.8962 20.8471 22.014 21.4815 20.1428 21.4815C17.3929 21.4815 14.607 18.7408 11.8571 18.7408C9.10725 18.7408 6.33331 20.1111 6.33331 20.1111ZM6.33331 20.1111V28.3334"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Flag32;
