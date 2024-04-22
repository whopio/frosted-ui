import * as React from 'react';
import { IconProps } from './types';

export const SquareAdd24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V5.75C3.75 4.64543 4.64543 3.75 5.75 3.75H8.75H15.25H18.25C19.3546 3.75 20.25 4.64543 20.25 5.75V11.25M18.25 14.25V17.25M18.25 17.25V20.25M18.25 17.25H15.25M18.25 17.25H21.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SquareAdd24;
