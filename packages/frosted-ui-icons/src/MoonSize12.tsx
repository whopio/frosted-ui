import * as React from 'react';
import { IconProps } from './types';

export const MoonSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.6241 5.90561C10.0945 6.28001 9.4479 6.50001 8.75 6.50001C6.95505 6.50001 5.5 5.04496 5.5 3.25001C5.5 2.55209 5.72 1.90555 6.0944 1.37595C6.063 1.37532 6.03155 1.37501 6 1.37501C3.44568 1.37501 1.375 3.44569 1.375 6.00001C1.375 8.55431 3.44568 10.625 6 10.625C8.5543 10.625 10.625 8.55431 10.625 6.00001C10.625 5.96846 10.6247 5.93701 10.6241 5.90561Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MoonSize12;
