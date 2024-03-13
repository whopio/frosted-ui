import * as React from 'react';
import { IconProps } from './types';

export const MobilePhone32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M13 25.6667H19M11.6666 29.6667H20.3333C22.5425 29.6667 24.3333 27.8759 24.3333 25.6667V6.33333C24.3333 4.1242 22.5425 2.33333 20.3333 2.33333H11.6666C9.45749 2.33333 7.66663 4.1242 7.66663 6.33333V25.6667C7.66663 27.8759 9.45749 29.6667 11.6666 29.6667Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MobilePhone32;
