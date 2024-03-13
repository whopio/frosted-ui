import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.375 11.125H7.625C8.45345 11.125 9.125 10.4535 9.125 9.625V2.375C9.125 1.54658 8.45345.875 7.625.875H4.375C3.54658.875 2.875 1.54658 2.875 2.375V9.625C2.875 10.4535 3.54658 11.125 4.375 11.125zM4.875 8.84375H7.125"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone12;
