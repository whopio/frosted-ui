import * as React from 'react';
import { IconProps } from './types';

export const ThreeDotsCircle16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M5.33332 7.99999V7.99333M5.49999 7.99999C5.49999 8.09206 5.42537 8.16666 5.33332 8.16666 5.24128 8.16666 5.16666 8.09206 5.16666 7.99999 5.16666 7.90793 5.24128 7.83333 5.33332 7.83333 5.42537 7.83333 5.49999 7.90793 5.49999 7.99999zM8.00001 7.99999V7.99333M8.16668 7.99999C8.16668 8.09206 8.09208 8.16666 8.00001 8.16666 7.90794 8.16666 7.83334 8.09206 7.83334 7.99999 7.83334 7.90793 7.90794 7.83333 8.00001 7.83333 8.09208 7.83333 8.16668 7.90793 8.16668 7.99999zM10.6667 7.99999V7.99333M10.8333 7.99999C10.8333 8.09206 10.7587 8.16666 10.6667 8.16666 10.5746 8.16666 10.5 8.09206 10.5 7.99999 10.5 7.90793 10.5746 7.83333 10.6667 7.83333 10.7587 7.83333 10.8333 7.90793 10.8333 7.99999z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14.1667 8C14.1667 11.4057 11.4057 14.1667 8.00001 14.1667C4.59426 14.1667 1.83334 11.4057 1.83334 8C1.83334 4.59424 4.59426 1.83333 8.00001 1.83333C11.4057 1.83333 14.1667 4.59424 14.1667 8Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default ThreeDotsCircle16;