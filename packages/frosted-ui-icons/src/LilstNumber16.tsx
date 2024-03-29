import * as React from 'react';
import { IconProps } from './types';

export const LilstNumber16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M3.83333 13.5H12.1667C12.9031 13.5 13.5 12.9031 13.5 12.1667V3.83333C13.5 3.09695 12.9031 2.5 12.1667 2.5H3.83333C3.09695 2.5 2.5 3.09695 2.5 3.83333V12.1667C2.5 12.9031 3.09695 13.5 3.83333 13.5Z"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.89583 9.97919H11.4375M7.89583 6.02085H11.4375M5.60417 7.06252V4.97919L4.5625 5.70835M4.66667 9.2216C4.66667 9.2216 4.96822 8.93752 5.33702 8.93752C5.70583 8.93752 6.00481 9.19664 6.00481 9.51627C6.00481 10.2661 4.5625 10.3959 4.5625 11.0209H6.125"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LilstNumber16;
