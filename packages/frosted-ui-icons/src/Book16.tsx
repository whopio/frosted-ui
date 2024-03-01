import * as React from 'react';
import { IconProps } from './types';

export const Book16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M.75 13.25V2.66634C.75 2.60441.761057 2.54593.78602 2.48924 1.81993.141616 6.87854.170544 8 2.5764 9.12146.170544 14.1801.141616 15.214 2.48924 15.2389 2.54593 15.25 2.60798 15.25 2.66991V13.25C13.9257 11.2212 9.13514 11.2212 8 13.25 6.86486 11.2212 2.07432 11.2212.75 13.25zM8 2.5L8 13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book16;