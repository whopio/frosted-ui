import * as React from 'react';
import { IconProps } from './types';

export const Book20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.75 18.2501V4.01127C.75 3.73211.863608 3.46521 1.08326 3.29292 3.42043 1.45974 7.61802 1.12173 10 3.57647 12.382 1.12172 16.5796 1.45971 18.9167 3.29292 19.1364 3.46521 19.25 3.73505 19.25 4.0142V18.2501C17 16.0001 12 16.0001 10 18.2501 8 16.0001 3 16.0001.75 18.2501zM10 3.50012L10 18.0001"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Book20;
