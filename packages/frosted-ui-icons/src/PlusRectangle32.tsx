import * as React from 'react';
import { IconProps } from './types';

export const PlusRectangle32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.25 3.5C5.17893 3.5 3.5 5.17893 3.5 7.25V24.75C3.5 26.8211 5.17893 28.5 7.25 28.5H24.75C26.8211 28.5 28.5 26.8211 28.5 24.75V7.25C28.5 5.17893 26.8211 3.5 24.75 3.5H7.25ZM2 7.25C2 4.35051 4.35051 2 7.25 2H24.75C27.6495 2 30 4.3505 30 7.25V24.75C30 27.6495 27.6495 30 24.75 30H7.25C4.35051 30 2 27.6495 2 24.75V7.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M16 24C15.5858 24 15.25 23.6642 15.25 23.25V8.75C15.25 8.33579 15.5858 8 16 8C16.4142 8 16.75 8.33579 16.75 8.75V23.25C16.75 23.6642 16.4142 24 16 24Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.75 15.25L23.25 15.25C23.6642 15.25 24 15.5858 24 16C24 16.4142 23.6642 16.75 23.25 16.75L8.75 16.75C8.33579 16.75 8 16.4142 8 16C8 15.5858 8.33579 15.25 8.75 15.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default PlusRectangle32;
