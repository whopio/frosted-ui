import * as React from 'react';
import { IconProps } from './types';

export const Plane20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.6634 8.31436L9.96629 2.92017H7.94347L9.29201 8.31436H5.58351L3.56068 6.29154H1.875L3.22355 10L1.875 13.7085H3.56068L5.58351 11.6857H9.29201L7.94347 17.0799H9.96629L12.6634 11.6857H16.4393C17.3703 11.6857 18.125 10.931 18.125 10C18.125 9.06907 17.3703 8.31436 16.4393 8.31436H12.6634Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Plane20;
