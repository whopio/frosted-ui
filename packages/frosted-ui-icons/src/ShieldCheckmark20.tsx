import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmark20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.70833 9.58333L9.16667 11.0417L12.2917 7.91668M16.875 9.92699V5.78462C16.875 5.06723 16.4159 4.43033 15.7354 4.20348L10.5271 2.46737C10.1849 2.35333 9.81508 2.35333 9.47292 2.46737L4.26462 4.20348C3.58405 4.43033 3.125 5.06723 3.125 5.78462V9.92699C3.125 14.0707 6.66667 16.0417 10 17.8399C13.3333 16.0417 16.875 14.0707 16.875 9.92699Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ShieldCheckmark20;
