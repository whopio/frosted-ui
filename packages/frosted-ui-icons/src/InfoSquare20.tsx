import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10 14.2499V8.75H7.75M7.75 14.2499L12.2499 14.2499"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="6.004" r="1" fill={color} />
        <path
          d="M1.75 15.68V4.32C1.75 2.90063 2.90063 1.75 4.32 1.75H15.68C17.0994 1.75 18.25 2.90063 18.25 4.32V15.68C18.25 17.0994 17.0994 18.25 15.68 18.25H4.32C2.90063 18.25 1.75 17.0994 1.75 15.68Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default InfoSquare20;
