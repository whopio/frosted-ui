import * as React from 'react';
import { IconProps } from './types';

export const Bitcoin24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <circle
          cx="12"
          cy="12"
          r="10.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.50439 7.25H14.1206C15.4323 7.25 16.4956 8.31332 16.4956 9.625V9.625C16.4956 10.9367 15.4323 12 14.1206 12H9.12282M7.50439 16.75H14.1206C15.4323 16.75 16.4956 15.6867 16.4956 14.375V14.375C16.4956 13.0633 15.4323 12 14.1206 12H9.12282M9.00237 7.32446L9.03082 16.6755M10 5.75L10 7.25M10 16.75L10 18.25M14 5.75L14 7.25M14 16.75L14 18.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Bitcoin24;
