import * as React from 'react';
import { IconProps } from './types';

export const CubeDisconnected20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.66303 15.042L8.74556 18.8868C9.12094 19.1241 9.55592 19.25 10 19.25 10.4441 19.25 10.8791 19.1241 11.2544 18.8868L17.337 15.042C17.9054 14.6827 18.25 14.0572 18.25 13.3848V6.61524C18.25 5.9428 17.9054 5.31727 17.337 4.95798L11.2544 1.11323C10.8791.875956 10.4441.750008 10 .750008 9.55592.750008 9.12094.875956 8.74556 1.11323L2.66303 4.95798C2.09462 5.31727 1.75 5.9428 1.75 6.61524V13.3848C1.75 14.0572 2.09462 14.6827 2.66303 15.042zM9.99368 9.78339V15.4673M10.0005 9.7834L14.7989 7.18647M9.99368 9.7834L5.19521 7.18647"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default CubeDisconnected20;
