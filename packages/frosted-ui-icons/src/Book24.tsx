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
          d="M.75 22.25V4.80667C.75 4.65431.782932 4.50353.858686 4.37134 2.79 1.00132 10.0389 1.06965 12 4.57638 13.9611 1.0696 21.21 1.00132 23.1413 4.37134 23.2171 4.50353 23.25 4.65538 23.25 4.80774V22.25C21 19 14 19 12 22.25 10 19 3 19 .75 22.25zM12 4.5L12 21.75"
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
