import * as React from 'react';
import { IconProps } from './types';

export const ArrowDownAngleLeft24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M22.2464 15.25H3.625C2.58947 15.25 1.75 14.4105 1.75 13.375V4.75M22.2464 15.25L17.75 11M22.2464 15.25L17.75 19.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ArrowDownAngleLeft24;
