import * as React from 'react';
import { IconProps } from './types';

export const Document24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.75 8.25H16.1868C14.5649 8.25 13.25 6.93513 13.25 5.31316V0.75M20.75 8.2384V20.3132C20.75 21.9351 19.4351 23.25 17.8132 23.25H6.18684C4.56487 23.25 3.25 21.9351 3.25 20.3132V3.68684C3.25 2.06487 4.56487 0.75 6.18684 0.75H13.4892C14.2942 0.75 15.0639 1.08045 15.6184 1.66409L19.9424 6.21565C20.4609 6.76146 20.75 7.48555 20.75 8.2384Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Document24;
