import * as React from 'react';
import { IconProps } from './types';

export const Info24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <circle cx="10.781" cy="6" r="2" fill={color} />
        <path
          d="M12.25 20.2188V10.7812H8.78125M12.25 20.2188H8.78125M12.25 20.2188H14.8571"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Info24;
