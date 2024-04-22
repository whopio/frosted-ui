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
          d="M6.5 13.5L9.5 2.5M12.1667 5.16667L13.9733 7.0862C14.4565 7.5996 14.4565 8.4004 13.9733 8.9138L12.1667 10.8333M3.83334 10.8333L2.02674 8.9138C1.54354 8.4004 1.54354 7.5996 2.02674 7.0862L3.83334 5.16667"
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
