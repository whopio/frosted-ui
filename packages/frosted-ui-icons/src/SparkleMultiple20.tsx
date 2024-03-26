import * as React from 'react';
import { IconProps } from './types';

export const SparkleMultiple20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 14C7 12.6187 4.38125 10 3 10 4.38125 10 7 7.91459 7 6 7 7.91459 9.08541 10 11 10 9.08541 10 7 12.6187 7 14zM13 8C13 7.30937 11.6906 6 11 6 11.6906 6 13 4.95729 13 4 13 4.95729 14.0427 6 15 6 14.0427 6 13 7.30937 13 8zM13 16C13 15.3094 11.6906 14 11 14 11.6906 14 13 12.9573 13 12 13 12.9573 14.0427 14 15 14 14.0427 14 13 15.3094 13 16z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default SparkleMultiple20;
