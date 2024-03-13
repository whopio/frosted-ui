import * as React from 'react';
import { IconProps } from './types';

export const Monitor24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M4.75 17.25H19.25C20.3546 17.25 21.25 16.3546 21.25 15.25V5.75C21.25 4.64543 20.3546 3.75 19.25 3.75H4.75C3.64543 3.75 2.75 4.64543 2.75 5.75V15.25C2.75 16.3546 3.64543 17.25 4.75 17.25zM3.1875 13.7812H20.5M7 21.3125L17 21.3125M9.20312 17.25V21.3125M14.7969 17.25V21.3125"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Monitor24;
