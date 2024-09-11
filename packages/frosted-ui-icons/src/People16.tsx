import * as React from 'react';
import { IconProps } from './types';

export const People16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M11.8335 12.8333H14.2821C14.6698 12.8333 14.979 12.5027 14.9139 12.1206C14.5596 10.0416 13.3462 8.5 11.3335 8.5C11.0361 8.5 10.7562 8.53365 10.4939 8.59772M7.50008 4.66667C7.50008 5.86328 6.53003 6.83333 5.33341 6.83333C4.13679 6.83333 3.16674 5.86328 3.16674 4.66667C3.16674 3.47005 4.13679 2.5 5.33341 2.5C6.53003 2.5 7.50008 3.47005 7.50008 4.66667ZM13.1667 5C13.1667 6.01252 12.3459 6.83333 11.3334 6.83333C10.3209 6.83333 9.50008 6.01252 9.50008 5C9.50008 3.98748 10.3209 3.16667 11.3334 3.16667C12.3459 3.16667 13.1667 3.98748 13.1667 5ZM1.24714 12.7872C1.62575 10.3332 3.01152 8.5 5.33341 8.5C7.65529 8.5 9.04106 10.3332 9.41968 12.7872C9.47874 13.17 9.17022 13.5 8.78288 13.5H1.88393C1.49659 13.5 1.18808 13.17 1.24714 12.7872Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default People16;
