import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown16 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <path stroke={color} d="M0.5 0.5H15.5V15.5H0.5z" />
      </svg>
    );
  },
);

export default ThumbDown16;
