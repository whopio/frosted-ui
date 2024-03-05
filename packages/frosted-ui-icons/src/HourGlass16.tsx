import * as React from 'react';
import { IconProps } from './types';

export const HourGlass16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.33333 8C6.33333 6.11926 3.38569 6.89141 3.03414 2.0008C2.99455 1.44994 3.44772 1 4 1H12C12.5523 1 13.0055 1.44994 12.9659 2.0008C12.6143 6.89141 9.66667 6.11926 9.66667 8C9.66667 9.88074 12.6143 9.10859 12.9659 13.9992C13.0055 14.5501 12.5523 15 12 15H4C3.44772 15 2.99455 14.5501 3.03414 13.9992C3.38569 9.10859 6.33333 9.88074 6.33333 8Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.45283 5.75425C6.35808 5.20771 5.36395 4.37205 5.08049 3.49131C4.99589 3.22844 5.22414 3 5.50028 3H10.4997C10.7759 3 11.0041 3.22844 10.9195 3.49131C10.636 4.37205 9.64192 5.20771 8.54717 5.75425C8.20256 5.92629 7.79744 5.9263 7.45283 5.75425Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HourGlass16;
