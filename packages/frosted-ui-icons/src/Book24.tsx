import * as React from 'react';
import { IconProps } from './types';

export const Book24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 4.49998L12 21.75M0.75 4.80667V22.25C3 19 10 19 12 22.25C14 19 21 19 23.25 22.25V4.80774C23.25 4.65538 23.2171 4.50353 23.1413 4.37134C21.21 1.00132 13.9611 1.0696 12 4.57638C10.0389 1.06965 2.79 1.00132 0.858686 4.37134C0.782932 4.50353 0.75 4.65431 0.75 4.80667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book24;
