import * as React from 'react';
import { IconProps } from './types';

export const MailOut32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M27.25 14.25V9.47C27.25 7.4155 25.5845 5.75 23.53 5.75H4.47C2.4155 5.75 0.75 7.4155 0.75 9.47V22.53C0.75 24.5845 2.4155 26.25 4.47 26.25H23.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M.75 10.3991L11.0974 17.3641C11.9552 17.9415 12.9659 18.25 14 18.25V18.25C15.0341 18.25 16.0448 17.9415 16.9026 17.3641L27.25 10.3991M19.75 21.75H31.25M31.25 21.75L26.75 17.5M31.25 21.75L26.75 26"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default MailOut32;
