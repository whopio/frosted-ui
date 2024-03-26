import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.12496 16.0417H11.875M7.29163 18.5417H12.7083C14.089 18.5417 15.2083 17.4224 15.2083 16.0417V3.95834C15.2083 2.57764 14.089 1.45834 12.7083 1.45834H7.29163C5.91092 1.45834 4.79163 2.57764 4.79163 3.95834V16.0417C4.79163 17.4224 5.91092 18.5417 7.29163 18.5417Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone20;
