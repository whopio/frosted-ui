import * as React from 'react';
import { IconProps } from './types';

export const Item20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M2.66303 15.042L8.74556 18.8868C9.12094 19.1241 9.55592 19.25 10 19.25 10.4441 19.25 10.8791 19.1241 11.2544 18.8868L17.337 15.042C17.9054 14.6827 18.25 14.0572 18.25 13.3848V6.61523C18.25 5.94279 17.9054 5.31726 17.337 4.95797L11.2544 1.11322C10.8791.875948 10.4441.75 10 .75 9.55592.75 9.12094.875948 8.74556 1.11322L2.66303 4.95797C2.09462 5.31726 1.75 5.94279 1.75 6.61523V13.3848C1.75 14.0572 2.09462 14.6827 2.66303 15.042zM9.99371 9.78339V15.4672M10.0005 9.7834L14.799 7.18646M9.99371 9.7834L5.19524 7.18646"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Item20;
