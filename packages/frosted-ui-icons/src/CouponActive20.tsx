import * as React from 'react';
import { IconProps } from './types';

export const CouponActive20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.10748 1.25L7.81002 0.987435C7.70047 0.694301 7.42042 0.5 7.10748 0.5V1.25ZM7.10748 18.75V19.5C7.42042 19.5 7.70047 19.3057 7.81002 19.0126L7.10748 18.75ZM12.8925 18.75L12.19 19.0126C12.2995 19.3057 12.5796 19.5 12.8925 19.5V18.75ZM12.8925 1.25V0.5C12.5796 0.5 12.2995 0.694301 12.19 0.987434L12.8925 1.25ZM7.10748 0.5H4V2H7.10748V0.5ZM4 0.5C2.89543 0.5 2 1.39543 2 2.5H3.5C3.5 2.22386 3.72386 2 4 2V0.5ZM2 2.5V17.5H3.5V2.5H2ZM2 17.5C2 18.6046 2.89543 19.5 4 19.5V18C3.72386 18 3.5 17.7761 3.5 17.5H2ZM4 19.5H7.10748V18H4V19.5ZM7.81002 19.0126C8.1399 18.1299 8.99556 17.5 9.99999 17.5V16C8.35314 16 6.94808 17.0342 6.40495 18.4874L7.81002 19.0126ZM9.99999 17.5C11.0044 17.5 11.8601 18.1299 12.19 19.0126L13.595 18.4874C13.0519 17.0342 11.6468 16 9.99999 16V17.5ZM12.8925 19.5H16V18H12.8925V19.5ZM16 19.5C17.1046 19.5 18 18.6046 18 17.5H16.5C16.5 17.7761 16.2761 18 16 18V19.5ZM18 17.5V2.5H16.5V17.5H18ZM18 2.5C18 1.39543 17.1046 0.5 16 0.5V2C16.2761 2 16.5 2.22386 16.5 2.5H18ZM16 0.5H12.8925V2H16V0.5ZM12.19 0.987434C11.8601 1.87008 11.0044 2.5 9.99999 2.5V4C11.6468 4 13.0519 2.96582 13.595 1.51257L12.19 0.987434ZM9.99999 2.5C8.99556 2.5 8.1399 1.87008 7.81002 0.987435L6.40495 1.51257C6.94808 2.96582 8.35314 4 9.99999 4V2.5Z"
          fill={color}
        />
        <path
          d="M6.75 13.25L13.25 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="7.375"
          cy="7.625"
          r="1.125"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12.625"
          cy="12.375"
          r="1.125"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CouponActive20;
