import * as React from 'react';
import { IconProps } from './types';

export const MessagesQuestion16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M6.65843 9.10857C6.71583 8.72673 6.92947 8.52048 7.14362 8.37497C7.35303 8.23256 7.56249 8.04776 7.56249 7.70559C7.56249 7.23332 7.18358 6.85083 6.71583 6.85083C6.24802 6.85083 5.86917 7.23332 5.86917 7.70559"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M6.22269 10.4275C6.22269 10.7408 6.47663 10.9947 6.78987 10.9947C7.10311 10.9947 7.35705 10.7408 7.35705 10.4275C7.35705 10.1143 7.10311 9.86035 6.78987 9.86035C6.47663 9.86035 6.22269 10.1143 6.22269 10.4275Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default MessagesQuestion16;
