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
          d="M10.25 1C5.14137 1 1 5.14137 1 10.25C1 15.3586 5.14137 19.5 10.25 19.5C12.5343 19.5 14.6253 18.672 16.239 17.2997L21.7198 22.7803C22.0127 23.0732 22.4876 23.0732 22.7805 22.7803C23.0733 22.4874 23.0733 22.0125 22.7804 21.7197L17.2997 16.239C18.672 14.6253 19.5 12.5343 19.5 10.25C19.5 5.14137 15.3586 1 10.25 1ZM2.5 10.25C2.5 5.96979 5.96979 2.5 10.25 2.5C14.5302 2.5 18 5.96979 18 10.25C18 14.5302 14.5302 18 10.25 18C5.96979 18 2.5 14.5302 2.5 10.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass24;
