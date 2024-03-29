import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M11.7185 4.57411C11.5514 3.77082 10.8526 1.83337 8.00114 1.83337C5.2604 1.83337 4.23262 3.61565 4.23262 4.91671C4.23262 6.94184 6.10302 7.47057 8.00114 7.97717M3.97918 11.426C4.23561 12.2292 5.14965 14.1667 8.00114 14.1667C10.7419 14.1667 11.9409 12.3844 11.9409 11.0834C11.9409 10.5822 11.8264 10.1727 11.6252 9.83244M1.83334 8.00004H14.1667"
          stroke={color}
          strokeOpacity=".875"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough16;
