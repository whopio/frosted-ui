import * as React from 'react';
import { IconProps } from './types';

export const Wallet16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.8328 4.33333C12.8328 3.689 12.3105 2.78125 11.6662 2.78125H2.63277C2.17253 2.78125 1.79944 3.53976 1.79944 4M1.79944 4V11.5C1.79944 12.2364 2.39639 12.8333 3.13277 12.8333H12.7994C13.5358 12.8333 14.1328 12.2364 14.1328 11.5V6.16667C14.1328 5.43029 13.5358 4.83333 12.7994 4.83333H2.63277C2.17253 4.83333 1.79944 4.46024 1.79944 4ZM11.4995 8.83333C11.4995 9.10947 11.2756 9.33333 10.9995 9.33333C10.7234 9.33333 10.4995 9.10947 10.4995 8.83333C10.4995 8.5572 10.7234 8.33333 10.9995 8.33333C11.2756 8.33333 11.4995 8.5572 11.4995 8.83333Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet16;
