import * as React from 'react';
import { IconProps } from './types';

export const Messages32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.9997 19H25.6693C27.142 19 28.336 17.8061 28.336 16.3333V7.66667C28.336 6.19391 27.142 5 25.6693 5H12.0026C10.5298 5 9.33592 6.19391 9.33592 7.66667V10.3333M20.336 10.3333H6.33592C4.86316 10.3333 3.66925 11.5272 3.66925 13V21.6667C3.66925 23.1395 4.86316 24.3333 6.33592 24.3333H8.00258V27.6667L14.0026 24.3333H20.336C21.8086 24.3333 23.0027 23.1395 23.0027 21.6667V13C23.0027 11.5272 21.8086 10.3333 20.336 10.3333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Messages32;
