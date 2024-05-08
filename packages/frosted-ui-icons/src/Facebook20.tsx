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
          d="M7.98672 18.0883V12.5467H6.26681V9.99996H7.98672V8.90271C7.98672 6.06616 9.27002 4.75273 12.0534 4.75273C12.5803 4.75273 13.4899 4.85598 13.8636 4.95922V7.26616C13.6668 7.24626 13.3233 7.23607 12.9001 7.23607C11.5334 7.23607 11.0066 7.75273 11.0066 9.09946V9.99996H13.7303L13.2636 12.5463H11.0104V18.273C15.1364 17.7732 18.3334 14.26 18.3334 9.99996C18.3334 5.39764 14.6024 1.66663 10 1.66663C5.3977 1.66663 1.66669 5.39764 1.66669 9.99996C1.66669 13.9082 4.3568 17.1877 7.98672 18.0883Z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Facebook20;
