import * as React from 'react';
import { IconProps } from './types';

export const LinkSlash20 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M0.5 0.5H19.5V19.5H0.5z" />
      </svg>
    );
  },
);

export default LinkSlash20;
