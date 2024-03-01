import * as React from 'react';
import { IconProps } from './types';

export const List20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.75 16.03V3.97C1.75 2.74393 2.74393 1.75 3.97 1.75H16.03C17.2561 1.75 18.25 2.74393 18.25 3.97V16.03C18.25 17.2561 17.2561 18.25 16.03 18.25H3.97C2.74393 18.25 1.75 17.2561 1.75 16.03zM9.75 5.80933H15.25M9.75 9.80933H14.25M9.75 13.8093H13.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6.309" cy="5.809" r="1.25" fill={color} />
        <circle cx="6.309" cy="9.809" r="1.25" fill={color} />
        <circle cx="6.309" cy="13.809" r="1.25" fill={color} />
      </svg>
    );
  },
);

export default List20;
