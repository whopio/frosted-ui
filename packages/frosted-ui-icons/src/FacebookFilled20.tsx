import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.98672 18.0883V12.5467H6.26681V9.99999H7.98672V8.90274C7.98672 6.06619 9.27002 4.75276 12.0534 4.75276C12.5803 4.75276 13.4899 4.85601 13.8636 4.95925V7.26619C13.6668 7.24629 13.3233 7.2361 12.9001 7.2361C11.5334 7.2361 11.0066 7.75276 11.0066 9.09949V9.99999H13.7303L13.2636 12.5463H11.0104V18.2731C15.1364 17.7732 18.3334 14.26 18.3334 9.99999C18.3334 5.39767 14.6024 1.66666 10 1.66666C5.3977 1.66666 1.66669 5.39767 1.66669 9.99999C1.66669 13.9082 4.3568 17.1877 7.98672 18.0883Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled20;
