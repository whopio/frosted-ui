import * as React from 'react';
import { IconProps } from './types';

export const Refresh12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M0.750107 4.24991C0.750107 4.24991 1.43528 0.749985 5.50001 0.749985C9.56474 0.749985 10.2499 4.24991 10.2499 4.24991"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.74996 4.24991H10.5499C10.9365 4.24991 11.2499 3.93652 11.2499 3.54993V.749985M11.2499 7.74984C11.2499 7.74984 10.5647 11.2498 6.49999 11.2498 2.43526 11.2498 1.75009 7.74984 1.75009 7.74984"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.25004 7.74984H1.45009C1.0635 7.74984 0.750107 8.06324 0.750107 8.44983V11.2498"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Refresh12;
