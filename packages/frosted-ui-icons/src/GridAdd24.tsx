import * as React from 'react';
import { IconProps } from './types';

export const GridAdd24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M20.25 17H13.75M17 20.25V13.75M5.5 10.25H8.5C9.4665 10.25 10.25 9.4665 10.25 8.5V5.5C10.25 4.5335 9.4665 3.75 8.5 3.75H5.5C4.5335 3.75 3.75 4.5335 3.75 5.5V8.5C3.75 9.4665 4.5335 10.25 5.5 10.25ZM5.5 20.25H8.5C9.4665 20.25 10.25 19.4665 10.25 18.5V15.5C10.25 14.5335 9.4665 13.75 8.5 13.75H5.5C4.5335 13.75 3.75 14.5335 3.75 15.5V18.5C3.75 19.4665 4.5335 20.25 5.5 20.25ZM15.5 10.25H18.5C19.4665 10.25 20.25 9.4665 20.25 8.5V5.5C20.25 4.5335 19.4665 3.75 18.5 3.75H15.5C14.5335 3.75 13.75 4.5335 13.75 5.5V8.5C13.75 9.4665 14.5335 10.25 15.5 10.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default GridAdd24;
