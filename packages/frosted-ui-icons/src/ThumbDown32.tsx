import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown32 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M9.00002 17.6666H5.00002C4.26365 17.6666 3.66669 17.0697 3.66669 16.3333V6.33331C3.66669 5.59691 4.26365 4.99998 5.00002 4.99998H9.00002M9.00002 4.99998V17.3333L14.2944 27.6106C14.523 28.0544 14.982 28.3333 15.4814 28.3333C17.1179 28.3333 18.3744 26.8728 18.1223 25.2558L17.3548 20.3333H24.3452C26.7942 20.3333 28.6682 18.1525 28.2998 15.7316L27.1838 8.39825C26.8864 6.44398 25.2062 4.99998 23.2294 4.99998H9.00002Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default ThumbDown32;
