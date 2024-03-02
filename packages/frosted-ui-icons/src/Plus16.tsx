import * as React from 'react';
import { IconProps } from './types';

export const Plus16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7.25 14.25C7.25 14.6642 7.58579 15 8 15C8.41421 15 8.75 14.6642 8.75 14.25V8.75L14.25 8.75C14.6642 8.75 15 8.41421 15 8C15 7.58579 14.6642 7.25 14.25 7.25L8.75 7.25V1.75C8.75 1.33579 8.41421 1 8 1C7.58579 1 7.25 1.33579 7.25 1.75V7.25L1.75 7.25C1.33579 7.25 1 7.58579 1 8C1 8.41421 1.33579 8.75 1.75 8.75L7.25 8.75V14.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Plus16;
