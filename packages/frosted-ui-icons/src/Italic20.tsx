import * as React from 'react';
import { IconProps } from './types';

export const Italic20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.12504 3.125H12.0834M12.0834 3.125H16.0417M12.0834 3.125L7.91671 16.875M7.91671 16.875H3.95837M7.91671 16.875H11.8835"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Italic20;
