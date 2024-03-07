import * as React from 'react';
import { IconProps } from './types';

export const Telegram24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M0.5 0.5H23.5V23.5H0.5z" />
      </svg>
    );
  },
);

export default Telegram24;
