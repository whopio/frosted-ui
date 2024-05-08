import * as React from 'react';
import { IconProps } from './types';

export const Monitor20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.65624 11.2604H17.0833M5.99999 17.7604L14 17.7604M7.66926 14.375V17.7604M12.3307 14.375V17.7604M3.95832 14.375H16.0417C16.9622 14.375 17.7083 13.6288 17.7083 12.7083V4.79167C17.7083 3.87119 16.9622 3.125 16.0417 3.125H3.95832C3.03785 3.125 2.29166 3.87119 2.29166 4.79167V12.7083C2.29166 13.6288 3.03785 14.375 3.95832 14.375Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Monitor20;
