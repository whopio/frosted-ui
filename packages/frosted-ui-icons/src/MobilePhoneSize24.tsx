import * as React from 'react';
import { IconProps } from './types';

export const MobilePhoneSize24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M9.75 19.25H14.25M8.75 22.25H15.25C16.9069 22.25 18.25 20.9069 18.25 19.25V4.75C18.25 3.09315 16.9069 1.75 15.25 1.75H8.75C7.09315 1.75 5.75 3.09315 5.75 4.75V19.25C5.75 20.9069 7.09315 22.25 8.75 22.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhoneSize24;
