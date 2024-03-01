import * as React from 'react';
import { IconProps } from './types';

export const SparkleRectangle24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.25 2.75H4.45C2.95883 2.75 1.75 3.95883 1.75 5.45V18.55C1.75 20.0412 2.95883 21.25 4.45 21.25H17.55C19.0412 21.25 20.25 20.0412 20.25 18.55V13.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 11.25C17.5 9.45507 14.5449 6.5 12.75 6.5C14.5449 6.5 17.5 4.04493 17.5 1.75C17.5 4.04493 19.9551 6.5 22.25 6.5C19.9551 6.5 17.5 9.45507 17.5 11.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SparkleRectangle24;
