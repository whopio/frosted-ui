import * as React from 'react';
import { IconProps } from './types';

export const Command20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M2.25 5C2.25 3.48122 3.48122 2.25 5 2.25V2.25C6.51878 2.25 7.75 3.48122 7.75 5V7.75H5C3.48122 7.75 2.25 6.51878 2.25 5V5zM2.25 15C2.25 16.5188 3.48122 17.75 5 17.75V17.75C6.51878 17.75 7.75 16.5188 7.75 15V12.25H5C3.48122 12.25 2.25 13.4812 2.25 15V15zM17.75 5C17.75 3.48122 16.5188 2.25 15 2.25V2.25C13.4812 2.25 12.25 3.48122 12.25 5V7.75H15C16.5188 7.75 17.75 6.51878 17.75 5V5zM17.75 15C17.75 16.5188 16.5188 17.75 15 17.75V17.75C13.4812 17.75 12.25 16.5188 12.25 15V12.25H15C16.5188 12.25 17.75 13.4812 17.75 15V15zM7.75 7.75H12.25V12.25H7.75z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Command20;
