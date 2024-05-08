import * as React from 'react';
import { IconProps } from './types';

export const Bell32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.25 25.25V26C20.25 28.3472 18.3472 30.25 16 30.25C13.6528 30.25 11.75 28.3472 11.75 26V25.25M26.25 13V20.0723C26.25 21.2133 26.6402 22.3199 27.3559 23.2085L28.0826 24.1109C28.4515 24.5689 28.1255 25.25 27.5375 25.25H4.46254C3.87452 25.25 3.54854 24.5689 3.91736 24.1109L4.64414 23.2085C5.35979 22.3199 5.75 21.2133 5.75 20.0723V13C5.75 7.33908 10.3391 2.75 16 2.75C21.6609 2.75 26.25 7.33908 26.25 13Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bell32;
