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
          d="M16.0411 5.41668C16.0411 4.61126 15.3882 3.95834 14.5828 3.95834H3.29106C2.71576 3.95834 2.24939 4.42471 2.24939 5.00001M2.24939 5.00001V14.375C2.24939 15.2955 2.99558 16.0417 3.91606 16.0417H15.9994C16.9199 16.0417 17.666 15.2955 17.666 14.375V7.70834C17.666 6.78787 16.9199 6.04168 15.9994 6.04168H3.29106C2.71576 6.04168 2.24939 5.57531 2.24939 5.00001ZM14.3745 11.0417C14.3745 11.3868 14.0946 11.6667 13.7495 11.6667C13.4043 11.6667 13.1245 11.3868 13.1245 11.0417C13.1245 10.6965 13.4043 10.4167 13.7495 10.4167C14.0946 10.4167 14.3745 10.6965 14.3745 11.0417Z"
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
