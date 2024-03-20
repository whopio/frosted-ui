import * as React from 'react';
import { IconProps } from './types';

export const Messages20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M14.3748 11.875H16.0433C16.9637 11.875 17.71 11.1288 17.71 10.2083V4.79167C17.71 3.87119 16.9637 3.125 16.0433 3.125H7.50161C6.58113 3.125 5.83494 3.87119 5.83494 4.79167V6.45833M12.71 6.45833H3.95994C3.03947 6.45833 2.29327 7.20453 2.29327 8.125V13.5417C2.29327 14.4622 3.03947 15.2083 3.95994 15.2083H5.00161V17.2917L8.75165 15.2083H12.71C13.6304 15.2083 14.3766 14.4622 14.3766 13.5417V8.125C14.3766 7.20453 13.6304 6.45833 12.71 6.45833Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Messages20;
