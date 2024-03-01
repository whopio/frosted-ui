import * as React from 'react';
import { IconProps } from './types';

export const Logout12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 3.25V2.03C6.75 1.32308 6.17692.75 5.47.75H2.03C1.32308.75.75 1.32308.75 2.03V9.97C.75 10.6769 1.32308 11.25 2.03 11.25H5.47C6.17692 11.25 6.75 10.6769 6.75 9.97V8.75M4.75 6H11.25M11.25 6L8.75 3.75M11.25 6L8.75 8.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout12;