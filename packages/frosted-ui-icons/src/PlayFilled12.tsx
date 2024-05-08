import * as React from 'react';
import { IconProps } from './types';

export const PlayFilled12 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path
          d="M4.62197 1.18373C3.7071 0.591749 2.5 1.24844 2.5 2.33813V9.66185C2.5 10.7515 3.7071 11.4082 4.62197 10.8162L10.2812 7.1544C11.1185 6.61255 11.1186 5.3874 10.2812 4.84558L4.62197 1.18373Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled12;
