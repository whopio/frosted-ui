import * as React from 'react';
import { IconProps } from './types';

export const Logout16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.45697 4.37931V2.77C9.45697 1.79246 8.66451 1 7.68697 1H4.26182C3.28428 1 2.49182 1.79246 2.49182 2.77V13.23C2.49182 14.2075 3.28428 15 4.26182 15H7.68697C8.66451 15 9.45697 14.2075 9.45697 13.23V11.6207M6.75 8H15.25M15.25 8L11.75 4.75M15.25 8L11.75 11.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Logout16;
