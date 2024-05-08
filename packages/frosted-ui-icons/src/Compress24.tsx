import * as React from 'react';
import { IconProps } from './types';

export const Compress24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 9.5V1.875M12 9.5L8.5 6M12 9.5L15.5 6M12 14.5L12 22.125M12 14.5L15.5 18M12 14.5L8.5 18M3.75 12H20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Compress24;
