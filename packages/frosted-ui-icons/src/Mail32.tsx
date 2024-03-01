import * as React from 'react';
import { IconProps } from './types';

export const Mail32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 8.75C1.75 6.54086 3.54086 4.75 5.75 4.75H26.25C28.4591 4.75 30.25 6.54086 30.25 8.75V23.25C30.25 25.4591 28.4591 27.25 26.25 27.25H5.75C3.54086 27.25 1.75 25.4591 1.75 23.25V8.75Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 9.75L12.8813 17.2929C13.8017 17.9166 14.8881 18.25 16 18.25V18.25C17.1119 18.25 18.1983 17.9166 19.1187 17.2929L30.25 9.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Mail32;
