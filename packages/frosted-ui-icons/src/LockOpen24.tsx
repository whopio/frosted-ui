import * as React from 'react';
import { IconProps } from './types';

export const LockOpen24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.75 13.75C2.75 12.0931 4.09315 10.75 5.75 10.75H18.25C19.9069 10.75 21.25 12.0931 21.25 13.75V20.25C21.25 21.9069 19.9069 23.25 18.25 23.25H5.75C4.09315 23.25 2.75 21.9069 2.75 20.25V13.75zM5.75 10.75V7C5.75 3.54822 8.54822.75 12 .75 15.1961.75 17.8318 3.149 18.2048 6.24452"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default LockOpen24;
