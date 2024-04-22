import * as React from 'react';
import { IconProps } from './types';

export const Export32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.25 21.75L3.25 25.25C3.25 27.4591 5.04086 29.25 7.25 29.25L24.75 29.25C26.9591 29.25 28.75 27.4591 28.75 25.25L28.75 21.75M12.75 21.75L12.75 13C12.75 10.2386 14.9886 8 17.75 8L26.25 8M26.25 8L20.75 2.75M26.25 8L20.75 13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Export32;
