import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare12 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M0.75 9.75V2.25C0.75 1.42157 1.42157 0.75 2.25 0.75H9.75C10.5784 0.75 11.25 1.42157 11.25 2.25V9.75C11.25 10.5784 10.5784 11.25 9.75 11.25H2.25C1.42157 11.25 0.75 10.5784 0.75 9.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 8.2499V5.25H4.75M4.75 8.24988L7.2499 8.24988"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="5.75" cy="3.254" r=".75" fill={color} />
      </svg>
    );
  },
);

export default InfoSquare12;
