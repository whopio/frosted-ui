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
          d="M4.75 27.25L27.25 4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="6.25" stroke={color} strokeWidth="1.5" />
        <path
          d="M26.2478 9.28769C29.1968 12.1001 30.8905 15.2894 31.1987 15.8971C31.2331 15.9649 31.2331 16.0351 31.1987 16.1029C30.6267 17.2306 25.283 27.25 16 27.25C13.7014 27.25 11.6443 26.6357 9.84138 25.6941M5.75214 22.7123C2.80321 19.8999 1.1095 16.7106 0.801247 16.1029C0.766853 16.0351 0.766854 15.9649 0.801247 15.8971C1.37331 14.7694 6.71701 4.75 16 4.75C18.2986 4.75 20.3557 5.36432 22.1586 6.30586"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default EyeSlashed32;
