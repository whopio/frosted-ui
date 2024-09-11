import * as React from 'react';
import { IconProps } from './types';

export const Moon12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M10.6241 5.9056C10.0945 6.28 9.4479 6.5 8.75 6.5C6.95505 6.5 5.5 5.04495 5.5 3.25C5.5 2.55208 5.72 1.90554 6.0944 1.37594C6.063 1.37531 6.03155 1.375 6 1.375C3.44568 1.375 1.375 3.44568 1.375 6C1.375 8.5543 3.44568 10.625 6 10.625C8.5543 10.625 10.625 8.5543 10.625 6C10.625 5.96845 10.6247 5.937 10.6241 5.9056Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Moon12;
