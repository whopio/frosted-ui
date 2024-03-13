import * as React from 'react';
import { IconProps } from './types';

export const XDotComSize24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M17.4033 3.5H20.2852L13.989 10.701L21.396 20.5H15.5964L11.054 14.557L5.85637 20.5H2.97269L9.70709 12.7977L2.60156 3.5H8.54839L12.6544 8.93215L17.4033 3.5ZM16.3918 18.7738H17.9887L7.68067 5.13549H5.96702L16.3918 18.7738Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default XDotComSize24;
