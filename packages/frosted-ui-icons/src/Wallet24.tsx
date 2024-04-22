import * as React from 'react';
import { IconProps } from './types';

export const Wallet24 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M19.2493 6.5C19.2493 5.5335 18.4658 4.75 17.4993 4.75H3.94922C3.25886 4.75 2.69922 5.30964 2.69922 6M2.69922 6V17.25C2.69922 18.3546 3.59465 19.25 4.69922 19.25H19.1992C20.3038 19.25 21.1992 18.3546 21.1992 17.25V9.25C21.1992 8.14543 20.3038 7.25 19.1992 7.25H3.94922C3.25886 7.25 2.69922 6.69036 2.69922 6ZM17.2493 13.25C17.2493 13.6642 16.9135 14 16.4993 14C16.0851 14 15.7493 13.6642 15.7493 13.25C15.7493 12.8358 16.0851 12.5 16.4993 12.5C16.9135 12.5 17.2493 12.8358 17.2493 13.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Wallet24;
