import * as React from 'react';
import { IconProps } from './types';

export const Strikethrough16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.7185 4.57408C11.5513 3.77079 10.8525 1.83334 8.00105 1.83334C5.26031 1.83334 4.23253 3.61562 4.23253 4.91668C4.23253 6.94181 6.10293 7.47054 8.00105 7.97714M3.97909 11.4259C4.23552 12.2292 5.14956 14.1667 8.00105 14.1667C10.7418 14.1667 11.9409 12.3844 11.9409 11.0833C11.9409 10.5821 11.8263 10.1727 11.6251 9.83241M1.83325 8.00001H14.1666"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Strikethrough16;
