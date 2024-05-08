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
          d="M8.12501 16.0416H11.875M7.29167 18.5416H12.7083C14.0891 18.5416 15.2083 17.4224 15.2083 16.0416V3.95831C15.2083 2.5776 14.0891 1.45831 12.7083 1.45831H7.29167C5.91096 1.45831 4.79167 2.5776 4.79167 3.95831V16.0416C4.79167 17.4224 5.91096 18.5416 7.29167 18.5416Z"
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
