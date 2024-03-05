import * as React from 'react';
import { IconProps } from './types';

export const FacebookFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M14.7812 7.75C14.7812 11.1406 12.293 13.957 9.03906 14.4492V9.71875H10.625L10.9258 7.75H9.03906V6.49219C9.03906 5.94531 9.3125 5.42578 10.1602 5.42578H11.0078V3.75781C11.0078 3.75781 10.2422 3.62109 9.47656 3.62109C7.94531 3.62109 6.93359 4.57812 6.93359 6.27344V7.75H5.21094V9.71875H6.93359V14.4492C3.67969 13.957 1.21875 11.1406 1.21875 7.75C1.21875 4.00391 4.25391 0.96875 8 0.96875C11.7461 0.96875 14.7812 4.00391 14.7812 7.75Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default FacebookFilled16;
