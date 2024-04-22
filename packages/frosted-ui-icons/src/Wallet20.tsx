import * as React from 'react';
import { IconProps } from './types';

export const Wallet20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.0411 5.41665C16.0411 4.61123 15.3881 3.95831 14.5827 3.95831H3.291C2.7157 3.95831 2.24933 4.42468 2.24933 4.99998M2.24933 4.99998V14.375C2.24933 15.2955 2.99552 16.0416 3.916 16.0416H15.9993C16.9198 16.0416 17.666 15.2955 17.666 14.375V7.70831C17.666 6.78784 16.9198 6.04165 15.9993 6.04165H3.291C2.7157 6.04165 2.24933 5.57528 2.24933 4.99998ZM14.3744 11.0416C14.3744 11.3868 14.0946 11.6666 13.7494 11.6666C13.4042 11.6666 13.1244 11.3868 13.1244 11.0416C13.1244 10.6965 13.4042 10.4166 13.7494 10.4166C14.0946 10.4166 14.3744 10.6965 14.3744 11.0416Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet20;
