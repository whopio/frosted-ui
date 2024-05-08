import * as React from 'react';
import { IconProps } from './types';

export const Code16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.49997 13.5L9.49997 2.5M12.1666 5.16667L13.9732 7.0862C14.4564 7.5996 14.4564 8.4004 13.9732 8.9138L12.1666 10.8333M3.83331 10.8333L2.02671 8.9138C1.54351 8.4004 1.54351 7.5996 2.02671 7.0862L3.83331 5.16667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Code16;
