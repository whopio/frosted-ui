import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.281 2.8035L8.44901 1.19251C8.16001 1.09451 7.841 1.09551 7.552 1.19251L2.71899 2.8035C2.13999 2.9965 1.75 3.53651 1.75 4.14751V7.9415C1.75 11.7545 5.019 13.5165 7.645 14.9315C7.755 14.9915 7.878 15.0215 8 15.0215C8.122 15.0215 8.245 14.9915 8.355 14.9315C10.981 13.5165 14.25 11.7545 14.25 7.9415V4.14751C14.25 3.53651 13.86 2.9965 13.281 2.8035ZM12.75 7.9415C12.75 10.5405 10.801 11.8895 8 13.4175V2.62351L12.75 4.2065V7.9415Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf16;
