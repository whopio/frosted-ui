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
          d="M6.16261 1.57833C4.94277 0.78902 3.33331 1.66461 3.33331 3.11753V12.8825C3.33331 14.3354 4.94277 15.211 6.16261 14.4217L13.7082 9.53922C14.8247 8.81675 14.8248 7.18322 13.7082 6.4608L6.16261 1.57833Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled16;
