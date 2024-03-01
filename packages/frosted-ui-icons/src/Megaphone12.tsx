import * as React from 'react';
import { IconProps } from './types';

export const Megaphone12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M.750172 3.24995V8.74987M4.00012 8.49987V11.2498M8.25006 2.25002L.750171 4.49996M8.25006 9.24986L.750171 6.99992M8.25006 1.99997V9.99985C8.25006 10.6902 8.80969 11.2498 9.50004 11.2498 10.1904 11.2498 10.75 10.6902 10.75 9.99985V1.99997C10.75 1.30962 10.1904.749989 9.50004.749989 8.80969.749989 8.25006 1.30962 8.25006 1.99997z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Megaphone12;