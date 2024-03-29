import * as React from 'react';
import { IconProps } from './types';

export const PhotoFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1122_406)">
          <path
            d="M1.5 3.49C1.5 2.39095 2.39095 1.5 3.49 1.5H12.51C13.609 1.5 14.5 2.39095 14.5 3.49V12.51C14.5 13.2362 14.111 13.8716 13.53 14.2191L7.73492 8.20009C7.15044 7.59301 6.34403 7.25 5.50132 7.25C4.55379 7.25 3.65827 7.68327 3.07019 8.42622L1.5 10.4099V3.49ZM3.49 0C1.56253 0 0 1.56253 0 3.49V12.51C0 14.4375 1.56253 16 3.49 16H12.51C14.4375 16 16 14.4375 16 12.51V3.49C16 1.56253 14.4375 0 12.51 0H3.49ZM12.25 5.5C12.25 6.4665 11.4665 7.25 10.5 7.25C9.5335 7.25 8.75 6.4665 8.75 5.5C8.75 4.5335 9.5335 3.75 10.5 3.75C11.4665 3.75 12.25 4.5335 12.25 5.5Z"
            fill={color}
            fillRule="evenodd"
            clipRule="evenodd"
            fillOpacity=".875"
          />
        </g>
        <defs>
          <clipPath id="clip0_1122_406">
            <path fill={color} d="M0 0H16V16H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default PhotoFilled16;
