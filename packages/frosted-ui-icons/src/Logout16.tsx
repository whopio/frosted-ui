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
          d="M10 4.37931V2.77C10 1.79246 9.20754 1 8.23 1H4.77C3.79246 1 3 1.79246 3 2.77V13.23C3 14.2075 3.79246 15 4.77 15H8.23C9.20754 15 10 14.2075 10 13.23V11.6207M6.75 8H15.25M15.25 8L11.75 4.75M15.25 8L11.75 11.25"
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
