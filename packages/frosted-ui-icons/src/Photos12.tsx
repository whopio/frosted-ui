import * as React from 'react';
import { IconProps } from './types';

export const Photos12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g fill={color} clipPath="url(#clip0_517_514)">
          <path
            d="M5 1.5C4.72386 1.5 4.5 1.72386 4.5 2V7C4.5 7.27614 4.72386 7.5 5 7.5H10C10.2761 7.5 10.5 7.27614 10.5 7V2C10.5 1.72386 10.2761 1.5 10 1.5H5ZM3 2C3 0.895431 3.89543 0 5 0H10C11.1046 0 12 0.895431 12 2V7C12 8.10457 11.1046 9 10 9H5C3.89543 9 3 8.10457 3 7V2Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M0.75 3C1.16421 3 1.5 3.33579 1.5 3.75V10C1.5 10.2761 1.72386 10.5 2 10.5H8.25C8.66421 10.5 9 10.8358 9 11.25C9 11.6642 8.66421 12 8.25 12H2C0.89543 12 0 11.1046 0 10V3.75C0 3.33579 0.335786 3 0.75 3Z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path d="M3.75 7L5.71035 4.71964C5.96665 4.4215 6.34024 4.25 6.7334 4.25 7.06673 4.25 7.38825 4.37339 7.63599 4.5964L11.0006 7.625V8.25H3.75V7zM10 3C10 3.55228 9.55228 4 9 4 8.44772 4 8 3.55228 8 3 8 2.44772 8.44772 2 9 2 9.55228 2 10 2.44772 10 3z" />
        </g>
        <defs>
          <clipPath id="clip0_517_514">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default Photos12;
