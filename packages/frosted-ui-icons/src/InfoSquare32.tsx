import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.25 24.2499V13.75H12.75M14.75 13.75V24.2499M12.75 24.2499H20.25M18.25 9.50403C18.25 10.4705 17.4665 11.254 16.5 11.254C15.5335 11.254 14.75 10.4705 14.75 9.50403C14.75 8.53753 15.5335 7.75403 16.5 7.75403C17.4665 7.75403 18.25 8.53753 18.25 9.50403ZM3.25 6.32V25.68C3.25 27.6517 4.84834 29.25 6.82 29.25H26.18C28.1517 29.25 29.75 27.6517 29.75 25.68V6.32C29.75 4.34834 28.1517 2.75 26.18 2.75H6.82C4.84834 2.75 3.25 4.34834 3.25 6.32Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default InfoSquare32;
