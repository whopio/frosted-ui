import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M6.16264 1.57827C4.9428 0.788959 3.33334 1.66455 3.33334 3.11747V12.8824C3.33334 14.3354 4.9428 15.211 6.16264 14.4216L13.7083 9.53916C14.8247 8.81669 14.8248 7.18316 13.7083 6.46074L6.16264 1.57827Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled16;
