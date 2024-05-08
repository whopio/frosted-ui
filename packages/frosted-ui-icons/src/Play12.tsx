import * as React from 'react';
import { IconProps } from './types';

export const Play12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.0775 5.16044L4.41825 1.49856C3.75289 1.06803 2.875 1.54563 2.875 2.33813V9.66184C2.875 10.4543 3.75289 10.9319 4.41825 10.5014L10.0775 6.83954C10.6865 6.44549 10.6865 5.55449 10.0775 5.16044Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Play12;
