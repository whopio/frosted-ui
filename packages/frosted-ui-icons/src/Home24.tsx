import * as React from 'react';
import { IconProps } from './types';

export const Home24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M22.25 21.25V10.2114C22.25 9.60374 21.9738 9.02908 21.4993 8.64953L13.556 2.29575C13.1143 1.94247 12.5656 1.75 12 1.75C11.4344 1.75 10.8857 1.94247 10.444 2.29575L2.50071 8.64953C2.02622 9.02908 1.75 9.60374 1.75 10.2114V21.25C1.75 21.8023 2.19772 22.25 2.75 22.25H6.75C7.30228 22.25 7.75 21.8023 7.75 21.25V17.5C7.75 15.1528 9.65279 13.25 12 13.25C14.3472 13.25 16.25 15.1528 16.25 17.5V21.25C16.25 21.8023 16.6977 22.25 17.25 22.25H21.25C21.8023 22.25 22.25 21.8023 22.25 21.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Home24;
