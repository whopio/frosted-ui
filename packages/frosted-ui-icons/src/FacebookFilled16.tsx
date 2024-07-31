import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.38928 14.4707V10.0374H5.01335V8.00004H6.38928V7.12224C6.38928 4.853 7.41592 3.80226 9.64258 3.80226C10.0641 3.80226 10.7919 3.88485 11.0908 3.96745V5.813C10.9333 5.79708 10.6585 5.78893 10.32 5.78893C9.22665 5.78893 8.80518 6.20226 8.80518 7.27964V8.00004H10.9841L10.6108 10.0371H8.80819V14.6185C12.1091 14.2186 14.6666 11.408 14.6666 8.00004C14.6666 4.31819 11.6818 1.33337 7.99992 1.33337C4.31807 1.33337 1.33325 4.31819 1.33325 8.00004C1.33325 11.1266 3.48534 13.7502 6.38928 14.4707Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled16;
