import * as React from 'react';
import { IconProps } from './types';

export const StarFilled20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.42925 1.81642C9.65867 1.33899 10.3413 1.33899 10.5708 1.81642L12.5445 5.92473C12.6369 6.11694 12.8206 6.24964 13.0328 6.27743L17.5741 6.87199C18.1022 6.94112 18.3133 7.58926 17.9266 7.95386L14.6065 11.0841C14.4507 11.231 14.3803 11.4464 14.4195 11.6564L15.2532 16.1287C15.3503 16.6494 14.7978 17.0497 14.3301 16.7975L10.3012 14.6258C10.1132 14.5245 9.88675 14.5245 9.69883 14.6258L5.66994 16.7975C5.20214 17.0497 4.64962 16.6494 4.74671 16.1287L5.58051 11.6564C5.61967 11.4464 5.54926 11.231 5.39348 11.0841L2.07338 7.95386C1.68667 7.58926 1.89786 6.94112 2.42589 6.87199L6.96724 6.27743C7.17942 6.24964 7.36312 6.11694 7.45547 5.92473L9.42925 1.81642Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default StarFilled20;
