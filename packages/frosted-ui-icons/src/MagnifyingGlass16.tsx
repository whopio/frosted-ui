import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13C8.38657 13 9.66328 12.5297 10.6793 11.7398L13.7198 14.7803C14.0127 15.0732 14.4876 15.0732 14.7805 14.7803C15.0734 14.4874 15.0734 14.0125 14.7805 13.7196L11.7399 10.6792C12.5297 9.66316 13 8.3865 13 7C13 3.68629 10.3137 1 7 1ZM2.5 7C2.5 4.51472 4.51472 2.5 7 2.5C9.48528 2.5 11.5 4.51472 11.5 7C11.5 9.48528 9.48528 11.5 7 11.5C4.51472 11.5 2.5 9.48528 2.5 7Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass16;
