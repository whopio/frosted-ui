import * as React from 'react';
import { IconProps } from './types';

export const MedalCheck12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="6"
          cy="7.5"
          r="2.75"
          stroke={color}
          strokeWidth="1.5"
          strokeMiterlimit="16"
        />
        <path
          d="M5.03846 4.5C5.03846 4.5 4.3387 3.68335 4.07476 2.36853 3.96606 1.82705 3.52789 1.375 2.97561 1.375H2.125C1.71079 1.375 1.36729 1.71417 1.44304 2.1214 1.83672 4.23751 3.805 5.25 3.805 5.25M6.96154 4.5C6.96154 4.5 7.6613 3.68335 7.92524 2.36853 8.03394 1.82705 8.47211 1.375 9.02439 1.375H9.875C10.2892 1.375 10.6327 1.71417 10.557 2.1214 10.1633 4.23751 8.195 5.25 8.195 5.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.25 7.575L5.7 8.025L6.75 6.975"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MedalCheck12;
