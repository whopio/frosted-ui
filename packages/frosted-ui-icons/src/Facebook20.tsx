import * as React from 'react';
import { IconProps } from './types';

export const Facebook20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.98669 18.0883V12.5467H6.26678V9.99999H7.98669V8.90274C7.98669 6.06619 9.26999 4.75276 12.0533 4.75276C12.5802 4.75276 13.4899 4.85601 13.8636 4.95925V7.26619C13.6667 7.24629 13.3232 7.2361 12.9001 7.2361C11.5334 7.2361 11.0066 7.75276 11.0066 9.09949V9.99999H13.7302L13.2636 12.5463H11.0103V18.2731C15.1364 17.7732 18.3333 14.26 18.3333 9.99999C18.3333 5.39767 14.6023 1.66666 9.99999 1.66666C5.39767 1.66666 1.66666 5.39767 1.66666 9.99999C1.66666 13.9082 4.35676 17.1877 7.98669 18.0883Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Facebook20;
