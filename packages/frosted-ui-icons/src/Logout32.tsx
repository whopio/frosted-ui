import * as React from 'react';
import { IconProps } from './types';

export const Logout32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.75 9.25V5.98C18.75 4.19612 17.3039 2.75 15.52 2.75H5.98C4.19612 2.75 2.75 4.19612 2.75 5.98V26.02C2.75 27.8039 4.19612 29.25 5.98 29.25H15.52C17.3039 29.25 18.75 27.8039 18.75 26.02V22.75M12.75 16H29.25M29.25 16L23.75 10.75M29.25 16L23.75 21.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout32;
