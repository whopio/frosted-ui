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
          d="M8.12502 16.0417H11.875M7.29169 18.5417H12.7084C14.0891 18.5417 15.2084 17.4224 15.2084 16.0417V3.95834C15.2084 2.57763 14.0891 1.45834 12.7084 1.45834H7.29169C5.91098 1.45834 4.79169 2.57763 4.79169 3.95834V16.0417C4.79169 17.4224 5.91098 18.5417 7.29169 18.5417Z"
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
