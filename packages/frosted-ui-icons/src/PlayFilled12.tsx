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
          d="M4.62197 1.18379C3.7071 0.59181 2.5 1.24851 2.5 2.3382V9.66191C2.5 10.7516 3.7071 11.4083 4.62197 10.8163L10.2812 7.15446C11.1185 6.61261 11.1186 5.38746 10.2812 4.84565L4.62197 1.18379Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PlayFilled12;
