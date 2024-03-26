import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M27 8.29432C27 7.72042 26.6328 7.2109 26.0883 7.02942L16.4216 3.80719C16.148 3.71596 15.852 3.71596 15.5784 3.80719L5.91169 7.02942C5.36724 7.2109 5 7.72042 5 8.29432V15.8831C5 22.5131 10.6667 25.6667 16 28.5439C21.3333 25.6667 27 22.5131 27 15.8831V8.29432Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M16 2.98877V29.2938C15.8775 29.2938 15.755 29.2639 15.6439 29.2039C12.9929 27.7738 10.1516 26.2218 7.98376 24.1648C5.78767 22.081 4.25 19.4492 4.25 15.883V8.2943C4.25 7.39758 4.82381 6.60145 5.67452 6.31788L15.3412 3.09568C15.5549 3.02441 15.7775 2.98877 16 2.98877Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf32;
