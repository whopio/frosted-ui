import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 8.5C7 8.74473 7.1194 8.97407 7.31989 9.11442L9.81979 10.8644C10.1591 11.102 10.6268 11.0194 10.8643 10.6801C11.1019 10.3408 11.0193 9.87313 10.68 9.63558L8.5 8.10952V4.0001C8.5 3.58589 8.16421 3.2501 7.75 3.2501C7.33579 3.2501 7 3.58589 7 4.0001L7 8.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ClockFilled16;
