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
          d="M14.3749 11.875H16.0434C16.9638 11.875 17.71 11.1288 17.71 10.2083V4.79167C17.71 3.87119 16.9638 3.125 16.0434 3.125H7.50167C6.58119 3.125 5.835 3.87119 5.835 4.79167V6.45833M12.71 6.45833H3.96C3.03953 6.45833 2.29333 7.20453 2.29333 8.125V13.5417C2.29333 14.4622 3.03953 15.2083 3.96 15.2083H5.00167V17.2917L8.75171 15.2083H12.71C13.6305 15.2083 14.3767 14.4622 14.3767 13.5417V8.125C14.3767 7.20453 13.6305 6.45833 12.71 6.45833Z"
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
