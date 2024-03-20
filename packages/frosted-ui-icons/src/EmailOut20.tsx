import * as React from 'react';
import { IconProps } from './types';

export const EmailOut20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M17.25 8.25V5.575C17.25 4.29094 16.2091 3.25 14.925 3.25H3.075C1.79094 3.25 0.75 4.29094 0.75 5.575V13.925C0.75 15.2091 1.79094 16.25 3.075 16.25H13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M.75 6L7.18547 10.2093C7.72488 10.5621 8.35545 10.75 9 10.75V10.75C9.64455 10.75 10.2751 10.5621 10.8145 10.2093L17.25 6M16.4375 10.625L19.25 13.25 16.4375 15.875M12 13.25H19.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default EmailOut20;
