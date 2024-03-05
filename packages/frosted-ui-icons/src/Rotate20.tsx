import * as React from 'react';
import { IconProps } from './types';

export const Rotate20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 8.25C1.75 6.25 4.5 1.75 9.5 1.75C14.5 1.75 17.25 6.25 17.25 8.25M17.25 8.25H12.75M17.25 8.25C17.8023 8.25 18.25 7.80228 18.25 7.25V2.75M18.25 11.75C18.25 13.75 15.5 18.25 10.5 18.25C5.5 18.25 2.75 13.75 2.75 11.75M2.75 11.75H7.25M2.75 11.75C2.19772 11.75 1.75 12.1977 1.75 12.75L1.75 17.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Rotate20;
