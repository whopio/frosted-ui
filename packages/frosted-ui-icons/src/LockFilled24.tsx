import * as React from 'react';
import { IconProps } from './types';

export const LockFilled24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.75 7.25C6.75 4.3505 9.1005 2 12 2C14.8995 2 17.25 4.35051 17.25 7.25V10.75H6.75V7.25ZM4.7637 10.9159C4.75469 10.8619 4.75 10.8065 4.75 10.75V7.25C4.75 3.24594 7.99594 0 12 0C16.0041 0 19.25 3.24594 19.25 7.25V10.75C19.25 10.8065 19.2453 10.8619 19.2363 10.9159C20.4086 11.3238 21.25 12.4387 21.25 13.75V20.25C21.25 21.9069 19.9069 23.25 18.25 23.25H5.75C4.09315 23.25 2.75 21.9069 2.75 20.25V13.75C2.75 12.4387 3.59135 11.3238 4.7637 10.9159Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default LockFilled24;
