import * as React from 'react';
import { IconProps } from './types';

export const Message12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 2.79C0.75 1.93948 1.43948 1.25 2.29 1.25H9.71C10.5605 1.25 11.25 1.93948 11.25 2.79V7.21C11.25 8.06052 10.5605 8.75 9.71 8.75H7.92606C7.73249 8.75 7.54602 8.82291 7.40378 8.9542L6 10.25L4.59622 8.9542C4.45398 8.82291 4.26751 8.75 4.07394 8.75H2.29C1.43948 8.75 0.75 8.06052 0.75 7.21V2.79Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="5" r="1" transform="rotate(-90 6 5)" fill={color} />
        <circle cx="9" cy="5" r="1" transform="rotate(-90 9 5)" fill={color} />
        <circle cx="3" cy="5" r="1" transform="rotate(-90 3 5)" fill={color} />
      </svg>
    );
  },
);

export default Message12;
