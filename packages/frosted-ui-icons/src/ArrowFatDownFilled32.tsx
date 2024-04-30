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
          d="M5.85745 20.1309C4.92713 19.0505 5.69469 17.3766 7.1204 17.3766H10.6665V5.04329C10.6665 3.75463 11.7112 2.70996 12.9999 2.70996H18.9998C20.2885 2.70996 21.3332 3.75464 21.3332 5.04329V17.3766H24.8793C26.305 17.3766 27.0727 19.0505 26.1423 20.1309L17.768 29.8558C16.837 30.9369 15.1626 30.9369 14.2317 29.8558L5.85745 20.1309Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default ArrowFatDownFilled32;
