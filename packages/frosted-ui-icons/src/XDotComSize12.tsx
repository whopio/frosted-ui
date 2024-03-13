import * as React from 'react';
import { IconProps } from './types';

export const XDotComSize12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.70165 1.75H10.1426L6.9945 5.3505L10.698 10.25H7.7982L5.527 7.2785L2.92819 10.25H1.48635L4.85355 6.39885L1.30078 1.75H4.2742L6.3272 4.46607L8.70165 1.75ZM8.1959 9.3869H8.99435L3.84034 2.56774H2.98351L8.1959 9.3869Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotComSize12;
