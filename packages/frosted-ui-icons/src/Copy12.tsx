import * as React from 'react';
import { IconProps } from './types';

export const Copy12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.74996 6.22556V1.77438C4.74996 1.20863 5.2086.749994 5.77435.749994H10.2256C10.7914.749994 11.25 1.20863 11.25 1.77438V6.22556C11.25 6.79131 10.7914 7.24994 10.2256 7.24994H5.77435C5.2086 7.24994 4.74996 6.79131 4.74996 6.22556zM2.25003 4.74996H1.77438C1.20863 4.74996.749994 5.2086.749994 5.77435V10.2255C.749994 10.7913 1.20863 11.2499 1.77438 11.2499H6.22566C6.79141 11.2499 7.25004 10.7913 7.25004 10.2255V9.74993"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Copy12;
