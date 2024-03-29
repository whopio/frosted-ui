import * as React from 'react';
import { IconProps } from './types';

export const ClockFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9 10.5C9 10.7301 9.10566 10.9475 9.28663 11.0897L12.7865 13.8397C13.1122 14.0956 13.5837 14.0391 13.8396 13.7134C14.0955 13.3877 14.039 12.9162 13.7133 12.6603L10.5 10.1355V5.0001C10.5 4.58589 10.1642 4.2501 9.75 4.2501C9.33579 4.2501 9 4.58589 9 5.0001V10.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default ClockFilled20;
