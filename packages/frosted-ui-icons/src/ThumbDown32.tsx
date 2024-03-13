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
          d="M9.00001 17.6666H5.00001C4.26363 17.6666 3.66667 17.0697 3.66667 16.3333V6.33331C3.66667 5.59691 4.26363 4.99998 5.00001 4.99998H9.00001M9.00001 4.99998V17.3333L14.2944 27.6106C14.5229 28.0544 14.982 28.3333 15.4813 28.3333C17.1179 28.3333 18.3744 26.8728 18.1223 25.2558L17.3548 20.3333H24.3452C26.7941 20.3333 28.6681 18.1525 28.2997 15.7316L27.1837 8.39825C26.8864 6.44398 25.2061 4.99998 23.2293 4.99998H9.00001Z"
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
