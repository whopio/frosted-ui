import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26C16.6819 26 19.5861 24.8111 21.7927 22.8533L29.7197 30.7803C30.0125 31.0732 30.4874 31.0732 30.7803 30.7803C31.0732 30.4874 31.0732 30.0126 30.7803 29.7197L22.8533 21.7927C24.8111 19.5861 26 16.6819 26 13.5C26 6.59644 20.4036 1 13.5 1ZM2.5 13.5C2.5 7.42487 7.42487 2.5 13.5 2.5C19.5751 2.5 24.5 7.42487 24.5 13.5C24.5 19.5751 19.5751 24.5 13.5 24.5C7.42487 24.5 2.5 19.5751 2.5 13.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass32;
