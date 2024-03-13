import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M10.25 2.5C5.96979 2.5 2.5 5.96979 2.5 10.25C2.5 14.5302 5.96979 18 10.25 18C14.5302 18 18 14.5302 18 10.25C18 5.96979 14.5302 2.5 10.25 2.5ZM1 10.25C1 5.14137 5.14137 1 10.25 1C15.3586 1 19.5 5.14137 19.5 10.25C19.5 15.3586 15.3586 19.5 10.25 19.5C5.14137 19.5 1 15.3586 1 10.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M21.7198 22.7803L15.9697 17.0303C15.6768 16.7375 15.6768 16.2626 15.9697 15.9697C16.2625 15.6768 16.7374 15.6768 17.0303 15.9697L22.7804 21.7197C23.0733 22.0125 23.0733 22.4874 22.7805 22.7803C22.4876 23.0732 22.0127 23.0732 21.7198 22.7803Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass24;
