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
          d="M0.750056 6.74996L7.81389 11.5746C8.45804 12.0146 9.21994 12.2499 10 12.2499C10.7801 12.2499 11.542 12.0146 12.1861 11.5746L19.2499 6.74996M3.33004 17.2499H16.67C18.0948 17.2499 19.2499 16.0948 19.2499 14.6699V5.32997C19.2499 3.90508 18.0948 2.74998 16.67 2.74998H3.33004C1.90515 2.74998 0.750056 3.90508 0.750056 5.32997V14.6699C0.750056 16.0948 1.90515 17.2499 3.33004 17.2499Z"
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
