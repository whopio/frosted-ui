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
          d="M10.1307 6.65141L7.97303 2.33606H6.35477L7.43361 6.65141H4.46681L2.84855 5.03315H1.5L2.57884 7.99996L1.5 10.9668H2.84855L4.46681 9.34851H7.43361L6.35477 13.6639H7.97303L10.1307 9.34851H13.1515C13.8962 9.34851 14.5 8.74474 14.5 7.99996C14.5 7.25518 13.8962 6.65141 13.1515 6.65141H10.1307Z"
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

export default Plane16;
