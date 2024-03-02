import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkShield20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 10.75L9 13.25L13.25 8.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.05373 2.26636C7.6532 4.21738 5.1778 5.27798 3.78207 5.74707C3.18515 5.94768 2.75 6.49584 2.75 7.12556V8.04386C2.75 12.7937 5.17861 17.7088 9.69346 19.1842C9.82393 19.2268 9.92792 19.25 9.99993 19.25C10.0719 19.25 10.1759 19.2268 10.3064 19.1842C14.8213 17.7088 17.25 12.7937 17.25 8.04386V7.12558C17.25 6.49585 16.8148 5.94768 16.2179 5.74707C14.8221 5.27798 12.3467 4.21738 10.9461 2.26636C10.7247 1.95791 10.3796 1.75 9.99993 1.75C9.62022 1.75 9.27516 1.95791 9.05373 2.26636Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CheckmarkShield20;
