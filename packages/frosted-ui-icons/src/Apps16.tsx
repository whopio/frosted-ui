import * as React from 'react';
import { IconProps } from './types';

export const Apps16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8 0.75V2.75M8 2.75C6.75736 2.75 5.75 3.75736 5.75 5C5.75 6.24264 6.75736 7.25 8 7.25C9.24264 7.25 10.25 6.24264 10.25 5C10.25 3.75736 9.24264 2.75 8 2.75ZM6.82003 6.91614L2.75 15.25M13.25 15.25L9.17997 6.91614M14.25 9C14.25 9 12.2091 12.25 8 12.25C3.79086 12.25 1.75 9 1.75 9"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Apps16;
