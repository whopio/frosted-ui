import * as React from 'react';
import { IconProps } from './types';

export const SunSize12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.9991 1.64541V0.883781M2.91993 9.07929L2.38138 9.61784M5.9991 11.1163V10.3547M9.6167 2.38233L9.0781 2.92089M10.3535 6.00004H11.1152M9.0781 9.07929L9.6167 9.61784M0.882812 6.00004H1.64444M2.38134 2.3823L2.91989 2.92086M7.8552 4.1439C8.8803 5.16904 8.8803 6.83109 7.8552 7.85619C6.83005 8.88134 5.168 8.88134 4.14287 7.85619C3.11774 6.83109 3.11774 5.16904 4.14287 4.1439C5.168 3.11877 6.83005 3.11877 7.8552 4.1439Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SunSize12;