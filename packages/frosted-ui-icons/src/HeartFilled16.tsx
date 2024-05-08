import * as React from 'react';
import { IconProps } from './types';

export const HeartFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.24468 14.2693C14.0578 11.0031 15.3905 7.17807 14.3447 4.56385C13.8332 3.28547 12.7614 2.37281 11.5015 2.0912C10.3559 1.83514 9.09294 2.10875 7.99968 3.03304C6.90641 2.10875 5.64351 1.83514 4.49789 2.09121C3.23798 2.37281 2.16617 3.28548 1.65474 4.56387C0.608871 7.17813 1.94163 11.0031 7.75481 14.2693C7.90688 14.3548 8.09254 14.3548 8.24468 14.2693Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default HeartFilled16;
