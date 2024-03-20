import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M5.24989 1.49997C3.17887 1.49997 1.49997 3.17887 1.49997 5.24989C1.49997 7.32092 3.17887 8.99982 5.24989 8.99982C7.32092 8.99982 8.99982 7.32092 8.99982 5.24989C8.99982 3.17887 7.32092 1.49997 5.24989 1.49997ZM0 5.24989C0 2.35046 2.35046 0 5.24989 0C8.14933 0 10.4998 2.35046 10.4998 5.24989C10.4998 8.14933 8.14933 10.4998 5.24989 10.4998C2.35046 10.4998 0 8.14933 0 5.24989Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M10.7197 11.78L8.02453 9.08499C7.73164 8.79211 7.73163 8.31724 8.02452 8.02435C8.3174 7.73146 8.79226 7.73146 9.08515 8.02434L11.7803 10.7194C12.0732 11.0123 12.0732 11.4871 11.7803 11.78C11.4874 12.0729 11.0126 12.0729 10.7197 11.78Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass12;
