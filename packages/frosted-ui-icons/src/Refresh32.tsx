import * as React from 'react';
import { IconProps } from './types';

export const Refresh32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M29.25 18.75C29.25 22.5682 24.639 29.25 16.7 29.25C8.93577 29.25 4.11555 22.8592 3.90705 19.0063"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.25 18.75H4.25006C3.42163 18.75 2.75006 19.4216 2.75006 20.25V26.25M2.75 13.25C2.75 9.43182 7.36096 2.75 15.3 2.75 23.0642 2.75 27.8844 9.14081 28.0929 12.9937"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.75 13.25H27.7499C28.5784 13.25 29.2499 12.5784 29.2499 11.75V5.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Refresh32;
