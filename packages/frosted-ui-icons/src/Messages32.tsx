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
          d="M20.5 7V16C20.5 17.6875 19.1406 19 17.5 19H11.5L6.39062 21.9062C6.25 22 6.15625 22 6.0625 22C5.73438 22 5.5 21.8125 5.5 21.4375V19H4C2.3125 19 1 17.6875 1 16V7C1 5.35938 2.3125 4 4 4H17.5C19.1406 4 20.5 5.35938 20.5 7ZM7.75 18.5781L10.8906 16.75H17.5C17.875 16.75 18.25 16.4219 18.25 16V7C18.25 6.625 17.875 6.25 17.5 6.25H4C3.57812 6.25 3.25 6.625 3.25 7V16C3.25 16.4219 3.57812 16.75 4 16.75H7.75V18.5781ZM13 22V20.5H15.25V22C15.25 22.4219 15.5781 22.75 16 22.75H21.0625L24.25 24.5781V22.75H28C28.375 22.75 28.75 22.4219 28.75 22V13C28.75 12.625 28.375 12.25 28 12.25H22V10H28C29.6406 10 31 11.3594 31 13V22C31 23.6875 29.6406 25 28 25H26.5V27.4375C26.5 27.8125 26.2188 28 25.9375 28C25.7969 28 25.7031 28 25.5625 27.9062L20.5 25H16C14.3125 25 13 23.6875 13 22Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Messages32;