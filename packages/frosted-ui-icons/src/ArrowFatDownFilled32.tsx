import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownFilled32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M5.85739 20.1309C4.92707 19.0505 5.69463 17.3767 7.12033 17.3767H10.6665V5.04336C10.6665 3.75469 11.7111 2.71002 12.9998 2.71002H18.9998C20.2885 2.71002 21.3331 3.7547 21.3331 5.04336V17.3767H24.8793C26.305 17.3767 27.0726 19.0505 26.1422 20.1309L17.7679 29.8559C16.837 30.9369 15.1626 30.9369 14.2317 29.8559L5.85739 20.1309Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled32;
