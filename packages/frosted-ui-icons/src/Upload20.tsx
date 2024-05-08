import * as React from 'react';
import { IconProps } from './types';

export const Upload20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5417 4.95829L10.5893 2.00588C10.2639 1.68046 9.73621 1.68046 9.41079 2.00588L6.45837 4.95829M10 13.7083V2.04163M16.0417 17.2916H3.95837"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Upload20;
