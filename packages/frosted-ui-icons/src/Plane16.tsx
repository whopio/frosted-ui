import * as React from 'react';
import { IconProps } from './types';

export const Plane16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.1307 6.65147L7.97303 2.33612H6.35477L7.43361 6.65147H4.46681L2.84855 5.03322H1.5L2.57884 8.00002L1.5 10.9668H2.84855L4.46681 9.34857H7.43361L6.35477 13.6639H7.97303L10.1307 9.34857H13.1515C13.8962 9.34857 14.5 8.7448 14.5 8.00002C14.5 7.25524 13.8962 6.65147 13.1515 6.65147H10.1307Z"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Plane16;
