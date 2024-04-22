import * as React from 'react';
import { IconProps } from './types';

export const Download24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.25 13.25L12.7071 16.7929C12.3166 17.1834 11.6834 17.1834 11.2929 16.7929L7.75 13.25M12 2.75V16.75M19.25 21.25H4.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Download24;
