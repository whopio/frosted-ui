import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlass20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.59144 1C4.39881 1 1 4.3988 1 8.59144C1 12.7841 4.39881 16.1829 8.59144 16.1829C10.4177 16.1829 12.0932 15.538 13.403 14.4636L17.7197 18.7803C18.0126 19.0732 18.4875 19.0732 18.7804 18.7803C19.0733 18.4874 19.0732 18.0125 18.7804 17.7196L14.4636 13.403C15.538 12.0933 16.1829 10.4177 16.1829 8.59144C16.1829 4.3988 12.7841 1 8.59144 1ZM2.5 8.59144C2.5 5.22723 5.22723 2.5 8.59144 2.5C11.9557 2.5 14.6829 5.22723 14.6829 8.59144C14.6829 11.9557 11.9557 14.6829 8.59144 14.6829C5.22723 14.6829 2.5 11.9557 2.5 8.59144Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass20;
