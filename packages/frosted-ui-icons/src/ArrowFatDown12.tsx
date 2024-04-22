import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown12 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <g clipPath="url(#clip0_1505_297)">
          <path
            d="M5.27019 10.7958L5.84636 10.3156L5.27019 10.7958C5.65 11.2515 6.35 11.2515 6.72981 10.7958L10.3028 6.50818C10.8184 5.88941 10.3784 4.95 9.57299 4.95L8.35 4.95L8.35 1.7C8.35 1.17533 7.92467 0.75 7.4 0.75L4.6 0.75C4.07533 0.749999 3.65 1.17533 3.65 1.7L3.65 4.95L2.42701 4.95C1.62156 4.95 1.18157 5.88941 1.6972 6.50817L5.27019 10.7958Z"
            stroke={color}
            strokeOpacity=".875"
            strokeWidth="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_1505_297">
            <path fill={color} d="M0 0H12V12H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default ArrowFatDown12;
