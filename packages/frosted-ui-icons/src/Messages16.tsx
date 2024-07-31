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
          d="M11.4999 9.5H12.8348C13.5711 9.5 14.1681 8.90307 14.1681 8.16667V3.83333C14.1681 3.09695 13.5711 2.5 12.8348 2.5H6.00138C5.265 2.5 4.66805 3.09695 4.66805 3.83333V5.16667M10.1681 5.16667H3.16805C2.43167 5.16667 1.83472 5.76362 1.83472 6.5V10.8333C1.83472 11.5697 2.43167 12.1667 3.16805 12.1667H4.00138V13.8333L7.00142 12.1667H10.1681C10.9044 12.1667 11.5014 11.5697 11.5014 10.8333V6.5C11.5014 5.76362 10.9044 5.16667 10.1681 5.16667Z"
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
