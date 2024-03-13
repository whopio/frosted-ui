import * as React from 'react';
import { IconProps } from './types';

export const FacebookSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.79202 10.853V7.52805H3.76008V6H4.79202V5.34165C4.79202 3.63972 5.562 2.85167 7.232 2.85167C7.51746 2.85167 7.99015 2.90217 8.24427 2.95757C8.28821 2.96715 8.31815 3.0067 8.31815 3.05167V4.2491C8.31815 4.30831 8.26701 4.35479 8.2079 4.35154C8.08875 4.34499 7.92741 4.34166 7.74005 4.34166C6.92005 4.34166 6.60395 4.65167 6.60395 5.4597V6H8.23815L7.95815 7.5278H6.6062V10.9639C9.08185 10.664 11 8.556 11 6C11 3.23861 8.7614 1 6 1C3.23861 1 1 3.23861 1 6C1 8.34495 2.61406 10.3126 4.79202 10.853Z"
          stroke={color}
          strokeWidth="1.2"
        />
      </svg>
    );
  },
);

export default FacebookSize12;
