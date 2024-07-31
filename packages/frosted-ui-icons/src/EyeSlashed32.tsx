import * as React from 'react';
import { IconProps } from './types';

export const EyeSlashed32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.74994 27.25L27.2499 4.75M9.84132 25.6941C11.6442 26.6357 13.7013 27.25 15.9999 27.25C25.2829 27.25 30.6266 17.2306 31.1987 16.1029C31.2331 16.0351 31.2331 15.9649 31.1987 15.8971C30.8904 15.2894 29.1967 12.1001 26.2478 9.28769M5.75208 22.7123C2.80314 19.8999 1.10944 16.7106 0.801186 16.1029C0.766792 16.0351 0.766793 15.9649 0.801186 15.8971C1.37325 14.7694 6.71695 4.75 15.9999 4.75C18.2985 4.75 20.3556 5.36432 22.1585 6.30586M22.2499 16C22.2499 19.4518 19.4517 22.25 15.9999 22.25C12.5482 22.25 9.74994 19.4518 9.74994 16C9.74994 12.5482 12.5482 9.75 15.9999 9.75C19.4517 9.75 22.2499 12.5482 22.2499 16Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed32;
