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
          d="M1.375 2.875C1.375 2.32271 1.82271 1.875 2.375 1.875H9.625C10.1773 1.875 10.625 2.32271 10.625 2.875V8.125C10.625 8.6773 10.1773 9.125 9.625 9.125H7.68795C7.5715 9.125 7.45865 9.16565 7.369 9.23995L6.31985 10.1091C6.13395 10.2631 5.8646 10.2624 5.67965 10.1074L4.64711 9.2418C4.55709 9.16635 4.44338 9.125 4.32591 9.125H2.375C1.82271 9.125 1.375 8.6773 1.375 8.125V2.875Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M3.3125 5.5C3.3125 5.7416 3.50838 5.9375 3.75 5.9375C3.99163 5.9375 4.1875 5.7416 4.1875 5.5C4.1875 5.2584 3.99163 5.0625 3.75 5.0625C3.50838 5.0625 3.3125 5.2584 3.3125 5.5ZM5.5625 5.5C5.5625 5.7416 5.7584 5.9375 6 5.9375C6.2416 5.9375 6.4375 5.7416 6.4375 5.5C6.4375 5.2584 6.2416 5.0625 6 5.0625C5.7584 5.0625 5.5625 5.2584 5.5625 5.5ZM7.8125 5.5C7.8125 5.7416 8.0084 5.9375 8.25 5.9375C8.4916 5.9375 8.6875 5.7416 8.6875 5.5C8.6875 5.2584 8.4916 5.0625 8.25 5.0625C8.0084 5.0625 7.8125 5.2584 7.8125 5.5Z"
          fill={color}
          stroke={color}
          strokeWidth=".75"
          strokeLinecap="square"
        />
      </svg>
    );
  },
);

export default Message12;
