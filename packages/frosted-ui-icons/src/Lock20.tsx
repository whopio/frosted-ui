import * as React from 'react';
import { IconProps } from './types';

export const Lock20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.75 8.75V5.75C4.75 2.98858 6.98858 0.75 9.75 0.75H10.25C13.0114 0.75 15.25 2.98858 15.25 5.75V8.75M4.95 19.25H15.05C16.5412 19.25 17.75 18.0412 17.75 16.55V11.45C17.75 9.95883 16.5412 8.75 15.05 8.75H4.95C3.45883 8.75 2.25 9.95883 2.25 11.45V16.55C2.25 18.0412 3.45883 19.25 4.95 19.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Lock20;
