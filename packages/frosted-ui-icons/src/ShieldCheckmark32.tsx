import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M12.3333 15.3333L14.6667 17.6667L19.6667 12.6667M27 15.8832V9.2554C27 8.10759 26.2655 7.08855 25.1767 6.72557L16.8433 3.9478C16.2959 3.76533 15.7041 3.76533 15.1567 3.9478L6.82339 6.72557C5.73448 7.08855 5 8.10759 5 9.2554V15.8832C5 22.5131 10.6667 25.6667 16 28.5439C21.3333 25.6667 27 22.5131 27 15.8832Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ShieldCheckmark32;
