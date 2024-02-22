import * as React from 'react';
import { IconProps } from './types';

export const Trash20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.07848 6.94178C4.03623 6.4348 4.43631 6 4.94504 6H15.055C15.5637 6 15.9638 6.43481 15.9215 6.94178L15.1993 15.6079C15.0867 16.96 13.9564 18 12.5997 18H7.40035C6.04359 18 4.91333 16.96 4.80066 15.6079L4.07848 6.94178Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 6H17M7 5.99976L7.18991 4.48045C7.36706 3.06326 8.57178 1.99976 10 1.99976V1.99976C11.4282 1.99976 12.6329 3.06326 12.8101 4.48045L13 5.99976"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Trash20;
