import * as React from 'react';
import { IconProps } from './types';

export const Reply12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.957289 5.81375L5.208 1.999C5.36895 1.85455 5.62495 1.96878 5.62495 2.18506V4.24979C9.87495 4.24979 11 5.8748 11 10.1248C10.25 8.6248 9.87495 7.7498 5.62495 7.7498V9.8145C5.62495 10.0308 5.36895 10.145 5.208 10.0006L0.957289 6.18585C0.846594 6.0865 0.846594 5.91305 0.957289 5.81375Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Reply12;
