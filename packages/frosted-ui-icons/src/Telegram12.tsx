import * as React from 'react';
import { IconProps } from './types';

export const Telegram12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M0.5 0.5H11.5V11.5H0.5z" />
      </svg>
    );
  },
);

export default Telegram12;
