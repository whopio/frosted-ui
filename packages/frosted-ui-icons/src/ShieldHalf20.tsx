import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalf20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.875 5.18395C16.875 4.82526 16.6455 4.50681 16.3052 4.39339L10.2635 2.37949C10.0925 2.32248 9.9075 2.32248 9.7365 2.37949L3.69481 4.39339C3.35453 4.50681 3.125 4.82526 3.125 5.18395V9.92692C3.125 14.0707 6.66667 16.0417 10 17.8399C13.3333 16.0417 16.875 14.0707 16.875 9.92692V5.18395Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M10 1.58667C9.83087 1.58667 9.66174 1.61375 9.49927 1.66792L3.45764 3.68179C2.81109 3.8973 2.375 4.50236 2.375 5.18387V9.92684C2.375 12.2499 3.38142 13.9645 4.79626 15.307C6.18289 16.6227 7.99289 17.6092 9.64391 18.4999C9.75503 18.5599 9.87752 18.5898 10 18.5898V1.58667Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ShieldHalf20;
