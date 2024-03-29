import * as React from 'react';
import { IconProps } from './types';

export const Mail20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.750113 6.74992L7.81391 11.5745C8.45805 12.0145 9.21995 12.2499 10 12.2499C10.7801 12.2499 11.542 12.0145 12.1861 11.5745L19.2499 6.74992M3.33008 17.2498H16.6699C18.0948 17.2498 19.2499 16.0947 19.2499 14.6698V5.32993C19.2499 3.90506 18.0948 2.74997 16.6699 2.74997H3.33008C1.9052 2.74997 0.750113 3.90506 0.750113 5.32993V14.6698C0.750113 16.0947 1.9052 17.2498 3.33008 17.2498Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail20;
