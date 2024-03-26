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
          d="M2.65621 11.2604H17.0833M5.99996 17.7604L14 17.7604M7.66923 14.375V17.7604M12.3307 14.375V17.7604M3.95829 14.375H16.0416C16.9621 14.375 17.7083 13.6288 17.7083 12.7083V4.79167C17.7083 3.87119 16.9621 3.125 16.0416 3.125H3.95829C3.03782 3.125 2.29163 3.87119 2.29163 4.79167V12.7083C2.29163 13.6288 3.03782 14.375 3.95829 14.375Z"
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
