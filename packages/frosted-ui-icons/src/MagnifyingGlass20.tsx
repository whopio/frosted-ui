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
          d="M8.59144 2.5C5.22723 2.5 2.5 5.22723 2.5 8.59144C2.5 11.9557 5.22723 14.6829 8.59144 14.6829C11.9557 14.6829 14.6829 11.9557 14.6829 8.59144C14.6829 5.22723 11.9557 2.5 8.59144 2.5ZM1 8.59144C1 4.3988 4.39881 1 8.59144 1C12.7841 1 16.1829 4.3988 16.1829 8.59144C16.1829 12.7841 12.7841 16.1829 8.59144 16.1829C4.39881 16.1829 1 12.7841 1 8.59144Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M17.7197 18.7803L13.0916 14.1523C12.7987 13.8594 12.7987 13.3845 13.0916 13.0916C13.3844 12.7987 13.8593 12.7987 14.1522 13.0916L18.7804 17.7196C19.0732 18.0125 19.0733 18.4874 18.7804 18.7803C18.4875 19.0732 18.0126 19.0732 17.7197 18.7803Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default MagnifyingGlass20;
