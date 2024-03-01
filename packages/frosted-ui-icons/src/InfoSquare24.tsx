import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12 17.2499V9.75H9.75M9.75 17.2499L14.2499 17.2499"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="7.004" r="1" fill={color} />
        <path
          d="M2.75 18.68V5.32C2.75 3.90063 3.90063 2.75 5.32 2.75H18.68C20.0994 2.75 21.25 3.90063 21.25 5.32V18.68C21.25 20.0994 20.0994 21.25 18.68 21.25H5.32C3.90063 21.25 2.75 20.0994 2.75 18.68Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default InfoSquare24;