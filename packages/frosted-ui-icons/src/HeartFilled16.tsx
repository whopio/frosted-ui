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
          d="M8.24465 14.2693C14.0578 11.0031 15.3905 7.17807 14.3446 4.56385C13.8332 3.28547 12.7614 2.37281 11.5014 2.0912C10.3558 1.83514 9.09291 2.10875 7.99965 3.03304C6.90638 2.10875 5.64348 1.83514 4.49786 2.09121C3.23795 2.37281 2.16614 3.28548 1.65471 4.56387C0.60884 7.17813 1.9416 11.0031 7.75478 14.2693C7.90685 14.3548 8.09251 14.3548 8.24465 14.2693Z"
          fill={color}
          fillOpacity=".875"
        />
      </svg>
    );
  },
);

export default HeartFilled16;
