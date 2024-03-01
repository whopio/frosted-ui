import * as React from 'react';
import { IconProps } from './types';

export const Logout20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.75 5.875V3.76C11.75 2.64991 10.8501 1.75 9.74 1.75H3.76C2.64991 1.75 1.75 2.64991 1.75 3.76V16.24C1.75 17.3501 2.64991 18.25 3.76 18.25H9.74C10.8501 18.25 11.75 17.3501 11.75 16.24V14.125M8.75 10H18.25M18.25 10L14.75 6.75M18.25 10L14.75 13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout20;
