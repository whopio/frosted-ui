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
          d="M9 14.3333H5C4.26363 14.3333 3.66667 14.9302 3.66667 15.6666V25.6666C3.66667 26.403 4.26363 27 5 27H9M9 27V14.6666L14.2944 4.38935C14.5229 3.94553 14.982 3.66663 15.4813 3.66663C17.1179 3.66663 18.3744 5.12709 18.1223 6.74409L17.3548 11.6666H24.3452C26.7941 11.6666 28.6681 13.8474 28.2997 16.2684L27.1837 23.6017C26.8864 25.556 25.2061 27 23.2293 27H9Z"
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
