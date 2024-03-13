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
          d="M11.4999 9.5H12.8347C13.571 9.5 14.168 8.90307 14.168 8.16667V3.83333C14.168 3.09695 13.571 2.5 12.8347 2.5H6.00129C5.26491 2.5 4.66796 3.09695 4.66796 3.83333V5.16667M10.168 5.16667H3.16796C2.43158 5.16667 1.83463 5.76362 1.83463 6.5V10.8333C1.83463 11.5697 2.43158 12.1667 3.16796 12.1667H4.00129V13.8333L7.00132 12.1667H10.168C10.9043 12.1667 11.5013 11.5697 11.5013 10.8333V6.5C11.5013 5.76362 10.9043 5.16667 10.168 5.16667Z"
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
