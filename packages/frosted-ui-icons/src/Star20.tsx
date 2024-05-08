import * as React from 'react';
import { IconProps } from './types';

export const Star20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.42925 1.81641C9.65867 1.33898 10.3413 1.33898 10.5707 1.81641L12.5445 5.92472C12.6369 6.11694 12.8206 6.24964 13.0328 6.27742L17.5741 6.87198C18.1022 6.94111 18.3133 7.58925 17.9266 7.95385L14.6065 11.0841C14.4507 11.231 14.3803 11.4464 14.4195 11.6564L15.2532 16.1287C15.3503 16.6494 14.7978 17.0497 14.3301 16.7975L10.3012 14.6258C10.1132 14.5245 9.88675 14.5245 9.69883 14.6258L5.66994 16.7975C5.20214 17.0497 4.64962 16.6494 4.74671 16.1287L5.58051 11.6564C5.61967 11.4464 5.54926 11.231 5.39348 11.0841L2.07338 7.95385C1.68667 7.58925 1.89786 6.94111 2.42589 6.87198L6.96724 6.27742C7.17942 6.24964 7.36312 6.11694 7.45547 5.92472L9.42925 1.81641Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Star20;
