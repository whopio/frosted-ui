import * as React from 'react';
import { IconProps } from './types';

export const Mail24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.750114 7.74992L9.52686 13.5107C10.2615 13.9929 11.1212 14.2499 12 14.2499C12.8788 14.2499 13.7385 13.9929 14.4731 13.5107L23.2499 7.74992M3.86008 20.7498H20.1399C21.8575 20.7498 23.2499 19.3574 23.2499 17.6398V6.35994C23.2499 4.64235 21.8575 3.24997 20.1399 3.24997H3.86008C2.14249 3.24997 0.750114 4.64235 0.750114 6.35994V17.6398C0.750114 19.3574 2.1425 20.7498 3.86008 20.7498Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail24;
