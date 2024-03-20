import * as React from 'react';
import { IconProps } from './types';

export const Messages16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.4999 9.5H12.8347C13.571 9.5 14.168 8.90307 14.168 8.16667V3.83333C14.168 3.09695 13.571 2.5 12.8347 2.5H6.00132C5.26494 2.5 4.66799 3.09695 4.66799 3.83333V5.16667M10.168 5.16667H3.16799C2.43161 5.16667 1.83466 5.76362 1.83466 6.5V10.8333C1.83466 11.5697 2.43161 12.1667 3.16799 12.1667H4.00132V13.8333L7.00136 12.1667H10.168C10.9044 12.1667 11.5014 11.5697 11.5014 10.8333V6.5C11.5014 5.76362 10.9044 5.16667 10.168 5.16667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Messages16;
