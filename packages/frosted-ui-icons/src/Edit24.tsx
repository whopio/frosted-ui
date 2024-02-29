import * as React from 'react';
import { IconProps } from './types';

export const Edit24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M21.25 14.75V18.68C21.25 20.0994 20.0994 21.25 18.68 21.25H5.32C3.90063 21.25 2.75 20.0994 2.75 18.68V5.32C2.75 3.90063 3.90063 2.75 5.32 2.75H9.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.7594 5.49057L18.5094 9.24057M11.6032 15.2499H9.25C8.97386 15.2499 8.75 15.0261 8.75 14.7499V12.3968C8.75 11.8225 8.97811 11.2718 9.38415 10.8658L16.695 3.55493C17.7305 2.5194 19.4095 2.5194 20.445 3.55493V3.55493C21.4805 4.59047 21.4805 6.2694 20.445 7.30493L13.1342 14.6158C12.7281 15.0218 12.1774 15.2499 11.6032 15.2499Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

export default Edit24;
