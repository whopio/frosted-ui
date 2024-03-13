import * as React from 'react';
import { IconProps } from './types';

export const ThumbUp32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.00002 14.3334H5.00002C4.26365 14.3334 3.66669 14.9303 3.66669 15.6667V25.6667C3.66669 26.4031 4.26365 27 5.00002 27H9.00002M9.00002 27V14.6667L14.2944 4.38941C14.523 3.94559 14.982 3.66669 15.4814 3.66669C17.1179 3.66669 18.3744 5.12715 18.1223 6.74415L17.3548 11.6667H24.3452C26.7942 11.6667 28.6682 13.8475 28.2998 16.2684L27.1838 23.6018C26.8864 25.556 25.2062 27 23.2294 27H9.00002Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbUp32;
